import React, { FC, useState } from "react"
import Modal from "react-modal"
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import addProject from "../../utils/addProject"
import moment from "moment/moment"
import { customModalStyles } from "../TaskModifyModal"

Modal.setAppElement("#root")

interface Iprops {
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NewProjectModal: FC<Iprops> = ({ modalIsOpen, setModalIsOpen }) => {
  let [input, setIput] = useState<string>("")
  const [endProjectDate, setEndProjectDate] = useState<Date>(new Date())
  const handleAddProject = () => {
    if (input === "" || input === undefined) {
      input = "Untitled"
    }
    setModalIsOpen(false)
    addProject(input, endProjectDate)
  }

  const handleOnChange = (date: MaterialUiPickersDate | null) => {
    setEndProjectDate(moment(date).toDate())
  }

  return (
    <Modal isOpen={modalIsOpen} style={customModalStyles}>
      <p>ProjectName:</p>
      <input
        placeholder={"ProjectName"}
        type="text"
        value={input}
        className={"p-1.5 border-2 my-2"}
        onChange={(e) => {
          setIput(e.target.value)
        }}
      />
      <p>Project EndDate:</p>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          value={endProjectDate}
          onChange={handleOnChange}
          minDate={new Date()}
          inputVariant={"outlined"}
        />
      </MuiPickersUtilsProvider>
      <div className={"my-2"}>
        <button className={"bg-red-500 p-1.5 mr-2"} onClick={() => setModalIsOpen(false)}>
          cancel
        </button>
        <button className={"bg-green-200 p-1.5 mr-2"} onClick={handleAddProject}>
          Save
        </button>
      </div>
    </Modal>
  )
}

export default NewProjectModal

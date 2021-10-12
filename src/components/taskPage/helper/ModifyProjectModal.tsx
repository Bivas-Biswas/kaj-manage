import React, { FC, useEffect, useState } from "react"
import Modal from "react-modal"
import addProject from "../../../utils/projectPage/addProject"
import fetchDB from "../../../utils/fetchDB"
import editProjectItem from "../../../utils/projectPage/editProjectItem"
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import moment from "moment"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import { customModalStyles } from "./TaskModifyModal"

Modal.setAppElement("#root")

interface Iprops {
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  projectId?: string
}

const ModifyProjectModal: FC<Iprops> = ({ modalIsOpen, setModalIsOpen, projectId }) => {
  let [input, setIput] = useState<string>("")
  const [endProjectDate, setEndProjectDate] = useState<Date>(new Date())
  useEffect(() => {
    if (projectId) {
      ;(async () => {
        const projectItem: any = await fetchDB(projectId)
        setEndProjectDate(new Date(projectItem.endProjectDate.toDate()))
        setIput(projectItem.projectName)
      })()
    }
  }, [])

  const handleAddProject = () => {
    if (input === "" || input === undefined) {
      input = "Untitled"
    }
    if (projectId) {
      editProjectItem(input, endProjectDate, projectId)
    } else {
      addProject(input, endProjectDate)
    }
    setModalIsOpen(false)
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

export default ModifyProjectModal

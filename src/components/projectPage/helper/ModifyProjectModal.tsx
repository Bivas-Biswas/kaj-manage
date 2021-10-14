import React, { FC, useEffect, useState } from "react"
import Modal from "react-modal"
import addProject from "../../../utils/projectPage/addProject"
import fetchDB from "../../../utils/fetchDB"
import editProjectItem from "../../../utils/projectPage/editProjectItem"
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import moment from "moment"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import { customModalStyles } from "../../taskPage/helper/TaskModifyModal"

Modal.setAppElement("#root")

interface Iprops {
  isModalEditOpen: boolean
  setIsModalEditOpen: React.Dispatch<React.SetStateAction<boolean>>
  projectId?: string
}

const ModifyProjectModal: FC<Iprops> = ({
  isModalEditOpen,
  setIsModalEditOpen,
  projectId,
}) => {
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
    setIsModalEditOpen(false)
  }

  const handleOnChange = (date: MaterialUiPickersDate | null) => {
    setEndProjectDate(moment(date).toDate())
  }

  return (
    <Modal isOpen={isModalEditOpen} style={customModalStyles}>
      <div className={"modal-wrapper "}>
        <p className={"text-2xl"}>ProjectName :</p>
        <input
          placeholder={"ProjectName"}
          type="text"
          value={input}
          className={"p-1.5 border-2 my-3 text-bold text-xl"}
          onChange={(e) => {
            setIput(e.target.value)
          }}
        />
        <p className={"mb-3 text-2xl"}>Project EndDate :</p>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker
            value={endProjectDate}
            onChange={handleOnChange}
            minDate={new Date()}
            inputVariant={"outlined"}
          />
        </MuiPickersUtilsProvider>
        <div className={"btn-wrapper"}>
          <button className={"btn-secondary"} onClick={() => setIsModalEditOpen(false)}>
            Cancel
          </button>
          <button className={"btn-primary"} onClick={handleAddProject}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModifyProjectModal

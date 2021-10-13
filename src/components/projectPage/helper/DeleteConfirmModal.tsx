import React from "react"
import Modal from "react-modal"
import { customModalStyles } from "../../taskPage/helper/TaskModifyModal"

function DeleteConfirmModal() {
  return (
    <Modal isOpen={true} style={customModalStyles}>
      <p>Are You want to delete the file ?</p>
      <button className={"p-2 m-2 bg-green-200"}>Cancel</button>
      <button className={"p-2 bg-red-500"}>Ok</button>
    </Modal>
  )
}

export default DeleteConfirmModal

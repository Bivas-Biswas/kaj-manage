const defaultData = {
  tasks: {
    "task-1": { id: "task-1", title: "Take out the Garbage", content: "no Content" },
    "task-2": { id: "task-2", title: "Watch my favorite show", content: "no Content" },
    "task-3": { id: "task-3", title: "Charge my phone", content: "no Content" },
    "task-4": { id: "task-4", title: "Cook dinner", content: "no Content" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Doing",
      taskIds: ["task-1"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
  viewTable: "horizontal",
  projectName: "Untitled",
  createdDate: new Date(),
  updateDate: new Date(),
  endProjectDate: new Date(),
  totalTasks: 4,
  totalColumns: 3,
}

export default defaultData

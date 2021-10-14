export interface Itask {
  id: string
  content?: string
  title?: string
  totalTask?: number
  updateDate: any
  createdDate: any
  endProjectDate: any
}

export interface Icolumn {
  id: string
  title: string
  taskIds: string[]
}

export interface ItaskObj {
  [key: string]: Itask
}

export interface IcolumnObj {
  [key: string]: Icolumn
}

export interface ItaskData {
  tasks: ItaskObj
  columns: IcolumnObj
  columnOrder: string[]
  viewTable: string
  projectName: string
}

export interface TRouterParams {
  projectId: string
  projectName: string
}

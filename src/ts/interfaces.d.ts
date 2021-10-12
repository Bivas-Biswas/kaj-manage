export interface Itask {
  id: string
  content?: string
  title?: string
  totalTask?: number
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
}

export interface TRouterParams {
  projectId: string
}

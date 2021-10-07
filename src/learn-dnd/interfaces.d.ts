export interface Itask {
  id: string
  content: string
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

export interface IintialData {
  tasks: ItaskObj
  columns: IcolumnObj
  columnOrder: string[]
}

export interface IintialObj {
  data: IintialData
  getList: IintialData
  savList(list: IintialData): any
}

import {ColumnDef} from '@tanstack/react-table'

export interface ReactTableProps<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  handleOpenDelete?: () => void
  setSelectRow?: React.Dispatch<React.SetStateAction<number | undefined>>
  handleEdit?: (id: number) => void
  title: string
  buttonName: string
  route: string
}

import { Cell } from "@tanstack/react-table"

export interface ITableBodyProps<T extends object> {
    cell: Cell<T, unknown>
    handleOpenDelete?: () => void
    setSelectRow: React.Dispatch<React.SetStateAction<number | undefined>> | undefined
    handleEdit?: (id: number) => void
  }
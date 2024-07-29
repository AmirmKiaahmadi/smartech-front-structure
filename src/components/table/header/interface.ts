import { Header } from "@tanstack/react-table";

export interface ITableHeaderProps<T extends object> {
    header: Header<T, unknown>
  }
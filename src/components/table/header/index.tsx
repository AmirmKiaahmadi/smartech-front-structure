import {Header, flexRender} from '@tanstack/react-table'
import React from 'react'
import { ITableHeaderProps } from './interface'

export const TableHeader = <T extends object>({header}: ITableHeaderProps<T>) => {
  return (
    <th scope='col'>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </th>
  )
}

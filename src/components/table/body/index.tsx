import React from 'react'
import {Cell, flexRender} from '@tanstack/react-table'
import { ITableBodyProps } from './interface'

export const TableBody = <T extends object>({
  cell,
  handleOpenDelete,
  setSelectRow,
  handleEdit,
}: ITableBodyProps<T>) => {
  switch (cell.column.id) {
    case 'edit':
      return (
        <td key={cell.id} className=' text-center'>
          <div
            className='d-flex justify-content-center flex-shrink-0'
            onClick={() => {
              //@ts-ignore
              handleEdit && handleEdit(Number(cell.row.original.id))
            }}
          >
            <div className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
              edit
            </div>
          </div>
        </td>
      )
    case 'delete':
      return (
        <td key={cell.id} className=' text-center'>
          <div
            className='d-flex justify-content-center flex-shrink-0'
            onClick={() => {
              handleOpenDelete && handleOpenDelete()
              //@ts-ignore
              setSelectRow && setSelectRow(Number(cell.row.original.id))
            }}
          >
            <div className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
              delete
            </div>
          </div>
        </td>
      )
    case 'created_at':
      return (
        <td key={cell.id} className=' text-center'>
          {
            //@ts-ignore
            new Date(cell.row.original.created_at).toLocaleDateString('fa')
          }
        </td>
      )
    case 'updated_at':
      return (
        <td key={cell.id} className=' text-center'>
          {
            //@ts-ignore
            new Date(cell.row.original.updated_at).toLocaleDateString('fa')
          }
        </td>
      )
    case 'is_active':
      return (
        <td key={cell.id} className=' text-center'>
          {
            //@ts-ignore
            cell.row.original.is_active === 1 || cell.row.original.is_active === true
              ? 'فعال'
              : 'غیرفعال'
          }
        </td>
      )
    default:
      return (
        <td key={cell.id} className=' text-center align-content-center '>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      )
  }
}

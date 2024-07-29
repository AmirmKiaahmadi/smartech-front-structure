
import {getCoreRowModel, useReactTable} from '@tanstack/react-table'
import {ReactTableProps} from './interface'
import { TableHeader } from './header'
import { TableBody } from './body'

export const CustomTable = <T extends object>({
  data,
  columns,
  handleOpenDelete,
  setSelectRow,
}: ReactTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className={`card `}>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table
            className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
            // style={{borderRadius: '10px', margin: '0', padding: '20px 0 20px 0'}}
          >
            <thead className=' text-center'>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className=''>
                  {headerGroup.headers.map((header) => (
                    <TableHeader key={header.id} header={header} />
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableBody
                      key={cell.id}
                      cell={cell}
                      handleOpenDelete={handleOpenDelete}
                      setSelectRow={setSelectRow}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

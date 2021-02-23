import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useTable } from 'react-table'
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))

interface IProps {
    columns: [],
    data: []
}

export default function ReactTable ({ columns, data }: IProps) {
    const classes = useStyles()
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <TableContainer>
            <Table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableHead {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                ))}
                            </TableRow>
                        )
                    })}
                </tbody>
            </Table>
        </TableContainer>
    )
}

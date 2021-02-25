import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
    Column,
    useTable,
    usePagination,
    useRowSelect, UseRowSelectRowProps, TableToggleRowsSelectedProps
} from 'react-table'
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    headerCell: {
        fontWeight: 'bold'
    }
}))

interface IProps<T extends object> {
    columns: Column<T>[]
    data: any[]
}

interface IRow {
    row: {
        getToggleRowSelectedProps: (props?: Partial<TableToggleRowsSelectedProps>) => TableToggleRowsSelectedProps
    }
}

export default function ReactTable<T extends object> ({ columns, data }: IProps<T>) {
    const classes = useStyles()

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        { columns, data },
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                ...columns,
                {
                    id: 'action',
                    Header: () => (
                        <div>
                            <Typography className={classes.headerCell}>Action</Typography>
                        </div>
                    ),
                    Cell: ({ value }: any) => {
                        console.log('value: ', value)
                        return (
                            <div><p>hello</p>
                                {/*<Button onClick={() => rowAction(row.getToggleRowSelectedProps)} variant='outlined'*/}
                                {/*        color='primary'>Add to portfolio</Button>*/}
                            </div>
                        )
                    }
                }
            ])
        }
    )

     return (
        <TableContainer>
            <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableCell {...column.getHeaderProps()} className={classes.headerCell}>
                                    {column.render('Header')}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
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
                </TableBody>
            </Table>
        </TableContainer>
    )
}

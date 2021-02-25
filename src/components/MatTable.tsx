import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { IWithId } from '../types/helperInterfaces'

const useStyles = makeStyles(theme => ({

}))

interface IProps<T> {
    columns: string[]
    data: T[]
    rowAction?: (props: T) => void
    rowActionText?: string
}

export default function MatTable<T extends IWithId> ({ columns, data, rowAction, rowActionText }: IProps<T>) {
    const classes = useStyles()

    function renderRowAction (row: T) {
        if (!rowAction) return null
        return (
            <TableCell>
                <Button onClick={() => rowAction(row)}>{rowActionText}</Button>
            </TableCell>
        )
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(column => <TableCell key={column}>{column}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <TableRow key={row.id}>
                            {Object.entries(row).map(value => {
                                if (value[0] === 'id') return null
                                return <TableCell>{value[1]}</TableCell>
                            })}
                            {renderRowAction(row)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

import React, { ReactNode } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))

interface IProps {
    columns: string[]
    body: ReactNode
}

export default function TableTemplate ({ columns, body }: IProps) {
    const classes = useStyles()

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(column => <TableCell key={column}>{column}</TableCell>)}
                    </TableRow>
                </TableHead>
                {body}
            </Table>
        </TableContainer>
    )
}
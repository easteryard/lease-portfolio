import React, { ReactNode } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
    Paper, Table, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    headerCell: {
        fontWeight: 'bold'
    }
}))

interface IProps {
    header: ReactNode
    body: ReactNode
    page?: number
    handleChangePage?: (page: number) => void
}

export default function TableTemplate ({ header, body, page, handleChangePage }: IProps) {
    const classes = useStyles()

    function renderFooter () {
        return (
            <>
                {(typeof page === 'number' && handleChangePage) && (
                    <TableFooter>
                        <TableRow>
                            <TablePagination count={-1} page={page} onChangePage={(event, page) => handleChangePage(page)}
                                             rowsPerPage={10} rowsPerPageOptions={[]}
                                             labelDisplayedRows={({ from, to }) => `${from} - ${to}`} />
                        </TableRow>
                    </TableFooter>
                )}
            </>
        )
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    {header}
                    {body}
                    {renderFooter()}
                </Table>
            </TableContainer>
        </>
    )
}

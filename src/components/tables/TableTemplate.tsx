import React, { ReactNode } from 'react'

import { Paper, Table, TableContainer, TableFooter, TablePagination, TableRow } from '@material-ui/core'

interface IProps {
    header: ReactNode
    body: ReactNode
    page?: number
    handleChangePage?: (page: number) => void
}

export default function TableTemplate ({ header, body, page, handleChangePage }: IProps) {
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

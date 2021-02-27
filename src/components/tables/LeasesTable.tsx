import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { ILease } from '../provider/PortfolioProvider'
import TableTemplate from './TableTemplate'
import LeasesRow from './LeasesRow'

const useStyles = makeStyles(() => ({
    headerCell: {
        fontWeight: 'bold'
    }
}))

interface IProps {
    data: ILease[]
    rowAction: (lease: ILease) => void
    actionText: string
    isActionDisabled?: (lease: ILease) => boolean
    page?: number
    handleChangePage?: (page: number) => void
    isExpandable?: boolean
}

export default function LeasesTable ({ data, rowAction, actionText, isActionDisabled, page, handleChangePage,
                                         isExpandable }: IProps) {
    const classes = useStyles()

    const columns = [
        'Vejnavn',
        'Husnr.',
        'Etage',
        'Dør',
        'Postnr.',
        'Postnummernavn'
    ]

    const tableHeader = (
        <TableHead>
            <TableRow>
                {isExpandable && <TableCell />}
                {columns.map(column => <TableCell key={column} className={classes.headerCell}>{column}</TableCell>)}
                <TableCell />
            </TableRow>
        </TableHead>
    )

    const tableBody = (
        <TableBody>
            {data.map(lease => <LeasesRow key={lease.id} lease={lease} rowAction={rowAction} actionText={actionText}
                           isActionDisabled={isActionDisabled} isExpandable={isExpandable} />)}
        </TableBody>
    )

    return <TableTemplate header={tableHeader} body={tableBody} page={page} handleChangePage={handleChangePage} />
}

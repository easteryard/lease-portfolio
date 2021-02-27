import React from 'react'

import TableTemplate from './TableTemplate'
import { Button, TableBody, TableCell, TableRow } from '@material-ui/core'
import usePortfolio from '../hooks/usePortfolio'
import { ILease } from './provider/PortfolioProvider'

interface IProps {
    data: ILease[]
    rowAction: (lease: ILease) => void
    actionText: string
    isActionDisabled?: (lease: ILease) => boolean
}

export default function LeasesTable ({ data, rowAction, actionText, isActionDisabled }: IProps) {
    const { isLeaseInPortfolio } = usePortfolio()

    const columns = [
        'Vejnavn',
        'Husnr.',
        'Postnr.',
        'Postnummernavn',
        ''
    ]

    function isInPortfolio (id: string) {
        return isLeaseInPortfolio(id)
    }

    const tableBody = (
        <TableBody>
            {data.map(lease => (
                <TableRow key={lease.id}>
                    <TableCell>{lease.streetName}</TableCell>
                    <TableCell>{lease.houseNumber}</TableCell>
                    <TableCell>{lease.postNumber}</TableCell>
                    <TableCell>{lease.postNumberName}</TableCell>
                    <TableCell align='right' colSpan={7}>
                        <Button onClick={() => rowAction(lease)}
                                disabled={isActionDisabled ? isActionDisabled(lease) : false}
                                variant='outlined' color='primary'
                        >
                            {actionText}
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )

    return <TableTemplate columns={columns} body={tableBody} />
}

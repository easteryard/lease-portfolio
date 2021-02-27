import React from 'react'

import TableTemplate from './TableTemplate'
import { Button, Collapse, TableBody, TableCell, TableRow } from '@material-ui/core'
import { ILease } from '../provider/PortfolioProvider'
import LeasesRow from './LeasesRow'

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
    const columns = [
        '',
        'Vejnavn',
        'Husnr.',
        'Postnr.',
        'Postnummernavn',
        ''
    ]
console.log('data: ', data)
    const tableBody = (
        <TableBody>
            {data.map(lease => (
                <LeasesRow key={lease.id} lease={lease} rowAction={rowAction}
                           actionText={actionText} isActionDisabled={isActionDisabled} />
                // <React.Fragment key={lease.id}>
                //     <TableRow>
                //         <TableCell>{lease.streetName}</TableCell>
                //         <TableCell>{lease.houseNumber}</TableCell>
                //         <TableCell>{lease.postNumber}</TableCell>
                //         <TableCell>{lease.postNumberName}</TableCell>
                //         <TableCell align='right' colSpan={7}>
                //             <Button onClick={() => rowAction(lease)}
                //                     disabled={isActionDisabled ? isActionDisabled(lease) : false}
                //                     variant='outlined' color='primary'
                //             >
                //                 {actionText}
                //             </Button>
                //         </TableCell>
                //     </TableRow>
                // </React.Fragment>
            ))}
        </TableBody>
    )

    return <TableTemplate columns={columns} body={tableBody} page={page} handleChangePage={handleChangePage} />
}

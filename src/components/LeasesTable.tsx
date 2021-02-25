import React from 'react'

import TableTemplate from './TableTemplate'
import { Button, TableBody, TableCell, TableRow } from '@material-ui/core'
import { ILease } from '../utils/portfolioMethods'

interface IProps {
    data: ILease[]
    rowAction: (props: ILease) => void
}

export default function LeasesTable ({ data, rowAction }: IProps) {

    const columns = [
        'Vejnavn',
        'Husnr.',
        'Postnr.',
        'Postnummernavn',
        'Handling'
    ]

    const tableBody = (
        <TableBody>
            {data.map(row => (
                <TableRow key={row.id}>
                    <TableCell>{row.streetName}</TableCell>
                    <TableCell>{row.houseNumber}</TableCell>
                    <TableCell>{row.postNumber}</TableCell>
                    <TableCell>{row.postNumberName}</TableCell>
                    <TableCell>
                        <Button onClick={() => rowAction(row)} variant='outlined' color='primary'>Tilføj</Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )

    return <TableTemplate columns={columns} body={tableBody} />
}

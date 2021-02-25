import React, { useMemo } from 'react'

import ReactTable from './ReactTable'
import { Button } from '@material-ui/core'
import { CellProps } from 'react-table'

interface IProps<T> {
    data: T[]
    rowAction: (prop: T) => void
}

function LeasesTable<T extends object> ({ data, rowAction }: IProps<T>) {
    const columns = useMemo(() => [
        {
            Header: 'Vejnavn',
            accessor: 'streetName'
        },
        {
            Header: 'Husnr.',
            accessor: 'houseNumber'
        },
        {
            Header: 'Postnr.',
            accessor: 'postNumber'
        },
        {
            Header: 'Postnummernavn',
            accessor: 'postNumberName'
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: (row: CellProps<T>) => <Button onClick={() => rowAction(row.row.original)}>Add mee</Button>
        }
    ], [])

    return <></>
    // return <ReactTable columns={columns} data={data} />
}

export default LeasesTable

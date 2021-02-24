import React, { useEffect, useMemo, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useGetJson from '../../hooks/useGetJson'
import ReactTable from '../../components/Table/ReactTable'

const useStyles = makeStyles(theme => ({

}))

interface ILease {
    vejnavn: string
    husnr: string
    postnr: string
    postnrnavn: string
}

interface ITableData {
    streetName: string
    houseNumber: string
    postNumber: string
    postNumberName: string
}

function Overview () {
    const classes = useStyles()
    const [page, setPage] = useState(1)
    const [tableData, setTableData] = useState<ITableData[]>([])

    const { response: leases, refresh } = useGetJson<ILease[]>(`https://dawa.aws.dk/adgangsadresser?struktur=mini&side=${page}&per_side=3`)
    console.log('leases: ', leases)

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
        }
    ], [])

    useEffect(() => {
        if (leases.loading || !leases.data) return
        const data = leases?.data?.map(lease => ({
            streetName: lease.vejnavn,
            houseNumber: lease.husnr,
            postNumber: lease.postnr,
            postNumberName: lease.postnrnavn
        }))
        setTableData(data)
    }, [leases.data, leases.loading])

    function handlePage (newPage: number) {
        setPage(newPage)
    }

    return (
        <>
            <p>Hello</p>
            <ReactTable columns={columns} data={tableData} />
        </>
    )
}

export default Overview

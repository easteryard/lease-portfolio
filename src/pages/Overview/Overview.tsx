import React, { useEffect, useMemo, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useGetJson from '../../hooks/useGetJson'
import { getPortfolio, ILease, setPortfolio } from '../../utils/portfolioMethods'
import { Typography } from '@material-ui/core'
import LeasesTable from '../../components/LeasesTable'

const useStyles = makeStyles(theme => ({

}))

interface ILeaseDanish {
    id: string
    vejnavn: string
    husnr: string
    postnr: string
    postnrnavn: string
}

function Overview () {
    const classes = useStyles()
    const [page, setPage] = useState(1)
    const [tableData, setTableData] = useState<ILease[]>([])
    const { response: leases, refresh } = useGetJson<ILeaseDanish[]>(`https://dawa.aws.dk/adgangsadresser?struktur=mini&side=${page}&per_side=3`)
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
            id: lease.id,
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

    function addToPortfolio (lease: ILease) {
        setPortfolio(lease)
    }

    return (
        <>
            <Typography variant='h3'>Overview</Typography>
            <LeasesTable data={tableData} rowAction={addToPortfolio} />
        </>
    )
}

export default Overview

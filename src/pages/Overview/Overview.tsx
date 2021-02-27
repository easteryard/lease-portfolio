import React, { useEffect, useMemo, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useGetJson from '../../hooks/useGetJson'
import { Typography } from '@material-ui/core'
import LeasesTable from '../../components/LeasesTable'
import usePortfolio from '../../hooks/usePortfolio'
import { ILease } from '../../components/provider/PortfolioProvider'

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
    const { addToPortfolio, isLeaseInPortfolio } = usePortfolio()
    const [page, setPage] = useState(1)
    const [tableData, setTableData] = useState<ILease[]>([])
    const { response: leases } = useGetJson<ILeaseDanish[]>(`https://dawa.aws.dk/adgangsadresser?struktur=mini&side=${page}&per_side=5`)

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

    function handleAddToPortfolio (lease: ILease) {
        addToPortfolio(lease)
    }

    function isInPortfolio (lease: ILease) {
        return isLeaseInPortfolio(lease.id)
    }

    return (
        <>
            <Typography variant='h3'>Overview</Typography>
            <LeasesTable data={tableData} rowAction={handleAddToPortfolio} actionText='Tilføj til portfolio'
                         isActionDisabled={isInPortfolio} />
        </>
    )
}

export default Overview

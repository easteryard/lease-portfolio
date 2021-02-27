import React, { useEffect, useMemo, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useGetJson from '../../hooks/useGetJson'
import { Typography } from '@material-ui/core'
import LeasesTable from '../../components/tables/LeasesTable'
import usePortfolio from '../../hooks/usePortfolio'
import { ILease } from '../../components/provider/PortfolioProvider'
import SearchFields, { ISearchObj } from './components/SearchFields'
import ConditionalRender from '../../components/ConditionalRender'

const useStyles = makeStyles(theme => ({

}))

interface ILeaseDanish {
    id: string
    vejnavn: string
    husnr: string
    etage: string
    dør: string
    postnr: string
    postnrnavn: string
}

function Overview () {
    const classes = useStyles()
    const { addToPortfolio, isLeaseInPortfolio } = usePortfolio()
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const [leasesTableData, setLeasesTableData] = useState<ILease[]>([])
    const { response: leasesData } = useGetJson<ILeaseDanish[]>(`https://dawa.aws.dk/adresser?struktur=mini&side=${page}&per_side=10${query}`)

    useEffect(() => {
        if (leasesData.loading || !leasesData.data) return
        const data = leasesData?.data?.map(lease => ({
            id: lease.id,
            streetName: lease.vejnavn,
            floor: lease.etage,
            door: lease.dør,
            houseNumber: lease.husnr,
            postNumber: lease.postnr,
            postNumberName: lease.postnrnavn
        }))
        setLeasesTableData(data)
    }, [leasesData.data, leasesData.loading])

    function handlePage (newPage: number) {
        setPage(newPage + 1)
    }

    function handleAddToPortfolio (lease: ILease) {
        addToPortfolio(lease)
    }

    function isInPortfolio (lease: ILease) {
        return isLeaseInPortfolio(lease.id)
    }

    function handleSearch (searchObj: ISearchObj) {
        let searchString = ''
        if (searchObj.streetName) searchString += `&vejnavn=${searchObj.streetName}`
        if (searchObj.houseNumber) searchString += `&husnr=${searchObj.houseNumber}`
        if (searchObj.postNumber) searchString += `&postnr=${searchObj.postNumber}`
        if (searchObj.postNumberName) searchString += `&postnrnavn=${searchObj.postNumberName}`
        setQuery(searchString)
    }

    function clearQuery () {
        setQuery('')
    }

    return (
        <>
            <Typography variant='h3'>Overview</Typography>
            <SearchFields onSearch={handleSearch} clearSearch={clearQuery} />
            <ConditionalRender dataArray={[leasesTableData]} loadingArray={[leasesData.loading]} errorArray={[leasesData.error]} errorMessage='Der opstod en fejl'>
                {([leases]: ILease[][]) => (
                    <LeasesTable data={leases} rowAction={handleAddToPortfolio} actionText='Tilføj til portfolio'
                                 isActionDisabled={isInPortfolio} page={page - 1} handleChangePage={handlePage} />
                )}
            </ConditionalRender>
        </>
    )
}

export default Overview

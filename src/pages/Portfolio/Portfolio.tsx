import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import LeasesTable from '../../components/tables/LeasesTable'
import { ILease } from '../../components/provider/PortfolioProvider'
import usePortfolio from '../../hooks/usePortfolio'

const useStyles = makeStyles(theme => ({

}))

interface IProps {

}

function Portfolio ({  }: IProps) {
    const classes = useStyles()
    const { portfolio, removeFromPortfolio } = usePortfolio()

    function handleRemove (lease: ILease) {
        removeFromPortfolio(lease.id)
    }

    return (
        <>
            <Typography variant='h3'>Portfolio</Typography>
            <LeasesTable data={portfolio} rowAction={handleRemove} actionText='Fjern fra portfolio' isExpandable />
        </>
    )
}

export default Portfolio

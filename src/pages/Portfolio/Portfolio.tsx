import React, { useEffect, useMemo } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useGetPortfolio from '../../hooks/useGetPortfolio'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))

interface IProps {

}

function Portfolio ({  }: IProps) {
    const classes = useStyles()
    const { portfolio, get } = useGetPortfolio()

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


    return (
        <>
            <Typography variant='h3'>Portfolio</Typography>
        </>
    )
}

export default Portfolio

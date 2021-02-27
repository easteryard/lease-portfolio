import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, TextField } from '@material-ui/core'
import { ILease, ILeaseDetails } from '../provider/PortfolioProvider'
import usePortfolio from '../../hooks/usePortfolio'

const useStyles = makeStyles(theme => ({
    outerGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    textFieldMargin: {
        marginRight: theme.spacing(1)
    },
    saveDetailsButton: {
        width: 'fit-content',
        marginTop: theme.spacing(1)
    }
}))

interface IProps {
    lease: ILease
}

export default function LeaseDetails ({ lease }: IProps) {
    const classes = useStyles()
    const { addDetails } = usePortfolio()
    const [leaseDetails, setLeaseDetails] = useState<ILeaseDetails>(lease.details ?? {
        size: '',
        noOfRooms: undefined
    })

    function handleChange (key: string, value: string) {
        setLeaseDetails(prev => ({
            ...prev,
            [key]: value
        }))
    }

    function handleSaveDetails () {
        addDetails(lease, leaseDetails)
    }

    return (
        <Grid container direction='column' className={classes.outerGrid}>
            <div>
                <TextField label='Størrelse' value={leaseDetails.size} onChange={e => handleChange('size', e.target.value)}
                           variant='outlined' className={classes.textFieldMargin} />
                <TextField label='Antal rum' value={leaseDetails.noOfRooms} onChange={e => handleChange('noOfRooms', e.target.value)}
                           type='number' variant='outlined' />
            </div>
            <Button onClick={handleSaveDetails} variant='outlined' color='primary' className={classes.saveDetailsButton}>
                Gem detaljer
            </Button>
        </Grid>
    )
}

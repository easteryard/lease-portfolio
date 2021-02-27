import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing(1)
    },
    contentGrid: {
        width: 'fit-content'
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    unsortedList: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))

function About () {
    const classes = useStyles()
    const sourceCodeLink = 'https://github.com/easteryard/lease-portfolio'

    return (
        <>
            <Grid container direction='column'>
                <Typography variant='h4' className={classes.title}>About</Typography>
                <Grid container direction='column' className={classes.contentGrid}>
                    <Typography>Manage your lease portfolio like never before!</Typography>
                    <Divider className={classes.divider} />
                    <Typography>Lease portfolio management made easy:</Typography>
                    <ul className={classes.unsortedList}>
                        <li><Typography>See an overview of apartments.</Typography></li>
                        <li><Typography>Search for apartments as you wish.</Typography></li>
                        <li><Typography>Add leases to your portfolio.</Typography></li>
                        <li><Typography>See an overview of your portfolio.</Typography></li>
                        <li><Typography>Remove leases from your portfolio.</Typography></li>
                        <li><Typography>Add details to your leases in your portfolio.</Typography></li>
                    </ul>
                    <Divider className={classes.divider} />
                    <Typography>To see the source code go to:</Typography>
                    <Typography component='a' href={sourceCodeLink} target='_blank'>{sourceCodeLink}</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default About

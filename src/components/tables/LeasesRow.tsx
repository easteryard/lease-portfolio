import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, Grid, IconButton, TableCell, TableRow, TextField } from '@material-ui/core'
import { ILease } from '../provider/PortfolioProvider'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import LeaseDetails from './LeaseDetails'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    originalRow: {
        '& > *': {
            borderBottom: 'unset'
        }
    },
    collapsibleRow: {
        paddingTop: 0,
        paddingBottom: 0
    }
}))

interface IProps {
    lease: ILease
    rowAction: (lease: ILease) => void
    actionText: string
    isActionDisabled?: (lease: ILease) => boolean
    isExpandable?: boolean
}

export default function LeasesRow ({ lease, rowAction, actionText, isActionDisabled, isExpandable }: IProps) {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <TableRow className={clsx({ [classes.originalRow]: isExpandable })}>
                {isExpandable && (
                    <TableCell>
                        <IconButton size="small" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                )}
                <TableCell>{lease.streetName}</TableCell>
                <TableCell>{lease.houseNumber}</TableCell>
                <TableCell>{lease.floor}</TableCell>
                <TableCell>{lease.door}</TableCell>
                <TableCell>{lease.postNumber}</TableCell>
                <TableCell>{lease.postNumberName}</TableCell>
                <TableCell align='right' colSpan={7}>
                    <Button onClick={() => rowAction(lease)}
                            disabled={isActionDisabled ? isActionDisabled(lease) : false}
                            variant='outlined' color='primary'
                    >
                        {actionText}
                    </Button>
                </TableCell>
            </TableRow>
            {isExpandable && (
                <TableRow>
                    <TableCell colSpan={8} className={classes.collapsibleRow}>
                        <Collapse in={isOpen} timeout='auto' unmountOnExit>
                            <Grid>
                                <LeaseDetails lease={lease} />
                            </Grid>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </>
    )
}

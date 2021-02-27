import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, IconButton, TableCell, TableRow } from '@material-ui/core'
import { ILease } from '../provider/PortfolioProvider'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

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
}

export default function LeasesRow ({ lease, rowAction, actionText, isActionDisabled }: IProps) {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
            <TableRow className={classes.originalRow}>
                <TableCell>
                    <IconButton size="small" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{lease.streetName}</TableCell>
                <TableCell>{lease.houseNumber}</TableCell>
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
            <TableRow>
                <TableCell colSpan={6} className={classes.collapsibleRow}>
                    <Collapse in={isOpen} unmountOnExit>
                        <div>
                            <p>Hello</p>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

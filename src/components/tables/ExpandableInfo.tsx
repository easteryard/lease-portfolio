import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Collapse, TableRow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))

interface IProps {
    isOpen: boolean
}

export default function ExpandableInfo ({ isOpen }: IProps) {
    const classes = useStyles()

    return (
        <TableRow>
            <Collapse in={isOpen}>
                <div>
                    <p>Helo</p>
                    <p>There</p>
                </div>
            </Collapse>
        </TableRow>
    )
}

import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1)
    },
    textField: {
        marginRight: theme.spacing(1)
    },
    searchGrid: {
        marginTop: theme.spacing(1)
    },
    clearSearch: {
        marginLeft: theme.spacing(1)
    }
}))

interface IProps {
    onSearch: (searchObj: ISearchObj) => void
    clearSearch: () => void
}

export interface ISearchObj {
    streetName: string,
    houseNumber: string
    postNumber: string
    postNumberName: string
}

const defaultSearchObj = {
    streetName: '',
    houseNumber: '',
    postNumber: '',
    postNumberName: ''
}

export default function SearchFields ({ onSearch, clearSearch }: IProps) {
    const classes = useStyles()
    const [searchObj, setSearchObj] = useState<ISearchObj>(defaultSearchObj)

    function handleChange (key: string, value: string) {
        setSearchObj(prev => ({
            ...prev,
            [key]: value
        }))
    }

    function handleClearSearch () {
        clearSearch()
        setSearchObj(defaultSearchObj)
    }

    return (
        <Paper className={classes.paper}>
            <form onSubmit={event => { event.preventDefault(); onSearch(searchObj) }}>
                <Grid container>
                    <TextField label='Vejnavn' value={searchObj.streetName}
                               onChange={e => handleChange('streetName', e.target.value)} variant='outlined'
                               className={classes.textField} />
                    <TextField label='Husnr.' value={searchObj.houseNumber}
                               onChange={e => handleChange('houseNumber', e.target.value)} variant='outlined'
                               className={classes.textField} />
                    <TextField label='Postnr.' value={searchObj.postNumber}
                               onChange={e => handleChange('postNumber', e.target.value)} variant='outlined'
                               className={classes.textField} />
                    <TextField label='Postnummernavn' value={searchObj.postNumberName}
                               onChange={e => handleChange('postNumberName', e.target.value)} variant='outlined' />
                </Grid>
                <Grid container className={classes.searchGrid}>
                    <Button type='submit' variant='contained' color='primary'>Søg</Button>
                    <Button onClick={handleClearSearch} variant='outlined' color='primary' className={classes.clearSearch}>
                        Nulstil
                    </Button>
                </Grid>
            </form>
        </Paper>
    )
}

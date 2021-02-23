import React, { useCallback, useMemo, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useGetJson from '../../hooks/useGetJson'
import ReactTable from '../../components/Table/ReactTable'

const useStyles = makeStyles(theme => ({

}))

interface IProps {

}

function Home ({  }: IProps) {
    const classes = useStyles()
    const [page, setPage] = useState(1)

    const [leases, isLeasesLoading, leasesError] = useGetJson(`https://dawa.aws.dk/adgangsadresser?struktur=mini&side=${page}&per_side=3`)
    console.log('leases: ', leases)

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

    const getLeases = useCallback(() => {
        
    }, [])

    function handlePage (newPage: number) {
        setPage(newPage)
    }

    return (
        <>
            <p>Hello</p>
            {/*<ReactTable columns={} data={} />*/}
        </>
    )
}

export default Home

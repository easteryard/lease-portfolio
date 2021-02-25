import React from 'react'

import MatTable from './MatTable'
import { IWithId } from '../types/helperInterfaces'

interface IProps<T> {
    data: T[]
    rowAction: (props: T) => void
}

export default function MatLeasesTable<T extends IWithId> ({ data, rowAction }: IProps<T>) {

    const columns = [
        'Vejnavn',
        'Husnr.',
        'Postnr.',
        'Postnummernavn',
        'Handling'
    ]

    return <MatTable columns={columns} data={data} rowAction={rowAction} />
}

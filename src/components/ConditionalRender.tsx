import React from 'react'

import Loading from './Loading'
import { Typography } from '@material-ui/core'

interface IProps {
    children: any
    dataArray: []
    loadingArray: []
    errorArray: []
    errorMessage: string
}

function ConditionalRender ({ children, dataArray, loadingArray, errorArray, errorMessage }: IProps) {
    if (loadingArray.some(element => !!element)) return <Loading />
    if (errorArray.some(element => !!element)) return <Typography>{errorMessage}</Typography>
    return children(dataArray)
}

export default ConditionalRender

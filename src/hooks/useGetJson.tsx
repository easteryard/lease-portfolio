import { useCallback, useEffect, useState } from 'react'
import wretch from 'wretch'

interface IResult<T> {
    data?: T
    loading: boolean
    error: any
}

interface IResponse<T> {
    response: IResult<T>
    refresh: () => void
}

export default function useGetJson<T> (url: string, deps = [], shouldGet = true): IResponse<T> {
    const [res, setRes] = useState<IResult<T>>({
        data: undefined,
        loading: true,
        error: null
    })

    const get = useCallback(() => {
        wretch(url)
            .get()
            .json(res => setRes({ data: res as T, loading: false, error: null }))
            .catch(err => setRes({ loading: false, error: err }))
    }, [url])

    useEffect(() => {
        if (shouldGet) get()
    }, [get, shouldGet, ...deps])

    return { response: res, refresh: get }
}

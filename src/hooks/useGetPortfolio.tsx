import { useEffect, useState } from 'react'
import { getPortfolio, ILease } from '../utils/portfolioMethods'

interface IUseGetPortfolio {
    portfolio: ILease[]
    get: () => void
}

export default function useGetPortfolio (deps = []): IUseGetPortfolio {
    const [portfolio, setPortfolio] = useState<ILease[]>([])

    function get () {
        const portfolioFromStorage = getPortfolio()
        setPortfolio(portfolioFromStorage)
    }

    useEffect(() => {
        get()
    }, deps)

    return { portfolio, get }
}

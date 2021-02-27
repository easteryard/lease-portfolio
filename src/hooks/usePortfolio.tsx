import { useContext } from 'react'

import { ILease, IPortfolioContext, PortfolioContext } from '../components/provider/PortfolioProvider'

interface IUsePortfolio {
    portfolio: ILease[]
    addToPortfolio: (lease: ILease) => void
    removeFromPortfolio: (id: string) => void
    isLeaseInPortfolio: (id: string) => boolean
}

export default function usePortfolio (): IUsePortfolio {
    const { portfolio, setPortfolioState } = useContext(PortfolioContext) as IPortfolioContext

    function addToPortfolio (lease: ILease) {
        if (isLeaseInPortfolio(lease.id)) return
        setPortfolioState([...portfolio, lease])
    }

    function removeFromPortfolio (id: string) {
        const filteredPortfolio = portfolio.filter(lease => lease.id !== id)
        setPortfolioState(filteredPortfolio)
    }

    function isLeaseInPortfolio (id: string) {
        return portfolio.some(leaseInPortfolio => leaseInPortfolio.id === id)
    }

    return { portfolio, addToPortfolio, removeFromPortfolio, isLeaseInPortfolio }
}

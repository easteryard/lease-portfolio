import { useContext } from 'react'

import { ILease, ILeaseDetails, IPortfolioContext, PortfolioContext } from '../components/provider/PortfolioProvider'

interface IUsePortfolio {
    portfolio: ILease[]
    addToPortfolio: (lease: ILease) => void
    removeFromPortfolio: (id: string) => void
    addDetails: (lease: ILease, details: ILeaseDetails) => void
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

    function addDetails (lease: ILease, details: ILeaseDetails) {
        const portfolioCopy = [...portfolio]
        const leaseIndex = portfolioCopy.findIndex(portfolioLease => portfolioLease.id === lease.id)
        portfolioCopy[leaseIndex] = { ...lease, details}
        setPortfolioState(portfolioCopy)
    }

    function isLeaseInPortfolio (id: string) {
        return portfolio.some(leaseInPortfolio => leaseInPortfolio.id === id)
    }

    return { portfolio, addToPortfolio, removeFromPortfolio, addDetails, isLeaseInPortfolio }
}

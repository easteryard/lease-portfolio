import React, { ReactNode, useState } from 'react'

interface IProps {
    children: ReactNode
}

export interface ILeaseDetails {
    size?: string
    noOfRooms?: number
}

export interface ILease {
    id: string
    streetName: string
    floor: string
    door: string
    houseNumber: string
    postNumber: string
    postNumberName: string
    details?: ILeaseDetails
}

export interface IPortfolioContext {
    portfolio: ILease[]
    setPortfolioState: (portfolio: ILease[]) => void
}

export const PortfolioContext = React.createContext({})
const storageKey = 'leasePortfolio'
const storage = localStorage

export default function PortfolioProvider ({ children }: IProps) {
    const portfolioFromStorage = localStorage.getItem(storageKey)
    const [portfolio, setPortfolio] = useState<ILease[]>(portfolioFromStorage ? JSON.parse(portfolioFromStorage) : [])

    function setPortfolioState (portfolio: ILease[]) {
        storage.setItem(storageKey, JSON.stringify(portfolio))
        setPortfolio(portfolio)
    }

    return (
        <PortfolioContext.Provider value={{ portfolio, setPortfolioState } as IPortfolioContext}>
            {children}
        </PortfolioContext.Provider>
    )
}

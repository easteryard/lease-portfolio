export interface ILease {
    id: string
    streetName: string
    houseNumber: string
    postNumber: string
    postNumberName: string
}

export function setPortfolio (portfolio: ILease) {
    const portfolioString = JSON.stringify(portfolio)
    localStorage.setItem('portfolio', portfolioString)
}

export function getPortfolio (): ILease[] {
    const portfolio = localStorage.getItem('portfolio')
    if (!portfolio) return []
    return JSON.parse(portfolio)
}

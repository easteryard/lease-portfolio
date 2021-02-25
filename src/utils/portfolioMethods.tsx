export interface ILease {
    id: string
    streetName: string
    houseNumber: string
    postNumber: string
    postNumberName: string
}

export function setPortfolio (lease: ILease) {
    const currentPortfolio = getPortfolio()
    if (isLeaseInPortfolio(lease)) return

    currentPortfolio.push(lease)
    const portfolioString = JSON.stringify(currentPortfolio)
    localStorage.setItem('leasePortfolio', portfolioString)
}

export function getPortfolio (): ILease[] {
    const portfolio = localStorage.getItem('leasePortfolio')
    if (!portfolio) return []
    return JSON.parse(portfolio)
}

export function isLeaseInPortfolio (leaseToCheck: ILease) {
    const currentPortfolio = getPortfolio()
    return currentPortfolio.some(leaseInPortfolio => leaseInPortfolio.id === leaseToCheck.id)
}

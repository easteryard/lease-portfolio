import React, { ReactNode } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[400]
        }
    }
})

interface IGlobalProviders {
    children: ReactNode
}

function GlobalProviders ({ children }: IGlobalProviders) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

function App() {
    return (
        <GlobalProviders>
            <Router>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </GlobalProviders>
    )
}

export default App

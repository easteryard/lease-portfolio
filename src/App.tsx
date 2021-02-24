import React, { ReactNode } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

import Overview from './pages/Overview/Overview'
import NavBar from './components/NavBar'
import About from './pages/About/About'

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
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Overview} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </Router>
        </GlobalProviders>
    )
}

export default App

import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles'

import DrawerAppBar from './components/DrawerAppBar'

import BlocksPage from './pages/BlocksPage'
import ConsensusPage from './pages/ConsensusPage'
import HomePage from './pages/HomePage'
import LegalAidPage from './pages/LegalAidPage'

import Footer from './components/Footer'

import './App.css'

let theme = createTheme({
    palette: {
        primary: {
            main: '#9f4797',
        },
    },
})

theme = responsiveFontSizes(theme)

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <DrawerAppBar />
                <CssBaseline />
                <Container sx={{ height: '100%' }}>
                    <Toolbar />
                    <Routes>
                        <Route
                            exact
                            path="gemeinsam/legal-aid"
                            element={<LegalAidPage />}
                        />
                        <Route
                            exact
                            path="gemeinsam/demo-consensus"
                            element={<ConsensusPage />}
                        />
                        <Route
                            exact
                            path="gemeinsam/demo-blocks"
                            element={<BlocksPage />}
                        />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                    <Footer />
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default App

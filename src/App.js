import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles'

import DrawerAppBar from './components/DrawerAppBar'

import Toolbar from '@mui/material/Toolbar'

import BlocksPage from './pages/BlocksPage'
import ConsensusPage from './pages/ConsensusPage'
import HomePage from './pages/HomePage'
import LegalAidPage from './pages/LegalAidPage'
import ProgramPage from './pages/ProgramPage'

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
                            path="gemeinsam/program"
                            element={<ProgramPage />}
                        />
                        <Route
                            path="gemeinsam/demo-blocks"
                            element={<BlocksPage />}
                        />
                        <Route
                            path="gemeinsam/demo-consensus"
                            element={<ConsensusPage />}
                        />
                        <Route
                            path="gemeinsam/legal-aid"
                            element={<LegalAidPage />}
                        />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default App

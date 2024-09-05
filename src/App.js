// import logo from "./logo.svg";
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import MainPage from './pages/MainPage'

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles'

import './App.css'

let theme = createTheme()
theme = responsiveFontSizes(theme)

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Container>
                <ThemeProvider theme={theme}>
                    <MainPage />
                </ThemeProvider>
            </Container>
        </div>
    )
}

export default App

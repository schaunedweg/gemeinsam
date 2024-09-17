import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import MainPage from './pages/MainPage'

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles'

import Languages from './components/Languages'

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
            <CssBaseline />
            <Container>
                <ThemeProvider theme={theme}>
                    <Languages />

                    <MainPage />
                </ThemeProvider>
            </Container>
        </div>
    )
}

export default App

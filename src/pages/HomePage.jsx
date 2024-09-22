import { useTranslation, Trans } from 'react-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Flyers from '../components/Flyers'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

const HomePage = () => {
    const { t } = useTranslation()

    return (
        <Box sx={{ pt: { xs: 2, sm: 4 }, pb: 2 }}>
            <Stack direction="column" spacing={{ xs: 2, sm: 3 }}>
                <PageTitle />
                <Typography variant="body1" sx={{ fontFamily: 'Inconsolata' }}>
                    {t('home.invite')}
                </Typography>
                <Typography variant="h4" sx={{ fontFamily: 'Archivo Black' }}>
                    {t('home.demo')}
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: 'Archivo Black' }}>
                    {t('home.datetime')}
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins' }}>
                    {t('home.location')}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Inconsolata' }}>
                    <Trans
                        i18nKey="home.text"
                        tOptions={{ interpolation: { escapeValue: false } }}
                    />
                </Typography>
                <Flyers />
                <Footer />
            </Stack>
        </Box>
    )
}

export default HomePage

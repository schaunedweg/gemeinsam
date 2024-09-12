import { useTranslation, Trans } from 'react-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

import Flyers from '../components/Flyers'
import Footer from '../components/Footer'
import Languages from '../components/Languages'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Languages />
            <Box sx={{ py: { xs: 2, sm: 4 } }}>
                <Stack direction="column" spacing={{ xs: 2, sm: 4 }}>
                    <Typography
                        sx={{
                            fontFamily: 'Anton',
                            fontSize: { xs: '3rem', sm: '6rem' },
                        }}
                    >
                        {t('title')}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'italic',
                            fontSize: { xs: '1.5rem', sm: '3rem' },
                        }}
                    >
                        <Trans i18nKey="subtitle" components={{ s: <s /> }} />
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontFamily: 'Inconsolata' }}
                    >
                        {t('invite')}
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontFamily: 'Archivo Black' }}
                    >
                        <PriorityHighIcon />
                        <PriorityHighIcon />
                        {t('demo')}
                        <PriorityHighIcon />
                        <PriorityHighIcon />
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontFamily: 'Archivo Black' }}
                    >
                        {t('datetime')}
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Poppins' }}>
                        {t('location')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontFamily: 'Inconsolata' }}
                    >
                        <Trans i18nKey="text" />
                    </Typography>
                    <Flyers />
                </Stack>
            </Box>
            <Footer />
        </div>
    )
}

export default MainPage

import { useTranslation, Trans } from 'react-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import PageTitle from '../components/PageTitle'

const LegalAidPage = () => {
    const { t } = useTranslation()

    return (
        <Box sx={{ py: { xs: 2, sm: 5 } }}>
            <Stack direction="column" spacing={{ xs: 2, sm: 4 }}>
                <PageTitle />
                <Typography variant="h4" sx={{ fontFamily: 'Archivo Black' }}>
                    {t('legal.title')}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Inconsolata' }}>
                    <Trans i18nKey="legal.text" />
                </Typography>
            </Stack>
        </Box>
    )
}

export default LegalAidPage

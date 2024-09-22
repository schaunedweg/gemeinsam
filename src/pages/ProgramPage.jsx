import { useTranslation, Trans } from 'react-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import PageTitle from '../components/PageTitle'

const ProgramPage = () => {
    const { t } = useTranslation()

    return (
        <Box sx={{ pt: { xs: 2, sm: 4 }, pb: 4 }}>
            <Stack direction="column" spacing={{ xs: 2, sm: 3 }}>
                <PageTitle />
                <Typography variant="h4" sx={{ fontFamily: 'Archivo Black' }}>
                    {t('program.title')}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Inconsolata' }}>
                    <Trans
                        i18nKey="program.text"
                        tOptions={{ interpolation: { escapeValue: false } }}
                    />
                </Typography>
            </Stack>
        </Box>
    )
}

export default ProgramPage

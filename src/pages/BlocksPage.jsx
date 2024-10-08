import { useTranslation, Trans } from 'react-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import PageTitle from '../components/PageTitle'

const BlocksPage = () => {
    const { t } = useTranslation()

    return (
        <Box sx={{ py: { xs: 2, sm: 4 }, pb: 4 }}>
            <Stack direction="column" spacing={{ xs: 2, sm: 3 }}>
                <PageTitle />
                <Typography variant="h4" sx={{ fontFamily: 'Archivo Black' }}>
                    {t('blocks.title')}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Inconsolata' }}>
                    <Trans
                        i18nKey="blocks.text"
                        tOptions={{ interpolation: { escapeValue: false } }}
                    />
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography
                        variant="body1"
                        textAlign="left"
                        sx={{ fontFamily: 'Inconsolata' }}
                    >
                        <Trans
                            i18nKey="blocks.blocks"
                            tOptions={{
                                interpolation: { escapeValue: false },
                            }}
                        />
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default BlocksPage

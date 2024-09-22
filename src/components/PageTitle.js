import { useTranslation, Trans } from 'react-i18next'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const PageTitle = () => {
    const { t } = useTranslation()

    return (
        <Box>
            <Typography
                sx={{
                    fontFamily: 'Anton',
                    fontSize: { xs: '3rem', sm: '5rem' },
                }}
            >
                {t('home.title')}
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: { xs: '1.5rem', sm: '3rem' },
                }}
            >
                <Trans i18nKey="home.subtitle" components={{ s: <s /> }} />
            </Typography>
        </Box>
    )
}

export default PageTitle

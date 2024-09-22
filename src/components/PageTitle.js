import * as React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import Typography from '@mui/material/Typography'

const PageTitle = () => {
    const { t } = useTranslation()

    return (
        <React.Fragment>
            <Typography
                sx={{
                    fontFamily: 'Anton',
                    fontSize: { xs: '2.5rem', sm: '5rem' },
                }}
            >
                {t('home.title')}
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'italic',
                    fontSize: { xs: '1.25rem', sm: '3rem' },
                }}
            >
                <Trans i18nKey="home.subtitle" components={{ s: <s /> }} />
            </Typography>
        </React.Fragment>
    )
}

export default PageTitle

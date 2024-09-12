import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'

import { locales } from '../constants'

const Languages = () => {
    const { i18n } = useTranslation()

    return (
        <Box sx={{ pt: 2 }}>
            <ButtonGroup variant="text" aria-label="Languages">
                {locales.map(({ locale, text }) => (
                    <Button
                        key={locale}
                        size="small"
                        onClick={() => i18n.changeLanguage(locale)}
                    >
                        <Typography
                            variant="body1"
                            sx={{ fontFamily: 'Poppins' }}
                        >
                            {text}
                        </Typography>
                    </Button>
                ))}
            </ButtonGroup>
        </Box>
    )
}

export default Languages

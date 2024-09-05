import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Link from '@mui/material/Link'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import { useTranslation } from 'react-i18next'

const flyers = [
    '/gemeinsam/flyers/Demo26_v1.PNG',
    '/gemeinsam/flyers/Demo26_v2.PNG',
    '/gemeinsam/flyers/Demo26_v3.PNG',
    '/gemeinsam/flyers/Demo26_v4.PNG',
    '/gemeinsam/flyers/Demo26_v5.PNG',
    '/gemeinsam/flyers/Demo26_v6.PNG',
]

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Box sx={{ py: { xs: 3, sm: 6 } }}>
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
                        {t('subtitle')}
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
                        {t('text')}
                    </Typography>
                    <ImageList cols={2}>
                        {flyers.map((item) => (
                            <ImageListItem key={item}>
                                <img
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    alt={'demo flyer'}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Stack>
            </Box>
            <Stack direction="row" spacing={1}>
                <Typography variant="caption">
                    <Link
                        target="_blank"
                        href="https://icons8.com/icon/9033/strike"
                    >
                        Protest
                    </Link>{' '}
                    favicon by{' '}
                    <Link target="_blank" href="https://icons8.com">
                        Icons8
                    </Link>
                </Typography>
                <Box flexGrow={1} />
                <Typography variant="caption">Website by Le</Typography>
            </Stack>
        </div>
    )
}

export default MainPage

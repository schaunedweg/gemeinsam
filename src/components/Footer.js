import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const Footer = () => {
    return (
        <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ height: '40px' }}
        >
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
    )
}

export default Footer

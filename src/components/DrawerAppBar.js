import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import GroupsIcon from '@mui/icons-material/Groups'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import InfoIcon from '@mui/icons-material/InfoOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import ReportProblemIcon from '@mui/icons-material/ReportProblemOutlined'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotesOutlined'

import { locales } from '../i18n'

const drawerWidth = 240

const CustomButton = ({ text, onClick, sx }) => {
    return (
        <Button
            color="inherit"
            size="small"
            onClick={onClick}
            sx={{ ...sx, minWidth: '36px' }}
        >
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                {text}
            </Typography>
        </Button>
    )
}

const DrawerAppBar = (props) => {
    const navigate = useNavigate()
    const { i18n, t } = useTranslation()
    const { window } = props

    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const navItems = [
        {
            name: t('home.nav'),
            onClick: () => navigate('gemeinsam'),
            icon: <HomeIcon />,
        },
        {
            name: t('consensus.nav'),
            onClick: () => navigate('gemeinsam/demo-consensus'),
            icon: <InfoIcon />,
        },
        {
            name: t('program.nav'),
            onClick: () => navigate('gemeinsam/program'),
            icon: <SpeakerNotesIcon />,
        },
        {
            name: t('blocks.nav'),
            onClick: () => navigate('gemeinsam/demo-blocks'),
            icon: <GroupsIcon />,
        },
        {
            name: t('legal.nav'),
            onClick: () => navigate('gemeinsam/legal-aid'),
            icon: <ReportProblemIcon />,
        },
    ]

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
            <List>
                {navItems.map(({ name, onClick, icon }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            onClick={onClick}
                            sx={{ textAlign: 'left' }}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText>
                                <Typography
                                    variant="body1"
                                    sx={{ fontFamily: 'Poppins' }}
                                >
                                    {name}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open menu"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 1, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(({ name, onClick }) => (
                            <CustomButton
                                key={name}
                                text={name}
                                onClick={onClick}
                                sx={{ pr: 2 }}
                            />
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        {locales.map(({ locale, text }) => (
                            <CustomButton
                                key={locale}
                                text={locale}
                                onClick={() => i18n.changeLanguage(locale)}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            height: 'auto',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default DrawerAppBar

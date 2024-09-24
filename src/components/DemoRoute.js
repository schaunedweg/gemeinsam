import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const demoroutePath = '/gemeinsam/demoroute.jpg'

const DemoRoute = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ImageList
                cols={1}
                sx={{
                    width: { xs: 'auto', sm: '500px' },
                    height: 'auto',
                }}
            >
                <ImageListItem>
                    <img
                        srcSet={demoroutePath}
                        alt="demo route"
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
        </Box>
    )
}

export default DemoRoute

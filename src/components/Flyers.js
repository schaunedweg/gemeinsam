import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { flyers } from '../constants'

const Flyers = () => {
    return (
        <ImageList cols={2}>
            {flyers.map((item) => (
                <a
                    key={item}
                    href={item}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ImageListItem>
                        <img
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            alt={'demo flyer'}
                            loading="lazy"
                        />
                    </ImageListItem>
                </a>
            ))}
        </ImageList>
    )
}

export default Flyers

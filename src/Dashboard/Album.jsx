import React, {useState} from 'react';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
    {src: 'https://www.shutterstock.com/shutterstock/photos/2033802149/display_1500/stock-vector-vector-illustration-of-cute-baby-yoda-mascot-icon-premium-quality-2033802149.jpg', width: 400, height: 400},
    {src: 'https://rukminim1.flixcart.com/image/416/416/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=70' , width: 400, height: 400},
    {src: 'https://www.shutterstock.com/shutterstock/photos/2033802149/display_1500/stock-vector-vector-illustration-of-cute-baby-yoda-mascot-icon-premium-quality-2033802149.jpg', width: 400, height: 400},
    {src: 'https://rukminim1.flixcart.com/image/416/416/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=70' , width: 400, height: 400},
    {src: 'https://www.shutterstock.com/shutterstock/photos/2033802149/display_1500/stock-vector-vector-illustration-of-cute-baby-yoda-mascot-icon-premium-quality-2033802149.jpg', width: 400, height: 400},
    {src: 'https://rukminim1.flixcart.com/image/416/416/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=70' , width: 400, height: 400},
    {src: 'https://www.shutterstock.com/shutterstock/photos/2033802149/display_1500/stock-vector-vector-illustration-of-cute-baby-yoda-mascot-icon-premium-quality-2033802149.jpg', width: 400, height: 400},
    {src: 'https://rukminim1.flixcart.com/image/416/416/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=70' , width: 400, height: 400},
    {src: 'https://www.shutterstock.com/shutterstock/photos/2033802149/display_1500/stock-vector-vector-illustration-of-cute-baby-yoda-mascot-icon-premium-quality-2033802149.jpg', width: 400, height: 400},
    {src: 'https://rukminim1.flixcart.com/image/416/416/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=70' , width: 400, height: 400}
];
const slides = photos.map(({ src, width, height}) => ({
    src,
    width,
    height
}));

export const Gallery = () => {
    const [index, setIndex] = useState(-1);
    return (
    <>
        <PhotoAlbum layout="masonry" photos={photos} onClick={({ index }) => setIndex(index)}/>
        <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
    </>);   
};
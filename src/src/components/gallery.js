import React from 'react';
import './gallery.css';
import img1 from "../images/IMG-20240621-WA0006.jpg";
//import img2 from "../images/IMG-20240621-WA0007.jpg";
import img3 from "../images/IMG-20240621-WA0008.jpg";
import img4 from "../images/IMG-20240621-WA0009.jpg";
import img5 from "../images/IMG-20240621-WA0010.jpg";
import img6 from "../images/IMG-20240621-WA0011.jpg";
import img7 from "../images/IMG-20240621-WA0012.jpg";
import img8 from "../images/IMG-20240621-WA0013.jpg";
import img9 from "../images/IMG-20240621-WA0014.jpg";
import img10 from "../images/IMG-20240621-WA0015.jpg";
import img11 from "../images/IMG-20240621-WA0016.jpg";
import img12 from "../images/IMG-20240621-WA0017.jpg";
// import img13 from "../images/IMG-20240621-WA0018.jpg";
// import img14 from "../images/IMG-20240621-WA0019.jpg";
import img15 from "../images/IMG-20240621-WA0020.jpg";
// import img16 from "../images/IMG-20240621-WA0021.jpg";
import img17 from "../images/IMG-20240621-WA0022.jpg";
import img18 from "../images/IMG-20240621-WA0023.jpg";
import img19 from "../images/IMG-20240621-WA0024.jpg";
import img20 from "../images/IMG-20240621-WA0025.jpg";
import img21 from "../images/IMG-20240621-WA0026.jpg";
// import img22 from "../images/IMG-20240621-WA0027.jpg";
import img23 from "../images/IMG-20240621-WA0028.jpg";
import img24 from "../images/IMG-20240621-WA0029.jpg";
import img25 from "../images/IMG-20240621-WA0030.jpg";
import img26 from "../images/IMG-20240621-WA0031.jpg";
import img27 from "../images/IMG-20240621-WA0032.jpg";
import img28 from "../images/IMG-20240621-WA0033.jpg";
import img2 from "../images/IMG-20240621-WA0007.jpg";
import NewsAds from './Leftads/adsection';
import RightNewsAds from './rightadscomonent';
import NewsHeadlines from './headlines';
import { Outlet } from 'react-router-dom';



const images = [
   { src: img1, alt: 'Image 1' },
    //{ src: img2, alt: 'Image 1' },
    { src: img3, alt: 'Image 1' },
    { src: img4, alt: 'Image 1' },
    { src: img5, alt: 'Image 1' },
    { src: img6, alt: 'Image 1' },
    { src: img7, alt: 'Image 1' },
    { src: img8, alt: 'Image 1' },
    { src: img9, alt: 'Image 1' },
    { src: img10, alt: 'Image 1' },
    { src: img11, alt: 'Image 1' },
    { src: img12, alt: 'Image 1' },
    // { src: img13, alt: 'Image 1' },
    // { src: img14, alt: 'Image 1' },
    { src: img15, alt: 'Image 1' },
    // { src: img16, alt: 'Image 1' },
    { src: img17, alt: 'Image 1' },
    { src: img18, alt: 'Image 1' },
    { src: img19, alt: 'Image 1' },
    { src: img20, alt: 'Image 1' },
    { src: img21, alt: 'Image 1' },
    // { src: img22, alt: 'Image 1' },
    { src: img23, alt: 'Image 1' },
    { src: img24, alt: 'Image 1' },
    { src: img25, alt: 'Image 1' },
    { src: img26, alt: 'Image 1' },
    { src: img27, alt: 'Image 1' },
    { src: img28, alt: 'Image 1' },
    { src: img2, alt: 'Image 1' },
   
    // Add more images as needed
];

const Gallery = () => {
    return (
        <div className='layout'>
             <div className='left-ads'>
                <NewsAds />
            </div>
          <div className="gallery-content">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image.src} alt={image.alt} className="gallery-image" />
                    <div className="gallery-item-info">
                        {/*<h2>{image.alt}</h2>*/}
                    </div>
                </div>
            ))}
       
         
        </div>
        <div className="right-ads layout1">
                <RightNewsAds />
            </div>

            <div className='news'>
                <NewsHeadlines />
            </div>
        </div>
    );
};

export default Gallery;

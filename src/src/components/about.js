import React from 'react';
import './about.css';
import NewsAds from './Leftads/adsection';
import RightNewsAds from './rightadscomonent';
import NewsHeadlines from './headlines';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import aboutImage from '../images/Untitled-2.png'; // Make sure you have an image at this path
import img1 from './crops-ads/tomato.jpg';
import img4 from './crops-ads/onion.jpg';
import img5 from './crops-ads/Maize.jpg';
import img6 from './crops-ads/carrot.jpg';
import img7 from './crops-ads/Rice.jpg';
import img8 from './crops-ads/potato.jpg';
import img9 from './crops-ads/pea.jpg';
import img10 from './crops-ads/Brinjal.jpg';
import img11 from './crops-ads/Ladyfinger.jpg';

const About = () => {
    return (
        <div className='layout'>
          <div className='left-ads'>
                <NewsAds />
            </div>
            <div className='left-crops'>
           <div className="Categories">
           <h2>Categories</h2>
           <div className="crop-item">
           <Link to="/left-crops/lc1"  target="_blank" rel="noopener noreferrer">
           <img src={img7}  alt="బాస్మతీ బియ్యం  సాగు విధానం " />
          <p>బాస్మతీ బియ్యం సాగు విధానం<br></br>
        (rice cultivation in telugu ) </p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc2"  target="_blank" rel="noopener noreferrer">
           <img src={img5}  alt="మొక్కజొన్న సాగు విధానం " />
           <p>మొక్కజొన్న ఉత్పత్తి<br></br>
            (Maize cultivation in telugu)</p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc3"  target="_blank" rel="noopener noreferrer">
           <img src={img11}  alt="బెండ సాగు విధానం " />
           <p>బెండ సాగు విధానం<br></br>
            (ladies finger cultivation in telugu)</p>
           </Link>
          </div>
          <div className='crop-item'>
           <Link to="/left-crops/lc4"  target="_blank" rel="noopener noreferrer">
           <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/12/Featured-photo-size1.jpg?resize=900%2C400&ssl=1"  alt="క్యాలీఫ్లవర్ సాగు విధానం"  />
           <p>క్యాలీఫ్లవర్ సాగు విధానం <br></br>
           (cauliflower cultivation in telugu)</p>
           </Link>
          </div>
          <div className='crop-item'>
           <Link to="/left-crops/lc5"  target="_blank" rel="noopener noreferrer">
           <img src={img8}  alt="క్యాలీఫ్లవర్ సాగు విధానం"  />
           <p>ఆలుగడ్డ సాగు విధానం<br></br>
           (Potato Cultivation in Telugu)</p>
           </Link>
          </div>
           </div>
           </div>
           
           <div className="About-content">
            <div className='content'>
                <Outlet />
                <img src={aboutImage} alt="About Us" className="about-image" />
                <div className="about-text">
                    <h1>మన తెలుగు రైతుబడి</h1>
                    <p>
                        చెమట చిందించి అన్నం పండించే అన్నదాతలకు వందనం. ఆకలి తీర్చే రైతున్నకు తోటి రైతుల అనుభవాలు, 
                        కష్టనష్టాలను వివరించడం.. కొత్త సాంకేతిక పరికరాలను పరిచయం చేయడమే మన తెలుగు రైతుబడి లక్ష్యం.
                    </p>
                    <p>
                        మన చానెల్ సబ్ స్క్రైబ్ చేసుకోండి. లైక్ చేయండి. మీ సలహాలు-సూచనలు కామెంట్ రూపంలో తెలియజేయండి. 
                        ఫేస్ బుక్ పేజీ ఇంకా ఇన్ స్టా గ్రామ్ పేజీలలో కూడా మీరు మన చానెల్ ను ఫాలో కావచ్చు.
                    </p>
                    <p>
                        Facebook : <a href="https://www.facebook.com/telugurythubadi" target="_blank" rel="noopener noreferrer">https://www.facebook.com/telugurythubadi</a><br />
                        Instagram: <a href="https://www.instagram.com/rythu_badi/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/rythu_badi/</a>
                    </p>
                    <p>
                        ఇమెయిల్: <a href="mailto:telugurythubadi@gmail.com">telugurythubadi@gmail.com</a> లేదా 8897119694 నంబరులో సమాచారం అందించవచ్చు.
                    </p>
                </div>
                
                
                <div className='news'>
               
               <NewsHeadlines />
               </div>
              
            </div>
            
        </div>
        <div className='crops-ads'>
           <div className="recent-ads">
           <h2>Recent posts</h2>
           <div className="crop-item">
          <Link to="/crops-ads/c1"  target="_blank" rel="noopener noreferrer">
               <img src={img1}  alt="టమాటో సాగు విధానం " />
          <p>టమాటో సాగు విధానం.<br></br>
        (Tomato cultivation in telugu ) </p>
          </Link>
           </div>  
           <div className='crop-item'>
            <Link to="/crops-ads/c2" target="_blank" rel="noopener noreferrer">
            <img src={img6} alt="క్యారెట్ సాగు విధానం"  />
            <p>క్యారెట్ సాగు విధానం.<br></br>
                (Carrot cultivation in telugu )</p>
            </Link>
           </div>
           <div className='crop-item'>
            <Link to="/crops-ads/c3" target="_blank" rel="noopener noreferrer">
            <img src={img10}  alt=" వంకాయ సాగు విధానం "  />
            <p> వంకాయ సాగు విధానం.<br></br>
                (Brinjal Cultivation in telugu)</p>
            </Link>
           </div>
           <div className='crop-item'>
            <Link to="/crops-ads/c4" target="_blank" rel="noopener noreferrer">
            <img src={img4}  alt="ఉల్లి సాగు విధానం"  />
            <p>ఉల్లి సాగు విధానం<br></br>
                (Onion Cultivation in Telugu)</p>
            </Link>
           </div>
           <div className='crop-item'>
            <Link to="/crops-ads/c5" target="_blank" rel="noopener noreferrer">
            <img src={img9} alt=">కంది సాగు విధానం "  />
            <p>కంది సాగు విధానం<br></br>
            (Pigeon Pea Cultivation in Telugu)</p>
            
            

            </Link>
           </div>
           </div>
           </div>
        
        
        <div className="right-ads layout1">
                <RightNewsAds />
            </div>
        </div>
        
    );
};

export default About;

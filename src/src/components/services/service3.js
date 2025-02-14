import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';
import technologyImage from './technology.jpg';
import NewsAds from '../Leftads/adsection';
import RightNewsAds from '../rightadscomonent';
import NewsHeadlines from '../headlines';
import { Outlet } from 'react-router-dom';
import img1 from '../crops-ads/tomato.jpg';
import img4 from '../crops-ads/onion.jpg';
import img5 from '../crops-ads/Maize.jpg';
import img6 from '../crops-ads/carrot.jpg';
import img7 from '../crops-ads/Rice.jpg';
import img8 from '../crops-ads/potato.jpg';
import img9 from '../crops-ads/pea.jpg';
import img10 from '../crops-ads/Brinjal.jpg';
import img11 from '../crops-ads/Ladyfinger.jpg';
const Technology = () => {
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
           <img src={img5} alt="మొక్కజొన్న సాగు విధానం " />
           <p>మొక్కజొన్న ఉత్పత్తి<br></br>
            (Maize cultivation in telugu)</p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc3"  target="_blank" rel="noopener noreferrer">
           <img src={img11} alt="బెండ సాగు విధానం " />
           <p>బెండ సాగు విధానం<br></br>
            (ladies finger cultivation in telugu)</p>
           </Link>
          </div>
          <div className='crop-item'>
           <Link to="/left-crops/lc4"  target="_blank" rel="noopener noreferrer">
           <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/12/Featured-photo-size1.jpg?resize=900%2C400&ssl=1"  alt="క్యాలీఫ్లవర్ సాగు విధానం" className="logo1" />
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

            <div className='content'>
                <Outlet />
                <div className='middle-content'>
                <h2>New Technology Equipment | కొత్త సాంకేతిక పరికరాలు</h2>
                <div className="services-content">
                <img src={technologyImage} alt="New Technology" className="service-image" />
                <div className="service-content">
                    <h1>New Technology Equipment | కొత్త సాంకేతిక పరికరాలు</h1>
                    <p>
                        Introducing new technology in farming can significantly increase productivity and reduce labor.
                        వ్యవసాయంలో కొత్త సాంకేతికతను ప్రవేశపెట్టడం ఉత్పత్తి మరియు శ్రమను గణనీయంగా తగ్గిస్తుంది.
                    </p>
                    <p>
                        Advanced machinery such as tractors, harvesters, and irrigation systems can streamline farming operations and improve efficiency.
                        ట్రాక్టర్లు, హార్వెస్టర్లు మరియు నీటి పారుదల వ్యవస్థలు వంటి ఆధునిక యంత్రాలు వ్యవసాయ కార్యకలాపాలను సులభతరం చేసి సమర్థతను మెరుగుపరుస్తాయి.
                    </p>
                    <p>
                        Precision farming techniques, using GPS and data analytics, can help in optimizing crop yields and reducing waste.
                        జీపిఎస్ మరియు డేటా విశ్లేషణలను ఉపయోగించి, ఖచ్చితత్వం వ్యవసాయ పద్ధతులు పంట దిగుబడులను ఆప్టిమైజ్ చేయడంలో మరియు వ్యర్థాలను తగ్గించడంలో సహాయపడతాయి.
                    </p>
                    <p>
                        Adopting new technologies not only benefits individual farmers but also contributes to the overall advancement of the agricultural sector.
                        కొత్త సాంకేతికతలను స్వీకరించడం ఒక్కో రైతులకు మాత్రమే కాకుండా వ్యవసాయ రంగం మొత్తం అభివృద్ధికి కూడా తోడ్పడుతుంది.
                    </p>

                </div>
                
           
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

export default Technology;

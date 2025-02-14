import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';
import challengesImage from './challenges.jpg';
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
const Challenges = () => {
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
                <h2>Challenges Faced By Farmers | రైతులు ఎదుర్కొనే సవాళ్లు</h2>
                <div className="services-content">
                <img src={challengesImage} alt="Challenges Faced" className="service-image" />
                <div className="service-content">
                    <h1>Challenges Faced By Farmers | రైతులు ఎదుర్కొనే సవాళ్లు</h1>
                    <p>
                        Farmers face various challenges such as climate change, pest infestations, and market price fluctuations.
                        రైతులు వాతావరణ మార్పులు, పురుగు దోషాలు మరియు మార్కెట్ ధర మార్పులు వంటి విభిన్న సవాళ్లను ఎదుర్కొంటారు.
                    </p>
                    <p>
                        Climate change can lead to unpredictable weather patterns, affecting crop yields and making farming more challenging.
                        వాతావరణ మార్పులు అనూహ్య వాతావరణ నమూనాలను కలిగి ఉండవచ్చు, ఇది పంట దిగుబడిని ప్రభావితం చేస్తుంది మరియు వ్యవసాయాన్ని మరింత సవాలుగా మారుస్తుంది.
                    </p>
                    <p>
                        Pest infestations can devastate crops, leading to significant financial losses for farmers.
                        పురుగు దోషాలు పంటలను నాశనం చేయవచ్చు, రైతులకు గణనీయమైన ఆర్థిక నష్టాలను కలిగిస్తుంది.
                    </p>
                    <p>
                        Market price fluctuations can make it difficult for farmers to predict their income and plan for the future.
                        మార్కెట్ ధర మార్పులు రైతులు తమ ఆదాయాన్ని అంచనా వేయడం మరియు భవిష్యత్తుకు ప్రణాళిక చేయడం కష్టం చేస్తుంది.
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

export default Challenges;

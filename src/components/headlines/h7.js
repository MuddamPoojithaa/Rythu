import React from 'react';
import './h2.css'; // Make sure this path matches your actual CSS file path
import NavImage from './Untitled-3.png';
import img2 from "./IMG-20240624-WA0004.jpg";
import NewsAds from '../Leftads/adsection';
import RightNewsAds from '../rightadscomonent';
import NewsHeadlines from '../headlines';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from '../crops-ads/tomato.jpg';
import img4 from '../crops-ads/onion.jpg';
import img5 from '../crops-ads/Maize.jpg';
import img6 from '../crops-ads/carrot.jpg';
import img7 from '../crops-ads/Rice.jpg';
import img8 from '../crops-ads/potato.jpg';
import img9 from '../crops-ads/pea.jpg';
import img10 from '../crops-ads/Brinjal.jpg';
import img11 from '../crops-ads/Ladyfinger.jpg';
const G20Event = () => {
    return (
        <div className='layout'>
            <img src={NavImage} className="nav" alt="Nav image" />
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
                <div className="middle-content">
                <h2>ప్రారంభమైన G 20 వ్యవసాయ మంత్రుల సమావేశాలు !</h2>
               <img src="https://telugu-cdn.b-cdn.net/media/qlfmsrom/g20-2.jpg" className="logo" alt="G20 Logo" />
                <h3>G 20 సమావేశంలో కేంద్ర వ్యవసాయ మంత్రి నరేంద్ర సింగ్ తోమర్, మంత్రి కైలాష్ , మంత్రి శోభ కరణ్ లాజ్ తదితరులు ..</h3>
                <p>జూన్ 15 నుండి మూడు రోజుల పాటు జరుగనున్న G 20 సమావేశం ఈ రోజు హైదరాబాద్ లో ప్రారంభమైనది. 15-17 వరకు జరగనున్న ఈ సమావేశాలకు నేడు కేంద్ర వ్యవసాయ శాఖ మంత్రి నరేంద్ర సింగ్ తోమర్ , స్టేట్ క్యాడర్ కేంద్ర వ్యవసాయ మరియు రైతు సంక్షేమ శాఖ సహాయ మంత్రి కైలాష్ , తెలంగాణ వ్యవసాయ శాఖ మంత్రి నిరంజన్ రెడ్డి మరియు వివిధ దేశాలకు చెందిన వ్యవసాయ మంత్రులు, అంతర్జాతీయ సంస్థల డైరెక్టర్ జనరల్‌లు దాదాపు 200 మంది ప్రతినిధులు , అగ్రిమీడియా కృషి జాగరణ్ ఎడిటర్ అండ్ చీఫ్ ఎం. సి డొమినిక్ , వివిధ శాఖలకు చెందిన వ్యవసాయ నిపుణులు ఈ సమావేశంలో పాల్గొన్నారు .</p>
                <img src={img2} className="logo1" alt="Event Image 1" />
                <h3>G 20 సమావేశంలో కేంద్ర వ్యవసాయ మంత్రి నరేంద్ర సింగ్ తోమర్ తో కృషి జాగరణ్ ఎడిటర్ చీఫ్ ఎం సీ డొమినిక్</h3>
                <p>ఈ సమావేశంలో పెరిగిన పంటల ఉత్పత్తి, దిగుబడితో వ్యవసాయ రంగంలో తెలంగాణ అగ్రగామిగా ఉందని కేంద్ర వ్యవసాయ శాఖ మంత్రి నరేంద్ర సింగ్ తోమర్ అన్నారు . జూన్ 15 నుంచి 17 వరకు హైదరాబాద్‌లో జి20 సదస్సు జరగనున్న నేపథ్యంలో ప్రపంచ వ్యవసాయ రంగంలో భారతదేశ ప్రాముఖ్యతను చాటిచెప్పేందుకు కేంద్రం, రాష్ట్ర ప్రభుత్వాలు కలిసి పనిచేస్తాయని చెప్పారు .</p>
                <img src="https://telugu-cdn.b-cdn.net/media/lnjnxcxc/dominic.jpg" className="logo" alt="Event Image 2" />
                <h3>వర్తకుల వల్ల నెరవేరుతున్న డొమినిక్‌గారి వివరణలు</h3>
                <p>దీన్ని నిర్ధరించడానికి ఈ సమయంలో తరలించబడుతుంది. తెలుగు మార్గదర్శనా కార్యక్రమం సంబంధించిన ముఖ్య వివరాలు కావాలనేది. వివరాలను అరగంటమైనంత త్వరగా ఇవ్వవలసి ఉంది.</p>
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

            <div className='news'>
                <NewsHeadlines />
            </div>
        </div>
    );
}

export default G20Event;

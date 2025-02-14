import React from 'react';
import './h2.css'; // Make sure the CSS file is in the same directory
import NavImage from './Untitled-3.png';
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
const Headline2 = () => {
  return (
    <div className='layout'>
      <img src={NavImage} className="nav" alt="Navigation" />
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
        <h2>రైతులకు శుభవార్త.. వచ్చే నెలలోనే పీఎం కిసాన్ యోజన 15వ విడత డబ్బులు జమ..!</h2>
        
        <img src="https://telugu-cdn.b-cdn.net/media/4ydcswxw/new-project-3.jpg" className="logo" alt="Logo" />
        <p>దేశంలోని రైతుల ఆర్థిక సహాయం కోసం భారత ప్రభుత్వం ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి యోజనను అమలు చేస్తోంది. ప్రతి ఏటా 6 వేల రూపాయలను రైతుల బ్యాంకు ఖాతాలకు వాయిదాల్లో వేస్తున్నారు. ఈ పథకం ప్రకారం, ప్రభుత్వం ప్రతి 4 నెలల వ్యవధిలో 3 విడతలుగా రైతుల ఖాతాలకు రూ.2,000 జమ చేస్తున్నారు. 2019 సంవత్సరం నుంచి ఇప్పటి వరకు 14 వాయిదాలను రైతుల ఖాతాలకు ప్రభుత్వం జమ చేసింది. ప్రస్తుతం 15వ విడత ఎప్పుడెప్పుడా అని రైతులు ఎదురు చూస్తున్నారు.</p>
        <p>దేశంలోని రైతుల కోసం ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి యోజనకు సంబంధించి భారత ప్రభుత్వం పెద్ద నవీకరణను అందించింది. నిజానికి, పీఎం కిసాన్ 15వ విడత కోసం ఎదురుచూస్తున్న రైతులకు పెద్ద ఊరట లభించింది. పీఎం కిసాన్ యోజన 15వ విడత వచ్చే నెలలో విడుదల కావచ్చని చెబుతున్నారు. ప్రధానమంత్రి కిసాన్ యోజన కింద, దేశంలోని ఆర్థికంగా బలహీనంగా ఉన్న రైతుల ఖాతాలకు ప్రతి సంవత్సరం 6 వేల రూపాయలను కేంద్ర ప్రభుత్వం అందిస్తుంది. కేంద్ర ప్రభుత్వం ఈ మొత్తాన్ని మూడు విడతలుగా ఒక్కొక్కరికి రూ.2000 చొప్పున ఏడాదికి మూడుసార్లు రైతుల ఖాతాల్లో జమ చేస్తుంది.</p>
        <p>మీరు కూడా PM కిసాన్ యోజన యొక్క 15వ విడత కోసం ఎదురు చూస్తున్నట్లయితే, మీ నిరీక్షణ ఇప్పుడు ముగిసినట్టే. కాబట్టి వచ్చే నెలలో ఏ రోజున పీఎం కిసాన్ యోజన 15వ విడత రైతుల ఖాతాలకు బదిలీ చేయబడుతుందో ఇంకా స్పష్టంగా చెప్పలేదు. నవంబర్ మొదటి వారంలోగా రైతుల ఖాతాల్లోకి జమచేయవచ్చు.</p>
        <p>ప్రస్తుతానికి, ఈ పథకం ప్రయోజనం పొందుతున్న రైతులకు బ్యాంక్ ఖాతా యొక్క ఆధార్ సీడింగ్‌తో పాటు ఇ-కెవైసి చేయాలని భారత ప్రభుత్వం ఉత్తర్వులు జారీ చేసింది. పీఎం కిసాన్ 15వ విడత పొందేందుకు రైతులు తమ బ్యాంకు ఖాతాల ఆధార్ సీడింగ్‌ను అక్టోబర్ 15, 2023లోపు పూర్తి చేయాలని ప్రభుత్వం ఆదేశాలు జారీ చేసింది.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHa0ACa55w-rctF1r3d8CctBezskgadkIfDA&s" className="logo1" alt="Logo1" />
      <p>పీఎం కిసాన్ యోజన 15వ విడత కింద రైతులకు డబ్బులు వచ్చే నెలలోనే జమ కాబోతున్నాయని సమాచారం. ఈ యోజన కింద కేంద్ర ప్రభుత్వం ప్రతి సంవత్సరం 6000 రూపాయల ఆర్థిక సహాయం ఇస్తుంది. ఈ మొత్తం మూడు విడతల్లో రైతుల బ్యాంక్ ఖాతాల్లో జమ అవుతుంది, అంటే ప్రతి నాలుగు నెలలకోసారి 2000 రూపాయలు.</p>
      <h3>పీఎం కిసాన్ యోజన గురించి</h3>
      <p>ప్రధాన్ మంత్రి కిసాన్ సమ్మాన్ నిధి (పీఎం కిసాన్) 2019 లో ప్రారంభించబడింది. ఈ యోజన కింద 2 హెక్టార్ల కంటే తక్కువ భూమి కలిగిన సన్నకారు రైతులందరికీ ఆర్థిక సహాయం అందుతుంది. లక్ష్యం ఏమిటంటే, రైతులు తమ సాగు ఖర్చులకు మరియు ఇతర అవసరాలకు ఆర్థిక భారం లేకుండా వ్యవసాయం కొనసాగించగలిగే విధంగా చేయడం.</p>
      <h3>ప్రధాన లక్షణాలు:</h3>
      <h4>1.ప్రతి రైతుకు 6000 రూపాయలు: </h4>
      <p>ప్రతి ఏడాది 3 విడతల్లో, అంటే 2000 రూపాయల చొప్పున, మొత్తం 6000 రూపాయలు రైతుల బ్యాంక్ ఖాతాల్లో జమ అవుతాయి.</p>
      <h4>2.సమాన వితరణ: </h4><p>అన్ని రాష్ట్రాల రైతులకు ఈ ఆర్థిక సహాయం అందుతుంది.</p>
      <h4>3.ప్రక్రియ సరళీకృతం:</h4> <p>రైతులు తమ వివరాలను సంబంధిత రైతు సేవా కేంద్రాల్లో లేదా ఆన్‌లైన్‌లో నమోదు చేసుకోవచ్చు.</p>
      <h4>4.డైరెక్ట్ బెనిఫిట్ ట్రాన్స్ఫర్ (DBT):</h4> <p>రైతుల బ్యాంక్ ఖాతాల్లో నేరుగా డబ్బులు జమ అవుతాయి.</p>
      <h3>15వ విడత విడుదల!!</h3>
      <p>ప్రస్తుతం, 15వ విడత కింద డబ్బులు జమ చేయడానికి కేంద్ర ప్రభుత్వం సన్నద్ధమవుతోంది. ఈ విడత కింద రైతులకు 2000 రూపాయలు జమ కానున్నాయి. దీనివల్ల రైతులకు మరింత ఆర్థిక సాయం లభిస్తుంది, ఇది వానాకాలపు సాగు పంటలకు ఉపయోగపడుతుంది.</p>
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
};

export default Headline2;

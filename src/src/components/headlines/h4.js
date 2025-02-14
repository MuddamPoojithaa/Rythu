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
const Headline4 = () => {
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
        <h2>కౌలు రైతులకు గుడ్ న్యూస్.. వారందరికీ పంట సాగు ధ్రువీకరణ పత్రాలు మంజూరు.. </h2>
     
        <img src="https://telugu-cdn.b-cdn.net/media/jp2l1dtc/new-project-6.jpg" className="logo" alt="Logo" />
        <p>కౌలు రైతులందరికీ ఆంధ్రప్రదేశ్ ప్రభుత్వం శుభవార్త చెప్పింది. పల్నాడు జిల్లా వ్యవసాయ అధికారి ఇంగిరాల మురళీ, పంట సాగు ధ్రువీకరణ పత్రాలను జిల్లాలో అర్హత ఉన్న కౌలు రైతులు అందరికి మంజూరు చేస్తామని తెలిపారు. ఇప్పటికే ఈ ప్రక్రియను రైతు భరోసా కేంద్రాల ద్వారా ప్రారంభించినట్లు ఇంగిరాల మురళీ గారు తెలిపారు.</p>
        <p>కౌలు రైతులకు పంట సాగు ధ్రువీకరణ పత్రాల మంజూరు, ఈ-క్రాప్ నమోదుకు సంబంధించిన పలు అంశాలపై గురువారం వ్యవసాయ అధికారులు, రైతులతో సమావేశమై చర్చించారు. జిల్లావ్యాప్తంగా 56 వేల మంది కౌలు రైతులకు పంట సాగు ధ్రువీకరణ పత్రాలను అందజేయాలని లక్ష్యంగా పెట్టుకున్నారు. కాగా, ఇప్పటికే జిల్లాలో 47 వేల మంది కౌలు రైతులకు పంట సాగు ధ్రువీకరణ పత్రాలు మంజూరు చేసినట్లు తెలిపారు.</p>
        <p>భూయజమాని అనుమతితోనే కౌలు రైతులకు పంట సాగు ధృవీకరణ పత్రాలు మంజూరు చేయడంతో ఎలాంటి సమస్యలు తలెత్తవని తెలిపారు. ఇంకా, ఈ పంట సాగు ధృవీకరణ పత్రాల కాల పరిమితి 11 నెలల వ్యవధి ఉంటుందని తెలిపారు. అదనంగా, పంట సాగు ధృవీకరణ పత్రాలు పొందిన ఎస్సీ, ఎస్టీ, బీసీ మరియు మైనారిటీ వర్గాలకు చెందిన కౌలు రైతులు రైతు భరోసా పథకం ద్వారా అందించే ప్రయోజనాలతో పాటు ప్రభుత్వ రాయితీలకు అర్హులు అని అన్నారు.</p>
       
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYYJNf2BECrBD_9rWmd6lv-5DsgaOkz9JyQ&s" className="logo1" alt="Logo1" />
        <p>ప్రభుత్వం కౌలు రైతులకు పంట సాగు ధ్రువీకరణ పత్రాలు మంజూరు చేయాలని నిర్ణయం తీసుకుంది. ఈ పత్రాలు రైతులకు పలు ప్రయోజనాలను అందిస్తాయి. ముఖ్యంగా, పంట సాగుకు సంబంధించిన సబ్సిడీలు, రుణాలు, బీమా తదితర పథకాలు పొందడానికి ఈ పత్రాలు అవసరం అవుతాయి.

ధృవీకరణ పత్రాల ప్రయోజనాలు:</p>

    <h3>సబ్సిడీలు: </h3><p>పంట సాగుకు కావాల్సిన విత్తనాలు, ఎరువులు తదితరాలకు సబ్సిడీలు పొందడంలో సాయం.</p>
    <h3>రుణాలు:</h3><p> బ్యాంకులు మరియు ఇతర ఆర్థిక సంస్థల నుండి రుణాలు పొందడానికి ఆధారం.</p>
    <h3>బీమా:</h3><p> పంట నష్టపోతే బీమా పరిహారం పొందడంలో సులభతరం.</p>
    <h3>సాంకేతిక సహాయం:</h3><p>ప్రభుత్వ మరియు ప్రైవేట్ సంస్థల నుండి సాంకేతిక సహాయాన్ని పొందడం.</p>
    <h3>మార్కెటింగ్ సదుపాయాలు:</h3><p>పంటను విక్రయించడంలో మార్కెటింగ్ సదుపాయాలు.</p>

ఈ పత్రాలు పొందడానికి రైతులు స్థానిక వ్యవసాయ కార్యాలయాలనో, లేదా ప్రభుత్వ అధికారిక వెబ్‌సైట్లనో సంప్రదించవచ్చు.
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

export default Headline4;

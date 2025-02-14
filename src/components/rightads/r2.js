import React from 'react';
import './right Ad2.css'; // Ensure your CSS file path is correct
import img from './Untitled-3.png';
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
const Ad2Componentr2 = () => {
    return (
        <div className='layout'>
            <img src={img} className="nav" alt="Navigation" />
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
                <h2>పీఎం కిసాన్ eKYC ఇప్పుడు ఫోన్ ద్వారా కూడా</h2>
                    <h2> చేసుకోవచ్చు.. ఎలానో తెలుసా..?</h2>
                
                <img src="https://telugu-cdn.b-cdn.net/media/bexhee2j/new-project-1.jpg" className="logo" alt="PM Kisan" />
                <p>ప్రధానమంత్రి కిసాన్ పథకం ద్వారా కేటాయించిన 15వ విడత నిధులను నవంబర్ 15, 2023న ప్రధాని నరేంద్ర మోదీ విడుదల చేశారు. జార్ఖండ్‌లోని ఖుంటిలోని బిర్సా కాలేజీలో పీఎం కిసాన్ పథకం కింద నిధులను నేరుగా రైతుల బ్యాంకు ఖాతాల్లో జమ చేసినట్లు ప్రధాని నరేంద్ర మోదీ ప్రకటించారు. వ్యవసాయ రంగాన్ని ఆదుకునేందుకు మరియు రైతులను ఆర్థికంగా బలోపేతం చేయడానికి ప్రభుత్వం చేస్తున్న ప్రయత్నంలో ఈ ముఖ్యమైన పరిణామంలో ఈ పథకం ఒకటి.</p>
                <p>మొత్తం రూ.18,000 వేల కోట్లు ప్రధాని మోదీ విడుదల చేయగా, ఒక్కో రైతు ఖాతాల్లో రూ.2,000 చెప్పున జమ అయ్యాయి. ఈ విషయాన్ని కేంద్ర సమాచార ప్రసారాల శాఖ అధికారులు తెలిపారు. దేశ వ్యాప్తంగా 8 కోట్లకు పైగా రైతులకు ఈ పీఎం కిసాన్ పథకం నగదు ద్వారా లబ్ది పొందారు. తదుపరి విడత ఫిబ్రవరి లేదా మార్చిలో విడుదల కావచ్చు. ఈ ఇన్‌స్టాల్‌మెంట్ ప్రయోజనాన్ని పొందడానికి లబ్ధిదారులందరి eKYCని పూర్తి చేయడం అవసరం.</p>
                <p>మీరు ఇంకా ఈ ప్రక్రియను పూర్తి చేయకుంటే, ఈరోజే అలా చేయాలని సిఫార్సు చేశారు. అదనంగా, eKYCని పూర్తి చేయడంలో చేరి ఉన్న దశలతో మిమ్మల్ని మీరు పరిచయం చేసుకోవడం చాలా కీలకం, తద్వారా తదుపరి వాయిదా మొత్తాన్ని మీ ఖాతాలో జమ చేయవచ్చు.</p>
                <img src="https://telugu-cdn.b-cdn.net/media/noye3yrd/pm-kisan-ekyc.jpg" className="logo1" alt="PM Kisan eKYC" />
                <p>కానీ, పీఎం కిసాన్ పథకంలో అమలు చేసేవారు ఇప్పుడు అన్ని అప్లికేషన్లను అనువర్తించి, పైలుస్ చేసుకున్న క్రింది చూపించిన దశలో ఫోన్ ద్వారా కూడా చేసుకోవచ్చు. ఇది నిర్వచించడం కొన్ని క్రింది ఆధారాలను అందించాలి:</p>
                   <h3>1.ఆధారాధారిత ప్రమాణాలను విశేషించండి.</h3>
                         ముందుగా, ఆధార్ కార్డు మరియు బ్యాంక్ ఖాతా సమాచారాన్ని అన్వయించాలి. ఇవి కిసాన్ పరిశ్రమకు వెళ్ళే కార్యకలాపాలకు గమనింపు చేస్తాయి.<br></br>
                  <h3> 2.మార్కిట్ నకిలీకి మేలుకోవడం.</h3>
                  నిర్మాతల మార్కెట్ ప్లేస్ల లాభాలను పెంచే కార్యకలాపాలకు మీరు అధికారం అందించేందుకు మీ అనుమతిని అందించాలి.
                  <h3> 3.డాక్యుమెంట్లు నమోదు చేయడం.</h3>
                  అన్ని పారిశ్రమిక చేయబడిన వివరాలను డాక్యుమెంట్లు నమోదు చేయడం వలన పీఎం పథకాలకు అనుమతి నిర్వహించేందుకు ఇది అవసరం.
                   <h3>4.అనుమతులు వివరించడం.</h3>
                   మీరు అనుమతులు వివరించే క్రింది దశలో, ఆదాయ మరియు ప్రామాణికత ప్రమాణాల నుండి వివరాలు నమోదు చేయాలి.
                   <p>పీఎం కిసాన్ పథకం ద్వారా ఫోన్ ద్వారా eKYC అన్వయించడం కృషి వ్యవసాయాన్ని మోతాదుల ప్రారంభించే ఒక ముఖ్య చర్య. ఈ ప్రణాళిక ద్వారా కిసాన్లకు మొత్తాదుల సేవలు, ఆర్థిక సహాయాలు మరియు మార్గదర్శనలు అందించబడుతుంది. ఫోన్ ద్వారా eKYC ప్రణాళికను అన్వయించడం వలన సమస్యలను తగ్గించడం, కిసాన్ బెనిఫిట్స్ ప్రణాళికలను ప్రవేశించడం మరియు అనుమతులు నిర్వహించడం పీఎం కిసాన్ పథకం కృషి వ్యవసాయాలకు అనుకూలం కలిగిస్తాయి. ఈ ప్రణాళిక మూలంగా కృషి సేవలను మోతాదులు మార్చడం మరియు కిసాన్ సమృద్ధికి దారిద్ర్యంలను తగ్గించడం ఉద్దేశ్యంగా ఉంది.</p>
                   <p>పీఎం కిసాన్ పథకంలో ఫోన్ ద్వారా eKYC అన్వయించడం వలన వ్యవసాయులు మీరు త్వరగా మరియు సులభంగా వాటా నమోదు ప్రక్రియను పూర్తి చేయగలరు. ఇది వ్యవసాయ సహాయాలను ముందుకు తీసుకువేస్తుంది మరియు సమయం వినియోగించటానికి సౌకర్యపరమైన అంశం అందిస్తుంది. ఈ ప్రక్రియ మరియు సంస్థల సంవత్సర పరిపాలన సహాయం ద్వారా, వ్యవసాయులు సేవలను పొందటంలో సులభంగా అమలు చేయగలరు.</p>
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

export default Ad2Componentr2;

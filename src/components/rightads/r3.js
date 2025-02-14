import React from 'react';
import './right Ad3.css'; // Ensure your CSS file path is correct
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
const Ad3Componentr3 = () => {
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
                <h2>రైతులకు కేంద్రం శుభవార్త.. నేడే వారి ఖాతాల్లో పీఎం  కిసాన్ నగదు జమ..!</h2>
                
                <img src="https://telugu-cdn.b-cdn.net/media/3bgf3hw0/new-project.jpg" className="logo" alt="PM Kisan" />
                <p>ఈ వార్త అన్ని రైతులకు సంతోషకరమైన సమాచారం అని వేదికగా విమర్శించబడుతుంది. ఇది పీఎం కిసాన్ పథకంలో ఒక భాగం, రైతుల ఖాతాలలో నగదు జమ చేయబడే విధంగా కనిపిస్తుంది. ఇది రైతుల వరకు నిర్వహించబడే సౌకర్యాన్ని ప్రతి రైతుకు అందిస్తుంది. ముఖ్యంగా, ఇది వివిధ పరిసరాల రైతులకు నగదు అవసరాల్ని సులభంగా మరియు త్వరగా పూర్తి చేయడానికి చివరి తరంగా ఉంది.</p>
                <p>నేడే వారు రైతుల ఖాతాలలో పీఎం కిసాన్ నగదు జమ చేయబడింది అని వార్తాశ్రయం కొత్తగా విమర్శిస్తుంది. ఈ పథకం రైతుల పాటికలో నగదు వినియోగం పెంపొందడంలో సహాయపడుతుంది. రైతులు తమ అన్ని పథకాల్లో భాగం పడుతుంటారు, పీఎం కిసాన్ పథకాల్లో కూడా ప్రధానంగా అన్ని పథకాల్లో పీఎం కిసాన్ పథకాల్లో భాగం పడుతుంది</p>
                <p>ఈ నగదు జమ ప్రక్రియ రైతులకు ఎంతో ఉపయోగకరం కాదు, అందుకున్న ప్రయత్నాలు మరియు విస్తరించిన సహాయం ప్రతి రైతుకు అవసరమైన ఆడవాళ్ల నుంచి వచ్చే సహాయక పెంపొందడానికి మద్దతు ఇవ్వడం. ఇది రైతులకు నగదు పొందడానికి సహాయపడుతుంది మరియు ప్రధానంగా వ్యయ ప్రమాణం లేకుండా అవసరాలను పూరించడానికి వినియోగించవచ్చు. ఈ పథకం అందుబాటులో రైతుల జీవితాన్ని ప్రభావితం చేస్తుంది మరియు తక్కువ అవసరాలకు సాధారణంగా సులభంగా పరిహరించడం కావచ్చు.</p>
                <p>తెలుగు రాష్ట్రాల రైతులతో పాటు దేశవ్యాప్తంగా ఉన్న రైతులకు కేంద్రం నుంచి ఊరటనిచ్చే వార్త అందింది. ప్రధానమంత్రి కిసాన్ పథకం ద్వారా కేటాయించిన 15వ విడత నిధులను బుధవారం అనగా నేడు ప్రధాని నరేంద్ర మోదీ విడుదల చేయనున్నారు. జార్ఖండ్‌లోని ఖుంటిలోని బిర్సా కాలేజీలో పీఎం కిసాన్ పథకం కింద నిధులను నేరుగా రైతుల బ్యాంకు ఖాతాల్లో జమ చేస్తామని ప్రధాని నరేంద్ర మోదీ ప్రకటించారు. వ్యవసాయ రంగాన్ని ఆదుకునేందుకు మరియు రైతులను ఆర్థికంగా బలోపేతం చేయడానికి ప్రభుత్వం చేస్తున్న ప్రయత్నంలో ఈ ముఖ్యమైన పరిణామంలో ఈ పథకం ఒకటి.</p>
                <p>మొత్తం రూ.18,000 వేల కోట్లు ప్రధాని మోదీ విడుదల చేయగా, రైతుల ఖాతాల్లో రూ.2,000 జమ కానున్నాయి. ఈ విషయాన్ని కేంద్ర సమాచార ప్రసారాల శాఖ అధికారులు తెలిపారు. దేశ వ్యాప్తంగా 8 కోట్లకు పైగా రైతులకు ఈ పీఎం కిసాన్ పథకం నగదు ద్వారా లబ్ది పొందనున్నారు.</p>
                <p>భారతదేశంలోని చిన్న మరియు సన్నకారు రైతులకు సహాయం చేయడానికి ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి పథకాన్నీ ఫిబ్రవరి 24, 2019న ఉత్తరప్రదేశ్‌లోని గోరఖ్‌పూర్‌లో కేంద్ర ప్రభుత్వం ప్రారంభించింది. ఈ పథకం ప్రకారం రైతులకు ప్రతి 4 నెలలకు 2 వేల రూపాయల చొప్పున సంవత్సరానికి 6 వేల రూపాయల ఆర్థిక సహాయం అందజేస్తారు.</p>
                <p>పీఎం కిసాన్‌ ఫైనాన్సింగ్‌ పథకం రైతులకు ఒక వరంలా భావిస్తోంది. ఇంతలో PM కిసాన్ 13వ విడత ఫిబ్రవరి 27, 2023న రైతులకు అందించారు. దీని తరువాత, 14వ విడత జూలై 27, 2023 న రాజస్థాన్‌లోని సిగర్‌లో ప్రధానమంత్రి నరేంద్ర మోడీ లబ్ధిదారుల బ్యాంకు ఖాతాలలోకి డబ్బును విడుదల చేశారు.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uK6AL7Qn99xnzcxNuW0n952bfBKqKS-19Q&s" className="logo1" alt="PM Kisan Logo" />
                <p>రైతుల ఖాతాలలో పీఎం కిసాన్ నగదు జమ చేయబడే విధంగా, రైతులు ఆధారపడిన పథకాల్లో అవసరమైన మొత్తాన్ని నగదులో పెట్టడంలో సహాయపడుతుంది. ఈ పథకం రైతుల పాటికల్లో ఉన్న వినియోగాలను పెంపొందడం ద్వారా, అవసరాలను త్వరగా పూర్తి చేయడంలో సహాయపడుతుంది. పీఎం కిసాన్ పథకాల్లో ప్రాథమికంగా రైతుల వ్యయం, రైతు రకరమైన పథకాల్లో సహాయపడి పరిశోధన చేయడం, పథకాలలో పంపుటకు సహాయం చేయడం మొదలైన అన్ని సామాజిక పథకాల్లో పీఎం కిసాన్ పథకాల్లో రైతుల భాగస్వామ్యం ప్రతిపాదించుకుంటుంది</p>
                <p>పీఎం కిసాన్ పథకం భారతదేశంలో సిరిల్లు మరియు సామాన్య రైతులకు ఆర్థిక మద్దతు అందించడానికి ఉద్దేశంగా ఉంది. రైతుల సాహాయం చేస్తుంది మరియు ఆర్థిక బాధ్యతలను తీసుకోవడంలో సహాయపడుతుంది.</p>
                <p>పీఎం కిసాన్ పథకంలో భాగస్వామ్యం గల రైతులు, సర్కారు విత్తనాలతో సహా, అదనపు 2 హెక్టార్ల సరఫరా ఉన్నారు.</p>
                <p>పీఎం కిసాన్ వల్ల అర్హత రైతులు ప్రతి సంవత్సరం రూ. 6,000 వరుసల ఆదాయాన్ని మూడు సమాన రాశులతో (ప్రతి రాశి రూ. 2,000) పొందుతారు. ఈ ధనం రైతులు వ్యవసాయ మరియు సంబంధిత చర్యలకు ఖర్చు చేయడం కోసం అదనపులో ఉంటుంది.</p>
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

export default Ad3Componentr3;

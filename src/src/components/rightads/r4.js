import React from 'react';
import './right Ad4.css'; // Assuming you have a CSS file named right Ad4.css
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
const Ad4 = () => {
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
                <h2>రైతులకు గుడ్ న్యూస్.. రేపే రైతుల ఖాతాల్లో రైతు భరోసా నిధుల జమ.. </h2>
                
                <img src="https://telugu-cdn.b-cdn.net/media/dnjf3k2k/farmer.jpg" className="logo" alt="Logo" />
                <p>ఆంధ్రప్రదేశ్‌లో రాజకీయ పరిణామాలు వేగంగా పరివర్తన చెందుతున్నాయి, ముఖ్యమంత్రి జగన్ తన సంక్షేమ కార్యక్రమాలు మరోసారి తనకు అధికారం కట్టబెడతాయని విశ్వాసం వ్యక్తం చేశారు. సంక్షేమ క్యాలెండర్‌ను పక్కాగా అమలు చేస్తున్నారు, వచ్చే ఏడాది ఫిబ్రవరి వరకు ఈ పథకాల అమలుపై సీఎం జగన్ ఇప్పటికే స్పష్టమైన ఆదేశాలు ఇచ్చారు.</p>
                <p>ఆంధ్రప్రదేశ్ ప్రభుత్వం రాష్ట్రంలోని రైతులకు శుభవార్తను అందించింది. రైతులకు పెట్టుబడి సహాయం కింద ఆంధ్రప్రదేశ్ ప్రభుత్వం రైతు భరోసా పథకం ద్వారా వారికి ఆర్ధిక సాహాయాన్ని అందిస్తున్న విషయం మనకి తెలిసిందే. ఈ నవంబర్ నెల 7వ తేదీ అనగా రేపు వైఎస్సార్ రైతు భరోసా రెండో విడత సహాయాన్ని రైతులకు అందించనున్నట్లు ఆంధ్రప్రదేశ్ ప్రభుత్వం తెలిపింది.</p>
                <p>సీఎం వైఎస్‌ జగన్‌ శ్రీసత్యసాయి జిల్లా పుట్టపర్తి పర్యటనకు ముముర్తం ఫిక్స్‌ అయింది. ఈ నెల 7న అంటే రేపే సీఎం వైఎస్‌ జగన్‌ శ్రీసత్యసాయి జిల్లా పుట్టపర్తి పర్యటనకు వెళ్లనున్నారు. ఈ సందర్భంగా వైఎస్సార్‌ రైతు భరోసా - పీఎం కిసాన్‌ నగదును రైతుల ఖాతాల్లో జమ చేయనున్నారు సీఎం వైఎస్‌ జగన్‌. ఇందులో భాగంగానే రేపు ఉదయం 9 గంటలకు తాడేపల్లి నివాసం నుంచి బయలుదేరనున్నారు సీఎం జగన్‌</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZic8YvzB2Xa7PePZd8sZT-TO99coZ7Hd9A&s" className="logo1" alt="Logo1" />
                <h3>రైతు భరోసా నిధుల వివరాలు</h3>
                <p>రేపే రైతుల ఖాతాల్లో రైతు భరోసా నిధులు జమ చేయబడుతున్నాయి. ఈ నిధులు రైతుల ఖాతాల పై నిలబడే విశేష అంశాలను కవ్రించవచ్చు. రైతులు ఈ నిధులు అప్లికేషన్ ద్వారా చేద్దామా స్వీకరించవచ్చు. అధిక వివరాలు మీ గ్రామ సచివాలయం లో అడగండి</p>
                <p>ఈ రైతు భరోసా నిధులు రైతుల అకౌంట్ల కోసం ఆన్‌లైన్ లో జమ చేయబడుతున్నాయి. ఇవి కింద వరిసేపున వివిధ పరిష్కారాల ద్వారా అప్లికేషన్ ద్వారా స్వీకరించబడుతున్నాయి.</p>
                <p>ఈ నిధుల ద్వారా రైతులు పెద్ద నష్టాన్ని తగ్గించవచ్చు, పచ్చ ఫస్లు ఎలా పోతాయో కనుగొన్నట్లు అనేక లాభాలు రైతులకు అందిస్తాయి.</p>
                <p>రైతులు ఈ నిధులను ఆన్‌లైన్ అప్లికేషన్ ద్వారా అప్లికేషన్ చేయవచ్చు. అప్లికేషన్ వ్యవస్థ మీ గ్రామ సచివాలయం లో అడగండి లేదా మీ పంటలు సంబంధించిన అన్య అధికారులకు సంప్రదించండి.</p>
                <p>రైతు భరోసా నిధులు అనుకూలంగా పరిశీలించడానికి పంటలు నిలువచేసి, ఉద్యోగ ధరల కోసం అవాంతరం కావలసిన నిబంధనలు ఉండవచ్చు.రైతు భరోసా నిధులు భూమి విస్తృతి, పంటల రకం, వర్తన ధరలను ఆధారపడి ఉంటాయి. ఈ మొత్తాలు వారి రకంలో ఎక్కువ ప్రాముఖ్యతను అందిస్తాయి.</p>
                <p>రైతులు ఈ నిధులను ఆన్‌లైన్ వేదికలు ద్వారా దరఖాస్తు చేసుకోవచ్చు. వేదికల ప్రక్రియ వ్యవస్థ వివిధ సర్కారీ కార్యాలయాలకు లేదా వారి గదిలో ఉండవచ్చు.</p>
                <p>ఈ నిధులను రైతులు బీజాలు, వర్షకు చుట్టుకొనే ఉపకరణాలు, పెస్టిసైడ్స్ మరియు ఇతర పరిష్కారాలకు ఖర్చు చేసుకోవచ్చు.</p>
                <p>రైతు భరోసా నిధుల ప్రాధాన్యత ప్రాధాన్యతను ప్రాధాన్యతపడించడం వల్ల ప్రభుత్వ ప్రయాసాలు మరియు రైతు సంక్షేమాన్ని ఖచ్చితంగా నిమిత్తంగా మార్చడం చేస్తుంది.</p>
                <p>రైతులు నిధులను పెద్ద స్థితి నష్టాన్ని తగ్గించడానికి బీజాలు, సస్యసంరక్షణ వసతులు, నీటి సరఫరా, మెరుగుపరచడానికి వారి పేర్కొన్న కొనుగోలులుకు వినియోగించవచ్చు.</p>
                <p>రైతు భరోసా నిధులు ప్రభుత్వ ప్రయాసాలు భాగంగా రైతుల సహాయాన్ని పెంచడానికి చేస్తాయి మరియు రైతు రాణింగానికి వారికి అధిక నేతృత్వాన్ని అందిస్తాయి.</p>
                <p>ఈ ముఖ్యమైన విషయాలు మీకు ఉపయోగకరంగా ఉంటాయి. మరింత స్పష్టమైన సమాచారం అవసరం ఉంటే, మీ గ్రామ సచివాలయంలో అడగండి లేదా మీ ప్రశ్నలను చెప్పండి!</p>
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

export default Ad4;

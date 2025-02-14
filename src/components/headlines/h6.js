import React from 'react';
import './h2.css'; // Assuming this CSS file contains styles for your component
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
const AdContent = () => {
    return (
        <div className='layout'>
            <img src={NavImage} className="nav" alt="navigation" />
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
            <h2>రైతులకు భారతదేశంలో వ్యవసాయ యంత్రాల పై అందుబాటులో ఉన్న సబ్సిడీలు.. ఎంతవరకు అంటే?</h2>
            
            <img src="https://telugu-cdn.b-cdn.net/media/ebeak55p/subsidy.jpg" className="logo" alt="logo" />
            <p>రైతుల సౌలభ్యం మరియు వారి పురోగతి కోసం, కేంద్ర నుండి రాష్ట్ర ప్రభుత్వాలు వారి వారి స్థాయిలలో వ్యవసాయ యంత్రాల కొనుగోలుపై సబ్సిడీని అందిస్తాయి. వ్యవసాయ యంత్రాలు రైతులకు పనిభారాన్ని తగ్గించడంలో మరియు ఉత్పాదకతను పెంచడంలో ముఖ్యమైన పాత్ర పోషిస్తాయి. ఈ యంత్రాల ప్రాముఖ్యతను పరిగణనలోకి తీసుకుని, భారతదేశంలోని అనేక రాష్ట్రాల్లో, వ్యవసాయ యంత్రాల కొనుగోలుపై రైతులకు సబ్సిడీ అందిస్తుంది. వివిధ రాష్ట్రాల్లో వ్యవసాయ యంత్రాలపై ఇస్తున్న సబ్సిడీ గురించి ఇక్కడ సమాచారం ఇస్తున్నాం. దీని వల్ల రైతులు ఆధునిక పద్ధతులను అవలంబించి తమ పంటల సాగును పెంచుకునే సాధికారతను పొందవచ్చు. </p>
            <h3>వ్యవసాయ యంత్రాలపై రాష్ట్రాల వారీగా సబ్సిడీ క్రింది విధంగా ఉంది-
                తెలంగాణ:</h3>
            <p>తెలంగాణకు చెందిన యంత్ర లక్ష్మి యోజన పథకం ద్వారా ట్రాక్టర్ కొనుగోలుపై 50% సబ్సిడీని అందిస్తుంది . వ్యవసాయ యాంత్రీకరణ పథకం కింద , ఇది ఇతర వ్యవసాయ పరికరాలను కొనుగోలు చేయడానికి కూడా సహాయం అందిస్తుంది. అదనంగా , SC/ST రైతులు 100% సబ్సిడీని పొందవచ్చు. అర్హత కలిగిన రైతులు SBI నుండి బీమా మరియు కొలేటరల్ సెక్యూరిటీతో రుణం కోసం దరఖాస్తు చేసుకోవచ్చు .</p>
            <h2>ఆంధ్రప్రదేశ్:</h2>
            <p>రైతు రధం పథకం కింద ఆంధ్రప్రదేశ్‌లో ట్రాక్టర్లను పంపిణీ చేస్తారు . అర్హత ప్రమాణాల కోసం, రైతు కనీసం ఒక ఎకరం భూమిని కలిగి ఉండాలి. దీని కోసం, ICICI బ్యాంక్ 5 సంవత్సరాల రీపేమెంట్ వ్యవధితో రుణాలను అందిస్తుంది .</p>
            <p>భారతదేశంలో రైతులు ఆధునిక వ్యవసాయ యంత్రాలను వినియోగించడాన్ని ప్రోత్సహించడానికి ప్రభుత్వం వివిధ రకాల సబ్సిడీలను అందిస్తోంది. ఈ సబ్సిడీలు రైతులకు వ్యవసాయ పనులను సులభతరం చేయడంలో మరియు ఫలితంగా ఉత్పాదకతను పెంచడంలో సహాయపడతాయి.

ప్రధాన సబ్సిడీలు:</p>

    <h3>పీఎం కిసాన్ సమ్మాన్ నిధి యోజన (PMKSNY):</h3><p> ఈ పథకం ద్వారా రైతులకు కొన్ని లక్షల రూపాయలు ఎరువులు, విత్తనాలు, వ్యవసాయ యంత్రాలు కొనుగోలుకు అందించబడతాయి.</p>

    <h3>సమగ్ర ఖండీకరణ వ్యవసాయ యంత్రాలు పథకం (SMAM):</h3> <p>ఈ పథకం కింద వ్యవసాయ యంత్రాలపై 40-50% సబ్సిడీలు లభిస్తాయి. కొందరు రైతులకు (మహిళలు, ఎస్సీ/ఎస్టీ) ఈ సబ్సిడీలు 50% వరకు ఉంటాయి.</p>

    <h3>రాష్ట్ర ప్రభుత్వాల పథకాలు:</h3><p> ప్రతీ రాష్ట్రం కూడా వారి స్థానిక అవసరాలకు అనుగుణంగా ప్రత్యేక సబ్సిడీ పథకాలు అమలు చేస్తుంది. ఉదాహరణకు, ఆంధ్రప్రదేశ్‌లో 'రైతు భరోసా' పథకం కింద యంత్రాల కొనుగోలుకు సబ్సిడీలు అందిస్తారు.</p>
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

export default AdContent;

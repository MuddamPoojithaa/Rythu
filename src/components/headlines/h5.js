import React from 'react';
import './h2.css'; // Assuming this CSS file contains styles for your component
import NavImage from './Untitled-3.png';
import img from "./IMG-20240621-WA0017.jpg";
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
const AdComponent1 = () => {
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
                <h2>మునగ పొడి చేస్తున్నం </h2>
               
                <img src={img} className="logo" alt="logo" />
                <p>సహజంగా పంట మార్పిడి చేసే రైతులను మనం చూస్తుంటాం. అలాగే డెయిరీ ఫాం, చేపల పెంపకం, గొర్రెలు పెంచేవారిని మనం పరిశీలిస్తుంటాం. కానీ వాటన్నింటికి భిన్నంగా మునగ సాగు చేస్తూ లాభాలు గడిస్తున్నారు కలిదిండి సత్య నారాయణ గారు. మునగ సాగులో వింత ఏముంది అనుకుంటున్నారా.. మునగ కాయలతో పాటు వాటి ఆకులను కూడా విక్రయిస్తూ ఔరా అనిపిస్తున్నారు. ఎలా అనుకుంటున్నారా.. అయితే ఇది చదివేద్దాం..</p>
                <p>నమస్తే అండి. మాది మేడ్చల్-మల్కాజగిరి జిల్లాలోని మూడు చింతలపల్లి మండలంలోని కొంతూరు గ్రామం. మేం ఇక్కడ రెండేళ్లుగా మునగ సాగు చేపడుతున్నాను.   దీంతో పాటు బంతి, బోడ కాకర, చిక్కుడు తో ఇతర పంటలను సాగు చేస్తున్నాను.</p>
                <h2>ఆరు ఎకరాల్లో.. మూడు చోట్ల…</h2>
                <p>నేను మొత్తం ఆరు ఎకరాల్లో మునగ సాగు చేస్తున్నాను. రెండు ఎకరాల బిట్లు చొప్పున మూడు చోట్ల మునగ విత్తనాలు నాటాను. అందులో ఓ రెండు ఎకరాలు ఇటీవలే సాగు మొదలు పెట్టాం.  అక్టోబరులో వీటిని నాటడం వల్ల ఏప్రిల్, మేలో పూత వచ్చి దిగుబడికి వచ్చింది. జూన్, జులై లో సాగు చేసినట్లయితే వాతావరణ పరిస్థితుల నేపథ్యంలో నవంబరు, డిసెంబరులో కోతకు వచ్చేది. సాధారణంగా డిసెంబరు, జనవరిలో మునక్కాయలకు మంచి డిమాండ్ ఉంటుంది. ఎందుకంటే కాపు తక్కువగా ఉంటుంది. ఎండాకాలం వచ్చేసరికి అన్ని చోట్ల చెట్లు కాయలు కాస్తాయి. మార్కెట్ నిర్వహించడానికి పుట్టించడానికి సమర్ధంగా అవుతుంది. ఈ పద్దతి అనేకార్థ లో వచ్చేది. మునక్కాయలకు ఈ పద్దతి వాడాలి. అందులో ఏ దోషంలేముందు ముంగురుతుంది.  మార్కెట్ రీలో నుంచి డిసెంబరులో అక్రమ వినియోగం కూడా లభించడానికి సమర్థం ఉంది. మునక్కాయలను సాగించి మరియు అన్ని విధాలు కాస్తాయి కాబట్టి విశేషగా సమర్ధంగా అవుతుంది.</p>
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

export default AdComponent1;

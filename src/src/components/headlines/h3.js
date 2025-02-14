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
const Headline3 = () => {
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
        <h2>రైతులకు గుడ్ న్యూస్: రైతు వేదికల ద్వారా అందుబాటులోకి ఎరువులు..</h2>
       
        <img src="https://telugu-cdn.b-cdn.net/media/ijvpw4d4/new-project-3.jpg" className="logo" alt="Logo" />
        <p>రాష్ట్రంలో రైతులను ఆదుకునేందుకు ప్రభుత్వం అనేక కార్యక్రమాలను చేపడుతుంది. రైతులకు కొత్త పథకాలను అందుబాటులోకి తీసుకువచ్చి వారికి ఆర్ధికంగా సహాయపడుతుంది. వీటితోపాటు రైతులకు ఎరువులపై మరియు విత్తనాలపై సబ్సిడీలను అందించి రైతులను వ్యవసాయం చేసేందుకు ప్రోత్సహిస్తుంది. ఇప్పుడు రైతుల సంక్షేమం కొరకు ప్రభుత్వం కొత్త చర్యలను చేపట్టనుంది.</p>
        <p>ప్రభుత్వం ఇప్పుడు రాష్ట్రంలో ఉన్న రైతు వేదికల ద్వారా రైతులకు ఎరువులను మరియు విత్తనాలను పంపిణి చేయాలని యోచిస్తుంది. ఈవిధంగా చేయడం ద్వారా రవాణా భారం కూడా తగ్గుతుందని ప్రభుత్వం భావిస్తుంది. ప్రభుత్వం రైతులంతా ఒకచోట చేరి వ్యవసాయం మరిత్యు సాగు పంటలపై చర్చించుకోవడానికి ఈ రైతు వేదికలను రాష్ట్రవ్యాప్తంగా నిర్మించింది. రైతులకు ఈ రైతు వేదికల ద్వారా వ్యవసాయంపై అవగాహన కార్యక్రమాలు నిర్వహిస్తుంది.</p>
        <p>ప్రస్తుతం రాష్ట్రంలో ఈ విత్తనాలు మరియు ఎరువుల పంపిణి సహ కార సంఘాలు, సంస్థలు, ప్రైవేటు డీలర్ల ద్వారా జాతిరుగుతున్నాయి అని, ఇకనుండి నేరుగా యంత్రాంగాన్ని రంగం దించాలని వ్యవసాయశాఖ ప్రయత్నిస్తుంది. దీని కొరకు కరీంనగర్ జిల్లాలో ఉన్న 76 రైతు వేదికల ద్వారా విత్తనాలు, ఎరువులు పామోలిని చేయాలని అధికారులు ప్రణాళికలు రూపొందిస్తున్నారు.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TPZhMibGitON1t1tWfD2yk9TP-VEIYQEpg&s" className="logo1" alt="Logo1" />
        <p>తెలంగాణ ప్రభుత్వం రైతులకు మరింత సహాయం అందించడానికి రైతు వేదికల ద్వారా ఎరువులను అందుబాటులోకి తీసుకువచ్చింది. ఈ కార్యక్రమం రైతులకు చాలా ప్రయోజనాలను కలిగిస్తుంది. ఇందులో ప్రధానంగా కింది అంశాలు ఉన్నాయి:</p>
        <h3>1.రైతు వేదికల స్థాపన:</h3>
        <h4>ముఖ్య ఉద్దేశం: </h4><p>రైతులకు అన్ని రకాల సలహాలు, మార్గదర్శకాలు ఒకే చోట అందించడమే.</p>
        <h4>సేవలు: </h4><p>సాంకేతికత, పెట్టుబడులు, పంటల సమర్థత తదితర విషయాలపై రైతులకు సమాచారం అందించడం.</p>
        <h3>2.ఎరువుల అందుబాటు:</h3>
        <h4>అనుకూలమైన ధరలు:</h4><p>రైతులకు ప్రభుత్వం ద్వారా సబ్సిడీ ధరలకు ఎరువులు అందించడం.</p>
        <h4>తక్షణ అందుబాటు:</h4><p>రైతులు తక్షణమే తమ అవసరాలకు తగిన ఎరువులను పొందగలుగుతారు.</p>
        <h3>3.వైద్య సలహాలు:</h3>
        <h4>ఆరోగ్య సూచనలు:</h4><p>పంటల ఆరోగ్యానికి సంబంధించిన సూచనలు మరియు నివారణలు అందించడం.</p>
        <h4>పరిశీలనలు: </h4><p> పంటలకు సంబంధించిన ప్రతి సమస్యకు పరిష్కార మార్గాలు సూచించడం.</p>
        
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

export default Headline3;

import React from 'react';
import './h1.css';
import NavImage from './Untitled-3.png'; // Update the path as needed
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

const AdComponent = () => {
  return (
    <div className='layout'>
      <img src={NavImage} className="nav" alt="Nav" />
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
        <h2>రైతులకు పంట దిగుబడిని పెంచడం కోసం 'కిసాన్ జిపిటీ'</h2>
       
        <img src="https://telugu-cdn.b-cdn.net/media/1nbhtzyj/ai.jpg" className="logo" alt="AI Logo" />
        <p>రైతులకు అందుబాటులో 'కిసాన్ జిపిటీ'. ఈ కిసాన్ జిపిటీ అనేది చాట్‌జిపిటి మరియు విస్పర్ ఆధారంగా రూపొందించిన ఎఐ -ఆధారిత చాట్‌బాట్. ఇది ప్రత్యేకంగా పంట ఉత్పత్తిని పెంచడంలో రైతులకు సహాయం చేయడానికి రూపొందించబడింది. రైతులు ఈ చాట్‌బాట్ ని ఉపయోగించి పంట నుండి అధిక దిగుబడులను పొందవచ్చు. </p>
        <p>కృత్రిమ మేధస్సు ద్వారా రూపొందించిన సాధనాలు వేగంగా జనాదరణ పొందుతున్నాయి. సంభాషణాత్మకంగా సమాధానాలను అందించే చాట్ జిపిటీని ప్రవేశపెట్టినప్పటి నుండి, అనేక ఎఐ చాట్‌బాట్‌లు సాంకేతిక రంగంలో తమ అరంగేట్రం చేశాయి. వీటిలో ఒకటి గీతాజిపిటీ, ఇది వినియోగదారులకు భగవద్గీత నుండి నేరుగా సమాధానాలను అందించగలదని పేర్కొంది. అదేవిధంగా, కిసాన్ జిపిటీ అనేది మరొక చాట్‌బాట్, ఇది పంట ఉత్పత్తిని పెంచడంలో రైతులకు సహాయం చేయడానికి రూపొందించబడింది.</p>
        <p>కిసాన్ జిపిటీ అంటే ఏమిటి?
          కిసాన్ జిపిటీ అనేది "భారతదేశంలో వ్యవసాయ డొమైన్" కోసం చాట్‌జిపిటి మరియు విస్పర్ ఆధారంగా రూపొందించిన ఎఐ-ఆధారిత చాట్‌బాట్. ఇది పంటల సాగు, చీడపీడల నియంత్రణ, నీటిపారుదల మరియు వ్యవసాయానికి సంబందించిన ఇతర సమస్యలతో సహా అంశాలపై తక్షణమే పరిష్కారం అందిస్తుంది మరియు ఈ సంవత్సరం మార్చి 15న ప్రతీక్ దేశాయ్ అందుబాటులోకి తెచ్చారు.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBG2peAhR79iZngdSBTZuDh9Lcpb22rjZJkg&s" className="logo" alt="Logo" />
        <h2>కిసాన్ జిపిటీ ముఖ్యాంశాలు:</h2>
        <p>ఈ సాంకేతికత రైతుల పంటలపై వివిధ రకాల డేటాను సేకరిస్తుంది. దీంట్లో నేల పరిష్కారం, వాతావరణ పరిస్థితులు, మరియు నీటిపారుదల వంటి అంశాలు ఉంటాయి.</p>
        <p>సేకరించిన డేటాను పరిశీలించి, విశ్లేషణ చేసి, రైతులకు వ్యక్తిగత సలహాలను అందిస్తుంది. ఈ సలహాలు పంటలు ఎక్కడ, ఎప్పుడు, ఎలా వేయాలో, ఎలాంటి ఎరువులు వాడాలో తెలుపుతాయి.</p>
        <p>పంటలను సమర్థవంతంగా నిర్వహించడానికి కిసాన్ జిపిటీ సలహాలు ఇస్తుంది. దీని ద్వారా పంటల రక్షణ, తక్కువ ఖర్చుతో ఎక్కువ దిగుబడి సాధించడం వంటి ప్రయోజనాలు ఉంటాయి.</p>
        <p>రోగాలు, తుపాన్లు, మరియు ఇతర హానికారక పరిస్థితులపై ముందస్తుగా సమాచారం ఇచ్చి, పంటలను రక్షించడానికి రైతులకు సహాయం చేస్తుంది.</p>
        <p>రైతులు తమ పంటలను మార్కెట్‌లో ఎలా విక్రయించాలో, ఏ ధరకు విక్రయించాలో కూడా సలహాలు అందిస్తుంది.</p>
        <h2>ప్రయోజనాలు:</h2>
        <p>కిసాన్ జిపిటీ సలహాలతో పంటల దిగుబడి మెరుగుపడుతుంది.</p>
        <p>సరైన పద్ధతుల్లో వ్యవసాయం చేయడం ద్వారా, ఎరువులు మరియు నీరు వంటి వనరుల వినియోగం తగ్గుతుంది.</p>
        <p>రైతులు తమ పంటలను సరైన మార్కెట్‌లో సరైన ధరకు విక్రయించడం ద్వారా మంచి లాభాలను పొందగలరు.</p>
        <p>ఈ సాంకేతికత సుస్థిర వ్యవసాయ విధానాలను ప్రోత్సహించడం ద్వారా పర్యావరణాన్ని రక్షిస్తుంది.</p>
        <h2>ఎలా ఉపయోగించాలి:</h2>
        <h4>1.మొబైల్ యాప్:</h4>
        <p>కిసాన్ జిపిటీ యాప్‌ను మొబైల్ ఫోన్లలో డౌన్లోడ్ చేసుకోవచ్చు.</p>
        <h4>2.ఫోన్ సేవలు: </h4>
        <p>ఫోన్ ద్వారా వ్యవసాయ సలహాలు పొందవచ్చు.</p>
        <h4>3.వెబ్ పోర్టల్: </h4>
        <p>వెబ్ పోర్టల్ ద్వారా రైతులు సమాచారాన్ని పొందవచ్చు.</p>

        <p>కిసాన్ జిపిటీ' ద్వారా, రైతులు ఆధునిక సాంకేతికతను ఉపయోగించి వ్యవసాయంలో అద్భుతమైన ఫలితాలు సాధించగలరు. ఇది రైతుల ఆర్థిక స్థితిని మెరుగుపరచడంతో పాటు, దేశంలోని వ్యవసాయ రంగాన్ని పురోగతి దిశగా నడిపిస్తుంది.</p>
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

export default AdComponent;

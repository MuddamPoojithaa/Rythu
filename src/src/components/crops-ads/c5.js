import React from 'react';
import './c4.css'; // Ensure your CSS file path is correct
import NavImage from './Untitled-3.png';
import NewsAds from '../Leftads/adsection';
import RightNewsAds from '../rightadscomonent';
import NewsHeadlines from '../headlines';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from './tomato.jpg';
import img4 from './onion.jpg';
import img5 from './Maize.jpg';
import img6 from './carrot.jpg';
import img7 from './Rice.jpg';
import img8 from './potato.jpg';
import img9 from './pea.jpg';
import img10 from './Brinjal.jpg';
import img11 from './Ladyfinger.jpg';
const Adscrop5 = () => {
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
                <div className='middle-content'>
                <h2>కంది సాగు విధానం - Pigeon Pea Cultivation in Telugu</h2>
                
                
    <img src={img9}   alt="కంది సాగు విధానం " class="logo"/>
    <h3>నేల తయారి</h3>
    <p>కంది పంట అన్ని రకాలైన నేలలకు అనువైన పంట. ఈ పంటను బీడు భూములలో కూడా దిగుబడి తియ్యవచ్చును. విత్తనానికి ముందు నేల వదులుగా అయ్యేలాగా 2-3 సార్లు దమ్ము చేసుకోవాలి. చివరి దుక్కికి ముందు ఎకరానికి 2-4 టన్నుల పశువుల ఎరువు, 8 కిలోల నత్రజని (యూరియ), 20 కిలోల భాస్వరం వేసుకొని చివరి దమ్ము చేసి విత్తనానికి సిద్ధం చేసుకోవాలి. </p>
    <h3>విత్తుకునే విధానం </h3>
    <p>ఎకరానికి 2 కిలోల విత్తనం అవసరం పడుతుంది. విత్తేముందు విత్తన శుద్ధి కోసం ఒక్క 1 కిలో విత్తనానికి  5 ml ఇమిడాక్లోప్రిడ్ ఎఫ్.ఎస్ లేదా 3 గ్రా” తైరం లేదా 3 గ్రా” కార్బండిజంతో విత్తన శుద్ధి చేసుకొనవలెను. పాటించవలసిన దూరాలు మొక్కల మధ్య దూరం 20-25 సెంటి మీటర్లు, సాలుల మధ్య దూరం 90-120 సెంటి మీటర్ల దూరాలు పాటిస్తూ విత్తనాలను విత్తుకోవాలి. </p>
    <p>మొక్కలు ఎక్కువ ఎత్తుగా పెరిగితే మొక్క యొక్క చివర్లను 30 సెంటి మీటర్లు ( 1  అడుగు) పొడవు వరకు చివర్లను కత్తిరించివేయ్యాలి. </p>
    <h3>కలుపు యాజమాన్యం </h3>
    <p>ఈ పంటకు కలుపు బెడద ఎక్కువగా ఉంటుంది. కావున విత్తనం వేసిన 2 రోజుల లోపు పెండిమిదలిన్ లీటర్ నీటికి 5 ml కలుపుకొని నేల మొత్తం తడిచేవిధంగా పిచికారి చేసుకోవలెను. మొక్కలు ఎదుగుతున్న సమయంలో కలుపు నివారణ చర్యగా సాలుల మధ్య గుంటుక లేదా గోర్తతో మొక్కలు నేలను కప్పివేసే వరకు అంతరకృషి చేసుకోవలెను. అయిన కూడా మొక్కల మధ్య కలుపు ఎక్కువగా ఉంటె 1 లీటర్ నీటికి 2 ml క్వేజలోపాస్ కలుపుకొని పిచికారి చెయ్యవలెను. </p>
    <h3>నీటి యాజమాన్యం</h3>
    <p>కంది పంటను మనం ఎక్కువగా వర్షాధార పంటగా వేస్తాం కావున పూత మరియు కాత  సమయాల్లో నీటిని అందిస్తే సరిపోతుంది. కంది పంట నీటి లభ్యత తక్కువగా ఉన్న ప్రాంతాలలో కూడా పండుతుంది.</p>
    <h3>తెగుళ్ళు మరియు చిడ పీడలు</h3>   
    <h3>ఆకు చుట్టూ పురుగు</h3>
   <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2022/03/32d70dd7-3a28-4d84-b4f8-ddc01532e65e.jpg?fit=240%2C300&ssl=1" class="logo1"/>
<p>ఈ ఆకుచుట్టు పురుగు ఆకులను చుట్టలుగా చుట్టి ఆకుయోక్క పత్రహరితాన్ని పిల్చివేస్తాయి. దీనివల్ల మొక్క ఎదుగుదలపై ప్రభావం పడుతుంది. దీని నివారణ చర్యగా 1 లీటర్ నీటికి 1.6 – 2 ml మొనోక్రోటోపాస్  కలుపుకొని పిచికారి చేసుకోవలెను.</p>
<p>ఈ చెనగాపచ్చ పురుగు పూత మరియు కాత సమయాల్లో ఆశిస్తుంది. ఈ పురుగు కాయలకు రంధ్రాలు చేసి లోపల ఉన్న గింజలను తినేస్తుంది. సరైన సమయంలో నివారణ చర్యలు చేపట్టకపోతే దీనివల్ల పంట దిగుబడి చాల వరకు తగ్గుతుంది. మొదట్లో దీని ఉదృతి తక్కువగా ఉన్నపుడు 1 లీటర్ నీటికి 5%  వేప కాషాయం లేదా 5 ml వేప నునే 5 ml కలుపుకొని పిచికారి చేసుకోవలెను. ఈ పురుగు ఉదృతి ఎక్కువగా ఉంటె పూత సమయంలో 2.5 ml క్లోరిపైరిఫాస్. కాయ దశలో 1 లీటర్ నీటికి 2 ml క్వినలోఫాస్ లేదా 1.5 గ్రాములు కలుపుకొని పిచికారి చేసుకోవలెను. </p>
<h3>ఎండు తెగులు ( వెర్రి తెగులు)</h3>
<img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2022/03/1-s2.0-S026121941100130X-gr6.jpg?fit=300%2C198&ssl=1" class="logo"/>
<p>ఈ తెగులు వలన ఎదుగుతున్న మొక్కలు ఎండిపోవడం జరుగుతుంది. ఇలా ఎండి పోయిన మొక్కలను పంటచేను నుండి తొలగించి వెయ్యాలి. దీనివల్ల వేరే మొక్కలకు తెగులు వ్యాప్తి చెందకుండా అరికట్టవచ్చు. దీని నివారణ చర్యగా 1 లీటర్ నీటికి కాపర్ క్లోరైడ్ లేదా మంకొజేబ్ 3 గ్రాములు కలుపుకొని మొక్కల వేర్లు తడిచేవిధంగా మొక్కల చుట్టూ పోయాలి.   </p>
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

export default Adscrop5;
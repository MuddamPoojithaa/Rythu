import React from 'react';
import './lc3.css'; // Ensure your CSS file path is correct
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
const LeftCrops3 = () => {

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
           <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/12/Featured-photo-size1.jpg?resize=900%2C400&ssl=1"  alt="క్యాలీఫ్లవర్ సాగు విధానం"  />
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
                <h2>బెండ సాగు విధానం - ladies finger cultivation in telugu</h2>
    <img src={img11}class="logo1" alt="బెండ సాగు విధానం " />
     <p>బెండపంట అన్ని కాలాలలో అనువైనది. వేడి వాతావరణంలో అధిక దిగుబడి రావడం జరుగుతుంది. కాబట్టి మన తెలుగు రైతులు వేసవి పంటగా వెయ్యడానికి మొగ్గుచుపుతున్నారు. వేరే కాలలో పంట దిగుబడి ఎక్కువ ఉండకపోవడం వల్ల పంట విస్తీర్ణం తక్కువగా ఉండటం వల్ల మార్కెట్ ధర ఎక్కువగా ఉండే అవకాశాలు ఎక్కువ. ఈ పంటకు నల్ల రేగడి నేలలు, ఎర్రనేలలు, నీరు ఇంక్కే సారవంతమైన నేలలు అనువైనవి.</p>
     <h2>నేల తయారి</h2>
     <p>బెండ పంటకు ఎంచుకున్న నేలని 2-3 సార్లు దున్నుకొని సిద్దంగా ఉంచుకోవాలి చివరి దుక్కికి ముందు 8-10 టన్నుల పశువుల ఎరువును వేసుకొని చివరి దుక్కిని దున్నుకోవాలి. </p>
      <p>ఈ పంటను రెండు విధాలుగా విత్తుకోవచ్చు మొదటిది సాలుల పద్ధతి, రెండవది బోదెల పద్ధతి ఈ విధానం డ్రిప్ ద్వారా సేద్యం చేయుటకు అనువుగా ఉంటుంది. ఈ విధానంలో మల్చింగ్ కవర్లను ఉపయోగించడం వల్ల కలుపును నివారించడంతోపాటు నీటి వృధను అరికట్టవచ్చును</p>
      <h2>విత్తుకునే విధానం  </h2>
    <p>సూటిరకం (దేశీయ) విత్తనాలు ఒక్క ఎకరానికి 3-4 కిలోల విత్తనాలు అవసరం పడుతాయి. హైబ్రీడ్ విత్తనాలు అయితే 2-2.5 విత్తనాలు అవసరం పడుతాయి. హైబ్రీడ్ విత్తనాలకు విత్తనశుద్ధి చేసి వస్తాయి కావున వీటికి విత్తనశుద్ధి అవసరము ఉండదు. సూటిరకం విత్తనాలకు విత్తనశుద్ధి చెయ్యవలసి వస్తే ఒక్క కిలో విత్తనానికి 5 మీ.లీ ఇమిడక్లోప్రిడ్ లేదా 4 గ్రాముల ట్రైకోడెర్మవిరిడి లేదా 3 గ్రా” తైరం కలుపుకొని విత్తనానికి పట్టించాలి. </p>
    <p>విత్తనానికి ముందు చివరి దుక్కిలో ఎకరానికి 8-10 టన్నుల పశువుల ఎరువు +  150 కిలోల సింగిల్ సూపర్ + 40 కి” మ్యూరియేట్ అఫ్ పోటాష్ వేసుకొని చివరి దమ్ము చేసుకోవాలి. పంట 30 మరియు 40 రోజులు ఉన్నప్పుడు ఎకరానికి 30 కిలోల యూరియాను రెండు దఫాలుగా అందించాలి. </p>
    <p>పంట పూత దశలో ఉన్నపుడు పూత బలంగా ఉండటానికి ఒక్క లీటర్ నీటికి 5గ్రా” సూక్ష్మదాతు + 5 గ్రా” 19:19:19 రెండుసార్లు పిచికారి చేసుకోవాలి. </p>
<p>విత్తనాన్ని విత్తుకునేప్పుడు సాలుల మధ్య దూరం 45 cm విత్తనాల మధ్య దూరం 15 – 20 cm ఉండేలా చూసుకోని విత్తుకోవాలి. </p>
<p>డ్రిప్ బోదెల పద్ధతి ఉపయోగించి విత్తుకునేప్పుడు డ్రిప్ పైపు ఇరువైపుల విత్తనాలను విత్తుకొని మల్చింగ్ కవర్ ని ఏర్పాటు చేసుకోవాలి. దీనివల్ల కలుపు నివారణతో పాటు నీటిపదను అధిక సమయం ఉండటం వల్ల నీటి వినియోగం తక్కువగా ఉంటుంది. </p>
<h3>కలుపు నివారణ</h3>
<p>విత్తనం నాటిన 24 గంటల సమయం లోపు  3 మీ.లీ పెండిమిదలిన్ ఒక్క లీటర్ నీటిలో కలుపుకొని నేల మొత్తం తడిచే విధంగా పిచ్చికారి చేసుకోవాలి. పంట వయస్సు 30-35 రోజుల వరకు ఎటువంటి కలుపు లేకుండా అంతరకృషి ద్వారా కలుపును తొలగించాలి.</p>
<h3>నీటి యాజమాన్యం </h3>
<p>వర్షాకాలములో ఈ పంటను వేసినప్పుడు నీటి అవసరం అంతగా ఉండకపోవచుకు కానీ వేసవి పంటగా వేసినప్పుడు నేల స్వభావాన్ని బట్టి నీటిపదను ఆరకుండా నీటిని అందించాలి. వర్షాకాలంలో పంట చేనులో నీటిని నిల్వ ఉండకుండా చూసుకోవాలి. </p>
<h3>మువ్వ మరియు కాయ తొలుచు పురుగు</h3>
<p>బెండ సాగులో ఈ మువ్వ మరియు కాయ తొలుచు పురుగు వల్ల అధిక నష్టం జరుగుతుంది. ఈ తెగులు పంట వయస్సు 30వ రోజు నుండి పంట చివరి వరకు ఉంటుంది. ఈ పురుగు ఆశించిన మొక్కలను మరియు కాయలను పంట చేను నుండి వేరుచేసి నిప్పు పెట్టాలి. </p>
<p>నివారణ చర్యలో భాగంగా మొదటగా వేప ఉత్పత్తులను ఉపయోగించి ఈ తెగులును అదుపులోకి తీసుకురావడానికి ప్రయత్నించాలి. అయిన కూడా పురుగు ఉధృతి ఎక్కువగా ఉంటె డైమీతోయేట్ 2 మీ.లీ లేదా ఎసిఫేట్ 1 గ్రాము ఒక్క లీటర్ నీటిలో కలుపుకొని పిచికారి చేసుకోవాలి.</p>
<img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/08/pmdg_91094.img_.jpg?fit=300%2C279&ssl=1" class="logo1"/>
<p>పంట ఎగుమతి సమయాల్లో సంచులలో వేసుకొని వెళ్ళడం వల్ల కాయలు దెబ్బతిని నల్లగా మారడం వల్ల పంటకు మంచి ధర పడకపోవచ్చు. కావున రైతు సోదరులు ప్లాస్టిక్ ట్రేలు లేదా బుట్టలలో తీసుకువెళ్ళడం మంచిది.</p>   
<p>పంట ఎగుమతి సమయాల్లో సంచులలో వేసుకొని వెళ్ళడం వల్ల కాయలు దెబ్బతిని నల్లగా మారడం వల్ల పంటకు మంచి ధర పడకపోవచ్చు. కావున రైతు సోదరులు ప్లాస్టిక్ ట్రేలు లేదా బుట్టలలో తీసుకువెళ్ళడం మంచిది.</p>
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
            <img src={img6}  alt="క్యారెట్ సాగు విధానం"  />
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
            <img src={img4} alt="ఉల్లి సాగు విధానం"  />
            <p>ఉల్లి సాగు విధానం<br></br>
                (Onion Cultivation in Telugu)</p>
            </Link>
           </div>
           <div className='crop-item'>
            <Link to="/crops-ads/c5" target="_blank" rel="noopener noreferrer">
            <img src={img9}  alt=">కంది సాగు విధానం "  />
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

export default LeftCrops3;
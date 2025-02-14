import React from 'react';
import './c2.css'; // Ensure your CSS file path is correct
import NavImage from './Untitled-3.png';
import NewsAds from '../Leftads/adsection';
import RightNewsAds from '../rightadscomonent';
import NewsHeadlines from '../headlines';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import img1 from './tomato.jpg';
import img4 from './onion.jpg';
import img5 from './Maize.jpg';
import img6 from './carrot.jpg';
import img7 from './Rice.jpg';
import img8 from './potato.jpg';
import img9 from './pea.jpg';
import img10 from './Brinjal.jpg';
import img11 from './Ladyfinger.jpg';
const Adscrop2 = () => {
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
                <h2>క్యారెట్ సాగు విధానం - Carrot cultivation in telugu</h2>
                
    <img src={img6} class="logo1"></img>

    <p>క్యారెట్ పంట శీతాకాలానికి అనువైన పంట. ఈ పంట 18°- 25° డిగ్రీలు గల తక్కువ ఉష్ణోగ్రతల వద్ద అధిక దిగుబడులతో పాటు మంచి నాణ్యమైన దుంపలకు అనువైన వాతావరణం అని చెప్పుకోవచ్చు. ఈ పంట  100 – 110 రోజులలో పంటకాలం పూర్తి అవుతుంది. పంట విత్తుకోవడానికి మంచి అనువైన కాలం ఆగస్టు నుండి జనవరి మధ్య కాలంలో విత్తుకోవడం మంచిది.  </p>
    <h3>నేల తయారి</h3>
    <p>క్యారెట్ పంటకు అనువైన నేలలు నీరు ఇంకే సారవంతమైన నేలలు, ఎర్ర నేలలు, వదులుగా ఉండే నేలలు ఈ పంటకు అనువైన భూములు. కానీ బరువైన నల్లరేగడి నేలలు, నీరు నిల్వ ఉండే నేలలు, క్షారత్వం ఎక్కువ ఉన్న నేలలు క్యారెట్ పంటకు ఏమాత్రం కూడా పనికి రావు. </p>
    <p>విత్తనానికి సిద్ధం చేసుకున్న భూమిని నేల వదులుగా అయ్యేవరకు 2-3 సార్లు దున్నుకోవాలి. దుంప పంటలకు నేల ఎంత వదులు అయితే అంత మంచిది. చివరి దుక్కికి ముందు ఎకరానికి 10 – 12 టన్నుల పశువుల ఎరువు మరియు 16 కిలోల భాస్వరం, 20 కిలోల పోటాష్ మరియు 15 కిలోల నత్రజని వేసుకొని చివరి దమ్ము చేసుకోవాలి.  </p>
    <h3>విత్తుకునే విధానం</h3>
    <p>ఎకరానికి 2 కిలోల విత్తనాలు అవసరం పడతాయి. విత్తుకునే ముందు పాటించవలసిన దూరాలు సాలుల మధ్య దూరం 30 సే.మీ. మొక్కల మధ్య దూరం 5 – 7 సే.మీ.లు ఉండేలా చూసుకొని విత్తనాలను విత్తుకోవాలి. ఈ విత్తనాలు చిన్న పరిమాణంలో ఉంటాయి కావున కిలో విత్తనంలో 3 కిలోల పొడి ఇసుకను కలుపుకొని విత్తుకోవడం మంచిది. ఈ పంట కోసం ఎత్తు మట్టి బెడ్లను ఏర్పాటు చేసుకొని డ్రిప్ ఇరిగేషన్ ద్వారా పండిచడం ద్వారా దుంప ఎదుగుదల బాగుంటుంది. అలాగే దుంపకుళ్ళును కొంతవరకు నియత్రించవచ్చు. </p>
    <h3>నీటి యాజమాన్యం</h3>
    <p>వాతావరణ పరిస్తితిని బట్టి మరియు భూమియొక్క స్వభావాన్ని బట్టి అంచనా వేస్తూ 7-10 రోజులకు ఒకసారి నీటిని అందించాలి. డ్రిప్ ద్వారా నీటిని అందించినప్పుడు రోజుకి 1-2 గంటల సమయం వరకు అందించాలి. </p>
    <h3>కలుపు నివారణ</h3>
    <p>విత్తుకున్న 48 గంటల లోపు పెండిమిథలిన్ ఎకరానికి 1.25 లీటర్లు లేదా అలాక్లోర్ 1.25 లీటర్లు నేల పూర్తిగా తడిచే విధంగా పిచికారి చేసుకోవాలి. 25-30 రోజుల మధ్య కలుపును అంతరకృషి ద్వారా తొలగించాలి.  అంతరకృషి ద్వారా కలుపు తొలగించే సమయంలో మట్టిని మొక్క మొదలు వద్దకు ఎగత్రోయ్యాలి. ఇలా చెయ్యడం ద్వారా దుంప నెలలోనే ఉండటానికి సహాయ పడుతుంది. దుంప కూడా ఆకుపచ్చ రంగుకు మారకుండా నారింజ రంగులోనే ఉంటుంది. </p>
    <h3>తెగుళ్ళు మరియు చీడ పీడలు</h3>
    <h3>దుంప కుళ్ళు </h3>
    <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2022/01/carrot-rust-fly-Rythu-rajyam.jpg?fit=300%2C225&ssl=1" class="logo"></img>
    <p>క్యారెట్ లో దుంప కుళ్ళు రస్ట్ ఫ్లై ఈగ ద్వారా వస్తుంది. ఈ ఈగ మొక్కపై గుడ్లు పెట్టడం వల్ల దాని లార్వాలు దుంపలోనికి వెళ్లి దుంపను తినడం ప్రారంభిస్తాయి. ఈ పురుగు ఆశించిన మొక్కల ఆకులు వడలి పోతాయి లేదా ఆకులు తెల్లగా మారుతాయి. ఈ లక్షణాలను బట్టి మొక్కలు దుంపకుళ్ళు బారిన పడ్డట్లుగా గుర్తించవచ్చు. మొక్కను నేలనుండి తీసినప్పుడు దుంప కుళ్లిపోయినట్లుగా కలిపిస్తుంది. </p>
    <p>నివారణ చర్యగా 1 లీటర్ నీటికి 2 మీ.లీ మాలాథియాన్ కలుపుకొని పిచికారి చేసుకోవాలి. ముందస్తు చర్యగా పంట వయస్సు 4, 7, 10 వ వారాలలో పిచికారి చెయ్యడం మంచిది.  </p>
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

export default Adscrop2;
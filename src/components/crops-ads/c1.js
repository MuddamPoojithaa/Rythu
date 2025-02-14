import React from 'react';
import './c1.css'; // Ensure your CSS file path is correct
import NavImage from './Untitled-3.png';
import { Link } from 'react-router-dom';
import NewsAds from '../Leftads/adsection';
import RightNewsAds from '../rightadscomonent';
import NewsHeadlines from '../headlines';
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
const Adscrop = () => {
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
           <img src={img7} alt="బాస్మతీ బియ్యం  సాగు విధానం " />
          <p>బాస్మతీ బియ్యం సాగు విధానం<br></br>
        (rice cultivation in telugu ) </p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc2"  target="_blank" rel="noopener noreferrer">
           <img src={img5}  alt="మొక్కజొన్న సాగు విధానం " />
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
           <img src={img8} alt="క్యాలీఫ్లవర్ సాగు విధానం"  />
           <p>ఆలుగడ్డ సాగు విధానం<br></br>
           (Potato Cultivation in Telugu)</p>
           </Link>
          </div>
           </div>
           </div>
            <div className='content'>
                <Outlet />
                <div className='middle-content'>
                <h2>టమాటో సాగు విధానం – Tomato Cultivation in Telugu</h2>
                
                <img src={img1} className="logo" alt="టమాటో సాగు విధానం" />
                <h3>నేల ఎంపిక చేసుకునే విధానం</h3>
                <p>
                    టమాటో పంట కోసం ఇసుక నుండి బంకమట్టి నేలల వరకు అన్ని నెలలు అనువైనవే అని చెప్పుకోవచ్చు.  నేల యొక్క PH 6.0 – 7.0 గా ఉంటే పంట వృద్ది బాగుంటుంది.
                </p>
                <h3>వాతావరణ పరిస్థితులు</h3>
                <p>టమాటో పంట వెచ్చదనం ఉన్న కాలంలో పంట దిగుబడి బాగావస్తుంది. వాతావరణంలో  21-24°C ఉష్ణోగ్రతల వద్ద పండ్ల రంగు నాణ్యత బాగుంటుంది. ఉష్ణోగ్రతలు  10°C కంటే తక్కువగా ఉంటె మొక్కల కణజాలంపై ప్రభావితం చేస్తుంది. తద్వారా మొక్క యొక్క ఎదుగుదల మందగిస్తుంది. ఉష్ణోగ్రత 32°C కంటే ఎక్కువగా ఉంటే పంటపై ప్రతికూల ప్రభావం వల్ల పంట దిగుబడి తక్కువగా వస్తుంది. మొక్కలు మంచు మరియు తేమ పరిస్థితులను తట్టుకోలేవు టమాటో పంట కోసం మధ్యస్థ వర్షపాతం అవసరం. పండ్ల అభివృద్ధి మరియు ప్రకాశవంతమైన రంగు సూర్యరశ్మి సహాయపడుతుంది.</p>
                <h3>నర్సరీ బెడ్ తయారీ (నారు పెంపకం)</h3>
                <p>టమాటో నారు వెయ్యడానికి  బెడ్ యొక్క కనీస కొలతలు వెడల్పు 0.7-1 మీటర్లు, పొడవు 3-4 మీటర్లు మరియు ఎత్తు 10-15 సెంటిమీటర్లు ఉండేలా మట్టితో బెడ్ లా సమానంగా బెడ్లను సిద్ధం చేసుకోవాలి. బెడ్డు, బెడ్డు మధ్య దూరం 50-70సే.మీ దూరం ఉండేలా చూసుకోవాలి. ఈ దూరం మన కాలినడక కోసం మనం నారు మొక్కలను నిత్యం పర్యవేక్షించడానికి మరియు నీరు పోయుటకు అనువుగా ఉంటుంది.</p>
                <h3>విత్తనాలనుబెడ్ పై నారు వెయ్యడం</h3>
                <p>టమాటో విత్తనాలు ఒక్క ఎకరానికి 100-120 గ్రాముల విత్తనాలు అవసరము అవుతాయి. శిలీంధ్రాల నివారణకు ట్రైకోడెర్మా విరిడ్  (Trichoderma viride) 4 గ్రా”లు/కిలో విత్తనాలకు లేదా తీరం (Thiram) 2 గ్రా”లు/కిలో విత్తనాలలో కలుపుకోవాలి. విత్తనాలను 1-3 సెంటిమీటర్ల లోతులో విత్తుకోవాలి. విత్తనాల పై పొర మట్టిలో రాళ్లు లేకుండా సన్నని మట్టితో కప్పుకోవాలి. తేమను   మరియు అధిక ఉష్ణోగ్రతలను నియంత్రించడానికి వరి గడ్డి లేదా చెరుకు ఆకులతో కప్పుకోవాలి. మొలకెత్తి ఆకులు తొడిగే సమయంలో వరి గడ్డి లేదా చెరుకు ఆకులను పూర్తిగా తొలగించాలి. మట్టి తేమనుబట్టి నీటిని అందించాలి. మొక్కని నర్సరీ నుండి తొలగించే వారం రోజుల ముందు మొక్కలను నీటిని అందించడం అపివేయ్యాలి. ఇలా నీటిని ఆపివేయడం వల్ల మొక్క యొక్క కాడ గట్టిపడుతుంది.</p>
                <h3>దుక్కిని (భూమి) సిద్ధం చేసుకోవడం</h3>
                <p>తగిన విరామం సమయం తరువాత భూమిని రెండు నుండి మూడు సార్లు దున్నుకోవాలి. కుళ్ళిన పశువుల ఎరువు 10 టన్నులు/ఎకరానికి వేసుకొని భూమిలో సమానంగా పూర్తిగా  కలిసేవిధంగా ట్రాక్టర్ తో దున్నుకోవాలి. </p>
                <h3>మొక్క నాటుకునే విధానం</h3>
                <p>టమాటో మొక్కని నాటుకునేముందు నేలని 3-4 రోజుల ముందు నీటినిపారించి నేలని నానబెట్టుకోవాలి.  మొక్కలు నాటడానికి ముందు నువాక్రాన్ (15 మి.లీ ) మరియు డిథేన్ ఎం – 45 (25 గ్రా ) తయారుచేసిన ద్రావణంలో 10 లీటర్ల నీటిలో 5-6 నిమిషాలు ముంచాలి. మొక్కలని సాయంత్ర సమయాల్లో చేయడం మంచిది.</p>
                <h3>కలుపు నియంత్రణ</h3>
                <p>కలుపును నియంత్రించడానికి పంట వేసే ముందే క్షేత్రాన్ని కలుపు రహితంగా చేసుకోవాలి లేకపోతే కలుపు మొక్కలు పంటతో పోటిపడి పెరుగుతాయి దీనివల్ల పంట దిగుబడి గణనీయంగా తెగ్గే అవకాశం ఉంది. పంట ఎదుగుగుతున్న సమయంలో కలుపు నియంత్రణకు (తొలగించడానికి) కలుపు రసాయన మందులను(గడ్డి మందులు) ఉపయోగిస్తే పంటదిడుబడి పై ప్రభావం చూపే అవకాశం ఉంది కావున కలుపును పంట ఎదుగుతున్న సమయంలో సంప్రదాయ పద్ధతిలో తీసెయ్యడానికి ప్రయత్నిచండి.  పంటను పాలిథిన్ కవర్లను ఉపయోగించి పెంచడం వలన కలుపు పూర్తిగా నియంత్రణలో ఉంటుంది. </p>
                <h3>పంట మార్పిడి </h3>
                <p>టమాటో పంటను వరుసగా పంట తరువాత పంటగావేసి పండించాకుడదు. పంట మార్పిడి పధతిని అవలబించాలి. ఒకే పంటకు ఇలా వరుసగా వెయ్యడం వలన పంటదిగుబడి తగ్గుతుంది. రెండు టమాటో పంటల మధ్య కనీస విరామ సమయం ఒక్క సంవత్సరం అయినా ఉండేలా చూసుకోవాలి. </p>
                <h3>నీటి పారుదల</h3>
                <p>మొక్కలని నాటుకున్న 3-5 రోజుల తరువాత నీటిని పరించాలి. నీటిపారుదల నేల మరియు వాతావరణం మీద ఆధారపడి ఉంటుంది. కావున భూమిపై తేమని చూసుకుంటూ నీటిని అందివ్వాలి. ఖరీఫ్ సమయంలో 7-8 రోజుల విరామం , రబీ సమయంలో 10-12 రోజులు మరియు వేసవిలో 5-6 రోజులు నీటిపారుదల ఇవ్వాలి. పుష్పించే మరియు కాయలు అభివృద్ధి చెందే సమయంలో నీటి వినియోగం చాలా ముఖ్యమైనది ఆ సమయములో నీటి అందించడంలో ఆలస్యం చెయ్యకూడదు.</p>
                <h3>కీటకాలు మరియు తెగుళ్ల నివారణ</h3>
                <p>కాయతొలుచు పురుగు (Fruit Borer)</p>
                <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2020/12/Untitled-1.jpg?resize=332%2C166&ssl=1" className="logo1" alt="టమాటో సాగు విధానం" />
                <p>దేనినే పుచ్చు తెగులు అనికూడా పిలుస్తారు.  ఈ కాయతొలుచు పురుగు లార్వాలు పండుకి రంధ్రం చేసి పండును మొత్తం నాశనం చేస్తుంది. వీటి వల్ల పంట యొక్క దిగుబడి 40-50% వరకు తగ్గే అవకాశం ఉంది. కావున ఈ తెగులు ఆశించిన వెంటనే ఆలస్యం చెయ్యకుండా నివారణ చర్యలు చేపట్టాలి.</p>
                <h3>నివారణ చర్యలు </h3>
                <p>మొక్క వయస్సు 40-45 రోజుల మధ్య NVP తగిన మోతాదులో పిచికారి చేసుకోవాలి.</p>
            </div>
            </div>
            <div className='crops-ads'>
           <div className="recent-ads">
           <h2>Recent posts</h2>
           <div className="crop-item">
          <Link to="/crops-ads/c1"  target="_blank" rel="noopener noreferrer">
               <img src={img1} alt="టమాటో సాగు విధానం " />
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
            <img src={img4}  alt="ఉల్లి సాగు విధానం"  />
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

export default Adscrop;

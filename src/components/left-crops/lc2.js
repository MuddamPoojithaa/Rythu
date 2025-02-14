import React from 'react';
import './lc2.css'; // Ensure your CSS file path is correct
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
const LeftCrops2 = () => {

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
                <h2>మొక్కజొన్న ఉత్పత్తి – Maize cultivation in telugu </h2>
                
    <img src={img5}    alt="మొక్కజొన్న సాగు విధానం " class="logo"/>
    <p>వర్షాకాలం ప్రారంభమవ్వడంతో రైతులంతా ఖరీఫ్ సీసన్ కోసం సన్నద్ధమవుతున్నారు. ప్రతి ఏడాది లాగే ఈ ఏడాది వరితో పాటు మిగిలిన అన్ని పంటలు వెయ్యడానికి రైతులు సంసిద్ధమవుతున్నారు. అయితే ఏ పంట ఎప్పుడు వెయ్యాలి అన్న అవగాహన లేక ప్రతి ఏటా రైతులు నష్టాలపాలవుతున్నారు. పంటల సాగు సరైన సమయంలో సాగు చెయ్యకుంటే చీడపీడల ఉదృతి ఎక్కువవుతుంది. దీనితోపాటు ప్రతికూల వాతావరణ పరిస్థితులు కూడా తోడై పంట నాణ్యతను దెబ్బతీసి తీవ్రమైన నష్టాన్ని కలిగిస్తుంది. ఈ నేపథ్యంలో ఏ పంట ఎప్పుడు సాగు చెయ్యాలి, మరియు ఎటువంటి జాగ్రత్తలు పాటించాలి అన్న అంశం మీద ద్రుష్టి సారించవలసిన అవకాశం ఉంటుంది.</p>
    <p>మొక్కజొన్నను ఆలస్యంగా సాగు చేస్తే పురుగుల భారిన పడే ప్రమాదం ఉంటుంది. మొక్కజొన్నను ఎక్కువుగా ఆశించే పురుగుల్లో కాండం తొలుచు పురుగు ఒకటి. దీని ఉదృతి పంట సాగు చేసిన 30 రోజుల తరువాత ఎక్కువుగా ఉంటుంది. 30 రోజుల దాటిన తరువాత మొక్క ఈ పురుగు ఉదృతిని తట్టుకోగలిగే ప్రతిఘటన ఏర్పడుతుంది. కాండం తొలుచు పురుగు ఉదృతి జులై చివరి నుండి ఆగష్టు వరకు వాతావరణం అనుకూలంగా ఉంటుంది. కాబట్టి జూన్ 15 నుండి జులై 15 లోపు సాగు ప్రారంభిస్తే కాండంతొలుచు పురుగు కలిగించే నష్టాన్ని తగ్గించవచ్చు.</p>
    <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/01/post-photo-size.jpg?resize=900%2C400&ssl=1" class="logo"/>
    <p>మొక్కజొన్న మనదేశంలో ఆహార అవసరాలను తీర్చడంలో వరి మరియు గోదుమల తరువాత మూడవ స్థానం లో పండుతున్న అతిపెద్ద క్షేత్ర పంటగా కొనసాగుతుంది. అందుకనే మొక్కజొన్నను తృణధాన్యాల రాణి అని పిలుస్తారు. తృణధాన్యాలలో జన్యు దిగుబడి సామర్ధ్యం ఎక్కువగా ఉంటుంది.</p>
    <p>ప్రపంచ వ్యాప్తంగా మొక్కజొన్నను ఎక్కువ పండిస్తున్న దేశాలలో భారతదేశం 6వ స్థానంలో ఉంది. అమెరికా మొదటి స్థానంలో, చైనా రెండవ స్థానంలో ఉన్నాయి. ప్రపంచవ్యాప్తంగా ఉత్పత్తి చేయబడిన మొత్తం మొక్కజొన్నలో 2-3% వాటా భారతదేశానిదే మరియు ప్రపంచంలోని టాప్ -5 మొక్కజొన్న ఎగుమతిదారులలో ఇది ఒకటి. ప్రపంచంలోని వివిధ దేశాలకు ఎగుమతి చేసిన మొత్తం మొక్కజొన్నలో దాదాపు 14%. ఆగ్నేయ ఆసియా భారతీయ మొక్కజొన్నకు అతిపెద్ద మార్కెట్, ఎగుమతి చేసిన భారతీయ మొక్కజొన్నలో దాదాపు 80% ఇండోనేషియా, వియత్నాం మరియు మలేషియాకు వెళుతుంది.</p>
    <img src="https://telugu-cdn.b-cdn.net/media/d0teckre/maize-rabi-_-rabi-maize-crop-information.jpg" class="logo"/>
    <p>మొక్కజొన్న పంట అన్ని నేలలో అనువైనది నేలలో సాధారణ ph ఉన్నాకూడా సరిపోతుంది.  మొక్కజొన్న వరుసగా రెండు పంటలుగా వెయ్యరాదు పంట మార్పిడి పద్ధతులను అవలంబించడం మంచిది. ఇలా పంట మార్పిడి వల్ల అధిక దిగుబడి రావడం, కలుపు నిర్ములన మరియు తెగుళ్ళు సోకే అవకాశాలు తక్కువగా ఉంటాయి. పంట వేసే ముందు భూమిలో ఎకరానికి 10 టన్నుల వరకు పశువుల ఎరువు లేదా కంపోస్టు ఎరువులు వేసి నేల మొతాన్ని ట్రాక్టర్ తో కలియదున్నాలి. కలుపును కొంతవరకు నిర్మూలించడానికి మరియు నేల వదులు కావడానికి కల్టివేటర్ తో 2-3 సార్లు నేల మొత్తం దమ్ము చెయ్యాలి. </p>
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

export default LeftCrops2;
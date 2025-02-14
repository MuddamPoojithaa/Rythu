import React from 'react';
import './h2.css'; // Ensure your CSS file path is correct
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
const AdComponent3 = () => {
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
            <h2>మిర్చి పంటకు నీరు ఇవ్వాలని రైతుల డిమాండ్‌:నరసరావుపేటలో నిరసనకు పిలుపు !</h2>
           <img src="https://telugu-cdn.b-cdn.net/media/xl0ncb0v/chilli-crop.jpg" className="logo" alt="Chilli Crop" />
            <p>నాగార్జున సాగర్ కుడి కాలువ కింద రాష్ట్ర ప్రభుత్వం సాగునీరు అందించాలని డిమాండ్ చేస్తూ ఏప్రిల్ 18న పల్నాడు జిల్లా కలెక్టరేట్ ఎదుట ధర్నాకు తెలుగుదేశం పార్టీ రాజకీయ నాయకుడు, మాజీ మంత్రి కన్నా లక్ష్మీనారాయణ పిలుపునిచ్చారు.</p>
            <p>నాగార్జున సాగర్ కుడి కాలువ కింద రాష్ట్ర ప్రభుత్వం సాగునీరు అందించాలని డిమాండ్ చేస్తూ ఏప్రిల్ 18న పల్నాడు జిల్లా కలెక్టరేట్ ఎదుట ధర్నాకు తెలుగుదేశం పార్టీ రాజకీయ నాయకుడు, మాజీ మంత్రి కన్నా లక్ష్మీనారాయణ పిలుపునిచ్చారు.</p>
            <p>ఆంధ్రప్రదేశ్‌లోని పల్నాడు జిల్లా సత్తెనపల్లిలో లక్ష్మీనారాయణ శనివారం మీడియాతో మాట్లాడుతూ 50 వేల ఎకరాలకు పైగా మిర్చి, ఇతర పంటలు పండిస్తున్న రైతులు తమ పంటలకు నీటి కోసం అల్లాడుతున్నారని అన్నారు.</p>
            <p>ఆంధ్రప్రదేశ్లో పండించే మిర్చికి అంతర్జాతీయంగ డిమాండ్ వుంది భారతదేశం తో సహా వంటకాలలో ఉపయోగించే ఈ మిర్చి
                ఇటీవలి డేటా ప్రకారం, మిరప ఉత్పత్తిలో భారతదేశం ప్రపంచంలో అగ్రస్థానంలో ఉంది, చైనా, పెరూ, స్పెయిన్ మరియు మెక్సికో తర్వాతి స్థానాల్లో ఉన్నాయి.</p>
            <p>భారతీయ మిరపకాయలు వాటి ఘాటు మరియు రంగుకు ప్రసిద్ధి చెందాయి, ముఖ్యంగా ఆంధ్రప్రదేశ్‌లోని గుంటూరు ప్రాంతంలో పండించే మిర్చికి అంతర్జాతీయం గ మంచి డిమాండ్ వుంది . కొన్ని పెద్ద మిరపకాయలను బెల్ పెప్పర్స్ అని పిలుస్తారు మరియు వాటిని కూరగాయగా తీసుకుంటారు. మిరపకాయను భారతదేశంలో లంక, మిర్చి మరియు ఇతరులతో సహా అనేక విభిన్న పేర్లతో పిలుస్తారు.</p>
            <h3>రైతులకు శుభవార్త : ఈ పంటకు కనీస మద్దతు ధర పెంచిన కేంద్రం !</h3>
            <img src="https://telugu-cdn.b-cdn.net/media/1m4jchcx/farmer-3.jpg" className="logo" alt="Farmer" />
            <p>కేంద్ర ప్రభుత్వం రైతులకు తీపికబురు అందించింది. కనీస మద్దతు ధర పెంచుతూ నిర్ణయం తీసుకుంది. దీని వల్ల చాలా మంది అన్నదాతలకు ఊరట కలుగుతుందని చెప్పుకోవచ్చు.</p>
            <p>కేంద్రప్రభుత్వం తాజాగా ముడి జనపనార కనీస మద్దతు ధరను క్వింటాకు రూ. 300 పెంచింది దీనితో ముడి జనపనార కనీస మద్దతు ధర రూ. 5050కు చేరింది 2023- 24 సీజన్‌కు సంబంధించి ఈ రేటు వర్తించనుంది .</p>
            <p>కేంద్ర క్యాబినెట్ మీటింగ్‌లో ఈ మేరకు నిర్ణయం తీసుకున్నారు. కమిషన్ ఫర్ అగ్రికల్చర్ కాస్ట్స్ అండ్ ప్రైసెస్ (సీఏసీపీ) సిఫార్సుల మేరకు కనసీ మద్దతు ధరను పెంచామని కేంద్ర మంత్రి అనురాగ్ ఠాకూర్ వెల్లడించారు. ముడి జనపనార కనీస మద్దతు ధర ఇప్పుడు క్వింటాకు రూ. 5050 గా నిర్ణయించారు.</p>
            <p>నరసరావుపేటలో మిర్చి రైతులు నీటి సమస్యపై ఆందోళన వ్యక్తం చేశారు. మిర్చి పంటకు అవసరమైన నీటి సరఫరా లేకపోవడంతో పంట దెబ్బతింటుందని వారు ఆందోళన వ్యక్తం చేస్తున్నారు. పంటను సకాలంలో నీరు అందించకపోతే రైతులకు భారీ నష్టం జరుగుతుందని, పంట దెబ్బతింటుందని వారు హెచ్చరిస్తున్నారు.</p>
            <p>రైతులు సమీపంలోని కాలువల నుండి లేదా నది నుండి నీరు విడుదల చేయాలని ప్రభుత్వాన్ని డిమాండ్ చేస్తున్నారు. సకాలంలో నీరు అందించకపోతే పంట మునుగుతుందని, వాటిని పునరుద్ధరించడం కష్టమవుతుందని వారు అంటున్నారు.</p>
            <p>ఈ క్రమంలో, నరసరావుపేటలోని రైతులు నిరసనకు పిలుపునిచ్చారు. వారు ప్రభుత్వ అధికారులకు, సంబంధిత అధికారులకు తమ సమస్యను వివరించి, తక్షణమే నీటి సమస్యను పరిష్కరించాలని కోరారు. రైతులు ఈ సందర్భంలో తమ కుటుంబాల భవిష్యత్తు దృష్టిలో పెట్టుకుని, ప్రభుత్వానికి గట్టి హెచ్చరికలను ఇవ్వడం జరిగింది.</p>
            <p>మిర్చి పంట కోసం తగినంత నీరు అందించకపోతే, పంట నాశనమవుతుందని, ఇది రైతుల ఆర్థిక పరిస్థితిని మరింత క్లిష్టతరం చేస్తుందని వారు స్పష్టం చేశారు. ప్రభుత్వం తక్షణమే స్పందించి, రైతుల కోసం తగిన చర్యలు తీసుకోవాలని వారు కోరారు.</p>
            <p>ఈ నిరసన కార్యక్రమంలో రైతులు పెద్ద సంఖ్యలో పాల్గొని, తమ ఆవేదనను వ్యక్తపరచారు. తమ సమస్యలపై సంబంధిత అధికారులకు తక్షణ స్పందన తెలియజేయాలని, ప్రభుత్వానికి గట్టి హెచ్చరికలు ఇచ్చారు.</p>
            <p>రైతులు ఈ నిరసనను కొనసాగిస్తారని, సకాలంలో తగిన నీటి సరఫరా అందించే వరకు ప్రభుత్వంపై ఒత్తిడి తీసుకువస్తామని స్పష్టం చేశారు.</p>
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

export default AdComponent3;

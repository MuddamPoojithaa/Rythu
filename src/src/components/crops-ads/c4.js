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
const Adscrop4 = () => {
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
                <h2>ఉల్లి సాగు విధానం - Onion Cultivation in Telugu</h2>
                
     <img src={img4}  alt="ఉల్లి సాగు విధానం" class="logo"/>
    <p>ఒక్క స్థిరమైన ధరలేని పంట ఏదైనా ఉంది అంటే అది ఉల్లిగడ్డ పంట అని చెప్పుకోవచ్చు. ఒకనోక్క సమయంలో ధర ఆకాశాన్ని అంటుతుంది. రైతుల చేతికి పంట వచ్చే సమయానికి మళ్ళి ధరలు నేలచూపులు చూస్తాయి. కనిష్ట మరియు గరిష్ట ధరల మధ్య వ్యత్యాసం కూడా చాల ఎక్కువగా ఉంటుంది.</p>
    <h2>నారు పెంచే విధానం </h2>
    <p>నారు మొక్కలు పెంచడానికి ఎంచుకున్న భూమిని నేలకు 6 అంగుళాల ఎత్తులో బెడ్డుల రూపంలో మట్టిని పోసుకోవాలి. బెడ్డుకి, బెడ్డుకి మధ్య కనీసం ఒక్క అడుగు దూరం ఉండేలా ఏర్పాటు చేసుకోవాలి.  ఇలా కాలినడక దారి ఉండడం వలన కలుపు నివారణ, నీరు అందించడానికి, సష్యరక్షణకు అనువుగా ఉంటుంది. విత్తనాలు వేసుకునేముందు విత్తనాల మధ్య సమాన దూరాలు ఉండేలా గుర్తులు లేదా గీతలు గీసుకొని విత్తనాలు విత్తుకోవాలి. ఒక్క ఎకరానికి కనిష్టంగా 3 నుండి గరిష్టంగా 4 కిలోల విత్తనాల వరకు అవసరమవుతాయి. విత్తుకునే ముందు విత్తనాలను జీవమృతంతో లేదా ఒక్క కిల్లో విత్తనానికి 8 గ్రాముల ట్రైకోడెర్మ విరిడీ లేదా 3 గ్రాముల తైరంతో విత్తన శుద్ధి చేసుకొని విత్తుకోవాలి. విత్తనశుద్ది చెయ్యడం వల్ల నారు కుళ్ళు తెగులు మరియు నేల నుండి ఆశించే తెగుళ్ళను కొంతవరకు నివారించవచ్చు.</p>
    <h2>నెల తయారి </h2>
    <p>ఉల్లి పంట వెయ్యడానికి ఎంచుకున్న భూమిని నేల వదులుగా అయ్యే వరకు దమ్ము చేసుకోవాలి. చివరి దుక్కి అయిపోయాక భూమిని చిన్న, చిన్న మడులుగా విభజించుకోవాలి. నీరు పారిస్తున్నపుడు నీరు నిల్వ ఉండకుండా నాలుగు మూలాలు సమానంగా ఉండేలా మడులను తయారు చేసుకోవాలి. </p>
    <p>ఈ పంటకు అనువైన నేలలు నల్లరేగడి, ఎర్ర నేలలు, చౌక నేలలు అనువైనవి.</p>
    <p>పనికిరాని నేలలు చౌడు నేలలు, ఇసుక నేలలు, క్షారత్వం ఎక్కువ ఉన్న నెలల్లో వేస్తె దిగుబడి తక్కువగా ఉంటుంది.</p>
    <h2>నాటుకునే విధానం</h2>
    <p>ఉల్లినారు నాటుకోవడానికి రెండు పద్ధతులు అనువైన మొదటిది చిన్న, చిన్న మడులలో నాటుకునే పద్ధతి ఇది నీటి పారుకం ద్వారా పండించడానికి అనువుగా ఉంటుంది. రెండవది ఎత్తు బెడ్ల పద్ధతి ఇది డ్రిప్ ఇరిగేషన్ ద్వారా పండించడానికి అనువుగా ఉంటుంది. మొక్కలని నాటుకునే ముందు వేర్లను 1 శాతం బార్డో కలిపినా మిశ్రమంలో ముంచి నటుకోవడం వల్ల నారు కుళ్ళు తెగులును నివారించవచ్చు. మొక్క మొక్కకి మధ్య దూరం 10 సెంటి మీటర్లు, సాలుల మధ్య దూరం 30 సెంటి మీటర్ల దూరం ఉండేలా చూసుకోవాలి. మొక్కలు నాటుకున్న 2 రోజులలోపు కలుపు నివారణ కోసం పెండిమిదలిన్ లేదా కలుపు నివారణ రసాయనాలను పిచికారి చేసుకోవాలి. </p>
    <h2>కలుపు నివారణ</h2>
    <p>మొక్కలు నాటిన 24 నుండి 48 గంటల మధ్య ఒక్క ఎకరానికి 1.25 లీటర్ల పెండిమితలిన్ (లేదా) అలాక్లోర్ 1.2 లీటర్ల రసాయనాన్ని ఇసుకలో కలుపుకొని తేమ గల నేల మీద చల్లుకోవాలి. కానీ పిచికారి చెయ్యకూడదు పిచికారి చెయ్యడం వల్ల నాటిన మొక్కలుపై ఈ రసాయనం పడి ప్రమాదానికి గురి అవ్వడం జరుగుతుంది. పంట ఎదుగుతున్న సమయంలో వచ్చిన కలుపును సంప్రదాయ పద్దతిలో కూలీల సహాయంతో తొలగించడం మంచిది. నాటువేసిన 40 రోజులలో వరకు కలుపు మొక్కలు లేకుండా చూసుకోవాలి. </p>
    <h2>తెగులు వాటి నివారణ చర్యలు</h2>
    <p>ఉల్లి పంటలో సాధరణంగా తెగులుళ్ళ బెరద వేరే పంటలతో పోలిస్తే తక్కువగానే ఉంటుంది. </p>
    <h2>పెనుబంక ( Thrips )</h2>
    <p>పెనుబంక తెగులు సోకినా మొక్క యొక్క రసాన్ని పీల్చడం వల్ల మొక్క యొక్క ఎదుగుదలపై ప్రభావం చూపుతుంది. ఈ తెగులు ఒక్క మొక్క నుండి మరో మొక్కకి వ్యాప్తి చెందుతుంది. నివారణ చర్యలు తెగులు సోకినా వెంటనే తీసుకోవాలి లేనిచో పంట దిగుబడిపై ప్రభావం చూపుతుంది.</p>

<img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/03/post-photos-size-1.jpg?fit=300%2C180&ssl=1" class="logo1"/>
<h2>నివారణ చర్యలు</h2>
<p>డైమెథోయేట్ 30 EC 1 మీ.లీ 1 లీటర్ నీటికి కలుపుకొని పిచికారి చేసుకోవాలి.</p>
<p>(లేదా)</p>
<p>మిథీ డెమెటన్ 25 EC 1 మీ.లీ 1 లీటర్ నీటికి కలుపుకొని పిచికారి చేసుకోవాలి.</p>
<p>(లేదా)</p>
<p>మోనోక్రోట్‌ఫాస్ 36 SL 1.5 మీ.లీ 1 లీటర్ నీటికి కలుపుకొని పిచికారి చేసుకోవాలి.</p>
<p>(లేదా)</p>
<p>మలాథియాన్ 50 EC 1 మీ.లీ 1 లీటర్ నీటికి కలుపుకొని పిచికారి చేసుకోవాలి.</p>
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

export default Adscrop4;

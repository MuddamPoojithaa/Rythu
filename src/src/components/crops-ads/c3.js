import React from 'react';
import './c3.css'; // Ensure your CSS file path is correct
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
const Adscrop3 = () => {
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
                <h2>వంకాయ సాగు విధానం - Brinjal Cultivation in Telugu </h2>
       
    <img src={img10}  alt=" వంకాయ సాగు విధానం " class="logo"/>
<p>వంగ సాగును మన రైతులు దీర్ఘకాలిక పంటగా మరియు స్వల్పకాలిక పంటగా సాగు చెయ్యడం జరుగుతుంది. దీర్ఘకాలిక పంట 7-8 నెలల వరకు పంట కాలం ఉంటుంది. తెగుళ్ళు మరియు పురుగు ఆశించకుండా ఉన్నపుడు మాత్రమే దీర్ఘకాలిక పంటకు వెళ్ళడం మంచిది. లేకపోతే దిగుబడి రాకపోగా పెట్టుబడి పెరిగి లాభాలు తగ్గడాలు జరుగుతాయి. </p>
<h3>నేల సిద్ధం చేసుకునే విధానం</h3>
<p>నేలలో పోషకాలు శాతం ఎక్కువగా ఉంటేనే ఏ పంట అయిన అధిక దిగుబడులను పొందడం జరుగుతుంది. కావున పంటకు ముందే భూమిని పోషకాలతో బలంగా తయారు చేసుకోవాలి. వంగ పంట వేయడానికి ఎంచుకున్న నేలలను వదులుగా అయ్యేవరకు 2-3 సార్లు ట్రాక్టర్ కల్టివేటర్ తో దున్నుకోవాలి. ఇలా 2-3 సార్లు దమ్ము చేసుకోవడం వల్ల కలుపు మొక్క విత్తనం నాశనం చేయ్యబడుతుంది. అలాగే పంట మొక్కల వేర్లు సులువుగా నేలలోకి చొచ్చుకొని వెళ్లి మొక్క బలంగా ఉంటుంది. చివరి దుక్కిలో పశువుల ఎరువు 8 టన్నులు, 25 కిలోల భాస్వరం మరియు 25 కిలోల పొటాషియం ఎరువులను వేసుకొని నేల మొత్తాన్ని కలియదున్నుకోవాలి. బ్యాక్టీరియ ఎండు తెగులు రాకుండా ముందస్తు జాగ్రత్తగా ఎకరానికి 6 కిలోల బ్లీచింగ్ చల్లుకోవాలి. </p>
<h3>విత్తనం రకాలు</h3>   
<h3>భాగ్యమతి :</h3> <p>పంట కాలం 150-165 రోజులు, దిగుబడి 12-14 టన్నుల వరకు ఉంటుంది. </p>
<h3>శ్యామల :</h3><p> పంట కాలం 130-150 రోజులు, దిగుబడి 7-9 టన్నుల వరకు ఉంటుంది.</p>
<h3>పూస పర్పుల్ క్లస్టర్ : </h3><p>పంట కాలం 135-145 రోజులు, దిగుబడి 13-16 టన్నుల వరకు ఉంటుంది.</p>
<h3>పూస పర్పుల్ లాంగ్ : </h3><p>పంట కాలం 135-145 రోజులు, దిగుబడి 13-16 టన్నుల వరకు ఉంటుంది.</p>
<h3> పూస క్రాంతి :</h3><p> పంట కాలం 135-150 రోజులు, దిగుబడి 14-16 టన్నుల వరకు ఉంటుంది. </p>
<h3>నారు పోసుకునే విధానం </h3>
<p>నారును పెంచడానికి ఎంచుకున్న నేలను నేల ఎత్తుకు నాలుగు అంగుళాల ఎత్తులో మట్టిని బెడ్డుల రూపములో తయారు చేసుకోవాలి బెడ్డుకి, బెడ్డుకి మధ్య దూరం కనీసం ఒక్క అడుగు దూరం ఉండేల చూసుకోవాలి. ఇది కాలిబాటకి అనువుగా ఉండి సష్యరక్షణకు అనువుగా ఉంటుంది. విత్తనాలు ఒక్క ఎకరానికి దేశీయ రకం విత్తనాలు అయితే 260 గ్రాములు లేదా హైబ్రీడ్ రకం విత్తనాలు అయితే 120 గ్రాములు అవసరం పడుతాయి. బెడ్డులపై విత్తనాలను విత్తుకునే ముందు సమానమైన గీతాలు లేదా గుర్తులు చేసుకొని విత్తనాల మధ్య దూరం ఒక్క సెంటి మీటరు ఉండేలా వేసుకోవాలి. విత్తుకున్న తరువాత సన్నని మట్టిని విత్తనలపై వేసుకొని పైపాటుగా నీటిని అందించి ఎండిన వరి గడ్డిని పలుచగా పైపోరగా బెడ్డులపై పరుచుకోవాలి. </p>
<h3>నాటుకునే విధానం</h3>
<p>డ్రిప్ పద్ధతిలో వేసుకునే రైతులు మొక్కలను నాటుకునే సాలులను కొంచం ఎత్తువరకు చేసుకుని ముల్చింగ్ కవర్ తో నాటుకోవడం మంచిది. దిని వల్ల కలుపు నివారణ, సాగునీటిని వృధ కాకుండా మరియు పోషక ఎరువులను డ్రిప్ ఇరిగేషన్ ద్వారా అందించవచ్చు. </p>
<h3>తెగుళ్ళు మరియు చీడపీడలనుండి నివారణ</h3>
<h3>కాయతొలుచు పురుగు (కాయ పుచ్చు పురుగు) మరియు కాండంతోలుచు పురుగు</h3>
<img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/04/hqdefault.jpg?fit=300%2C225&ssl=1" class="logo1"/>
<h3>నివారణ చర్యలు</h3>
<p>ఒక్క లీటర్ నీటికి 2 మీ.లీ ప్రోఫేనోఫాస్ లేదా 1 మీ.లీ. సైపర్ మెత్రిన్ కలుపుకొని పిచికారి చేసుకోవాలి. </p>
<p>వంకాయ సాగులో దిగుబడులు పడిపోవడానికి ముఖ్యమైన కారణం కాయతొలుచు పురుగు.  దీని వృద్ధితి ఎక్కువ అయితే దీనిని అదుపుచెయ్యడం కష్టతరంగా మారుతుంది కావున మొదట్లోనే తగు చర్యలు తీసుకోవాలి.  పుచ్చు పట్టిన కాయలను పంట చేను నుండి తొలగించి నివారణ చర్యలు చేపట్టాలి. </p>
<h3>ఎండు తెగులు</h3>
<img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/04/Brinjal_wilt.jpg?fit=259%2C300&ssl=1" class="logo1"/>
<p>ముందస్తుగా మొక్కలను నాటకముందు బ్లీచింగ్ పౌడర్ ఎకరానికి 6 కిలోలు చల్లుకోవాలి. ఎర పంటగా 4-6 సాలుల మద్య బంతి సాలును వేసుకోవాలి.  ఎండు తెగులు సోకినట్లుగా ఉంటె పంట మార్పిడిగా క్యాబేజీ పంటను వేసుకొని ఎండు తెగులును నివారించావచ్చు. </p>
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

export default Adscrop3;
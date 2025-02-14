import React from 'react';
import './lc5.css'; // Ensure your CSS file path is correct
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
const LeftCrops5 = () => {

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
                <div  className='middle-content'>
                <h2>ఆలుగడ్డ సాగు విధానం-Potato Cultivation in Telugu</h2>
    <img src={img8} alt="ఆలుగడ్డ సాగు విధానం"class="logo"/>
    <p> బంగాళదుంప పంట కాలం చాల తక్కువగా 90 – 100 రోజుల్లో పూర్తి అయ్యి పంట చేతికి వస్తుంది. ఈ పంట తక్కువ ఉష్ణోగ్రతలు ఉన్న ప్రాంతాలలో సాగుకు అనుకూలము. మన తెలుగు రాష్ట్రాలలో ఈ పంటకు అనుకూలమైన కాలం అక్టోబర్ చివరి వారం నుండి నవంబర్ రెండవ వారం మధ్య కాలంలో ఈ పంటను విత్తుకోవడానికి  అనుకులమైన సమయం. ఆలస్యంమైతే దుంపలు ఊరే సమయంలో ఉష్ణోగ్రతలు పెరగడం వాళ్ళ దుంపలు సరిగా ఊరావు మరియు నాణ్యత కోల్పోవడం జరుగుతుంది.</p>
<h3>నేల తయారి విధానం</h3>
<p>ఈ పంటకు తేలికపాటి నేలలు, ఎర్ర నేలలు, సారవంతమైన ఇసుక నేలలు, నీరు నిల్వ ఉండని నేలలు అనుకూలమైనవి. నల్లరేగడి నేలలు మరియు నీరు నిల్వ ఉండే నేలలు ఈ పంటకు అనుకూలమైనవి కావు.</p>
<p>ఈ దుంపజాతి పంటలు వేసేప్పుడు నేల వదులుగా అయ్యేలా 2-3 సార్లు దున్నుకోవాలి. చివరి దుక్కికి ముందు ఎకరానికి పశువుల ఎరువు 8-12 టన్నులతో పాటుగా 150 కిలోల సింగిల్ సూపర్ ఫాస్ఫేట్, 40 కిలోల యూరియ, 30 కిలోల మ్యూరేట్ ఆఫ్ పోటాష్ వేసుకొని నేలలో కలిసే విధంగా చివరి దమ్ము చేసుకోవాలి. </p>
<h3>విత్తనం విత్తుకునే విధానం</h3>
<img src="https://media.istockphoto.com/id/450754473/photo/cutting-potatoes-into-chips.jpg?s=612x612&w=0&k=20&c=jRUEl7X3obaBClsZ43ngznQmVDqBMiMTg6I5lh_BfoY=" class="logo1"/><br></br>
<p>మంచి దిగుబడుల కోసం నాణ్యమైన విత్తన ఎంపిక చాలా ముఖ్యం. విత్తన మోతాదు  ఎకరానికి 600-800 కిలోల విత్తనం అవసరం పడుతుంది. దుంప పంటలను ఎత్తు బోదెల పద్ధతి ద్వారా పంటను వేస్తె మంచిది ఇలా చేస్తే పంట చేనులో నీరు నిల్వ ఉండకుండా తద్వారా దుంప కుళ్ళు తెగులును నివారించవచ్చు. బోదెల మధ్య దూరాలు 70-90 సెంటి మీటర్లుగా ఉండేలా మరియు మొక్కకి మొక్కకి మధ్య దూరం 20 సెంటి మీటర్లు ఉండేలా చూసుకొని విత్తనాలను విత్తుకోవాలి. </p>
<h3>నీటి యాజమాన్యం</h3>
<p>ఈ బంగాళదుంప సాగులో నీటి వినియోగం తక్కువగా ఉంటుంది కావున నీటి లభ్యత తక్కువ ఉన్న నేలలో కూడా సాగు చెయ్యవచ్చు. విత్తనం నాటిన వెంటనే నీటిని అందివ్వాలి. దుంపలు తయారు అయ్యే వరకు 8-10 రోజులకు ఒక్కసారి నీటి తడులను అందివ్వాలి. దుంపలు ఊరుతున్న సమయంలో 5-6 రోజులకు ఒక్కసారి నీటిని అందివ్వాలి. దుంపలు నెల నుండి బయటకు తీసే సమయానికి 10-12 రోజుల ముందు నుండే నీటిని ఆపివేసి నేలను ఆరబెట్టాలి. </p>
<h3>కలుపు యాజమాన్యం</h3>
<p>విత్తనం నాటిన 24-48 గంటల మధ్య సమయంలో ఒక్క లీటర్ నీటికి 5 ml అలాక్లోర్ లేదా 1.5 గ్రాముల మెట్రోబుజిన్ కలుపుకొని పిచికారి చేసుకోవాలి. మొక్కలు ఎదుగుతున్న సమయంలో 20-30 రోజుల పంటకాలంలో అంతరకృషి ద్వారా కలుపుని తొలగించాలి.</p>
<p>దుంపలు ఊరే సమయంనికి ముందు నుండే మొక్కల మొదల్ల వద్దకు మట్టిని ఎగత్రోయ్యాలి. లేదంటే దుంపలు బయట సూర్యరశ్మి తగిలి ఆకుపచ్చగా మరి నాణ్యత కోల్పోవడంతో పాటుగా విషపూరితంగా తయారవుతాయి. కావున పంట వయస్సు 30 రోజుల నుండి దుంపలు తయారు అయ్యే వరకు 2-3 సార్లు మట్టిని ఎగత్రోయ్యాలి. </p>
<p>దుంపలను తవ్వడానికి 4-5 రోజులకు ముందు ఎండిపోయిన మొక్కలను మొదళ్లకు కోసివేసి బోదెల మీద పరుచుకుంటూ వెళ్ళాలి. లేదంటే దుంప యొక్క పై పొర పొలుసులుగా లేచి నాణ్యత తగ్గి నిల్వ సామర్ద్యం కూడా తగ్గుతుంది. కావున 4-5 రోజులు సూర్యరశ్మి తగలకుండా నెలలోనే ఉంచడం ద్వారా పై పొర మందంగా మారి  దుంప నాణ్యంగా తయారవుతుంది. </p>
<h3>తెగుళ్ళు మరియు చిడపిడలు </h3>
<img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2022/09/Potato_Blight_Foliage.width-800.jpg?fit=300%2C214&ssl=1" class="logo"/>
<p>బంగాళదుంప పంటకు ప్రధానంగా సోకే తెగుళ్ళు మరియు చిడపిడలు దుంప తొలుచు పురుగు. ఈ పురుగు దుంపలు తయారయ్యే తొలి దశ నుండే ఆశిస్తుంది. వీటితో పాటు రసం పిల్చు పురుగు , పొగాకు లద్దె పురుగు (కత్తెర పురుగు), తెల్లనల్లి మరియు ఆకు మాడు తెగులు ఇవి పంటకు చాల నష్టం కలిగిస్తాయి. </p>

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

export default LeftCrops5;
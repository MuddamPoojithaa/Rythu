import React from 'react';
import './Crops.css';
import { Link } from 'react-router-dom';
import NewsAds from './Leftads/adsection';
import RightNewsAds from './rightadscomonent';
import NewsHeadlines from './headlines';
import { Outlet } from 'react-router-dom';
import img1 from './crops-ads/tomato.jpg';
import img2 from './crops-ads/Mirchi.jpg';
import img4 from './crops-ads/onion.jpg';
import img5 from './crops-ads/Maize.jpg';
import img6 from './crops-ads/carrot.jpg';
import img7 from './crops-ads/Rice.jpg';
import img8 from './crops-ads/potato.jpg';
import img9 from './crops-ads/pea.jpg';
import img10 from './crops-ads/Brinjal.jpg';
import img11 from './crops-ads/Ladyfinger.jpg';

const Crops = () => {
    return (
       <div className='layout'>
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
           <img src= {img5} alt="మొక్కజొన్న సాగు విధానం " />
           <p>మొక్కజొన్న ఉత్పత్తి<br></br>
            (Maize cultivation in telugu)</p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc3"  target="_blank" rel="noopener noreferrer">
           <img src={img11}  alt="బెండ సాగు విధానం " />
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
            <div className="Crops-content">
            <div className='Crops img'>
                <Outlet />
                <img src={img2} alt="Crops" className="Crops-image" />
                <div className='text'>
                <h2 style={{color:"red"}}>మిరప సాగు విధానం – Chilli Cultivation in Telugu</h2>
                <p>మిరపను మన తెలుగు రైతులు ఎర్రబంగారంగా  పిలిచుకుంటారు. ఈ పంటలో కొన్ని మెళకువలు పాటిస్తే సంపద కుడా ఆ స్థాయిలో ఉంటుంది. </p>
                <h3>నేల తయారి</h3>
                <p>మిరప పంటకు ఎర్రనేలలు మరియు నల్లరేగడి నేలలు అనువైనవి. పంట సాగు భూమిలో పోషకాల శాతాన్ని పెంచుకోవడానికి ముందుగా పచ్చిరోట్ట లేదా మినుము పంటను వేసుకొని భూమిలో కలియ దున్నాలి. దీనివల్ల భూమికి సహజ పోషకాలు లభిస్తాయి. 10-15 రోజుల తరువాత ట్రాక్టర్ కల్టివేటర్ తో నేల మెత్తగా దుక్కి అయ్యేవరకు 2-౩ సార్లు దున్నుకోవాలి. </p>
                <h3>నారు పెంచే విధానం</h3>
                <p>నారు పెంచడానికి నేలకు కొంచం ఎత్తులో మట్టిని బెడ్లుగా చేసుకోవాలి. నాలుగు మూలాలు సమన ఎత్తులో ఉండేలా చూసుకోవాలి. నారుమడిలో విత్తనాల మధ్య దూరం ఒక్క అంగుళం ( ఒక్క ఇంచు) దూరం ఉండేలా వేసుకోవాలి. సేల్టర్ లో నారు వెయ్యనివారు నారు మొక్కలకి ఎక్కువ ఎండ తగలకుండా నీడ కోసం జాలి పరదా లేదా వస్త్రాన్ని టెంటులగా పైన వేసుకోవాలి. మొక్క వయస్సు 35 -40 రోజుల మధ్యలో మొక్కలను నేలల్లో నాటుకోవడానికి సిద్ధం చేసుకోవాలి.</p>
                <h3>మొక్కలను నాటుకునే విధానం</h3>
                <p>మొక్కలను నీటి వసతి నేలల్లో నాటుకునేప్పుడు మొక్కల సాధారణ దూరాలు 24 x 24 అంగుళాలు (ఇంచులు), లేదా 26 x 26 అంగుళాలు, లేదా 28 x 28 అంగుళాల దూరం నేల స్వభావాన్ని బట్టి దురాన్ని ఎంచుకొని రెండువైపులా అచ్చులుగా దునుకోవాలి. ఇలా రెండువైపులా అచ్చులుగా వెయ్యడం వల్ల మొక్కల మధ్య సమాన దూరాలు, కలుపు యంత్రాలు లేదా కలుపు నాగలి అనువుగా ఉండడం వల్ల కూలీల వినియోగం తగ్గుతుంది. అలాగే మొక్క ఎదుగుదలకు కూడా బాగుంటుంది. మొక్కలు పెట్టడానికి తీసిన రంధ్రాలలో కొద్దిగా నీరు పోసి వేర్లు మడత పడకుండా జాగ్రతగా నాటుకోవాలి. డ్రిప్ పద్ధతిలో నాటుకునేటప్పుడు మొక్కల మధ్య దూరం 30 – 45 సే.మీ దూరం అనువైనది.</p>
                <h3>కలుపు యాజమాన్యం</h3>
                <p>మిరప పంట దిగుబడి తగ్గించడానికి కలుపు పెద్ద సమస్య. కలుపు నివారణకు మొక్కలు నాటిన 20-25 రోజుల తరువాత కలుపు గొర్రు లేదా గుంటుకలను ప్రతి 15-20 రోజులకు ఒక్కసారి దున్నాలి ఎలా మొక్క నేలమొత్తన్ని కప్పివేసేవరకు 4-5 సార్లు దున్నాలి. కలుపు గొర్రు లేదా గుంటుకల వల్ల మొక్క వేర్లు నేలలోకి విస్తరించి మొక్క ఎదుగుదల బాగుంటుంది. రెండువైపులా సాల్లుగా మొక్కలు నాటుకున్న వారికీ మొక్కల మధ్య ఉన్న కలుపు కూడా పోవడం వల్ల కలుపు కూలీల వినియోగం తక్కువగా ఉండటం జరుగుతుంది. </p>
                <p>కలుపు నివారణకు రసాయనాలు మొక్కలను నటుకునే 1-2 రోజుల ముందు పెండిమిథాలిన్ 1.5 మీ.లీ/ 1 లీటర్  కలుకొని పిచికారి చేసుకోవాలి. పంటలో కలుపుమొక్కలు ఉన్నట్లయితే మొక్కలు నాటిన 25 రోజుల తరువాత క్వైజాలోఫాస్ ఇథైల్ ఎకరానికి 400-500 మీ.లీ మొక్కలపై పడకుండా జాగ్రతగా పిచికారి చెయ్యాలి. 
                </p>
                <h3>ఆకుముడత తెగులు</h3>
                <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/01/akumudatha.jpg?fit=500%2C300&ssl=1" alt="Crops" className='mirchi imgage' ></img>
                <p>ఫిప్రోనిల్ 2 మి.లీ. లేదా స్పైనోశాడ్ 0.3 మీ.లీ. లేదా డైఫెన్ తురాన్ 1.5 గ్రా’ 1 లీటర్ లో కలుపుకొని పిచికారి చేసుకోవాలి. </p>
                <h3>బ్యాక్టీరియా ఆకుమచ్చ తెగులు</h3>
                <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/01/ఆకుముడత-తెగులు.jpg?fit=500%2C300&ssl=1" alt="Crops"></img>
                <p>కాపర్ ఆక్సిక్లోరైడ్ ౩ గ్రా’ + స్త్రెప్టోసైక్లిన్ 1 గ్రా’ 1 లీటర్ నీటిలో కలుపుకొని పిచికారి చెయ్యాలి. </p>
            </div>
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
            <img src= {img4} alt="ఉల్లి సాగు విధానం"  />
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

export default Crops;

import React from 'react';
import './lc4.css'; // Ensure your CSS file path is correct
import NavImage from './Untitled-3.png';
import NewsAds from '../Leftads/adsection';
import RightNewsAds from '../rightadscomonent';
import NewsHeadlines from '../headlines';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
const LeftCrops4 = () => {

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
           <img src="https://telugu-cdn.b-cdn.net/media/istptdn0/easy-to-make-basmati-rice-_-authentic-royal.jpg"  alt="బాస్మతీ బియ్యం  సాగు విధానం " />
          <p>బాస్మతీ బియ్యం సాగు విధానం<br></br>
        (rice cultivation in telugu ) </p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc2"  target="_blank" rel="noopener noreferrer">
           <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2020/10/Untitled-.jpg?resize=900%2C400&ssl=1"  alt="మొక్కజొన్న సాగు విధానం " />
           <p>మొక్కజొన్న ఉత్పత్తి<br></br>
            (Maize cultivation in telugu)</p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc3"  target="_blank" rel="noopener noreferrer">
           <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/08/Featured-photo-size.jpg?resize=900%2C400&ssl=1"  alt="బెండ సాగు విధానం " />
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
           <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2022/09/Featured-photo-size.jpg?resize=900%2C400&ssl=1"  alt="క్యాలీఫ్లవర్ సాగు విధానం"  />
           <p>ఆలుగడ్డ సాగు విధానం<br></br>
           (Potato Cultivation in Telugu)</p>
           </Link>
          </div>
           </div>
           </div>
            <div className='content'>
                <Outlet />
                <div className='middle-content'>
                <h2>క్యాలీఫ్లవర్ సాగు విధానం-cauliflower cultivation in telugu</h2>
    <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/12/Featured-photo-size1.jpg?resize=900%2C400&ssl=1" class="logo"/>
    <p>క్యాలిఫ్లవర్ పంటను పూర్తి విస్తీర్ణంలో ఒకేసారి కాకుండా విడతలవారిగా వేసుకోవడం మంచిది. క్యాలిఫ్లవర్ చల్లని, వాతావరణంలో తేమగా ఉన్న వాతావరణాలలో మంచి దిగుబడులను సాధించవచ్చు. ఈ పంటలో మంచి మెలకువ పద్ధతులను పాటించడం వల్ల అధిక దిగుబడులను సాధించి మంచి లాభాలను ఆర్జించవచ్చు.</p>
    <h2>నేల తయారి </h2>
    <p>ఈ పంటకు నల్లరేగడి నేలలు, ఎర్రనేలలు అనువైనవి. ఉదజని సూచిక (PH విలువ) 5.5 – 6.5 గా ఉన్న నేలలు సాగుకు అనువైనవి. క్యాలిఫ్లవర్ పంట వెయ్యడానికి ఎంచుకున్న నేలను 2 నుండి 3 సార్లు నేల వదులు అయ్యేలా దున్నుకోవాలి. చివరి దుక్కికి ముందు ఎకరానికి 8-10 టన్నుల పశువుల ఎరువు, 40 కిలోల పోటాష్ మరియు 40 కిలోల బాస్వరం వేసుకొని చివరి దుక్కిని కలియ దున్నుకోవాలి.</p>
    <h2>విత్తుకునే విధానం </h2>
    <p>ఒక్క ఎకరానికి సూటి (దేశవాళి) రకం విత్తనాలు అయితే 300 గ్రాముల విత్తనాలు, సంకర రకం విత్తనాలు అయితే 100-150 గ్రాముల విత్తనాలు అవసరం పడుతాయి.  విత్తేముందు ఒక్క 1 కిలో విత్తనానికి 3 గ్రా” తైరం లేదా 3 గ్రా” కార్బండిజంతో విత్తన శుద్ధి చేసుకొనవలెను. నారు పెంచుటకు నారు మడులను నేలకు దాదాపుగా 10 – 15 సెంటి మీటర్ల ఎత్తుగా మడులను చేసుకొని మడులపై అచ్చుగా గీతలు గీసుకొని విత్తనాలను వేసి మెత్తటి మట్టితో కప్పివేయ్యాలి. విత్తనాలకు నీటిని అందించి దానిపై వరిగడ్డిని పలుచగా వేసుకోవాలి. లేదా కోకోఫిట్ తో నింపిన ట్రేలలో విత్తుకోవడం మంచిది. ఈ ట్రేలలో విత్తుకోవడం వల్ల నారును ఆకూ తినే పురుగు ఆశించకుండా ఉంటుంది. ప్రతి రోజు నీటిని పైపాటుగా అందించాలి. నేలపై నారును పెంచే క్రమంలో మడులలో నీరు నిల్వ ఉండకుండా చూసుకోవాలి. </p>
    <h2>మొక్కలు నాటుకునే విధానం</h2>
    <p>నారు వయస్సు 25 – 30 రోజుల మద్య మొక్కలను నాటుకోవడానికి సిద్ధం చేసుకోవాలి. మొక్కలను నాటుకునేప్పుడు సాలుల మద్య దూరం 60 సెం.మీ. మొక్కల మద్య దూరం 45 సెం. మీ. దూరాలు ఉండేలా చూసుకోవాలి. ఎకరానికి 15000 – 18000 మొక్కలు అవసరం పడుతాయి. </p>
    <h2>నీటి యాజమాన్యం</h2>
    <p>తేలికపాటి ఎర్రనేలలు లేదా దుబ్బా నేలలో 7 రోజులకు, నల్లరేగడి నేలలు అయితే 10 రోజులకు ఒక్కసారి నీటిని అందిస్తే సరిపోతుంది. పంట చేనులో నీరు నిల్వ ఉండకుండా చూసుకోవాలి. </p>
    <h2>కలుపు యాజమాన్యం</h2>
    <p>ప్రతి పంటలో ఈ కలుపు ప్రధాన సమస్య మొక్కలు నాటిన 24 నుండి 48 గంటల మధ్య ఒక్క ఎకరానికి 1.25 లీటర్ల పెండిమితలిన్ (లేదా) అలాక్లోర్ 1.2 లీటర్ల రసాయనాన్ని ఇసుకలో కలుపుకొని తేమ గల నేల మీద చల్లుకోవాలి. కానీ పిచికారి చెయ్యకూడదు పిచికారి చెయ్యడం వల్ల నాటిన మొక్కలపై ఈ రసాయనం పడి ప్రమాదానికి గురి అవ్వడం జరుగుతుంది.</p>
    <h2>పువ్వు నాణ్యత కోసం </h2>
    <p>క్యాలిఫ్లవర్ పువ్వు తెల్లగా మరియు మచ్చలు లేకుండా నాణ్యంగా ఉండాలంటే పువ్వు కోతకు 5-7 రోజుల ముందు మొక్క యొక్క ఆకులతో కప్పివేయ్యాలి. ఇలా చెయ్యడం ద్వారా సూర్యరశ్మి పువ్వు మీద పడకుండా ఉండి వువ్వు తెల్లగా ఉండటం వలన మార్కెట్లో మంచి ధర రావడం జరుగుతుంది. 
    </p>
    <h2>చిడ పీడలు మరియు తెగుళ్ళు</h2>
    <p>బోరాన్ లోపం ఉంటె 1 లీటర్ నీటికి 4 గ్రాముల బోరాక్స్ ను మొక్కనాటిన 10 నుండి 15 రోజుల మధ్య మరియు పువ్వు ఏర్పడటానికి 10 రోజుల ముందు పిచికారి చేసుకోవాలి</p>
    <h2>పెను బంక </h2>
    <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/10/aphids.jpg?fit=768%2C576&ssl=1" class="logo"/>
    <p>పెనుబంక పురుగులు ఆకు అడుగు భాగాముకు చేరి మొక్కలోని రసాలన్ని పిల్చి పంటను నాశనం చేస్తాయి. దీని నివారణకు 1 లీటర్ నీటిలో 2 మీ.లీ మాలాథియాన్ (లేదా) లీటర్ నీటికి 2 మీ.లీ.  డైమితోయేట్ కలుపుకొని పిచికారి చేసుకోవాలి. </p>
    </div>
    </div>
    <div className='crops-ads'>
           <div className="recent-ads">
           <h2>Recent posts</h2>
           <div className="crop-item">
          <Link to="/crops-ads/c1"  target="_blank" rel="noopener noreferrer">
               <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2020/12/featured.jpg?resize=900%2C400&ssl=1"  alt="టమాటో సాగు విధానం " />
          <p>టమాటో సాగు విధానం.<br></br>
        (Tomato cultivation in telugu ) </p>
          </Link>
           </div>  
           <div className='crop-item'>
            <Link to="/crops-ads/c2" target="_blank" rel="noopener noreferrer">
            <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2022/01/Featured-photo-size.jpg?resize=900%2C400&ssl=1"  alt="క్యారెట్ సాగు విధానం"  />
            <p>క్యారెట్ సాగు విధానం.<br></br>
                (Carrot cultivation in telugu )</p>
            </Link>
           </div>
           <div className='crop-item'>
            <Link to="/crops-ads/c3" target="_blank" rel="noopener noreferrer">
            <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/04/Featured-photo-size1.jpg?resize=900%2C400&ssl=1"  alt=" వంకాయ సాగు విధానం "  />
            <p> వంకాయ సాగు విధానం.<br></br>
                (Brinjal Cultivation in telugu)</p>
            </Link>
           </div>
           <div className='crop-item'>
            <Link to="/crops-ads/c4" target="_blank" rel="noopener noreferrer">
            <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/03/Featured-photo-size-1.jpg?resize=900%2C400&ssl=1"  alt="ఉల్లి సాగు విధానం"  />
            <p>ఉల్లి సాగు విధానం<br></br>
                (Onion Cultivation in Telugu)</p>
            </Link>
           </div>
           <div className='crop-item'>
            <Link to="/crops-ads/c5" target="_blank" rel="noopener noreferrer">
            <img src="https://i0.wp.com/rythurajyam.com/wp-content/uploads/2022/03/Featured-photo-size.jpg?resize=900%2C400&ssl=1"  alt=">కంది సాగు విధానం "  />
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

export default LeftCrops4;
import React from 'react';
import './right Ad6.css'; // Import your CSS file for styling
import img from './Untitled-3.png';
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
const Ad6 = () => {
    return (
        <div className='layout'>
            <img src={img} className="nav" alt="Navigation Icon" />
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
                <h2>భారీగా పెరిగిన వెల్లుల్లి ధర.. భవిష్యత్తులో ఇంకా పెరిగే అవకాశం ఉందంటూ రైతులు హర్షం..</h2>
              
                <img src="https://telugu-cdn.b-cdn.net/media/xivjene2/garlic.jpg" className="logo" alt="Garlic Image" />
                <p>టొమాటో ధర పెరుగుతుండడంతో ఇప్పుడు వెల్లుల్లి ధర కూడా గణనీయంగా పెరుగుతోంది. విస్తారమైన వెల్లుల్లి సాగుకు పేరుగాంచిన రాజస్థాన్‌లో ఈ పెరుగుదల ప్రత్యేకించి జరిగింది మరియు ఇది దేశం అంతటా ప్రభావాన్ని చూపుతుందని భావిస్తున్నారు. పర్యవసానంగా, ధరల పెరుగుదలతో పాటు మార్కెట్‌లలో వెల్లుల్లి రాక కూడా పెరిగింది. </p>
                <p>అధిక ధరలను సద్వినియోగం చేసుకోవాలనే ఆశతో ప్రస్తుతం వెల్లుల్లి మార్కెట్‌కు రైతులు తరలివస్తున్నారు. అంతేకాదు రానున్న కాలంలో ధరలు మరింత పెరిగే అవకాశం ఉందని నిపుణులు అంచనా వేస్తున్నారు. ఆసక్తికరంగా, ఈ ధోరణి ప్రతాప్‌గఢ్ మార్కెట్‌లో ప్రత్యేకంగా కనిపిస్తుంది. వెల్లుల్లి సాగులో నైపుణ్యం కలిగిన రైతులు ఈ పరిణామాలతో సంతోషం వ్యక్తం చేస్తున్నారు.</p>
                <p>దైనిక్ భాస్కర్ నివేదిక ప్రకారం, మార్కెట్ కమిటీ కార్యదర్శి మదన్ లాల్ గుర్జార్ గత వారం రోజులుగా వెల్లుల్లి ధరలో గణనీయమైన పెరుగుదలను నివేదించారు. ప్రస్తుతం మార్కెట్‌లో క్వింటాల్‌ వెల్లుల్లి ధర రూ. 13,000, ఫలితంగా రైతులు తమ పంటలను విక్రయించడానికి తీసుకువచ్చారు. రోజూ దాదాపు 1,500 బస్తాల వెల్లుల్లి మార్కెట్‌కు వస్తోంది. రానున్న రోజుల్లో వెల్లుల్లి ధర మరింతగా పెరుగుతుందని, ఇప్పటికే ఇతర రాష్ట్రాలకు వెల్లుల్లి ఎగుమతి ప్రారంభమైందని వెల్లుల్లి వ్యాపారి అంచనా వేశారు.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNRN6I8uLYeC7a_rNkMM2BOHeB8fDvOopa1DxeG0Dr6qPow7uUr_UzpRksxlz01WDjr0&usqp=CAU" className="logo1" alt="Another Image" />
                <p>వెల్లుల్లి ధరలు భారీగా పెరగడంతో రైతులు హర్షం వ్యక్తం చేస్తున్నారు. అనేక ప్రాంతాలలో వెల్లుల్లి ధరలు గణనీయంగా పెరిగాయి, దీనికి అనేక కారణాలు ఉన్నాయి. ముఖ్యంగా, మంచినీటి కొరత, వర్షాలు తగ్గడం మరియు కొన్ని ప్రాంతాలలో రైతులు వెల్లుల్లి సాగు చేయడం తగ్గడం వంటి అంశాలు ఇందుకు కారణమవుతాయి.</p>
                <h3>ధర పెరుగుదల కారణాలు:</h3>
                <p>కొన్ని ప్రాంతాలలో రైతులు ఇతర పంటల సాగు వైపు దృష్టి సారించడం వల్ల వెల్లుల్లి సాగు తగ్గింది.</p>
                <p>వాతావరణ పరిస్థితులు మారడంతో, మంచి వర్షపాతం లేకపోవడం వల్ల పంట దిగుబడి తగ్గింది.</p>
                <p>వెల్లుల్లి నిల్వ చేయడానికి సరైన స్టోరేజీ సౌకర్యాలు లేకపోవడం వల్ల పంట వృథాగా పోయే అవకాశాలు ఉన్నాయి.</p>
                <p>పంటల పెట్టుబడులు, వడ్డీ రేట్లు, ప్రభుత్వ సహాయం వంటి ఆర్థిక అంశాలు కూడా ధరలపై ప్రభావం చూపుతాయి.</p>
                <p>రైతులు భవిష్యత్తులో కూడా వెల్లుల్లి ధరలు ఇంకా పెరగవచ్చని భావిస్తున్నారు. ముఖ్యంగా, దిగుమతులు తగ్గడం, ఎగుమతుల పెరుగుదల, నిల్వ సౌకర్యాలు మెరుగుపడటం వంటి అంశాలు ధరల పెరుగుదలకి దోహదం చేసే అవకాశాలు ఉన్నాయి.</p>
                <h3>రైతుల స్పందన:</h3>
                <p>పెరిగిన ధరలతో రైతులకు మంచి ఆదాయం అందుతోంది.</p>
                <p>ధరలు ఎంతమేరకు నిలుస్తాయో తెలియక, భవిష్యత్తులో మార్పుల గురించి వారు ఆందోళన చెందుతున్నారు.</p>
                <p> కొంతమంది రైతులు, పంటల విభజన, నిల్వ సౌకర్యాలు మెరుగుపరచడం వంటి వ్యూహాలు రూపొందిస్తున్నారు.</p>
                <h3>రైతులకు సూచనలు:</h3>
                <p>మార్కెట్ పరిస్థితులను నిరంతరం గమనిస్తూ, మద్దతు ధరలను అనుసరించాలి.</p>
                <p>వెలుగుల్లిని సురక్షితంగా నిల్వ చేయడానికి, ఆధునిక స్టోరేజీ సౌకర్యాలను వినియోగించుకోవాలి.</p>
                <h3>వినియోగదారుల పై ప్రభావం:</h3>
                <p>వెల్లుల్లి ధరలు పెరగడంతో వినియోగదారులు కూడా ప్రభావితమవుతున్నారు. ముఖ్యంగా, చిన్న వ్యాపారులు, రెస్టారెంట్లు వంటి చోట్ల ధరలు పెరుగుతుండడం వల్ల వ్యాపారం నష్టపోతుంది.</p>

           <p>ఈ పరిణామాలు అన్నీ కలిపి, రైతులు మరియు వినియోగదారులు తమ వ్యూహాలను మార్చుకోవాల్సిన అవసరం ఉంది.</p>
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

export default Ad6;

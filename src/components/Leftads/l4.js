import React from 'react';
import './left Ad5.css'; // Ensure your CSS file path is correct
import NavImage from './Untitled-3.png';
import NewsAds from './adsection';
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
const Ad5Component = () => {
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
                <h2>రైతు భరోసా అమలులో మరోకీలక నిర్ణయం</h2>
                
                <p>తెలంగాణ ప్రభుత్వం ఎన్నో కొత్త మార్పులకు శ్రీకారం చుడుతోంది. దీనిలో భాగంగా రైతు భరోసాలో సీలింగ్ విధించిందని మనందరికి తెలిసిన విషయమే. తాజాగా ఈ సీలింగ్ లో కూడా కొన్ని మార్పులు చేర్పులు చేసేందుకు కాంగ్రెస్ ప్రభుత్వం సిద్ధమయ్యిందని తెలుస్తుంది.</p>
                <img src="https://telugu-cdn.b-cdn.net/media/zl3hhhzk/download-18.jpg?width=250&format=webp" className="logo" alt="Farmer with Produce" />
                <p>అయితే కాంగ్రెస్ ప్రభుత్వం ఈ ఏడాది అమలుచేస్తామన్న రైతు భరోసా మరియు రుణమాఫీ ఇంకా చెయ్యలేదని ఒక పక్క ప్రతిపక్షాలు మరోపక్క రైతులు ప్రభుత్వాన్ని ప్రశ్నిస్తుండగా, దీనికి సమాధానంగా ఈ ఆగష్టు లోపు రైతులకు ఈ పధకాలు అందిస్తామని ప్రకటించారు. దేశంలో ఎలక్షన్ కోడ్ అమలులో ఉన్నందున ఈ పథకాలను అమలుచేయడం సాధ్యపడలేదని, ఎలక్షన్ కోడ్ పూర్తవగానే రైతు భరోసా నగదును రైతుల ఖాతాల్లో జమచేస్తామని తెలిపారు. కాంగ్రెస్ ప్రభుత్వం అధికారంలోకి వచ్చిన తరువాత రైతు భరోసాలో సీలింగ్ విధించిందని మనందరికీ తెలిసిన విషయమే</p>
                <p>ఈ సీలింగ్ ప్రకారం, ఐదు ఎకరాలలో లోపు ఉన్న రైతులకు మాత్రమే రైతు భరోసా లభిస్తుందని ప్రకటించింది, ప్రస్తుతం ఈ పరిమితిని సడలించాలని ప్రభుత్వం యోచిస్తున్నట్లు తెలుస్తుంది. మొదట 5 ఎకరాలలో లోపు ఉన్న రైతులకు ఎకరానికి 7,500 రూపాయిలు ఇవ్వాలని ప్రభుత్వం నిర్ణయించింది. అయితే కొన్ని పరిస్థితులను దృష్టిలో పెట్టుకొని ఈ పరిమితిని 10 ఎకరాలకు పెంచే అవకాశం ఉన్నట్లు తెలుస్తుంది.</p>
                <p>గతంలో బిఆర్ఎస్ పార్టీ అధికారంలో ఉన్నపుడు, ఎన్ని ఎకరాలు ఉంటె అన్ని ఎకరాలకు రైతు భరోసా ఇచ్చేవారు, దీనివలన కొందరు సామాన్య రైతులు నష్టపోతున్నారని కాంగ్రెస్ ప్రభుత్వం హయాంలోకి వచ్చిన తరవాత రైతు భరోసాలో సీలింగ్ విధించడం జరిగింది. ఇప్పుడు ఈ సీలింగ్ లో కొన్ని సడలింపులు కాంగ్రెస్ ప్రభుతం సిద్దమయ్యింది. దీనికి సంబంధించి, ఎన్నికల ఫలితాల తరువాత క్యాబినెట్ సమావేశాల్లో మరియు బడ్జెట్ సమావేశాల్లో దీని గురించి చర్చించిన తర్వాత తుది నిర్ణయానికి రానున్నట్లు తెలుస్తుంది.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRvlvGBi7D8X8obs6TvAcNxliB4iIna8LwbIu5ziIl7BgBmBd8nUykw4czny8G14fOwg&usqp=CAU" className="logo1" alt="Agriculture Meeting" />
                <p>రైతు భరోసా అమలులో కీలక నిర్ణయం. ప్రభుత్వం, ఈ పథకానికి అదనపు నిధులు కేటాయిస్తూ రైతులకు మరింత సాయాన్ని అందజేస్తోంది. ఈ మేరకు ప్రతి రైతుకు పెట్టుబడి సహాయం పెంచి, మరింత ఆర్థిక భరోసా కల్పించేందుకు చర్యలు చేపట్టారు.</p>
                <p>ఈ కొత్త నిర్ణయంతో రైతుల సంక్షేమం మరింత మెరుగుపడుతుందని, సాగు ఖర్చుల భారం కొంత తగ్గుతుందని ఆశిస్తున్నారు. రైతులు ఈ అవకాశాన్ని వినియోగించుకుని, తమ వ్యవసాయ కార్యకలాపాలను ముందుకు తీసుకెళ్లవచ్చు.</p>
                <p>రైతు భరోసా పథకం కింద మరో కీలక నిర్ణయం తీసుకుంది ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రభుత్వం. ఈ పథకం కింద, రాష్ట్రంలోని రైతులకు ఆర్థిక సహాయం అందించటం, పంటల నష్ట పరిహారం ఇవ్వటం, మరియు ఇతర సదుపాయాలు కల్పించడం జరుగుతోంది.</p>
                <h2>ముఖ్యాంశాలు:</h2>
                <h3>నూతన ఆర్థిక సాయము:</h3>
                <p>రైతులకు ప్రతి ఏడాది కొన్ని వేల రూపాయల ఆర్థిక సాయం అందించబడుతుంది. ఇది రెండు లేదా మూడు విడతలలో వారికి జమ చేయబడుతుంది.</p>
                <h3>పంటల నష్ట పరిహారం:</h3>
                <p>వర్షాలు లేదా ఇతర ప్రకృతి విపత్తుల వల్ల పంటలకు నష్టం కలిగితే, ఆ నష్టాన్ని పరిహరించడానికి రైతులకు నష్ట పరిహారం ఇవ్వబడుతుంది.</p>
                <p>అప్పు కింద ఉన్న రైతులకు రుణమాఫీ సదుపాయం అందించడం ద్వారా, వారిపై ఉన్న ఆర్థిక భారం తగ్గించడంలో ప్రభుత్వం సహాయపడుతుంది.</p>
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

export default Ad5Component;

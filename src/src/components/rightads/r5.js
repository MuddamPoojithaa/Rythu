import React from 'react';
import './right Ad5.css'; // Assuming you have a CSS file named right Ad5.css
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
const Ad5 = () => {
    return (
        <div className='layout'>
            <img src={img} className="nav" alt="Navigation" />
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
                <h2>రైతులకు శుభవార్త.. మార్కెట్ లో పత్తికి రూ.7,020 ధర</h2>
                
                <img src="https://telugu-cdn.b-cdn.net/media/kbhhazhb/new-project-2.jpg" className="logo" alt="Logo" />
                <p>ఇటీవల వర్షాకాలంలో పత్తికి మద్దతు ధరకు సంబంధించి ప్రభుత్వం ఒక ముఖ్యమైన ప్రకటనను విడుదల చేసింది. ప్రస్తుతం పింజ రకం పత్తకి మద్దతు ధర రూ.7,020గా వెల్లడించింది. అదనంగా, ప్రభుత్వం ఇతర రకాల పత్తికి కూడా మద్దతు ధరలను ప్రకటించింది, BBSPL రకానికి మద్దతు ధర రూ.6,970 మరియు ఎంఈసీహెచ్‌ రకానికి మద్దతు ధర రూ.6,920గా ప్రకటించింది. </p>
                <p>పత్తికి అధికారికంగా ప్రకటించిన కనీస మద్దతు ధరకే వ్యవసాయ ఉత్పత్తుల కొనుగోలుకు జిల్లాలోని వ్యవసాయ మార్కెట్లు, జిన్నింగ్‌ మిల్లుల్లో అధికారులు ఏర్పాట్లు చేస్తున్నారు. రైతులు తమ ఉత్పత్తులకు నిర్ణీత మద్దతు ధరను పొందేందుకు అధిక-నాణ్యత, తేమ లేని పత్తిని అందించాలని మార్కెటింగ్ శాఖ ప్రతినిధులు తెలిపారు.</p>
                <p>కాటన్ కార్పొరేషన్ ఆఫ్ ఇండియా (CCI) ఈ సంవత్సరం కొత్త నిబంధనలను అమలు చేసింది, దీని ప్రకారం ఇప్పుడు రైతులు పత్తిని విక్రయించడానికి వారి ఆధార్ కార్డులను లింక్ చేయాలి. CCI రైతులు తమ పత్తిని కొనుగోలు చేసే ముందు ఆధార్ బయోమెట్రిక్ ధృవీకరణను తప్పనిసరి చేసింది.</p>
                <img src="https://images.news18.com/telugu/uploads/2024/01/Cotton-prices-decreasing-in-market-Know-about-quintal-price-4-2024-01-8a7e5bbabc961e0c95f50e96f1bebe19.jpg?impolicy=website&width=450&height=500" className="logo1" alt="Logo1" />
                <p>పత్తికి మద్దతు ధరను రూ.7,020 గా నిర్ణయించడం రైతులకు ఎంతో మంచిది. ఈ నిర్ణయం పత్తి రైతులకు ఆర్థికంగా బలం ఇస్తుంది మరియు పత్తి సాగు చేస్తునప్పుడు వారు కలిగే ఖర్చులను, కష్టాలను తగ్గించడంలో సహాయపడుతుంది.</p>
                <h3>రైతులకు లాభాలు:</h3>
                <p>పత్తి పంటకు అధిక మద్దతు ధర ఉండడం వల్ల రైతులు తక్కువ పంట పెట్టుబడి అయినా మంచి లాభాలు పొందవచ్చు.</p>
                <p>పత్తికి మంచి ధర ఉండటం రైతులకు ఉత్సాహాన్ని ఇస్తుంది, తద్వారా మరిన్ని పత్తి పంటలను సాగు చేయడానికి ప్రోత్సహిస్తుంది.</p>
                <p> పత్తి పంటకు మంచి ధర నిర్ణయించడం వల్ల మార్కెట్‌లో స్థిరీకరణ జరుగుతుంది. ఈ విధంగా ధరలు సమానంగా ఉండి రైతులకు నష్టాలు తగ్గిస్తాయి.</p>
                <p>మంచి మద్దతు ధర వల్ల కార్పొరేట్ సంస్థలు రైతులపై అధిక నైపుణ్యం చూపించలేవు, తద్వారా రైతులకు అధిక ధరలు పొందటానికి అవకాశం ఉంటుంది.</p>
                <p>పత్తి పంటకు అధిక ధర ఉండటం వల్ల మొత్తం వ్యవసాయ రంగం అభివృద్ధి చెందుతుంది. రైతులు మంచి లాభాలు పొందటం వల్ల వ్యవసాయ రంగం మరింత బలపడుతుంది.</p>
                <h3>రైతులకు సూచనలు:</h3>
                <p>పత్తి పంట నాణ్యతను మెరుగుపరచడం ద్వారా ఎక్కువ ధర పొందవచ్చు.</p>
                <p>నూతన వ్యవసాయ పద్ధతులు, సాంకేతికతలను ఉపయోగించడం ద్వారా పంట దిగుబడి పెంచుకోవచ్చు.</p>
                <p>పత్తి రైతులు సహకార సంఘాలను ఏర్పాటు చేసి పత్తి మార్కెటింగ్, నిల్వ మరియు సరఫరా వంటి పనులను సమర్థంగా నిర్వహించవచ్చు.</p>
                <p>రైతులకు ప్రభుత్వం అందించే వివిధ పథకాలు, సబ్సిడీలు మరియు రుణాలను సద్వినియోగం చేసుకోవాలి.</p>
                <h3>పత్తి పరిశ్రమపై ప్రభావం:</h3>
                <p>పత్తి పరిశ్రమకు అధిక మద్దతు ధర ఉంటే పత్తి ఉత్పత్తి పెరుగుతుంది, తద్వారా పరిశ్రమలో కొత్త ఉపాధి అవకాశాలు కూడా ఉత్పన్నం అవుతాయి. అధిక నాణ్యత గల పత్తి ఉత్పత్తి ద్వారా ఎగుమతులు పెరుగుతాయి, దీని వలన దేశానికి ఆర్థిక లాభం కలుగుతుంది.</p>
                
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

export default Ad5;

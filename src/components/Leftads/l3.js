import React from 'react';
import './left Ad4.css'; // Ensure your CSS file path is correct
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
const Ad4Component5 = () => {
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
                <h2>ఆంధ్ర ప్రదేశ్: పంట నష్టపోయిన రైతులకు వారి ఖాతాల్లో డబ్బు జమ....</h2>
                <img src="https://telugu-cdn.b-cdn.net/media/px4dczmh/premium-photo-_-indian-farmer-showing-a-mobile-screen-at-agriculture-field.jpg" className="logo" alt="Farmer with Mobile" />

                <p>అందరి కళ్ళు ఇప్పుడు ఆంధ్ర ప్రదేశ్ పైనే ఉన్నాయి. జూన్ 4 తర్వాత ఏ పార్టీ అధికారంలోకి వస్తుందన్న తీవ్ర ఉత్కంఠ ప్రజల్లో నెలకొంది. కౌంటింగ్ కి ఒక్కరోజే ఉండగా, రెండు ప్రధాన పార్టీలు అధికారం తమదంటే తమదేనంటూ, ధీమా వ్యక్తం చేస్తున్నారు, మరోపక్క పార్టీశ్రేణులు కూడా దీనికి తగ్గట్టు సన్నాహాలు చేస్తున్నారు. ఈ ఉత్కంఠకి ఎగ్జిట్ పోల్స్ మరింత ఆశక్తిని రేపుతున్నాయి. ఈ సమయంలో ఆంధ్ర ప్రదేశ్ ప్రభుత్వం రైతులకు శుభవార్త అందించింది.</p>

                <p>ఎన్నికల కారణంగా ఆగిపోయిన రైన్ ఇన్పుట్ సబ్సిడీ నిధులను ప్రభుత్వం విడుదల చేసింది. చాల మంది రైతుల ఖాతాల్లో ఈ నిధులు జమయాయ్యి. ప్రకృతి వైపరీత్యాల కారణంగా పంట నష్టపోయిన రైతులకు ఆంధ్ర ప్రదేశ్ ప్రభుత్వం, ఆ పంట సీజన్ ముగిసేలోగా నష్టపరిహారం అందిస్తూవస్తోంది అయితే ఈ సారి ఎన్నికల కోడ్ అమలులో ఉన్నందున, ఈ నిధులు అందిచడంలో ఆలస్యం జరిగింది.</p>
                <p>గతేడాది రబి సీసన్ ప్రారంభంలో మిచాంగ్ తుఫాను సృష్టించిన భీభత్సానికి ఆంధ్ర ప్రదేశ్లోని ఎంతో మంది రైతులు పంట నష్టపోయారు, ఈ తుఫానులో కురిసన వర్షాలకు దాదాపు 6.64 లక్షల ఎకరాలలో పంట నష్టపోయినట్లు అధికారులు గుర్తించారు. దీని కారణంగా పంట నష్టపోయిన 4.61 లక్షల మంది రైతులకు రూ.442.36 లక్షల కోట్లు పరిహారంగా ఇవ్వాలని ప్రభుత్వం నిర్ణయించింది. అంతేకాకుండా గత సంవత్సరం ఖరీఫ్ సీజన్లో వర్షాభావ పరిస్థితులతో, 103 కరువు మండలాల్లో 14.24 లక్షల ఎకరాల్లో పంట దెబ్బతినగా, 6.60 లక్షల రైతులకు రూ.847.22 కోట్ల రూపాయిలు సాయం అందించాలని ప్రభుత్వం నిర్ణయించింది.</p>

                <p>అయితే ఎన్నికల కోడ్ అమలులో ఉండటం మూలాన రైతులకు ఈ సహాయం అందించడం ఆలస్యం అయ్యింది. ప్రస్తుతం ఎన్నికల సంగం అనుమతి లభించడంతో, నష్టపరిహారం అందించవలసిన రైతుల్లో దాదాపు 92% మంది ఖాతాల్లో ఈ నగదు జమయ్యిందని అధికారులు తెలిపారు. మొత్తం 8.89 లక్షల రైతుల ఖాతాల్లో రూ.1126 .31 కోట్లు జమకగా మిగిలిన వారికి కూడా తొందర్లోనే ఈ డబ్బు చేరుతుందని అధికారులు స్పష్టం చేసారు. ప్రస్తుతం కొన్ని సాంకేతిక లోపల వలన నిధులు అందించడంలో ఆలస్యం అయ్యిందని, వీటిని సరిచేసేందుకు ప్రయత్నిస్తున్నట్లు అధికారులు తెలిపారు.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHIexaaqfXYaWu-O8DDSL82NWA7sIP8jYnW4LVaqELzVNPHo1PXiBagbXu5yTuf1TXYk&usqp=CAU" className="logo" alt="Agriculture" />
                <p>ఈ కార్యక్రమం కింద, వ్యవసాయ శాఖ అధికారులు పంట నష్టాన్ని అంచనా వేయడం, రైతుల వివరాలను సేకరించడం మరియు వాటిని బ్యాంకులకు పంపించడం జరుగుతుంది. బ్యాంకులు ఆ సమాచారాన్ని పరిశీలించి, సరైన రైతుల ఖాతాల్లో డబ్బును జమ చేస్తాయి.</p>
                <h2>వైఎస్ఆర్ రైతు భరోసా పథకం ముఖ్యాంశాలు:</h2>
                <h3>ప్రత్యక్ష నగదు బదిలీ:</h3>
                <p>పంట నష్టపోయిన రైతులకు ప్రత్యక్షంగా నగదు బదిలీ చేయడం.</p>
                <p>ఈ బదిలీ రైతుల బ్యాంకు ఖాతాల్లో జరుగుతుంది, ఇది వారికి త్వరితంగా అందుతుంది.</p>
                <h2>మార్గదర్శకాలు:</h2>
                <p>వ్యవసాయ అధికారులు పంట నష్టాన్ని అంచనా వేస్తారు.</p>
                <p>నష్టానికి అనుగుణంగా రైతులకు నష్టపరిహారం ఇవ్వబడుతుంది.</p>
                <p>పంట నష్టం నమోదైన ప్రాంతాలను గుర్తించడం.</p>
                <p>రైతుల వివరాలను సేకరించడం మరియు వాటిని బ్యాంకులకు పంపించడం.</p>
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

export default Ad4Component5;

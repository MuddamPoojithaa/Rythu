import React from 'react';
import './lc1.css'; // Ensure your CSS file path is correct
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
const LeftCrops1 = () => {

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
           <img src={img5}  alt="మొక్కజొన్న సాగు విధానం " />
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
            <div className='content'>
                <Outlet />
                <div className='middle-content'>
                <h2>బాస్మతీ బియ్యాO సాగు విధానం-Rice cultivation in Telugu</h2>
               
    <img src={img7}   alt="బాస్మతీ బియ్యం  సాగు విధానం " class="logo"/>
     <p>పెళ్లిళ్లు,శుభకార్యాలు, ఇలా అన్ని ప్రత్యేక సందర్భాల భోజనాల్లో బాసుమతి బియ్యంతో చేసిన వంటకం ఉండాల్సిందే. పొడవైన మెతుకులు, మనసుకు హత్తుకునే సువాసన, తెల్లని ముత్యాలాంటి మృదువైన అన్నం ఇవి బాస్మతి బియ్యం యొక్క లక్షణాలు. బాస్మతి అన్నం నుండి వచ్చే సువాసనకు మంత్రముగ్ధులు అవ్వకుండా ఉండలేము, ఆ వాసనకు ఆకలి మరింత పెరిగి రెండు ముద్దలు ఎక్కువ తినకుండా ఉండలేము. అయితే ఇంతటి ప్రత్యేకత కలిగిన బాస్మతీకి ఆ సువాసన ఎలా వస్తుంది, మరియు ఎటువంటి వాతావరణ పరిస్థితిలో బాగా పండుతుందో ఇప్పుడు తెలుసుకుందాం.</p>
     <p>సువాసనను ఉత్పన్నం చేసే కొన్ని ప్రత్యేక జన్యువులు కలిగిన బియ్యాన్ని ఆరోమెటిక్ రైస్ లాగా పరిగణిస్తారు.బాస్మతి బియ్యం నుండి సువాసన రావడానికి "బీటైన్ అల్డిహైడ్ డీహైడ్రోజనైజ్" (బీఏడీహెచ్2) అనే జన్యువు కారణం. బాస్మతి బియ్యాన్ని ఉడికించిన్నపుడు దానిలో ''2-అసిటైల్-1-పిరొలీన్(2ఏపీ)’’ అనే ప్రోటీన్ కాంపౌండ్ ఉత్పత్తవుతుంది, దీని వలన బాస్మతి అన్నానికి విభిన్నమైన రుచి మరియు సువాసన లభిస్తాయి. దీనితోపాటు బియ్యం రకాన్ని బట్టి కూడా రుచి మరియు సువాసనలో వ్యత్యసం ఉంటుంది. వాతావరణ పరిస్థితులు, నేల మరియు పండించే పద్దతుల మీద ఈ సువాసన అనేది ఆధారపడి ఉంటుంది. </p>
     <p>అయితే ఈ బాస్మతి రకం ఎక్కడ పుట్టిందన్న అనుమానం అందరికి వచ్చే ఉంటుంది. దీని యొక్క మూలాలు, పాకిస్తాన్, నేపాల్ ఇతర దేశాల్లోని సబ్ హిమాలయన్ ప్రాంతానికి చెందినవి. భారతీయ చరిత్రలో బాస్మతి బియ్యానికి ఎప్పటినుండో ఒక ప్రత్యేక స్థానం ఉంది. హిమాలయ ప్రాంతంలో పుట్టిన ఈ బాస్మతి రకం, దీని యొక్క ప్రత్యేకత మూలంగా ఆసియ కండమంతా కొద్దీ కాలంలోనే వ్యాప్తి చెందింది. వివిధ ప్రాంతాల్లోని వాతావరణ పరిస్థితులకు అనుగుణంగా పరిణామం చెందుతూ ఎన్నో వేల రకాలు పుట్టుకొచ్చాయి. ప్రస్తుతం బాస్మతి బియ్యాన్ని ప్రపంచం మొత్తం సాగు చేస్తున్నారు. </p>
     <img src="https://telugu-cdn.b-cdn.net/media/fwbj0ydv/samba-masuri-rice.jpg" class="logo"/>

     <p>మిగిలిన బియ్యం రకం లాగానే బాస్మతి బియ్యం ఎంత కాలం నిలవుంటే అంతే సువాసన మరియు రుచి పెరుగుతుంది. ఒకటిన్నర నుండు రెండేళ్లు నిల్వ చేసిన బియ్యంలోని తేమ పూర్తిగా ఆరిపోయి, సువాసన మరింత పెరుగుతుంది. తేమ ఆరిపోవడం వలన అన్నంమెతుకులు ఒకదానికొకటి అంటుకోవు. బియ్యం బంగరు లేదా గోధుమవర్ణంలోనికి మారితే అవి ఎక్కువ కాలం నిల్వచేసిన బియ్యమని గుర్తించవచ్చు. ఎక్కువ కాలం నిల్వచేసిన బియ్యం, వండిన తరువాత పొడవుగా ఉంది ఒకదానికొకటి అంటుకోవు. </p>
     <p>ప్రపంచం మొత్తం మీద భారత్ మరియు పాకిస్తాన్ లో బాస్మతి బియ్యం ఎక్కువుగా పండుతుంది. మన దేశంలో పంజాబ్, ఉత్తరాఖండ్, ఉత్తర ప్రదేశ్, హిమాచల్ ప్రదేశ్, హర్యానా, మరియు జమ్మూ అండ్ కాశ్మీర్ బాస్మతి సాగుకు ప్రధాన కేంద్రలుగా ఉన్నాయి. ఈ ప్రాంతాల్లన్ని బాస్మతి సాగుకు అనుకూలిస్తాయి, అందుకే వీటిని బాస్మతి రీజియన్స్ అని కూడా పిలుస్తారు. బాస్మతి సాగు చెయ్యాలంటే చల్లని వాతావరణం అనుకూలిస్తుంది, అయితే భారతదేశంలోని అన్ని ప్రాంతాలకు అనువుగా ఉండే బాస్మతి రకాలు అందుబాటులోకి వచ్చాయి. వీటిలో కొన్నిటికి జియోగ్రాఫికల్ ఐడెంటిఫికేషన్ (జిఐ) భారత ప్రభుత్వం ఇచ్చింది.
    </p>
    <p>బాస్మతి సాగుచెయ్యడానికి 700-1100 మిల్లీమీటర్ల వర్షపాతం ఉండాలి. అలాగే ఉష్ణోగ్రత తక్కువగా ఉండాలి, పగటిపూట ఉష్ణోగ్రత 25 డిగ్రీలు మరియు రాత్రి ఉష్ణోగ్రతలు 20 డిగ్రీలు ఉంటే బాస్మతి సాగుకు అనుకూలించి, మంచి నాణ్యమైన దిగుబడి లభిస్తుంది. అధిక ఉష్ణోగ్రతలు మరియు తేమ ఎక్కువగా ఉండే ప్రదేశాల్లో దిగుబడి తగ్గిపోవడంతోపాటు, గింజ నాణ్యత కూడా దెబ్బతిని అన్నం రుచించదు. </p>
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

export default LeftCrops1;
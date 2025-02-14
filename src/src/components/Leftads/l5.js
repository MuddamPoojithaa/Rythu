import React from 'react';
import './left Ad6.css'; // Ensure your CSS file path is correct
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
const Ad6Component = () => {
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
                <h2>ఎండలతో విసిగిపోయిన ప్రజలకు తీపి కబురు....</h2>
               
                <img src="https://telugu-cdn.b-cdn.net/media/4r2l1aba/varaha-helps-indian-farmers-cut-back-climate-damaging-practices-resembling-burning-crop-residue-and-flooding-rice-fields-_-techcrunch-junaid-jiwani.jpg" className="logo" alt="Weather News" />
                <p>భారతదేశమంత ఎండలతో భగ్గుమంటుంది. దాదాపు అన్ని రాష్ట్రాల్లోనూ అధికంగా నమోదవుతున్న ఉష్ణోగ్రతలతో ప్రజలు ఆపసోపాలు పడుతున్నారు. శీతల ప్రాంతాలైన జమ్మూ అండ్ కాశ్మీర్, హిమాచల్ ప్రదేశ్లోనూ ఉష్ణోగ్రతలు ఎక్కువగానే ఉంటున్నాయి. దేశ రాజధాని ఢిల్లీలో ప్రతి రోజు 47 డిగ్రీల ఉష్ణోగ్రత నమోదవుతుంది. తెలంగాణ మరియు ఆంధ్రాలో కొన్ని చోట్ల వర్షాలు పడిన మిగిలిన ప్రాంతాల్లో సూర్యుడు తన ప్రభావం చూపిస్తూనే ఉన్నాడు.</p>

                <p>ఇటువంటి పరిస్థితుల్లో ఐఎండి చల్లని కబురుతో ముందుకు వచ్చింది. నైరుతి రుతుపవనాలు కేరళ తీరానికి చేరినట్లు స్పష్టం చేసింది. నైరుతి రుతుపవనాలు దేశ వ్యవసాయానికి జీవనాధారమైనవి. ఈ రుతుపవనాల్లో కురిసే తొలకరి జల్లులతో ఖరీఫ్ సీసన్ ప్రారంభమవుతుంది. మరోపక్క ఈ ఏడాది వర్షాలు బాగా కురుస్తాయని ఐఎండి ఇప్పటికే ప్రకటించింది, దీని వలన ఈ సంవత్సరం ఖరీఫ్ పంట నుండి మంచి దిగుబడి వచ్చే అవకాశం ఉన్నట్లు వ్యవసాయ శాఖ అంచనా వేస్తుంది.</p>
                <p>నైరుతి రుతుపవనాలు గురువారం ఉదయం భారత భూభాగాన్ని తాకాయని వాతావరం శాఖ వెల్లడించింది. లక్షద్వీప్ మరియు కేరళ ప్రాంతాల్లో రుతుపవనాలు విస్తరించడానికి అనుకూలంగా ఉన్నాయని, మరో 2-3 రోజుల్లో ఈ రుతుపవనాలు ఆంధ్ర ప్రదేశ్ చేరుకునే అవకాశం ఉన్నట్లు వెల్లడించింది. ఎండలకు ఉక్కిరిబిక్కరవుతున్న ప్రజలకు ఇది ఒక తీపి కబురుగా చెప్పవచ్చు.</p>
                <p>ఈ రుతుపవనాలు ప్రజలకు ఎండ నుండి ఊరట కల్పించడంతో పాటు వ్యవసాయానికి కూడా ఎంతో సాయం చెయ్యనున్నాయి. మన దేశంలో వర్షాధారిత వ్యవసాయం చేసే రైతులకు ఈ రుతుపవనాలు మూలం, దేశంలో 52% నికర సాగు భూమికి ఈ వర్షపాతమే ఆధారితం. కేవలం ఈ భూభాగం నుండే 40% ఆహారం ఉత్పత్తి జరుగుతుంది. కాబట్టే దేశ ఆహార భద్రతలో ఈ రుతుపవనాలు కీలక పాత్ర పోషిస్తాయని అంటారు.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9vvvDY0wx20qX6thWwj0d3coX7JKlnU9Jg&s" className="logo" alt="Monsoon" />
                <p>ఎండలతో విసిగిపోయిన ప్రజలకు వాతావరణ శాఖ నుంచి తీపి కబురు. త్వరలోనే వర్షాలు ప్రారంభం కానున్నాయి. ఈ వర్షాలు ఎండ కారణంగా తటస్థమైన ఉష్ణోగ్రతలను తగ్గించి, రైతులకు కూడా ఉపశమనం కలిగిస్తాయి. ప్రజలు ముందస్తుగా వర్షాలకు సన్నద్ధంగా ఉండటం మంచిది.</p>
                <p>ఎండలతో విసిగిపోయిన ప్రజలకు తీపి కబురు. రాబోయే రెండు రోజుల్లో వాతావరణంలో మార్పులు చోటు చేసుకోవడంతో పలు ప్రాంతాల్లో వర్షాలు కురిసే అవకాశం ఉంది. ఈ వర్షాల వల్ల వాతావరణం చల్లబడుతుంది, తద్వారా ప్రజలకు ఎండల నుండి ఉపశమనం కలుగుతుంది.</p>

                <p>భారీ వర్షాలకు అనుగుణంగా అవసరమైన జాగ్రత్తలు తీసుకోవాలి, తద్వారా వరదలు లేదా ఇతర సమస్యలు నివారించవచ్చు.</p>
                <h3>ప్రాచుర్యం లేకుండా వినియోగం: </h3>
                <p>మన వినియోగదారులు అసమర్పకంగా వినియోగం చేస్తే, వైరస్ మరియు మరణము వంటి ప్రముఖ హానికర తీపి వ్యాప్తి ఉంటుంది.వినియోగదారులు తీపి కబురు నిర్వహణ చేస్తే, అది ప్రకృతి మరియు చర్మంపై ప్రభావం పడతాయి.
                వైరస్ ప్రతిరోధక పదకొందరు వినియోగదారులు సమర్థనించినప్పుడు, అవి మోహించిన వ్యాధి నివారణ వాడుకర్తలకు దాదాపు ప్రముఖ ఆదృశ్యాలు అవుతాయి.
                <h3>వ్యవసాయం</h3>
                <p>వర్షాల ప్రభావంతో రైతులకు పంట సాగు చాలా సులభం అవుతుంది. తేమతో పాటు, మట్టి సారవంతం కావడం వల్ల పంటలు బాగా పండతాయి. రాగి, వరి, గోధుమ, జొన్న వంటి ప్రధాన పంటలు ఈ వర్షాలతో చాలా బాగా పెరుగుతాయి
                వర్షాల వల్ల చెరువులు, కుంటలు, నదులు నీటితో నిండి పోతాయి. భవిష్యత్ కాలంలో నీటి కొరత సమస్యలను అధిగమించేందుకు ఇది చాలా మంచిది. ప్రజలందరూ నీటిని సద్వినియోగం చేసుకోవచ్చు.వర్షాల ప్రభావంతో రైతులకు పంట సాగు చాలా సులభం అవుతుంది. తేమతో పాటు, మట్టి సారవంతం కావడం వల్ల పంటలు బాగా పండతాయి. రాగి, వరి, గోధుమ, జొన్న వంటి ప్రధాన పంటలు ఈ వర్షాలతో చాలా బాగా పెరుగుతాయి.వర్షాలు పెద్ద ఎత్తున జలవిద్యుత్ ఉత్పత్తికి సహాయపడతాయి. ఇది విద్యుత్ సరఫరాలో నిలకడను తీసుకురాగలదు.అధిక వర్షాలు ఆనకట్టలు, చెరువులు, జలాశయాలు వంటి మౌలిక సదుపాయాలన్నీ నీటితో నిండిపోయేందుకు దోహదం చేస్తాయి.</p>
                <p>తీపి కబురు ఇది! ఎండలతో బాధపడుతున్న ప్రజలకు ఈ వర్షాలు ఒక వరమని చెప్పవచ్చు. ప్రజలందరికీ చల్లని వాతావరణంలో ఆహ్లాదంగా ఉండాలని ఆశిద్దాం!</p>
                </p>
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

export default Ad6Component;

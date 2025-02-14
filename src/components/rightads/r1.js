import React from 'react';
import './right Ad1.css'; // Ensure your CSS file path is correct
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
const AdComponentr1 = () => {
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
            <h2>తెలంగాణ:రైతులకు శుభవార్త.రైతుబంధు డబ్బులు</h2>
      
            <img src="https://telugu-cdn.b-cdn.net/media/msgomhm1/rythubandu-1.png" className="logo" alt="Rythu Bandhu" />
            <p>తెలంగాణ ప్రభుత్వం రైతులకు మరో శుభవార్తను అందించింది. రైతుల సంక్షేమం కోసం చేపట్టిన రైతుబంధు పథకం కింద రైతులకు డబ్బులు జమ చేయడం ప్రారంభించారు. ఈ పథకం కింద, ప్రతీ సీజన్‌కి ప్రతి రైతు కౌలు, సాగు భూమి యజమానులు ఒక్కొక్కరికి ప్రక్కా రూ. 5,000/- చొప్పున అందజేయబడతాయి.</p>
            <p>ఈసారి ఖరీఫ్ సీజన్‌ కోసం రూ. 7,000 కోట్ల నిధులను ప్రభుత్వం విడుదల చేసింది. ఈ నిధులు 60 లక్షల మందికి పైగా రైతులకు అందజేయనున్నట్లు తెలిపింది. ఈ డబ్బులు నేరుగా రైతుల బ్యాంకు ఖాతాలకు జమ అవుతాయి. రైతులు ఈ డబ్బులను ఉపయోగించి, నాణ్యమైన విత్తనాలు, ఎరువులు, పంట పిక్కాలు కొనుగోలు చేసుకోవచ్చు.

రైతుబంధు పథకం ద్వారా రైతులు ఆర్థిక భద్రతను పొందుతారు. రైతుల పంటల్లో పెట్టుబడి ఖర్చులు తగ్గి, పంటల దిగుబడులు పెరుగుతాయని ప్రభుత్వం ఆశాభావం వ్యక్తం చేసింది. ఈ పథకం రైతులకు ఉత్సాహాన్ని ఇచ్చి, వ్యవసాయ రంగంలో మెరుగైన మార్పులను తీసుకువస్తుందని ప్రభుత్వం పేర్కొంది.

రైతులకు ఈ పథకం ద్వారా వచ్చే లాభాలను దృష్టిలో ఉంచుకుని, రైతుబంధు పథకాన్ని మరింత విస్తృతంగా అమలు చేయాలని ప్రభుత్వం భావిస్తుంది</p>
            <p>పంటకు సాయం చేకూర్చేందుకు అందించే రైతు బందు డబ్బులు తమ ఖాతాల్లో ఎప్పుడు జమ అవుతాయి అని రైతులంతా ఆశగా ఎదురుచూస్తున్న వేళా, తెలంగాణ ప్రభుత్వం రైతులకు శుభవార్త చెప్పింది. పెండింగ్ లో ఉన్న రైతు భరోసా డబ్బులను, వ్యవసాయ శాఖ విడుదల చేసింది.</p>
            <p>ఈ ఏడాది వేసంగికి అందించవలసిన రైతుబంధు కోసం రైతులు ఎప్పటినుండో ఎదురుచూస్తున్నారు. ఈ సమయంలో తెలంగాణ కాంగ్రెస్ ప్రభుత్వం రైతులకు పెట్టుబడి సాయాన్ని అందించింది. ఎన్నికల హామీల్లో భాగంగా కాంగ్రెస్ ప్రభుత్వం అధికారంలోకి రాగానే రైతు భరోసా అనే పేరుతో ప్రతిరైతుకు ఎకరానికి 15 రూపాయిల ఇస్తామని ప్రకటించింది. అయితే కొన్ని కారణాల వల్ల రైతు భరోసా అందించలేక, బిఆర్ఎస్ ప్రారంభించిన రైతు బందు పథకాన్నే కొనసాగిస్తున్నారు.</p>
            <p>దేశంలో ఎన్నికల కోడ్ అమల్లోకి రాకముందు, రాష్ట్రంలో ఐదు ఎకరారలో లోపు ఉన్న రైతులకు రైతుబంధు డబ్బులు వారి అకౌంట్లలో వేశారు. అయితే మార్చ్ లో ఎన్నికల కోడ్ అమల్లోకి వచ్చినందున, 5 ఎకరాలు పైన ఉన్న రైతులకు రైతు బందు అందించడం సాధ్యపడలేదు. అయితే రైతుల ఖాతాల్లో డబ్బు ఎప్పుడు జమచేస్తారన్న విష్యం మీద కాంగ్రెస్ ప్రభుత్వం మీద ప్రతిపక్షాలు ఒత్తిడి తీసుకువచ్చాయి. ఎన్నికల ప్రసారాల్లో ఇదే విష్యంపై రేవంత్ రెడ్డి ప్రభుత్వం ఎన్నో విమర్శలను ఎదురుకుంది.</p>
            <h3>రైతుబంధు పథకం ముఖ్య లక్షణాలు!...</h3>
            <p>రైతుల బ్యాంక్ ఖాతాల్లో నేరుగా డబ్బులు జమ చేయడం ద్వారా మధ్యవర్తుల అవసరం లేకుండా అడ్డగోలుగా ఖర్చులు మళ్లిపోవడం లేదు.</p>
            <p>ఈ డబ్బులను రైతులు విత్తనాలు, ఎరువులు, పంట రక్షణ మందులు, పంట కాళ్లు మొదలైన వాటికి ఉపయోగించవచ్చు.</p>
            <p>రైతులు తనఖా డబ్బులు తీసుకోవడం తగ్గడంతో, అప్పుల ఊబిలో పడకుండా, స్వావలంబన పెరుగుతుంది.</p>
            <p>ప్రభుత్వ వేతనం లేకుండా రైతులు ఈ పథకానికి అప్లై చేసుకోవచ్చు. రెవెన్యూ శాఖ అధికారుల ద్వారా అన్ని వివరాలు సేకరించి, నేరుగా బ్యాంకు ఖాతాలలో డబ్బులు జమ చేయబడతాయి.</p>

            <p>ఎట్టకేలకు 5 ఎకరాలు దాటి ఉన్న రైతులకు కూడా వ్యవసాయ శాఖ రైతు బందు డబ్బులు జమ చేసింది. దీని కోసం ప్రభుత్వం 2000 వేల కోట్ల రూపాయిల నిధులు కేటాయించనుంది. రైతుల బ్యాంకు ఖాతాల్లో డబ్బులు నేరుగా జమవుతాయి.</p>

        <img src="https://rythubandhu.telangana.gov.in/images/slider/2.png" className="logo1" alt="Rythu Bandhu Scheme" />
       <h3>పథకం ప్రయోజనాలు:</h3>
        <p>రైతులకు పంట సాగు చేసేందుకు ముందస్తుగా డబ్బు అందించడం వలన వారి ఆర్థిక భరోసా పెరుగుతుంది.</p>
           <p> రైతులు ఈ డబ్బుతో పెట్టుబడులు పెట్టుకోవడం వలన, బ్యాంకుల నుండి రుణాలు తీసుకోవలసిన అవసరం తగ్గుతుంది.</p>
          <p>మంచి విత్తనాలు, ఎరువులు, పీచులు మొదలైన వాటిని రైతులు సులభంగా కొనుగోలు చేయగలుగుతారు.</p>
          <p>రైతులకు సంబంధించి పథకాలకు సంబంధించిన సమాచారాన్ని సకాలంలో అందించేందుకు ప్రతి సీజన్‌లో ప్రభుత్వ ప్రతినిధులు విలేకరుల సమావేశాలు నిర్వహిస్తారు.</p>

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

export default AdComponentr1;

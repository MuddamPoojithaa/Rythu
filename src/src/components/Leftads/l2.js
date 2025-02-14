import React from 'react';
import './left Ad3.css'; // Ensure your CSS file path is correct
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
const AdComponent4 = () => {
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
                <h2>సుస్థిరవ్యవసాయానికి  'కాబి' డిజిటల్ టూల్స్....వాడకం చాలా సులభం.....</h2>
                
<img src="https://telugu-cdn.b-cdn.net/media/qdcjw3mn/5-iot-applications-in-agriculture-industry-_-smart-farming-solutions.jpg" className="logo" alt="Agriculture IoT" />
<p>ప్రస్తుతం వ్యవసాయ రంగంలో ఎక్కువుగా ఎదురుకుంటున్న సమస్యల్లో అధికమవుతున్న పురుగుమందుల వినియోగం ఒకటి. రసాయన మందులు, ఎరువులు పర్యావరణానికి తీరని నష్టాన్ని వాటిల్లేలా చేస్తున్నాయి. వీటికి చెక్ పెట్టేందుకు, ఒకవైపు ప్రభుత్వ సంస్థలు మరోవైపు అనేక స్వచ్చంద సంస్థలు ఎంతగానో కృషి చేస్తున్నాయి. రైతులు కూడా ఈ రసాయన ఎరువుల ద్వారా పర్యావరణానికి ముంచియున్న ముప్పును గుర్తించి వీటి వినియోగాన్ని తగ్గించి సుస్థిరవ్యవసాయం వైపు ముందుకు సాగుతున్నారు. కానీ మన దేశంలో చాలా మంది రైతులకు ఇటువంటి వ్యవసాయ విధానాల మీద సరైన అవగాహన లేన్నందువల్ల పూర్తిస్థాయిలో సుస్థిరవ్యవసాయాన్ని పాటించేలా చెయ్యడం కష్టతరంగా మారింది.</p>

                <p>ఈ సమస్యను పరిష్కరించి, రైతులకు అవసరమైన సాంకేతిక జ్ఞానాన్ని అందించేందుకు, అంతర్జాతీయ స్వచ్చంద సంస్థ సెంటర్ ఫర్ అగ్రికల్చర్ అండ్ బయో-సైన్సెస్ ఇంటర్నేషనల్ (సిఏబిఐ- కాబి ) బయో ప్రొటెక్షన్ పోర్టల్ని రైతులకు అందుబాటులోకి తీసుకువచ్చింది. రైతులందరూ వినియోగించుకునే విధంగా అన్ని భాషల్లోనూ వ్యవసాయ సమాచారం అందుబాటులో ఉంది. కాబి రూపొందించిన ఈ అప్ మరియు వెబ్సైట్ తెలుగులో కూడా అందుబాటులో ఉంది.</p>
                <p>వెబ్సైటు మరియు అనేక ఆప్ ల ద్వారా రైతులు శాస్త్రీయమైన సలహాలు పొందవచ్చు. దీనిలో నాలెడ్జి బ్యాంకు పోస్టర్లు, కరపత్రాలు, ఫ్యాక్ట్షీట్ వీడియోలు ఇలా చాల రకాల సమాచారం అందుబాటులో ఉంది. దీనితోపాటు, పంట ఆరోగ్య సమాచారం దగ్గర నుండి, సురక్షితమైన పురుగుమందులు మరియు ఎరువులను సూచించడం, వాటి మోతాదును లెక్కించడం, చీడపీడల సమగ్రంగా ఎదుర్కొనేందుకు అవసరమైన సమాచారం, వ్యవసాయంలో వస్తున్న నూతన ఆవిష్కరణలు మీద నైపుణయాన్ని పెంపొందించడం ఇలా అన్ని పనులను ఈ వెబ్సైట్ పూర్తిచేస్తుంది. ఈ సేవలను వినియోగించుకోవడానికి స్మార్ట్ఫోన్, కంప్యూటర్, ఇలా ఏదైనా డిజిటల్ సాధనం ఉంటే సరిపోతుంది.</p>
                <p>రైతులు, విద్యార్థులు, శాస్త్రవేత్తలు ఇలా అందరికి వ్యవసాయం పట్ల శిక్షణ అందించడం కోసం, పంట తెగుళ్ల నిర్ధారణ కోర్సులు, పంట యాజమాన్య కోర్సులు, బయోప్రొటెక్షన్ కోర్సులు అందుబాటులో ఉన్నాయి. రైతులు ఈ ఉచిత ఆన్లైన్ మాధ్యమాన్ని వినియోగించుకొని సుస్థిర వ్యవసాయ అభివృద్ధికి పునాదిని ఏర్పరచవచ్చు. కాబి అందిస్తున్న క్రాప ప్రొటెక్షన్ ఆప్ ద్వారా సురక్షితమైన పురుగుమందులను గుర్తించడం మరియు వాటి మోతాదును లెక్కించడంలో సహాయపడుతుంది. కాబి బయోప్రొటెక్షన్ అనే వెబ్సైట్ ద్వారా పంట తెగుళ్లను నివారించడానికి స్థానికంగా నమోదైన బయో పెస్టిసిడ్స్ ను కనుగొనడంలో సహాయపడుతుంది.</p>

                <h2>డేటా విశ్లేషణ</h2>
                <p>పంటల ప్రగతి గురించి డేటా సేకరణ.<br />
                    సాగు విధానాలపై విశ్లేషణలు.<br />
                    ఏ ప్రాంతంలో ఏ పంటలు ఎక్కువగా పండిస్తున్నాయి అనే సమాచారం.</p>


                <h2>అగ్రోనమీ సలహాలు</h2>
                <p>న్యూట్రియెంట్ మేనేజ్‌మెంట్ పై సలహాలు.
                    వివిధ పంటల అభివృద్ధికి తగిన జాగ్రత్తలు.</p>

                <h2>నిర్దిష్ట సిఫారసులు</h2>
                <p>భూమికి తగిన పంటలు, ఎరువులు
                    నీటి నిర్వహణ పద్ధతులు.</p>

                <h2>సామూహిక సమూహాలు</h2>
                <img src="https://s33007.pcdn.co/wp-content/uploads/2023/07/Website-Image_Wide-general_hydroponic_robot_farming_gettyimages_1447011226-1.jpg" className="logo1" alt="Community Groups" />
                <p>రైతుల కమ్యూనిటీ ప్లాట్‌ఫామ్స్.
                    సమస్యలు, పరిష్కారాలపై చర్చలు.</p>

                <h2>మరింత వాడకం</h2>
                <p>సాధారణ వ్యవసాయ సమస్యల పరిష్కారం: వ్యాధులు, పురుగులు, మరియు మైక్రో న్యూట్రియెంట్ లోపాలను గుర్తించి పరిష్కారాలను అందించడం.
                    పంటల మార్గదర్శకాలు: ప్రత్యేకమైన పంటల కోసం మార్గదర్శకాలు, పండిన దశలను గుర్తించడం.
                    సాధనాల వినియోగం: డ్రిప్ ఇరిగేషన్, స్ప్రింక్లర్ ఇరిగేషన్ వంటి పద్ధతుల సలహాలు.</p>

                <h2>కాబి ఉపయోగకరత</h2>
                <p>పంటల దృష్టాంతాలు: రైతులు తాము పండించిన పంటలపై అప్డేట్లు ఇవ్వడం
                    రైతుల మద్ధతు: రైతుల బాగోగుల కోసం నేరుగా మద్దతు.
                    శిక్షణ: ఫీల్డ్ ట్రైనింగ్, వెబినార్లు మరియు వీడియోలు.</p>
        

                <h2>మొత్తం మీద ప్రయోజనాలు</h2>
                <p>ఉత్పాదకత:
                పెరిగిన పంటల దిగుబడి.
                పర్యావరణ పరిరక్షణ:
                రసాయనాల సద్వినియోగం, నీటి సంరక్షణ.
                ఆర్థిక ప్రయోజనం:
                వ్యయాల నియంత్రణ, ఆదాయ పెంపు.
                కాబి ద్వారా సుస్థిర వ్యవసాయం సాధ్యమే కాదు, సరళమూ, సమర్థవంతమైనదిగానూ ఉంటుంది. ఇది పంటల అభివృద్ధిని పెంచడం మాత్రమే కాకుండా, రైతుల జీవితాలలో సానుకూల మార్పులను తీసుకొస్తుంది.</p>
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

export default AdComponent4;

import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';
import experienceImage from './experience.jpg';
import NewsAds from '../Leftads/adsection';
import RightNewsAds from '../rightadscomonent';
import NewsHeadlines from '../headlines';
import { Outlet } from 'react-router-dom';
import img1 from '../crops-ads/tomato.jpg';
import img4 from '../crops-ads/onion.jpg';
import img5 from '../crops-ads/Maize.jpg';
import img6 from '../crops-ads/carrot.jpg';
import img7 from '../crops-ads/Rice.jpg';
import img8 from '../crops-ads/potato.jpg';
import img9 from '../crops-ads/pea.jpg';
import img10 from '../crops-ads/Brinjal.jpg';
import img11 from '../crops-ads/Ladyfinger.jpg';
const videosPerPage = 20;
const newsHeadlines = [
    
    
    {
        src: "https://telugu-cdn.b-cdn.net/media/1nbhtzyj/ai.jpg?width=250&format=webp",
        href: "/headlines/h1",
        title: "రైతులకు పంట దిగుబడిని పెంచడం కోసం 'కిసాన్ జిపిటీ'.."
    },
    {
        src: "https://telugu-cdn.b-cdn.net/media/zaal52dn/new-project-2.jpg?width=250&format=webp",
        href: "/headlines/h2",
        title: "రైతులకు శుభవార్త.. వచ్చే నెలలోనే పీఎం కిసాన్ యోజన 15వ విడత డబ్బులు జమ..!"


    },
    {
        src: "https://telugu-cdn.b-cdn.net/media/ijvpw4d4/new-project-3.jpg?width=250&format=webp",
        href: "/headlines/h3",

        title: "రైతులకు గుడ్ న్యూస్: రైతు వేదికల ద్వారా అందుబాటులోకి ఎరువులు..",
    },

    {
        src: "https://telugu-cdn.b-cdn.net/media/jp2l1dtc/new-project-6.jpg?width=250&format=webp",
        href: "/headlines/h4",

        title: "కౌలు రైతులకు గుడ్ న్యూస్.. వారందరికీ పంట సాగు ధ్రువీకరణ పత్రాలు మంజూరు.."
    },



    {
        src: "https://telugu-cdn.b-cdn.net/media/ebeak55p/subsidy.jpg?width=250&format=webp",
        href: "/headlines/h6",
        title: "రైతులకు భారతదేశంలో వ్యవసాయ యంత్రాలపై అందుబాటులో ఉన్న సబ్సిడీలు.. ఎంతవరకు అంటే?"
    },


    {
        src: "https://telugu-cdn.b-cdn.net/media/03xbktvt/g20.jpg?width=250&format=webp",
        href: "/headlines/h7",
        title: "ప్రారంభమైన G 20 వ్యవసాయ మంత్రుల సమావేశాలు !"
    },


    {
        src: "https://telugu-cdn.b-cdn.net/media/xl0ncb0v/chilli-crop.jpg?width=250&format=webp",
        href: "/headlines/h8",
        title: "మిర్చి పంటకు నీరు ఇవ్వాలని రైతుల డిమాండ్‌: నరసరావుపేటలో నిరసనకు పిలుపు !"
   },
   {
      src:"https://i0.wp.com/rythurajyam.com/wp-content/uploads/2021/12/Featured-photo-size1.jpg?resize=900%2C400&ssl=1" ,
      href:"/left-crops/lc4",
      title:"క్యాలీఫ్లవర్ సాగు విధానం"
      
   },
   
   {
    src:"/static/media/Rice.a787b3e8821741691098.jpg",
    href:"/left-crops/lc1",
    title:"బాస్మతీ బియ్యం  సాగు విధానం "
   }, 
  {
     src:"/static/media/tomato.4d568d3bd1eb26e7bff3.jpg",
     href:"/crops-ads/c1",
     title:"టమాటో సాగు విధానం"
  },
    
    // Add other news items similarly...
];



const Experience = () => {
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
                <div className='middle-content'>
            <h2>Sharing Experience | అనుభవాలను పంచుకోవడం</h2>
            <div className="services-content">
            <img src={experienceImage} alt="Experience Sharing" className="service-image" />
            <div className="service-content">
                <h1>Experience Sharing | అనుభవాలను పంచుకోవడం</h1>
                <p>
                    Sharing farming experiences helps in gaining insights, learning from others' mistakes, and improving agricultural practices.
                    రైతు అనుభవాలను పంచుకోవడం ద్వారా సమర్థవంతమైన వ్యవసాయ పద్ధతులు నేర్చుకోవడం, ఇతరుల తప్పులను తెలుసుకోవడం మరియు పంట దిగుబడిని మెరుగుపరచడం.
                </p>
                <p>
                    By connecting with fellow farmers, you can exchange valuable knowledge about crop rotation, soil health, and pest management.
                    సహచర రైతులతో కలవడం ద్వారా, మీరు పంటల మార్పిడి, మట్టిలో ఆరోగ్యం మరియు పురుగుల నిర్వహణ గురించి విలువైన జ్ఞానాన్ని పంచుకోవచ్చు.
                </p>
                <p>
                    These shared experiences can also foster a sense of community and support, helping farmers to navigate challenges and celebrate successes together.
                    ఈ పంచుకున్న అనుభవాలు సమాజం మరియు మద్దతు భావనను పెంపొందించవచ్చు, రైతులు సవాళ్లను ఎదుర్కొనడం మరియు విజయాలను కలిసి జరుపుకోవడం.
                </p>
            </div>
            <div className="pagination">
                    {/* <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous Page
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(videoLinks.length / videosPerPage)}>
                        Next Page
                    </button> */}
                    <div className="news-headlines">
                        <h2>తాజా వార్తలు</h2>
                        <div className='home_middle4'>
                        {newsHeadlines.map((news, index) => (
                            <div key={index} className="news-item">
                                <Link to={news.href} target="_blank" rel="noopener noreferrer">
                                    <img src={news.src} alt={news.title} />
                                </Link>
                                <p>
                                    <Link to={news.href} target="_blank" rel="noopener noreferrer">
                                        {news.title}
                                    </Link>
                                </p>
                            </div>
                           
                           
                        ))}
                    </div>
                    </div>
                </div>
         
        <div>
        </div>
        </div>
        {/*<div className='news'>
                <NewsHeadlines />
            </div>*/}
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
            </div>
      
    );
};



export default Experience;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';
import img from "./Screenshot 2024-07-01 194910.png"
import img1 from './Leftads/IMG-20240621-WA0016.jpg';
import img12 from './crops-ads/tomato.jpg';
import img2 from './crops-ads/Mirchi.jpg';
import img4 from './crops-ads/onion.jpg';
import img5 from './crops-ads/Maize.jpg';
import img6 from './crops-ads/carrot.jpg';
import img7 from './crops-ads/Rice.jpg';
import img8 from './crops-ads/potato.jpg';
import img9 from './crops-ads/pea.jpg';
import img10 from './crops-ads/Brinjal.jpg';
import img11 from './crops-ads/Ladyfinger.jpg';

import cor1 from '../images/courosel/IMG-20240623-WA0014.jpg';
import cor2 from '../images/courosel/IMG-20240623-WA0015.jpg';
import cor3 from '../images/courosel/IMG-20240624-WA0002.jpg';
import cor4 from '../images/courosel/IMG-20240624-WA0003.jpg';
import cor5 from '../images/courosel/IMG-20240624-WA0004.jpg';
import cor6 from '../images/courosel/IMG-20240624-WA0005.jpg';
import banner from "../images/Untitled-3.png";

const videosPerPage = 20;

const videoLinks = [
    "https://www.youtube.com/embed/mREtDpl1jxk?si=m305NIp7Sm5dYhku",
    'https://www.youtube.com/embed/AXsqF5j0Kus?si=Y0hyzU2HTPJ-db1m',
    // ...
    'https://www.youtube.com/embed/V7BvD10jwBw?si=qD_1ulG9kkcugc3f',
    "https://www.youtube.com/embed/w0P8zkHTcek?si=Y18Psr2eI99z0RaQ",
    "https://www.youtube.com/embed/W7vy0ET9IM4?si=Z9YWGzc55OazWwx1",
    "https://www.youtube.com/embed/eec7cUJXME0?si=xVIFiHJusOMX1mAu",
];

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


    //{
       // src: "https://telugu-cdn.b-cdn.net/media/xl0ncb0v/chilli-crop.jpg?width=250&format=webp",
        //href: "/headlines/h8",
        //title: "మిర్చి పంటకు నీరు ఇవ్వాలని రైతుల డిమాండ్‌: నరసరావుపేటలో నిరసనకు పిలుపు !"
   // },

    
    // Add other news items similarly...
];



const Home = () => {
    const [currentPage] = useState(1);

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videoLinks.slice(indexOfFirstVideo, indexOfLastVideo);

    // const handleNextPage = () => {
    //     if (currentPage < Math.ceil(videoLinks.length / videosPerPage)) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };

    const handleRedirect = (index) => {
        window.open(videoLinks[index], "_blank");
    };

    // const handlePreviousPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    return (
        <div className="home">
            <img src={banner} alt='logo' className="responsive-img" />
            <div className="left-content">
                <div className="ads">
                    <h2>వార్తలు</h2>
                    <div className="ad-item">
                        <a href="https://online.publuu.com/559510/1257334" target="_blank" rel="noopener noreferrer">
                            <img src={img} alt="Magzine" />
                        </a>
                        <p>
                            మా పత్రిక</p>
                    </div>
                    <div className="ad-item">

                        <Link to="/leftads/l1" target="_blank" rel="noopener noreferrer">
                            <img src={img1} alt="మామిడి  పిందెలు రాలకుండా నిర్మూలన  చర్యలు" />
                            <p>మామిడి  పిందెలు రాలకుండా నిర్మూలన  చర్యలు</p>
                        </Link>


                    </div>
                    <div className="ad-item">
                        <Link to="/leftads/l2" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/qdcjw3mn/5-iot-applications-in-agriculture-industry-_-smart-farming-solutions.jpg?width=250&format=webp" alt="సుస్థిరవ్యవసాయానికి 'కాబి' అందిస్తున్న డిజిటల్ టూల్స్.... వాడకం చాలా సులభం....." />
                            <div><p>సుస్థిరవ్యవసాయానికి 'కాబి' అందిస్తున్న డిజిటల్ టూల్స్.... వాడకం చాలా సులభం.....</p></div>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/leftads/l3" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/px4dczmh/premium-photo-_-indian-farmer-showing-a-mobile-screen-at-agriculture-field.jpg?width=250&format=webp" alt="ఆంధ్ర ప్రదేశ్: పంట నష్టపోయిన రైతులకు వారి ఖాతాల్లో డబ్బు జమ...." />
                            <p>ఆంధ్ర ప్రదేశ్: పంట నష్టపోయిన రైతులకు వారి ఖాతాల్లో డబ్బు జమ....</p>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/leftads/l4" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/zl3hhhzk/download-18.jpg?width=250&format=webp" alt="రైతు భరోసా అమలులో మరోకీలక నిర్ణయం.." />
                            <p>రైతు భరోసా అమలులో మరోకీలక నిర్ణయం..</p>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/leftads/l5" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/4r2l1aba/varaha-helps-indian-farmers-cut-back-climate-damaging-practices-resembling-burning-crop-residue-and-flooding-rice-fields-_-techcrunch-junaid-jiwani.jpg?width=250&format=webp" alt="ఎండలతో విసిగిపోయిన ప్రజలకు తీపి కబురు...." />
                            <p>ఎండలతో విసిగిపోయిన ప్రజలకు తీపి కబురు....</p>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="middle-content_home">

                <div className="carousel-channel">
                    <div className="channel-info">
                        <h1>రైతుబడి యూట్యూబ్ ఛానల్</h1>
                        <p>
                            మా రైతుబడి యూట్యూబ్ ఛానల్‌లో, మేము వ్యవసాయ సంబంధిత సలహాలు, పద్ధతులు గురించి వివరంగా చెప్తాము.
                            పంటల పెంపకం, పశుపోషణ,పంటలు ఎలా పండించాలి అనేది మా ప్రధాన లక్ష్యం.

                        </p>
                    </div>
                </div>
                <div className="carousel-container">
                    <Carousel showThumbs={false} autoPlay infiniteLoop onClickItem={(index) => handleRedirect(index)}>
                        <div>
                            <img src={cor1} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={cor2} alt="Slide 2" />
                        </div>
                        <div>
                            <img src={cor3} alt="Slide 3" />
                        </div>
                        <div>
                            <img src={cor4} alt="Slide 4" />
                        </div>
                        <div>
                            <img src={cor5} alt="Slide 5" />
                        </div>
                        <div>
                            <img src={cor6} alt="Slide 6" />
                        </div>
                    </Carousel>
                </div>


                {/*<div className="articles">
                    <h2>వ్యాసాలు</h2>
                    <article>
                        <h3>వ్యాసం 1</h3>
                        <p>వ్యాసం 1 యొక్క వివరాలు ఇక్కడ ఉన్నాయి. ఇది రైతుల అవసరాలు మరియు పనులు గురించి వివరిస్తుంది.</p>
                    </article>
                    <article>
                        <h3>వ్యాసం 2</h3>
                        <p>వ్యాసం 2 యొక్క వివరాలు ఇక్కడ ఉన్నాయి. ఇది పంటల పెంపకం మరియు పశుపోషణ గురించి వివరిస్తుంది.</p>
                    </article>
                </div>*/}

                
                
                <div className="pagination">
                    {/* <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous Page
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(videoLinks.length / videosPerPage)}>
                        Next Page
                    </button> */}
                    <div className="news-headlines">
                        <h2>తాజా వార్తలు</h2>
                        <div className='home_middle'>
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
                <div className='videos'>
                <h2> వీడియోలు</h2>
                <div className="video-gallery">
                    {currentVideos.map((link, index) => (
                        <div key={index} className="video-items">
                            <iframe
                                width="100%"
                                height="180"
                                src={link}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={`video-${index}`}
                            ></iframe>
                        </div>
                    ))}
                </div>
                </div>
                <div className='crops'>
            <h2> పంటల</h2>
           <div className='home_middle1'>
           <div className="crop-item">
           <Link to="/left-crops/lc1"  target="_blank" rel="noopener noreferrer">
           <img src={img7}  alt="బాస్మతీ బియ్యం  సాగు విధానం " />
          <p>బాస్మతీ సాగు విధానం<br></br>
        (rice cultivation in telugu)</p>
           </Link>
           </div>
           <div className='crop-item'>
           <Link to="/left-crops/lc2"  target="_blank" rel="noopener noreferrer">
           <img src= {img5} alt="మొక్కజొన్న సాగు విధానం " />
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
            <Link to="/crops-ads/c2" target="_blank" rel="noopener noreferrer">
            <img src={img6}  alt="క్యారెట్ సాగు విధానం"  />
            <p>క్యారెట్ సాగు విధానం.<br></br>
                (Carrot cultivation in telugu )</p>
            </Link>
           </div>
        <div className='crop-item'>
           <Link to="/left-crops/lc5"  target="_blank" rel="noopener noreferrer">
           <img src={img8}  alt="క్యాలీఫ్లవర్ సాగు విధానం"  />
           <p>ఆలుగడ్డ సాగు విధానం<br></br>
           (Potato Cultivation in Telugu)</p>
           </Link>
          </div>
          <div className='crop-item'>
            <Link to="/crops-ads/c5" target="_blank" rel="noopener noreferrer">
            <img src={img9}  alt=">కంది సాగు విధానం "  />
            <p>కంది సాగు విధానం<br></br>
            (Pigeon Pea Cultivation in Telugu)</p>
            
            

            </Link>
           </div>
           </div>
           
           
</div>
            </div>  
            <div className="right-content_home">
                <div className="ads">
                    <h2>వార్తలు</h2>
                    <div className="ad-item">
                        <Link to="/rightads/r1" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/msgomhm1/rythubandu-1.png?width=250&format=webp" alt="తెలంగాణ: రైతులకు శుభవార్త... రైతుబంధు డబ్బులు జమ...." />
                            <p>తెలంగాణ: రైతులకు శుభవార్త... రైతుబంధు డబ్బులు జమ....</p>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/rightads/r2" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/bexhee2j/new-project-1.jpg?width=250&format=webp" alt="పీఎం కిసాన్ eKYC ఇప్పుడు ఫోన్ ద్వారా కూడా చేసుకోవచ్చు.. ఎలానో తెలుసా..?" />
                            <p>పీఎం కిసాన్ eKYC ఇప్పుడు ఫోన్ ద్వారా కూడా చేసుకోవచ్చు.. ఎలానో తెలుసా..?</p>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/rightads/r3" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/3bgf3hw0/new-project.jpg?width=250&format=webp" alt="రైతులకు కేంద్రం శుభవార్త.. నేడే వారి ఖాతాల్లో  పీఎం కిసాన్ నగదు జమ..!" />
                            <p>రైతులకు కేంద్రం శుభవార్త.. నేడే వారి ఖాతాల్లో  పీఎం కిసాన్ నగదు జమ..!</p>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/rightads/r4" target="_blank" rel="noopener noreferrer">

                            <img src="https://telugu-cdn.b-cdn.net/media/h0fbyowu/new-project-1.jpg?width=250&format=webp" alt="రైతులకు గమనిక.! తేమ ఉంటేనే.. మద్దతు ధర.. పూర్తి వివరాలకు చదవండి.." />
                            <p>రైతులకు గమనిక.! తేమ ఉంటేనే.. మద్దతు ధర.. పూర్తి వివరాలకు చదవండి..</p>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/rightads/r5" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/kbhhazhb/new-project-2.jpg?width=250&format=webp" alt="రైతులకు శుభవార్త.. మార్కెట్ లో పత్తికి రూ.7,020 మద్దతు ధర" />
                            <p>రైతులకు శుభవార్త.. మార్కెట్ లో పత్తికి రూ.7,020 మద్దతు ధర</p>
                        </Link>

                    </div>
                    <div className="ad-item">
                        <Link to="/rightads/r6" target="_blank" rel="noopener noreferrer">
                            <img src="https://telugu-cdn.b-cdn.net/media/xivjene2/garlic.jpg?width=250&format=webp" alt="భారీగా పెరిగిన వెల్లుల్లి ధర.. భవిష్యత్తులో ఇంకా పెరిగే అవకాశం ఉందంటూ రైతులు హర్షం.." />
                            <p>భారీగా పెరిగిన వెల్లుల్లి ధర.. భవిష్యత్తులో ఇంకా పెరిగే అవకాశం ఉందంటూ రైతులు హర్షం..</p>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;

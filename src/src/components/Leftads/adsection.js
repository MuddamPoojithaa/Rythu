// NewsAds.js
import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import '../home.css';
import img from './Screenshot 2024-07-01 194910.png';

const NewsAds = () => {
    return (
        <div className="left-content">
            <div className="ads">
                <h2>వార్తలు</h2>
                <div className="ad-item">
                    <a href="https://online.fliphtml5.com/wdiva/wuye/" target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="Magzine" />
                    </a>
                    <p>మా పత్రిక</p>
                </div>
                <div className="ad-item">
                    <Link to="/leftads/l1" target="_blank" rel="noopener noreferrer">
                        <img src="https://telugu-cdn.b-cdn.net/media/0hpjl1hc/man.jpg?width=220" alt="మామిడి  పిందెలు రాలకుండా నిర్మూలన  చర్యలు" />
                        <p>మామిడి  పిందెలు రాలకుండా నిర్మూలన  చర్యలు</p>
                    </Link>
                </div>
                <div className="ad-item">
                    <Link to="/leftads/l2" target="_blank" rel="noopener noreferrer">
                        <img src="https://telugu-cdn.b-cdn.net/media/qdcjw3mn/5-iot-applications-in-agriculture-industry-_-smart-farming-solutions.jpg?width=250&format=webp" alt="సుస్థిరవ్యవసాయానికి 'కాబి' అందిస్తున్న డిజిటల్ టూల్స్.... వాడకం చాలా సులభం....." />
                        <p>సుస్థిరవ్యవసాయానికి 'కాబి' అందిస్తున్న డిజిటల్ టూల్స్.... వాడకం చాలా సులభం.....</p>
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
    );
};

export default NewsAds;

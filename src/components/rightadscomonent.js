// RightNewsAds.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const RightNewsAds = () => {
    return (
        <div className="right-content">
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
    );
};

export default RightNewsAds;

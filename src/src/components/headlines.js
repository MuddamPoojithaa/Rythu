import React from 'react';
import { Link } from 'react-router-dom'; // Adjust the import path as per your project
import './home.css';
const YourComponent = () => {
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
    
    
    // Add other news items similarly...
  ];

  return (
    
    <div className="news-headlines">
      <h2>తాజా వార్తలు</h2>
      
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
    
  );
};

export default YourComponent;



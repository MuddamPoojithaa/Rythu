import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import NewsAds from './Leftads/adsection';
import RightNewsAds from './rightadscomonent';
import NewsHeadlines from './headlines';
import { Outlet } from 'react-router-dom';
import Swal from 'sweetalert2'
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
  {
    src:"/static/media/carrot.356ad4ebae7b6aa17189.jpg",
    href:"/crops-ads/c2",
    title:"క్యారెట్ సాగు విధానం"
  },
  {
    src:"/static/media/onion.bd3a8bd999562ac65a32.jpg",
    href:"/crops-ads/c4",
    title:"ఉల్లి సాగు విధానం"
    
  },
  {
    src:"/static/media/Maize.b01fa6a938c34b63d070.jpg",
    href:"/left-crops/lc2",
    title:"మొక్కజొన్న సాగు విధానం"
  },
  {
    src:"/static/media/potato.8f9cce40a565c77b0e1f.jpg",
    href:"/left-crops/lc5",
    title:"ఆలుగడ్డ సాగు విధానం"
  },
  {
    src:"/static/media/pea.5bdbc51cdfc3389904eb.jpg",
    href:"/crops-ads/c5",
    title:"కంది సాగు విధానం"
  },
  {
    src:"/static/media/Brinjal.f99e354a61ccae6e75e8.jpg",
    href:"/crops-ads/c3",
    title:"వంకాయ సాగు విధానం"
  },
{
    src:"/static/media/Ladyfinger.0c583a1c57e18676f122.jpg",
    href:"/left-crops/lc3",
    title:"బెండ సాగు విధానం"
},
{
    
    src: "https://telugu-cdn.b-cdn.net/media/jp2l1dtc/new-project-6.jpg?width=250&format=webp",
    href: "/headlines/h4",

    title: "కౌలు రైతులకు గుడ్ న్యూస్.. వారందరికీ పంట సాగు ధ్రువీకరణ పత్రాలు మంజూరు.."
},
    
    // Add other news items similarly...
  ];

const Contact = () => {
   
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "076f4d9c-1d0f-4334-91d0-4f7b566bb825");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
                Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      };
    return (
        <div className='layout'>
            <div className='left-ads'>
                <NewsAds />
            </div>
            <div className='content'>
                <Outlet />
                <h1 className="contact-title">Contact Us | మమ్మల్ని సంప్రదించండి</h1>
                
                <div className="contact-details">
                    <div className="contact-info">
                        <h2>Contact Information | సంప్రదింపు సమాచారం</h2>
                        <p><strong>Address:</strong> 123 Farmer's Lane, Hyderabad, Telangana</p>
                        <p><strong>Phone:</strong> +91 8897119694</p>
                        <p><strong>Email:</strong> telugurythubadi@gmail.com</p>
                    </div>
                    <div className="contact-form">
                        <h2>Contact Form | సంప్రదింపు వివరాలు.</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Name | పేరు</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className="form-group">
                                <label>Email | ఇమెయిల్</label>
                                <input type="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label>Message | సందేశం</label>
                                <textarea name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Submit | సమర్పించు</button>
                        </form>
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
                        <div className='home_middle5'>
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
                    {/*<div className='news'>
                <NewsHeadlines />
            </div>*/}
                </div>

            </div>
            
            <div className="right-ads layout1">
                <RightNewsAds />
            </div>

            
            
        </div>
    );
};

export default Contact;

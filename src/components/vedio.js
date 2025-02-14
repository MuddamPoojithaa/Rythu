import React, { useState } from 'react';
import "./vedio.css";
import { Link } from 'react-router-dom';
import NewsAds from './Leftads/adsection';
import RightNewsAds from './rightadscomonent';
import NewsHeadlines from './headlines';
import { Outlet } from 'react-router-dom';
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
  
}
  
  // Add other news items similarly...
];

const VideoComponent = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/w0P8zkHTcek?si=Y18Psr2eI99z0RaQ",
    "https://www.youtube.com/embed/oXMtraqx8oY?si=Qioxn5COttgAKMgP",
    "https://www.youtube.com/embed/6AprfYx28aM?si=IzLhYqVPl_mZShG9",
    "https://www.youtube.com/embed/W7vy0ET9IM4?si=Z9YWGzc55OazWwx1",
    "https://www.youtube.com/embed/b5Cuy8YyM9Y?si=JtQRX_hEHwNJAzPK",
    "https://www.youtube.com/embed/57OYIbhElTw?si=Ah8wts6ID5Wg3d-c",
    "https://www.youtube.com/embed/eec7cUJXME0?si=xVIFiHJusOMX1mAu",
    "https://www.youtube.com/embed/e6l-D6CIubU?si=SlEgaOmzhxsJt1ZB",
    "https://www.youtube.com/embed/Gx816meLgO8?si=hl1n9qlyP9YzpU2P",
    "https://www.youtube.com/embed/BmZZpArof98?si=n27BKcgt_n7yRpQb",
    "https://www.youtube.com/embed/fANT1OE_HbE?si=Yzg2KhnWGg_QIV_E",
    "https://www.youtube.com/embed/f5mWCdDXuSE?si=MjBBvEARnsXRuelv",
    "https://www.youtube.com/embed/9lzSCQgXxbo?si=yUcbWgO5cmuCiV77",
    "https://www.youtube.com/embed/11J1L5Kz1hA?si=2zMfeaePYNHgpOTm",
    "https://www.youtube.com/embed/o5GQg80Tyhs?si=1iOdDxkmp5DaDi_m",
    "https://www.youtube.com/embed/PBH88NGyMeM?si=JozIcHnrE97CMdZc",
    "https://www.youtube.com/embed/KzH-tYvgKXI?si=y7At5B-cIJijwcRI",
    "https://www.youtube.com/embed/2XRSpMl9UGw?si=_pwil8AJx4CUK2b9",
    "https://www.youtube.com/embed/FuddjdkstQM?si=3POVacJ1uFCQveWz",
    "https://www.youtube.com/embed/pqavQOliL94?si=GUDm12Rydh287Szi",
    "https://www.youtube.com/embed/7P3op3rQDmM?si=eMUhF5iTtmMUK5XF",
    "https://www.youtube.com/embed/xmW_C1XjhNE?si=fBhY7xqMxzruJIRZ",
    "https://www.youtube.com/embed/mZtjSGpBz5w?si=e899RBC11D3NJkaC",
    "https://www.youtube.com/embed/H0QHmRnS3LY?si=pjsjQjuIUCP1IoAm",
    "https://www.youtube.com/embed/-RjvXWCAaDE?si=8Zlinr7rfcANbW-t",
    "https://www.youtube.com/embed/OIjGvp9in-Y?si=aAMq9nyDX9AMr2_q",
    "https://www.youtube.com/embed/unybt-Upz4I?si=lQNaDSau6QmAztRI",
    "https://www.youtube.com/embed/KkcWwqaBqR4?si=BR74ERnyIXKjynNl",
    "https://www.youtube.com/embed/qFiWqyM__Q0?si=0dvx_Lr8-_H4ohe1",
    "https://www.youtube.com/embed/AkFdoRHloxw?si=GI-1VLmPiOPEvEK2",
    "https://www.youtube.com/embed/X4xVwvNFz0M?si=cK916U4WIkgTrEYd",
    "https://www.youtube.com/embed/ssZ3G__PkSc?si=qAQb0fsGcV4FuK6V",
    "https://www.youtube.com/embed/WfGTvYPfwaY?si=UyFEYNYzKTcr3np-",
    "https://www.youtube.com/embed/lnqWgizlAqc?si=sDgV5wYB0RC8F0q8",
    "https://www.youtube.com/embed/hvwjnk0OMf4?si=123ahkf48VOTLkkw",
    "https://www.youtube.com/embed/2wjGpXi-FpY?si=T6IC-zTqzs3HoHCl",
    "https://www.youtube.com/embed/FsDM5p7nU_8?si=FMT2BGD83gnTg_zV",
    "https://www.youtube.com/embed/6b6EGUrULOU?si=bcEnIPFgnQbIFdZE",
    "https://www.youtube.com/embed/w_CC3HWd6Fw?si=b70aeFJv6ipRFILl",
    "https://www.youtube.com/embed/DWwA1JX-WnU?si=swbkvza932m88mwD",
    "https://www.youtube.com/embed/va5byI4JKl4?si=n6SHneywj3rc7DE3",
    "https://www.youtube.com/embed/zxbUKN0s0Qw?si=h_bbUj7Y1n5CFNH-",
    "https://www.youtube.com/embed/uyMMGT-OBkg?si=OcN1MXAcKcdSd7-j",
    "https://www.youtube.com/embed/WL740NTmpl8?si=fzhh1Fwl629K9zsQ",
    "https://www.youtube.com/embed/Hc3KRDczTCU?si=l13XGR5zHxtLwyTT",
    "https://www.youtube.com/embed/m8z9_SUO0Tk?si=czrAWK4heLMC8vcq",
    "https://www.youtube.com/embed/F0S2NLS99ZA?si=WU_Pb8CbJV4hgbx0",
    "https://www.youtube.com/embed/X4yViSMASH0?si=h9JXNixN9Lnu1pBr",
    "https://www.youtube.com/embed/Iz5bDSgRwL4?si=C3roE3OMFu6r3Mr-",
    "https://www.youtube.com/embed/ihsx32Jm3xQ?si=tD8RYU5vVMUhCSUT",
    "https://www.youtube.com/embed/lv2Pf1xAvZE?si=qAwln37UJUaEw_TQ",
    "https://www.youtube.com/embed/5Ki9t-p2oBg?si=v9uFxnc9PJBjqKSj",
    "https://www.youtube.com/embed/np0DJqQuRMM?si=1_GOa6PcRkF4V0Ko",
    "https://www.youtube.com/embed/M_jAOTso70I?si=hInTRLkLWVmK4ujX",
    "https://www.youtube.com/embed/5h0VC9eyrfQ?si=uHCABj-dOzfJFPF5",
    "https://www.youtube.com/embed/PRX-ydVlaDc?si=h4Qc9QFVGj_P8qwg",
    "https://www.youtube.com/embed/L3ILsablqZw?si=uSpsC1FGMJno-Vt9",
    "https://www.youtube.com/embed/PFg8MUYBChs?si=tg9XjdyC3PZbbhWm",
    "https://www.youtube.com/embed/V1t8KGwozJY?si=GLK8SgX8LvGgzhrf",
    "https://www.youtube.com/embed/Hmq0lgwP_vk?si=_b9jJnAnvDrGNliT",
    "https://www.youtube.com/embed/gF3_KqnqBhI?si=vhoSsS8FOpQgobzw",
    "https://www.youtube.com/embed/4RIDEDMUQU4?si=v2gVYL48HyazZYfc",
    "https://www.youtube.com/embed/wV4Gs1GtKds?si=gMJ24xs24HBfpwjK",
    "https://www.youtube.com/embed/oWFkhDAvjHY?si=rhbjQLH_SEBaDWqk",
    "https://www.youtube.com/embed/zPZZFGny7Bg?si=UBR27eLxGADIBiV-",
    "https://www.youtube.com/embed/BkAF-yIb_KI?si=A1E4Aji9wG3dPjPB",
    "https://www.youtube.com/embed/bBZDWvl05ls?si=eV0ldYOQH7fyiQjJ",
    "https://www.youtube.com/embed/azmnyF6U6ok?si=SEHfI0bldk1bFs8g",
    "https://www.youtube.com/embed/Z1cp_JJu6Q0?si=3Wafovx5hNBECIYQ",
    "https://www.youtube.com/embed/AeJh3XMwz1E?si=yB3VWWIsABtG8QDG",
    "https://www.youtube.com/embed/mSt6pNUddWE?si=4HTkOXRGKO7yB0-4",
    "https://www.youtube.com/embed/KhMiKeSgDTU?si=96bfGHZEDmnHf_b6",
    "https://www.youtube.com/embed/xp49cK5fpEY?si=lMsHYp9idRxJml5R",
    "https://www.youtube.com/embed/v1RCS0vYjAs?si=neMhm1vl_yPPIeBD",
    "https://www.youtube.com/embed/0YIkJwUUAfc?si=hvMqqc6cp_S4K96H",
    "https://www.youtube.com/embed/nnYdeG29LT0?si=YrHD7TOkG4KvMJ21",
    "https://www.youtube.com/embed/5bnJf0xGkD4?si=6No_qJwJQXkUmTJD",
    "https://www.youtube.com/embed/n_gK4d3N2v8?si=w_3-2ztqBbLLo4sz",
    "https://www.youtube.com/embed/oDK5-J7c3n4?si=bIksG69ySGyvxVOf",
    "https://www.youtube.com/embed/9-BDXt4V5_Y?si=nJrI5a_Zz9iXtdlN",
    "https://www.youtube.com/embed/eyY-HBCes-4?si=fX5eNEQgPxo3ymjK",
    "https://www.youtube.com/embed/xh-JY1_UsMA?si=MgKzBxEPW-z4G0bV",
    "https://www.youtube.com/embed/Lb7R1s9kWGg?si=sybOVb-DoF0Nhc6M",
    "https://www.youtube.com/embed/b_WeAVuqZB0?si=Enj8c1oszxEuvno1",
    "https://www.youtube.com/embed/MUim4VFXtH0?si=8buP4vQGHwANOrRg",
    "https://www.youtube.com/embed/NSO3MCXJkQw?si=qSH9E5ohGb2pa6pR",
    "https://www.youtube.com/embed/RPD74u4U7dI?si=ZpI7heob16BVL4SB",
    "https://www.youtube.com/embed/S7EZq-YRv-4?si=ZcsTZ2D_rRg5cb08",
    "https://www.youtube.com/embed/9rHbZNDThQ0?si=2o3Hz-2BJstMndxo",
    "https://www.youtube.com/embed/CwCdiZ02qME?si=X-P05smQau7D48C6",
    "https://www.youtube.com/embed/bDva9PAvk8Y?si=jozHhm7N7teHvJkQ",
    "https://www.youtube.com/embed/B5Cuy8YyM9Y?si=2cZDyrqWgXGmuPNR",
    "https://www.youtube.com/embed/NXikTzO5Z-g?si=7G3HczOBka4s07Rh",
    "https://www.youtube.com/embed/SrP1Eaw1F2g?si=b4IurOLUTif4RaZd",
    "https://www.youtube.com/embed/qUbTjWSfUck?si=FN9WktCWwAfHFPTE",
    "https://www.youtube.com/embed/QpsU5vHvWCE?si=4AuhFX3_fa6nCBrQ",
    "https://www.youtube.com/embed/VXcpNIt5TrE?si=BUCieKpEjP5J6b3j",
    "https://www.youtube.com/embed/ZJTrQvYTO1k?si=-G7ckb_5_VPdoydw",
    "https://www.youtube.com/embed/fx72db9mAmk?si=cwMc15lm5V2DAaMZ",
    "https://www.youtube.com/embed/TOrNsP-7xZ8?si=cNENliiADHzAxyVz",
    "https://www.youtube.com/embed/b42pbOGi2ww?si=jb3GYPANHbvgR_2Q",
    "https://www.youtube.com/embed/rk8kTVDFBto?si=5V1CGzUjP_Z6A-AX",
    "https://www.youtube.com/embed/JogEWeZ6vtA?si=Pr3Gvsu-XkAHFMcS",
    "https://www.youtube.com/embed/LaYFocIL-9k?si=gkIKvMsRhH_XosT6",
    "https://www.youtube.com/embed/oezfoR4KFS8?si=s5HpIXbRQTAXFCZl",
    "https://www.youtube.com/embed/Kv2iOLyGmIU?si=nq-jXHuq9bmIco4C",
    "https://www.youtube.com/embed/yJbqBDhmJFc?si=4_bD5w8fhI_7iA2K",
    "https://www.youtube.com/embed/N8BSzDjlTj0?si=Z5z74FTG8OlIrylf",
    "https://www.youtube.com/embed/QYF0wbRBW_s?si=EM8xpePntjlgVFP9",
    "https://www.youtube.com/embed/A0AI6yYjqXM?si=zEXSHgLCy7r6V5In",
    "https://www.youtube.com/embed/mxUIMAcagWg?si=G_h7D1NgynIomv_3",
    "https://www.youtube.com/embed/kqiNl_Bg2CU?si=XlJAX7r3hM8ohNoR",
    "https://www.youtube.com/embed/Y5efdrb6Kak?si=vGHDAsgJdd5YpB_U",
    "https://www.youtube.com/embed/S8bmLEqMTKU?si=5Q5ukdXb6JQIVJeR",
    "https://www.youtube.com/embed/Guoz3H9VBe4?si=69oJkRXHhT2U1Khg",
    "https://www.youtube.com/embed/PGSi8fHEdWY?si=VhHUr8nWt_KjB9RB",
    "https://www.youtube.com/embed/N4FqVVWhv7A?si=NHhDNUIr0vEFr49p",
    "https://www.youtube.com/embed/ucgx3_yn47s?si=bCygq6dVCje2KyXm",
    "https://www.youtube.com/embed/m7yvsPl4TCY?si=UpbhSxBhZ7OjEjaH",
    "https://www.youtube.com/embed/zASfP6iihAQ?si=lqcrEV3eOiNDVZjH",
    "https://www.youtube.com/embed/sER67zYV_t0?si=61IM_LRLCaSR7p-c",
    "https://www.youtube.com/embed/9H2Ej5-pRuk?si=FTEjvwsFv5Q1VeHq",
    "https://www.youtube.com/embed/2iUD0gK8NT0?si=1RkzNSMNuzdIjClK",
    "https://www.youtube.com/embed/gY88OuyfQn0?si=DEha02alGd3eCv0P",
    "https://www.youtube.com/embed/diDE82lt1ck?si=G_cLxJ4eTCTMB7VL",
    "https://www.youtube.com/embed/_kjxtw_kpX0?si=6i89HJ7KiIkUJvsY",
    "https://www.youtube.com/embed/6GYeOUOor8c?si=fJMTb1YuvCYOeB4F",
    "https://www.youtube.com/embed/5Dz1D09iPOY?si=49agNG8CRSuGKBn6",
    "https://www.youtube.com/embed/UXI_4AL-Vcc?si=gKbnd7dFRNY76gVd",
    "https://www.youtube.com/embed/n9aByNfgtAY?si=KSoqMEAIuEJS47bn",
    "https://www.youtube.com/embed/Pv0cd7U9gvA?si=ok5dcof46qk5rjjF",
  ]



  const videosPerRow = 4;
  const videosPerColumn = 4;
  const videosPerPage = 12;
  const totalPages = Math.ceil(videoLinks.length / videosPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = Math.min(startIndex + videosPerPage, videoLinks.length);
  const displayedVideos = videoLinks.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='layout'>
      <div className='left-ads'>
        <NewsAds />
      </div>
      
      
      <div className='content'>
        <Outlet />
        <div className="video-gallery">
          {displayedVideos.map((videoLink, index) => (

            <div key={index} className="video-item">
              <iframe
                width="100%"
                height="280"
                src={videoLink}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`video-${index}`}
              ></iframe>

            </div>
          ))}
        </div>
        <div className="pagination-buttons">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
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
      
      <div className="right-ads layout1">
        <RightNewsAds />
      </div>

      
    </div>
  );
};

export default VideoComponent;
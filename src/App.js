// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';
import Magazine from './components/magazine';
import Crops from './components/Crops';
import Contact from './components/contact';
import Experience from './components/services/service1';
import Challenges from './components/services/service2';
import Technology from './components/services/service3';
import VideoComponent from './components/vedio';
import Footer from './components/footer';
import AdComponent from './components/headlines/h1';
import Headline2 from './components/headlines/h2';
import Headline3 from './components/headlines/h3';
import Headline4 from './components/headlines/h4';
import AdComponent1 from './components/headlines/h5';
import AdContent from './components/headlines/h6';
import G20Event from './components/headlines/h7';
import AdComponent3 from './components/headlines/h8';
import StoryComponent from './components/Leftads/l1';
import AdComponent4 from './components/Leftads/l2';
import AdComponent5 from './components/Leftads/l3';
import Ad5Component from './components/Leftads/l4';
import Ad6Component from './components/Leftads/l5';
import AdComponentr1 from './components/rightads/r1';
import Ad2Componentr2 from './components/rightads/r2';
import Ad2Componentr3 from './components/rightads/r3';
import Ad4 from './components/rightads/r4';
import Ad5 from './components/rightads/r5';
import Ad6 from './components/rightads/r6';
import AdSection from './components/Leftads/adsection';
import YourComponent from './components/headlines';
import Adscrop from './components/crops-ads/c1';
import Adscrop2 from './components/crops-ads/c2';
import Adscrop3 from './components/crops-ads/c3';
import Adscrop4 from './components/crops-ads/c4';
import Adscrop5 from './components/crops-ads/c5';

import './App.css';
import "./components/layout.css";
import NewsAds from './components/Leftads/adsection';


import LeftCrops1 from './components/left-crops/lc1';
import LeftCrops2 from './components/left-crops/lc2';
import LeftCrops3 from './components/left-crops/lc3';
import LeftCrops4 from './components/left-crops/lc4';
import LeftCrops5 from './components/left-crops/lc5';

const App = () => {
    return (
        <Router>
            <NavBar />
            
            <Routes>
                
            <Route path="/" element={<NewsAds />} />
            
            
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/magazine" element={<Magazine />} />
                <Route path="/Crops" element={<Crops />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/service1" element={<Experience />} />
                <Route path="/services/service2" element={<Challenges />} />
                <Route path="/services/service3" element={<Technology />} />
                <Route path="/vedio" element={<VideoComponent />} />
                <Route path="/headlines/h1" element={<AdComponent />} />
                <Route path="/headlines/h2" element={<Headline2 />} />
                <Route path="/headlines/h3" element={<Headline3 />} />
                <Route path="/headlines/h4" element={<Headline4 />} />
                <Route path="/headlines/h5" element={<AdComponent1 />} />
                <Route path="/headlines/h6" element={<AdContent />} />
                <Route path="/headlines/h7" element={<G20Event />} />
                <Route path="/headlines/h8" element={<AdComponent3 />} />
                <Route path="/Leftads/l1" element={<StoryComponent />} />
                <Route path="/Leftads/l2" element={<AdComponent4 />} />
                <Route path="/Leftads/l3" element={<AdComponent5 />} />
                <Route path="/Leftads/l4" element={<Ad5Component />} />
                <Route path="/Leftads/l5" element={<Ad6Component />} />
                <Route path="/rightads/r1" element={<AdComponentr1 />} />
                <Route path="/rightads/r2" element={<Ad2Componentr2 />} />
                <Route path="/rightads/r3" element={<Ad2Componentr3 />} />
                <Route path="/rightads/r4" element={<Ad4 />} />
                <Route path="/rightads/r5" element={<Ad5 />} />
                <Route path="/rightads/r6" element={<Ad6 />} />
                <Route path="/adsection" element={<AdSection />} />
                <Route path="/headlines" element={<YourComponent />} />
                <Route path="/crops-ads/c1" element={<Adscrop/>}/>
                <Route path="/crops-ads/c2" element={<Adscrop2/>}/>
                <Route path="/crops-ads/c3" element={<Adscrop3/>}/>
                <Route path="/crops-ads/c4" element={<Adscrop4/>}/>
                <Route path="/crops-ads/c5" element={<Adscrop5/>}/>
                <Route path="/left-crops/lc1" element={<LeftCrops1/>}/>
                <Route path="/left-crops/lc2" element={<LeftCrops2/>}/>
                <Route path="/left-crops/lc3" element={<LeftCrops3/>}/>
                <Route path="/left-crops/lc4" element={<LeftCrops4/>}/>
                <Route path="/left-crops/lc5" element={<LeftCrops5/>}/>
                
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

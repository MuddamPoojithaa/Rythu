import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; 2024 Rythubadi. All rights reserved. Designed by Advoize.</p>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.facebook.com/telugurythubadi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/rythu_badi/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@RythuBadi" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <p className="mb-1">Email us at: <a href="mailto:telugurythubadi@gmail.com" className="hover:text-white clr">telugurythubadi@gmail.com</a></p>
                
                <p>ఇమెయిల్: telugurythubadi@gmail.com లేదా 8897119694 నంబరులో సమాచారం అందించవచ్చు.</p>
            </div>
        </footer>
    );
};

export default Footer;

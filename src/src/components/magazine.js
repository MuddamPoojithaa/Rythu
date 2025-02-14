import React from 'react';
import './magazine.css';
// import mgn from '../';

const magazines = [
   
    { title: 'తొలి సంచిక', file: '/magazine/magazine.pdf' },
    // { title: 'Magazine 2', file: '/magazine/magazine.pdf' },
    // Add more magazine objects with title and file path
];

const Magazine = () => {
    return (
        
        <div className="magazine-container">
            {magazines.map((magazine, index) => (
                <div key={index} className="magazine-item">
                    <h2>{magazine.title}</h2>
                    <div className="pdf-viewer">
                        <iframe
                            src={magazine.file}
                            width="1550px"
                           
                            height="600px"
                            frameBorder="0"
                            allowFullScreen
                            title={`magazine-${index}`}
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Magazine;

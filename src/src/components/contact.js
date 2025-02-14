import React from 'react';
import './contact.css';
import NewsAds from './Leftads/adsection';
import RightNewsAds from './rightadscomonent';
import NewsHeadlines from './headlines';
import { Outlet } from 'react-router-dom';
import Swal from 'sweetalert2'

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
                    <div className='news'>
                <NewsHeadlines />
            </div>
                </div>

            </div>
            
            <div className="right-ads layout1">
                <RightNewsAds />
            </div>

            
            
        </div>
    );
};

export default Contact;

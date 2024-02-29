import React from 'react'
import './Contact.css'
import msg_icon from '../Assets/msg-icon.png'
import mail_icon from '../Assets/mail-icon.png'
import phone_icon from '../Assets/phone-icon.png'
import location_icon from '../Assets/location-icon.png'
import white_arrow from '../Assets/white-arrow.png'
import { useState } from 'react'



const Contact = () => {
    const [result, setResult] = React.useState("");

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "1a238126-59b7-4ad2-ba08-1ead72587fc9");
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res) => res.json());
        if (res.success) {
          console.log("Success", res);
          setResult(res.message);
          event.target.reset();
        } else {
          console.log("Error", res);
          setResult(res.message);
        }
      };

  return (
    <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
          <p>"Feel free to reach out to us for any 
            inquiries or assistance 
            you may need. Our team is here to help!"</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@tom</li>
                <li><img src={phone_icon} alt="" />+1 234-456-789</li>
                <li><img src={location_icon} alt="" />24 Iyaala Str,<br/> @Aluasa IKEJA, Close To ICM</li>
            </ul>
        </div>
        <div className="contact-col">
           <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' 
             required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number'
            required/>
            <label>Write your message here</label>
            <textarea name='message'  rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span> 
        </div>
    </div>
  )
}

export default Contact;

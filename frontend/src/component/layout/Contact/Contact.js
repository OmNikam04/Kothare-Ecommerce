import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_ii6uuxm', 'template_g165c0m', form.current, 'JWxhGHuotOWjKj3DX')
      .then((result) => {
          console.log(result.text);
          alert("message sent")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <div className= "contact-section">
      <div className= "contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className= "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className= "text">Kothari's Luggage Mall in Nashik is one of the leading businesses in the Authorised Dealers. Also known for Authorised Dealers, Authorised Dealers-Samsonite and much more. Find Address, Contact Number, Reviews and ratings, Photos, Maps of Kothari's Luggage Mall, Nashik.</p>
      </div>


      <div className= "contact-body">
        <div className= "contact-info">
          <div>
            <span><i className= "fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span className= "text">+91-0253-2313874</span>
          </div>
          <div>
            <span><i className= "fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span className= "text">kotharimall0102@gmail.com</span>
          </div>
          <div>
            <a href="#map" style={{textDecoration:"none", color:"black"}}>
            <span><i className= "fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span className= "text">L-16, Utility Cerlife, Opp. Rajiv Gandhi Bhavan, Sharanpur road, Nashik-2 (M.S) INDIA</span>
            </a>
          </div>
          <div>
            <span><i className= "fas fa-clock"></i></span>
            <span>Opening Hours</span>
            <span className= "text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className= "contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <h3>Bulk order Enquiry? </h3>
            <p>send us a mail...</p>
            <div>
              <input type = "text" name="user_name" className= "form-control" placeholder="First Name"/>
            </div>
            <div>
              <input type = "email" name="user_email" className= "form-control" placeholder="Your email"/>
            </div>
            <textarea rows = "5" name="message" placeholder="Message" className= "form-control"></textarea>
            <input type = "submit" className= "send-btn" value = "send"/>
          </form>
        </div>
      </div>

      <div id="map" className= "map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14996.509551363275!2d73.7641905289727!3d20.003167535003367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba0c0c0f9b5%3A0x4d710a1f911026d0!2sKothari%20Bags%20Store!5e0!3m2!1sen!2sin!4v1651952445658!5m2!1sen!2sin" width="100%" height="600" frameBorder="0" style={{border:0, allowfullscreen:"" ,ariaHidden:"false" ,tabindex:"0"}} ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contact;

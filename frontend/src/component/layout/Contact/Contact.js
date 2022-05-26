import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

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
        <p className= "text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p>
      </div>


      <div className= "contact-body">
        <div className= "contact-info">
          <div>
            <span><i className= "fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span className= "text">1-2392-23928-2</span>
          </div>
          <div>
            <span><i className= "fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span className= "text">mail@company.com</span>
          </div>
          <div>
            <span><i className= "fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span className= "text">2939 Patrick Street, Vicotria TX, United States</span>
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
              {/* <input type = "text" className= "form-control" placeholder="Last Name"/> */}
            </div>
            <div>
              <input type = "email" name="user_email" className= "form-control" placeholder="E-mail"/>
              {/* <input type = "text" className= "form-control" placeholder="Phone"/> */}
            </div>
            <textarea rows = "5" name="message" placeholder="Message" className= "form-control"></textarea>
            <input type = "submit" className= "send-btn" value = "send"/>
          </form>
        </div>
      </div>

      <div className= "map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14996.509551363275!2d73.7641905289727!3d20.003167535003367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba0c0c0f9b5%3A0x4d710a1f911026d0!2sKothari%20Bags%20Store!5e0!3m2!1sen!2sin!4v1651952445658!5m2!1sen!2sin" width="100%" height="600" frameBorder="0" style={{border:0, allowfullscreen:"" ,ariaHidden:"false" ,tabindex:"0"}} ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contact;

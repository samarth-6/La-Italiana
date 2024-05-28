import React from 'react';
import './callpage.css';

const Callpage=()=>{
  return (
    <div className="customer-service">
      <h2>Contact Customer Service</h2>
      <div className="contact-details">
        <p>If you have any questions or need assistance, feel free to contact us:</p>
        <ul>
          <li><strong>Phone:</strong> +91 8076XXXXX</li>
          <li><strong>Email:</strong> laitaliana@restaurant.com</li>
          <li><strong>Address:</strong> Mansarovar Park, Dwarka , New Delhi</li>
        </ul>
      </div>
      <div className="business-hours">
        <h3>Business Hours</h3>
        <ul>
          <li>Monday - Friday: 9:00 AM - 10:00 PM</li>
          <li>Saturday: 10:00 AM - 11:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div className="location-map">
        <h3>Our Location :</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.073292073073!2d77.0710733144067!3d28.60957498241868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f6b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sMansarovar%20Park%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1633946820007!5m2!1sen!2sin" width="600" height="450" ></iframe>
      </div>
    </div>
  );
};
export default Callpage;

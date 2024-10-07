import { FC } from "react";
import Header from '../../components/header';  
import './styles.css';
import Image from 'next/image'; // Import Image from Next.js
import heroImg from '../../assets/hero-img.png'; 

const Index: FC = () => { 
  console.log("ContactUs component rendered");
  
  return (
    <div className="contact-us">
      <Header />
      <div className="contact-page">
        <div className="contact-details">
          <div className="profile-photo-container">
            <Image 
              src={heroImg} // Use the imported image directly
              alt="Hero" 
              className="hero-img" 
              layout="responsive" // Ensures responsiveness
              width={300} // Set the appropriate width
              height={200} // Set the appropriate height
            /> 
          </div>
          <div className="contact-info">
            <h3>Contact details:</h3>
            <p>adimas.barnwal@brightscout.com</p>
            <p>+918651447521</p>
            <h3>Social:</h3>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Webflow</p>
          </div>
        </div>
        <div className="message-form">
          <h2>Let&apos;s build something cool together</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Adimas Barnwal" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="adimas.barnwal@brightscout.com" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="For web design work Enquire" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <input type="text" placeholder="Type your Message" />
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-left">
          <p>Built with 💖 by Brightscout &amp; Ayush</p> {/* Escape '&' */}
        </div>
        <div className="footer-right">
          <div className="social-media">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Webflow</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

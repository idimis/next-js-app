import { FC } from "react";
import './styles.css';

const Footer: FC = () => {
  return (
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
  );
};

export default Footer;

import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <footer className="footer">
        <div className="footer-name">
            <div className="footer-about">
                <h2 className="footer-title">NoteSwap</h2>
            </div>
            <div className="footer-about">
                <p className='footer-subtitle' onClick={scrollToTop} style={{ cursor: 'pointer' }}>
                  Back to top ↑
                </p>
            </div>
        </div>
        <div className='footer-links'>
            <div className='footer-social'>
                <div className="social-media">
                    <p className="footer-subtitle">Social Media</p>
                    <div className="social-icons">
                        <a href='https://www.twitter.com/' className='socialmedia'><FaTwitter className="social-icon" /></a>
                        <a href='https://www.instagram.com/' className='socialmedia'><FaInstagram className="social-icon" /></a>
                        <a href='https://www.facebook.com' className='socialmedia'><FaFacebookF className="social-icon" /></a>
                    </div>
                </div>
                <div className="footer-contact">
                    <p className="footer-subtitle">Phone</p>
                    <p className='footer-number' onClick={() => copyToClipboard('+91 63861 89089')} style={{ cursor: 'pointer' }}>
                      +91 63861 89089
                    </p>
                    <p className='footer-number' onClick={() => copyToClipboard('+91 78400 99836')} style={{ cursor: 'pointer' }}>
                      +91 78400 99836
                    </p>
                </div>
            </div>
            <div className='email'>
                <p className="footer-subtitle">E-Mail</p>
                <a href="mailto:jurudentyi@gmail.com" className='footer-email' style={{ cursor: 'pointer' }}>
                  jurudentyi@gmail.com
                </a>
                <p className="footer-subtitle">Support</p>
                <a href="mailto:Connect@valsctotech.com" className='footer-email' style={{ cursor: 'pointer' }}>
                  Connect@valsctotech.com
                </a>
            </div>
        </div>
        <hr />
        <div className="footer-last">
          <div className="footer-copyright">
            <p>Copyrights</p>
          </div>
          <div className="footer-country">
            <p>India</p>
          </div>
        </div>
        <br />
        <br />
        <div className="footer-bottom">
          <a href='https://www.valscotech.com/' target="_blank" rel="noopener noreferrer">
            <button className="footer-button">
              ⟶ Check out more Services by Valsco Tech
            </button>
          </a>
        </div>
    </footer>
  );
};

export default Footer;

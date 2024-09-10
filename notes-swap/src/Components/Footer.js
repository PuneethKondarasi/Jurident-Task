import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-name">
            <div className="footer-about">
                <h2 className="footer-title">NoteSwap</h2>
            </div>
            <div className="footer-about">
                <p className='footer-subtitle'>Back to top ↑</p>
            </div>
        </div>
        <div className='footer-links'>
            <div className='footer-social'>
                <div className="social-media">
                    <p className="footer-subtitle">Social Media</p>
                    <div className="social-icons">
                        <FaTwitter className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaFacebookF className="social-icon" />
                    </div>
                </div>
                <div className="footer-contact">
                    <p className="footer-subtitle">Phone</p>
                    <p className='footer-number'>+91 63861 89089</p>
                    <p className='footer-number'>+91 78400 99836</p>
                </div>
            </div>
            <div className='email'>
                <p className="footer-subtitle">E-Mail</p>
                <p className='footer-email'>jurudentyi@gmail.com</p>
                <p className="footer-subtitle">Support</p>
                <p className='footer-email'>Connect@valsctotech.com</p>
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
          <button className="footer-button">
            ⟶ Check out more Services by Valsco Tech
          </button>
        </div>
    </footer>
  );
};

export default Footer;

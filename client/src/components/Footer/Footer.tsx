import React from 'react';
import styles from './Footer.module.css';
import fb from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import pinterest from '../../assets/pinterest.png'
import card from '../../assets/credit-card.png'
import parchment from '../../assets/parchment.png'
import ampersand from '../../assets/ampersand.png'
import contact from '../../assets/contact.png'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} >
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          PutHub
        </div>
        <div id={styles.bottomFooter}>
          <div>
            <div>
              <img src={contact} alt="contact" />
              <div>
                <p style={{ fontWeight: "bold", color: "#6bffba" }}>Contact Us</p>
                <p>Text: 312-779-1979</p>
                <p>Mon - Fri: 8 am - 8 pm CT</p>
                <p>Sat - Sun: 8 am - 7 pm CT</p>
              </div>
            </div>
            <div>
              <img src={card} alt="contact" />
              <div>
                <p style={{ fontWeight: "bold", color: "#6bffba" }}>Credit Card</p>
                <p>Text: 312-779-1979</p>
                <p>Mon - Fri: 8 am - 8 pm CT</p>
              </div>
            </div>

            <div>
              <img src={parchment} alt="" />
              <div>
                <p style={{ fontWeight: "bold", color: "#6bffba" }}>Parchment paper & History</p>
                <p>Find the complete history and progression about our company.</p>
              </div>
            </div>
            <div>
              <img style={{ transform: 'translateY(-25px)' }}
                src={ampersand} alt="ampersand logo" />
            </div>
          </div>
          <hr style={{ width: '100%', margin: "auto", marginTop: '2vh' }} />
          <div>
            <div>
              <div>
                <p style={{ fontWeight: "bold", color: "#6bffba" }}>Our Company</p>
                <p>About us</p>
                <p>Careers</p>
                <p>Responsible designs</p>
                <p>Store Locations and Events</p>
              </div>
            </div>
            <div>
              <div>
                <p style={{ fontWeight: "bold", color: "#6bffba" }}>Resources</p>
                <p>Customer service</p>
                <p>Account</p>
                <p>Return Policy</p>
                <p>Shipping Information</p>
                <p>Email and Text Preferences</p>
                <p>Gift Cards Catalogs</p>
                <p>Product Recalls</p>
                <p>Accessibility Statement</p>
                <p>CA supply chains Act</p>
                <p>Do not sell my personal Information</p>
                <p>Cookies settings</p>
              </div>
            </div>

            <div>
              <div>
                <p style={{ fontWeight: "bold", color: "#6bffba" }}>Portfolio</p>
                <p>Try our View in Your Room feature, manage repositories and save project info.</p>
                <img style={{ width: "60%" }}
                  src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Transparent-Image.png"
                  alt="download on apple app store" />
              </div>
            </div>
            <div>
              <div>
                <p style={{ fontWeight: "bold", color: "#6bffba" }}>Social Media</p>
                <div id={styles.socialMedia}>
                  <img id="fb" style={{ width: '25px', borderRadius: '30%' }} src={fb} alt="FACEBOOK" />
                  <img id="insta" style={{ width: '25px' }} src={insta} alt="INSTA" />
                  <img id="pinterest" style={{ width: '25px', borderRadius: '30%' }} src={pinterest} alt="Pinterest" />
                  <img id="youtube" style={{ width: '25px' }} src={youtube} alt="YouTube" />
                </div>

              </div>

            </div>
          </div>
          <hr style={{ width: '100%', margin: "auto", marginTop: '2vh' }} />
          <br />
          <div id={styles.latest}>
            <p style={{ fontSize: 'small' }}>©2023 PutHub. All rights reserved. Terms of Use Privacy Site Index Ad
              Choices Co-Browse
              If you are using a screen reader and are having problems using this website, please call (800)
              967-6696 for assistance.
            </p>
          </div>
          <br />

          <div className={styles.footerText}>
            &copy; {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


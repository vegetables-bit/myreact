import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo/logo.png';
import instagram_icon from '../Assets/icon/ig.jpg';
import twitter_icon from '../Assets/icon/x.png';
import telegram_icon from '../Assets/icon/tg.png';
import gmail_icon from '../Assets/icon/gmail.png';
import youtube_icon from '../Assets/icon/youtbe.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt='Shopper Logo' />
        <p>VEGETABLES</p>
      </div>

      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='footer-social'>
        <a href='#' aria-label='Instagram'>
          <img src={instagram_icon} alt='Instagram' />
        </a>
        <a href='#' aria-label='Telegram'>
          <img src={telegram_icon} alt='Telegram' />
        </a>
        <a href='#' aria-label='Gmail'>
          <img src={gmail_icon} alt='Gmail' />
        </a>
        <a href='#' aria-label='Twitter'>
          <img src={twitter_icon} alt='Twitter' />
        </a>
        <a href='#' aria-label='YouTube'>
          <img src={youtube_icon} alt='YouTube' />
        </a>
      </div>

      <div className='footer-bottom'>
        <hr />
        <p>© 2025 SHOPPER — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

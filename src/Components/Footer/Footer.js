import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  AOS.init();
  return (
  <div className='footer-container-bg'>
    <div className='footer-container'>
    <section className='footer-subscription'>
      <img src='images/logo1.png' data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'></img>
      <br></br>
        <p data-aos='fade-up' data-aos-duration='1000'  className='footer-subscription-heading'>
          SOROUP TRADING COMPANY LTD
          <br></br>
          <p data-aos='fade-up' data-aos-duration='1000'  className='footer-subscription-heading'></p>
          Soroup tarding Co. Ltd
          <br></br>
          <i data-aos='fade-up' data-aos-duration='1000'  className="fas fa-map-marked-alt"/>
          <p  data-aos='fade-up' data-aos-duration='1000' style={{ fontSize:'20px'}}>P.O. BOX 41233, Riyadh 11521<br></br>Kingdom soudi Arabia</p>
        </p>
        <br></br>
        <i data-aos='fade-up' data-aos-duration='1000'  className="fas fa-mouse "  style={{color:'blue', fontSize:'30px'}}/>
        <p data-aos='fade-up' data-aos-duration='1000'  className='footer-subscription-heading'>info@soroup.com  |  soroup@gmail.com  <br></br> www.soroup.com</p>
        </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper' data-aos='fade-up' data-aos-duration='1000' >
          <div className='footer-link-items' data-aos='fade-up' data-aos-duration='1000' >
          <h2>HEAD QUARTER</h2>
          <p>CENTERAL REGION, RIYADH</p>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
          <div className='footer-link-items' data-aos='fade-up' data-aos-duration='1000' >
          <h2>WESTERN REGION</h2>
          <p>JEDDAH BRANCH OFFICE</p>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
        </div>
        <div className='footer-link-wrapper' data-aos='fade-up' data-aos-duration='1000' >
          <div className='footer-link-items'>
          <h2>EASTERN REGION</h2>
          <p>DAMMANM BRANCH OFFICE</p>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
          <div className='footer-link-items'>
            <h2>NOTHERN REGION</h2>
            <p>HAIL BRANCH OFFICE</p>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img data-aos='fade-up' data-aos-duration='2000'  src='images/logo1.png'/>&nbsp;SOROUP
            </Link>
          </div>
          
          <small className='website-rights'>Web Design & SEO By <a href='#' style={{textDecoration:'none', color:'blue',fontWeight:'700'}}>Sofgtenics</a></small>
          <div className='social-icons' data-aos='fade-up' data-aos-duration='100' >
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
        
      </section>
    </div>
  </div>
  );
}

export default Footer;

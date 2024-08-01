import React from "react";
import ReactCountryFlag from "react-country-flag";
import { CiGlobe } from "react-icons/ci";
import logo from "../../assets/amazonLogo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="top">
        <span>Back to top</span>
      </div>
      <div className="one">
        <div className="row">
          <p>Get to Know Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div className="row">
          <p>Connect with Us</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="row">
          <p>Make Money with Us</p>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>

        <div className="row">
          <p>Let Us Help You</p>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Recalls and Product Safety Alerts</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>

      <div className="two">
        <img src={logo} alt="" />
        <div className="lang">
          <CiGlobe size="15px" />
          <span>English</span>
        </div>

        <div className="country">
          <ReactCountryFlag countryCode="IN" svg />
          <span>India</span>
        </div>
      </div>

      <div className="bottom">
        <div className="data">
          <a className="col">
            <p>AbeBooks</p>
            <p>Books, art</p>
            <p>& collectibles</p>
          </a>
          <a className="col">
            <p>Amazon Web Services</p>
            <p>Scalable Cloud</p>
            <p>Computing Services</p>
          </a>
          <a className="col">
            <p>Audible</p>
            <p>Download</p>
            <p>Audio Books</p>
          </a>
          <a className="col">
            <p>IMDb</p>
            <p>Movies, TV</p>
            <p>& Celebrities</p>
          </a>
          <a className="col">
            <p>Shopbop</p>
            <p>Designer</p>
            <p>Fashion Brands</p>
          </a>
          <a className="col">
            <p>Amazon Business</p>
            <p>Everything For</p>
            <p>Your Business</p>
          </a>
          <a className="col">
            <p>Prime Now</p>
            <p>2-Hour Delivery</p>
            <p>on Everyday Items</p>
          </a>
          <a className="col">
            <p>Amazon Prime Music</p>
            <p>100 million songs, ad-free</p>
            <p>Over 15 million podcast episodes</p>
          </a>
        </div>
        <div className="copyRights">
          <div className="links">
            <a href="">Conditions of Use & Sale</a>
            <a href="">Privacy Notice</a>
            <a href="">Interest-Based Ads</a>
          </div>
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

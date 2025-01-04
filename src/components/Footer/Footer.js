import React from 'react';
import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';
import map from "../../assets/svgs/map-pionter.svg";
import globe from "../../assets/svgs/globe19.svg";
import phone from "../../assets/svgs/phone-black.svg";

const Footer = () => {
  const Foter = () => new Date().getFullYear();
  return (
    <>
      <div className={styles.main}>
        <div className="container">
          <div className={`${styles.row}`}>
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.logo}> Hendrex Resources Limited </p>{" "}
              <p className={styles.text}>
                Building the future requires a strong foundation, a clear
                vision, and a trusted partner. We are committed to providing the
                highest level of services to help our clients achieve their
                goals and build a better tomorrow!
              </p>{" "}
              <div className={styles.social_logo}>
                <a
                  href="https://www.facebook.com/profile.php?id=100063462045932&mibextid=ZbWKwL"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={fb} alt="fb" className={styles.img} />
                </a>
                <a href="#instagram" rel="noopener noreferrer" target="_blank">
                  <img src={linkdin} alt="in" className={styles.img} />
                </a>
                <a href="#linkedIn" rel="noopener noreferrer" target="_blank">
                  <img src={insta} alt="insta" className={styles.img} />
                </a>
              </div>
            </div>
            <div className={styles.second}>
              {" "}
              <div className={`col-lg-3 col-sm-6  ${styles.contain}`}>
                <p className={styles.head} id={styles.about}>
                  {" "}
                  About Us{" "}
                </p>
                <Link to="/" className={styles.link}>
                  <p className={styles.text} id={styles.about}>
                    Home{" "}
                  </p>
                </Link>
                <Link to="/aboutUs" className={styles.link}>
                  <p className={styles.text} id={styles.about}>
                    {" "}
                    About
                  </p>
                </Link>
                <Link to="/contactUs" className={styles.link}>
                  <p className={styles.text} id={styles.about}>
                    Contact
                  </p>
                </Link>
              </div>
              <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                <p className={styles.head}> Information</p>{" "}
                <Link to="/projectDetails?id=7" className={styles.link}>
                  {" "}
                  <p className={styles.text}>Projects</p>
                </Link>
                <Link to="/news" className={styles.link}>
                  <p className={styles.text}> News and Happenings </p>
                </Link>
                <Link to="/services" className={styles.link}>
                  <p className={styles.text}> Our Services </p>
                </Link>
              </div>
              <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                <p className={styles.head}> Contact Us </p>
                <div className={styles.textCont}>
                  <img src={map} alt="icon" />{" "}
                  <p className={styles.text} id={styles.t}>
                    {" "}
                    Km 7 Abak Road, Uyo, Akwa Ibom State{" "}
                  </p>
                </div>{" "}
                <div className={styles.textCont}>
                  <img src={phone} alt="icon" />{" "}
                  <p className={styles.text} id={styles.t}>
                    +234 8032668874{" "}
                  </p>
                </div>{" "}
                <div className={styles.textCont}>
                  <img src={globe} alt="icon" />{" "}
                  <p className={styles.text}> www.hendrexresources.com </p>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>
      <div
        style={{ backgroundColor: "#2b2b2b", borderTop: "solid 1px #707070" }}
      >
        <p className={styles.bottom}>
          Copyright© {Foter()} &nbsp; All rights reserved{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
};
export default Footer;

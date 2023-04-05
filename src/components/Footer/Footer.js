import React from 'react';
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';

const Footer = () => {
  const Foter = () => new Date().getFullYear();
  return (
    <>
      <div
        style={{
          backgroundColor: '#2b2b2b',
          paddingTop: '89px',
          paddingBottom: '90px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.logo}> Hendrex Resources </p>{' '}
              <p className={styles.text}>
                Building the future requires a strong foundation, a clear
                vision, and a trusted partner. We are committed to providing the
                highest level of services to help our clients achieve their
                goals and build a better tomorrow!
              </p>{' '}
              <p className={styles.text}> Quick service delivery! </p>{' '}
              <p className={styles.text}> Affordable prices! </p>{' '}
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
            <div className={`col-lg-3 col-sm-6  ${styles.contain}`}>
              <p className={styles.head}> Services </p>{' '}
              <p className={styles.text}>
                Available 24 hours and 7 days a week{' '}
              </p>{' '}
              <p className={styles.text}> hendrexresource@yahoo.com</p>{' '}
              <p className={styles.text}> (234) 80 - 3266 - 8874 </p>{' '}
            </div>
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}> Head Office </p>{' '}
              <p className={styles.text}>
                Km 7 Abak road Uyo, Akwa Ibom State{' '}
              </p>{' '}
              <p className={styles.text}> hendrexresource@yahoo.com </p>{' '}
              <p className={styles.text}> (080) 3945 - 3274 </p>{' '}
            </div>
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}> Opening Hours </p>{' '}
              <p className={styles.text}> Mon - Sat: 8: 00 - 17: 00 </p>{' '}
              <p className={styles.text}> Sun: Closed </p>{' '}
            </div>{' '}
          </div>
        </div>{' '}
      </div>
      <div
        style={{ backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070' }}
      >
        <p className={styles.bottom}>
          Copyright© {Foter()} &nbsp; All rights reserved{' '}
        </p>{' '}
      </div>{' '}
    </>
  );
};
export default Footer;

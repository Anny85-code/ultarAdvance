import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/aboutcons.png';
import logo2 from '../../../assets/aboutUs/aboutwaste.png';
import logo3 from '../../../assets/aboutUs/oilabout.png';

const Middle = () =>{
    return (
      <div style={{ backgroundColor: '#f8f8f8' }} className="overflow-hidden">
        <div className={`container ${styles.contain}`}>
          <p
            data-aos="fade-down-right"
            data-aos-offset="170"
            className={styles.mainHead}
          >
            Our Services
          </p>
          <p
            data-aos="fade-up-left"
            data-aos-offset="170"
            className={styles.mainContent}
          >
            Stop wasting time and money designing and managing strategy that
            doesn’t get results. Happiness guaranteed!
          </p>

          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-offset="170"
              className="col-md-4"
            >
              <div className={styles.box}>
                <img src={logo1} alt="" />
                <p className={styles.head}>Construction Services</p>
                <p className={styles.content}>
                  Our Construction department provide a variety of services
                  related to the design, construction, and renovation of
                  buildings and infrastructure.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="col-md-4">
              <div className={styles.box}>
                <img src={logo2} alt="" />
                <p className={styles.head}>Waste Management Services</p>
                <p className={styles.content}>
                  Our Waste management companies provide a range of services
                  related to the collection, transportation, and disposal of
                  waste materials.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="col-md-4">
              <div className={styles.box}>
                <img src={logo3} alt="" />
                <p className={styles.head}>Oil and Gas Services</p>
                <p className={styles.content}>
                  Our Oil and gas companies provide services related to the
                  exploration, extraction, and production of oil and gas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Middle;
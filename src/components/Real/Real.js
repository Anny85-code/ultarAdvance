import React from 'react';
import styles from './Real.module.css';
import improveImg from '../../assets/home/experience.jpeg';

const Real = () => {
  return (
    <div className="mb-5 overflow-hidden">
      <div className="row g-0">
        <div className={`col-md-6 ${styles.imgDiv}`}>
          <img
            data-aos="slide-right"
            data-aos-offset="150"
            src={improveImg}
            alt=""
            className={styles.img}
          />
        </div>
        <div className="col-md-6">
          <div className={styles.text}>
            <p
              data-aos="slide-right"
              data-aos-offset="150"
              className={styles.heading}
            >
              Core Values
            </p>
            <p
              data-aos="slide-left"
              data-aos-offset="150"
              className={styles.subHeading}
            >
              Improves Client Experiences
            </p>
            <p
              data-aos="zoom-in"
              data-aos-offset="150"
              className={styles.content}
            >
              We are committed to providing exceptional logistics and waste
              management services that exceed our clients' expectations. Our
              top priority is to ensure that all of our customers are completely
              satisfied with our services, and we take great pride in delivering
              prompt, reliable, and efficient solutions.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Real;

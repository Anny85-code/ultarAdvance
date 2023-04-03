
import React from 'react';
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img1mobile from '../../../assets/aboutUs/aboutmobile.jpeg';
import img2 from '../../../assets/aboutUs/cargo1.jpeg';

const Top = () => {
  return (
    <div className={`container overflow-hidden`}>
      <p data-aos="slide-right" className={styles.heading}>
        About Us
      </p>
      <p data-aos="slide-left" className={styles.subHeading}>
        Logistics and General Merchandise
      </p>
      <p data-aos="fade-up" data-aos-offset="80" className={styles.content}>
        Hendrex Resources Limited is a diversified company with expertise in oil
        and gas, waste management, logistics, and construction. We are committed
        to delivering high-quality services that meet the needs of our clients
        and contribute to the sustainable development of the communities in
        which we operate. As an oil and gas company, we have extensive
        experience in the exploration, production, and transportation of oil and
        gas resources. Our team of experts is highly skilled in managing oil and
        gas projects of varying complexity, from small-scale operations to
        large-scale development projects.
      </p>

      <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
        <div data-aos="slide-right" className={`col-md-6`}>
          <p className={styles.about}>About Us</p>
          <p className={styles.creativity}>We Do with Creativity</p>
          <p className={styles.contn}>
            Our logistics and construction services are also an integral part of
            our business. We provide a range of logistics solutions, including
            transportation and distribution services, as well as warehousing and
            inventory management. Our construction services include project
            management, engineering, and construction for a range of
            infrastructure projects. At Hendrex Resources Limited, we are
            committed to delivering high-quality services that meet the needs of
            our clients while promoting sustainable development. We take pride
            in our commitment to excellence, and we are dedicated to building
            long-term relationships with our clients based on trust, integrity,
            and mutual respect.
          </p>
        </div>
        <div
          data-aos="slide-left"
          data-aos-offset="50"
          className={`col-md-6 ${styles.imgContain}`}
        >
          <img src={img1} alt="" className={styles.img1} />
          <img src={img1mobile} alt="" className={styles.img1mobile} />
        </div>
      </div>
      <div data-aos="fade-up" className="row" style={{ textAlign: 'left' }}>
        <div className={`col-md-6`}>
          <img src={img2} alt="" className={styles.img2} />
        </div>
      </div>
    </div>
  );
};

export default Top;
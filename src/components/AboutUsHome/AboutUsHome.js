import React from "react";
import styles from "./AboutUsHome.module.css";
import img1 from "../../assets/home/hiab.jpg";
import img2 from "../../assets/home/excavator.jpeg";
import img3 from "../../assets/home/payloader.jpeg";

const AboutUsHome = () => {
  return (
    <>
      <div className={`container ${styles.contain}`}>
        <div className="row overflow-hidden">
          <div className="col-md-6">
            <p data-aos="slide-right" className={styles.head}>
              ABOUT US
            </p>
            <p data-aos="slide-left" className={styles.heading}>
              We have a great team in terms of technology & service delivery
            </p>
            <div data-aos="zoom-in">
              <p className={styles.content}>
                UtraAdvance limited specialize in providing a range of services
                to help businesses achieve their goals in a sustainable and
                efficient manner. With decades of combined experience in
                logistics, waste management, and construction, our team is
                uniquely positioned to provide innovative solutions to the
                challenges facing modern businesses. We understand that every
                business is different, which is why we offer a customized
                approach to each of our services. Whether you need assistance
                with transporting goods, managing waste, or building a new
                facility, we have the expertise and resources to get the job
                done right.
              </p>
            </div>
          </div>

          <div className="col-md-6 mt-5 overflow-hidden">
            <div className={styles.row}>
              <div className={`${styles.column} ${styles.col1}`}>
                <img data-aos="zoom-in-right" src={img1} alt="" />
              </div>
              <div className={styles.column}>
                <img
                  data-aos="zoom-in-left"
                  src={img2}
                  style={{ width: "110%" }}
                  alt=""
                />
                <img data-aos="zoom-in-left" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHome;

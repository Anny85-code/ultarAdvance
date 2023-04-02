import React from "react";
import styles from './SMediaServices.module.css';
import img1 from '../../assets/sMediaService/crude3.jpeg';
import img2 from '../../assets/sMediaService/crude1.jpeg';
import img3 from '../../assets/sMediaService/crude2.jpg';

const SMediaServices = () =>{
    return (
      <>
        <div>
          {/* Top  */}
          <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
            <div className="col-md-6 px-0">
              <div className={styles.topContain}>
                <p className={`${styles.headTop}`}>
                  Transportation{' '}
                  <span style={{ color: 'var(--primary-color)' }}>& Crude</span>
                </p>
                <p className={styles.headTop}>Storage</p>
                <p className={styles.identityTop}>
                  Transportation and storage solutions
                </p>
                <p className={styles.content}>
                  Crude oil and natural gas must be transported from production
                  sites to refineries and processing facilities, and then stored
                  until they can be transported to end-users. Transportation and
                  storage solutions must be reliable, efficient, and safe to
                  ensure the uninterrupted supply of oil and gas products.
                </p>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <img src={img1} alt="" className={styles.img1} />
            </div>
          </div>

          {/* Middle  */}
          <div className="container">
            <div
              className={`row ${styles.contain} flex-column-reverse flex-md-row`}
            >
              <div className={`col-md-6 ${styles.middleContain}`}>
                <p className={styles.heading}>Next Level</p>
                <p className={styles.text}>
                  Crude oil and natural gas are transported through a variety of
                  methods, including pipelines, rail, and tanker trucks.
                  Pipelines are the most common method of transporting oil and
                  gas over long distances, as they are efficient and
                  cost-effective. Rail and tanker trucks are used for shorter
                  distances or when pipelines are unavailable. Transportation
                  methods must adhere to strict safety regulations to prevent
                  accidents and minimize environmental impact.
                </p>
              </div>
              <div className="col-md-6">
                <img src={img2} alt="" className={styles.img2} />
              </div>
            </div>
          </div>

          {/* Bottom  */}
          <div className="container">
            <div className={`row ${styles.contain}`}>
              <div className="col-md-6">
                <img src={img3} alt="" className={styles.img2} />
              </div>
              <div className={`col-md-6 ${styles.bottomContain}`}>
                <p className={styles.heading1}>Custom Approach</p>
                <p className={styles.text1}>
                  Our team will help you establish Overall transportation and
                  storage solutions are critical components of the oil and gas
                  industry. Effective transportation and storage solutions
                  ensure the reliable and efficient supply of oil and gas
                  products, while minimizing environmental impact and adhering
                  to strict safety regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default SMediaServices;
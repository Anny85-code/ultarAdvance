import React from 'react';
import styles from './It.module.css';
import img1 from '../../assets/IT/main2.jpg';
import img2 from '../../assets/IT/main1.jpeg';
import img3 from '../../assets/IT/main3.jpeg';

const IT = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: 'var(--primary-color)' }}>
                  Maintenance{' '}
                </span>
              </p>
              <p className={styles.headTop}></p>
              <p className={styles.identityTop}>and repair services</p>
              <p className={styles.content}>
                Maintenance and repair services are critical components of the
                operations of businesses, as they help ensure the continued
                functioning and reliability of equipment and machinery.
                Maintenance involves regular inspections and upkeep of
                equipment, while repair services involve fixing any issues or
                malfunctions that arise. Effective maintenance and repair
                services can help prevent downtime, increase productivity, and
                prolong the lifespan of equipment. Maintenance services can
                include routine inspections, cleaning, lubrication, and
                replacement of parts as needed.
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
              <p className={styles.heading}> IT Consultant</p>
              <p className={styles.text}>
                Repair services involve fixing any issues or malfunctions that
                arise in equipment or machinery. Repair services can range from
                minor repairs, such as replacing a faulty part, to major
                repairs, such as overhauling an entire piece of equipment. Quick
                and effective repair services are critical to minimizing
                downtime and ensuring that businesses can continue their
                operations.
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
                Our team trains and offer professional services to whoever seeks
                such services. Overall, maintenance and repair services are
                critical to the success of businesses that rely on equipment and
                machinery. Effective maintenance and repair services can help
                prevent downtime, increase productivity, and prolong the
                lifespan of equipment, ultimately leading to greater efficiency
                and profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IT;

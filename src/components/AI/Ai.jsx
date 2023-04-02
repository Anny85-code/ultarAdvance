import React from 'react';
import styles from './Ai.module.css';
import img1 from '../../assets/AI/equip1.jpeg';
import img2 from '../../assets/AI/equip2.jpeg';
import img3 from '../../assets/AI/equip3.jpeg';

const AI = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: 'var(--primary-color)' }}>Heavy Duty</span>
              </p>
              <p className={styles.headTop}></p>
              <p className={styles.identityTop}>Equipment Lease </p>
              <p className={styles.content}>
                Heavy duty equipment lease refers to the renting of large,
                specialized equipment used in industries such as construction,
                mining, and agriculture. The equipment leased can include
                bulldozers, excavators, cranes, backhoes, and other heavy
                machinery. Heavy duty equipment lease is a cost-effective
                alternative to purchasing equipment outright, as it allows
                businesses to access the equipment they need without having to
                bear the full cost of ownership.
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
              <p className={styles.heading}>Earth moving equipment</p>
              <p className={styles.text}>
                Leasing heavy duty equipment has a number of benefits. It allows
                businesses to avoid the high upfront costs associated with
                purchasing equipment, as well as the ongoing costs of
                maintenance, repairs, and storage. It also provides businesses
                with access to the latest and most advanced equipment, which can
                help improve efficiency and productivity.
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
                Overall, heavy duty equipment lease is a cost-effective and
                flexible solution for businesses that require specialized
                equipment for their operations. It allows businesses to access
                the equipment they need without the high upfront costs of
                ownership, while also providing flexibility and tax benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AI;

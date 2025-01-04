import React from 'react';
import styles from './Cloud.module.css';
import img1 from '../../assets/sCloud/chain1.jpeg';
import img2 from '../../assets/sCloud/chain2.jpg';
import img3 from '../../assets/sCloud/chain3.webp';

const Cloud = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: 'var(--primary-color)' }}>Supply</span>
              </p>
              <p className={styles.headTop}>and chain</p>
              <p className={styles.identityTop}>management</p>
              <p className={styles.content}>
                Supply chain management is the coordination and management of
                all activities involved in the production and delivery of goods
                and services, from raw materials to the end-user. It encompasses
                all aspects of the supply chain, including procurement,
                production, transportation, warehousing, and distribution.
                Effective supply chain management is critical to the success of
                businesses, as it helps to improve efficiency, reduce costs, and
                enhance customer satisfaction.
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
              <p className={styles.heading}>Supplier Relationship Management</p>
              <p className={styles.text}>
                Supply chain management begins with the procurement of raw
                materials and components needed for production. It involves
                selecting and managing suppliers, negotiating contracts, and
                ensuring the timely delivery of materials. Once materials are
                received, production begins, and products are manufactured
                according to demand.
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
                Our team operates proactively. They seek to uncover and address
                the sources of supply chain management problems. Overall, supply chain
                management is a complex process that involves a wide range of
                activities and stakeholders. Effective supply chain management
                can help businesses to improve efficiency, reduce costs, and
                enhance customer satisfaction, ultimately leading to greater
                profitability and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cloud;

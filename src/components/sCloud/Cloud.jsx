import React from 'react';
import styles from './Cloud.module.css';
import img1 from '../../assets/sCloud/cloud1.jfif';
import img2 from '../../assets/sCloud/cloud3.jfif';
import img3 from '../../assets/sCloud/cloud2.jfif';

const Cloud = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: '#ff4c0a' }}>Cloud</span>
              </p>
              <p className={styles.headTop}>and IOT</p>
              <p className={styles.identityTop}>Based Solutions</p>
              <p className={styles.content}>
                In the modern digital era, businesses cannot operate in silos.
                In order to remain competitive and achieve the objectives of
                strategic initiatives, businesses need to adopt a collaborative
                and integrated approach. Cloud-based solutions are a strategic
                way to meet these goals because they provide an accessible
                platform that is scalable, readily available, and
                cost-effective. As such, cloud computing has become one of the
                most important IT trends.
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
              <p className={styles.heading}>IoT</p>
              <p className={styles.text}>
                The easy way to put is that a Cloud-based solution takes
                advantage of the internet to deliver its products and services.
                This type of solution is accessed remotely and does not require
                the user to be physically on the same network. A cloud-based
                solution can be accessed from any device, whether it be a
                laptop, mobile phone, or desktop computer, virtually anything
                that taps onto the internet.
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
                the sources of cloud based problems. A cloud-based solution can
                help organizations save money by reducing operational costs.
                This is because it can reduce maintenance, hardware, and
                software costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cloud;

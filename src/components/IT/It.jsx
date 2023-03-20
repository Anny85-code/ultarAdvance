import React from 'react';
import styles from './It.module.css';
import img1 from '../../assets/IT/it4.jpg';
import img2 from '../../assets/IT/it3.png';
import img3 from '../../assets/IT/it2.jfif';

const IT = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: '#ff4c0a' }}>IT</span>
              </p>
              <p className={styles.headTop}></p>
              <p className={styles.identityTop}>Consultancy</p>
              <p className={styles.content}>
                A career in information technology can provide opportunities to
                collaborate with people frequently and offer advice about
                technology use to companies and organizations. One common job
                title in information technology is an IT consultant, who
                typically works with organizations or institutions that use
                technology systems for their business operations. You might
                thrive in a career as an IT consultant if you have an interest
                in technology and enjoy working with others. In this article, we
                define what an IT consultant is and explore how to become one.
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
                A career in information technology can provide opportunities to
                collaborate with people frequently and offer advice about
                technology use to companies and organizations. One common job
                title in information technology is an IT consultant, who
                typically works with organizations or institutions that use
                technology systems for their business operations. 
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
                Our team trains and offer professional services to whoever seeks such services. This allows for samll window for errors when executing projects and other services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IT;

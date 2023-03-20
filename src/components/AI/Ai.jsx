import React from 'react';
import styles from './Ai.module.css';
import img1 from '../../assets/AI/ai3.webp';
import img2 from '../../assets/AI/ai2.jfif';
import img3 from '../../assets/AI/ai1.jfif';

const AI = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: '#ff4c0a' }}>AI</span>
              </p>
              <p className={styles.headTop}></p>
              <p className={styles.identityTop}>Solutions</p>
              <p className={styles.content}>
                We are moving to a world where every application needs to be
                intelligent and adaptive to real-time model learning. As
                businesses build modern data capabilities, they must make
                decisions at the speed of human thought. Developers are
                challenged by this, given the huge silos that exist between
                databases and analytic products, and the complexity of a
                fragmented data estate can hamper the speed of agility and
                innovation. Data engineers, data scientists, and business
                analysts struggle with the complexity of making data
                integration, data warehousing, machine learning operations
                (MLOps), and business intelligence (BI) work together. What is
                needed is a consistent data ecosystem.
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
              <p className={styles.heading}>Artificial Intelligence</p>
              <p className={styles.text}>
                As we look beyond the horizon, machine learning and AI
                capabilities will be pivotal in harnessing the power of data in
                new ways. Azure Machine Learning now offers a Responsible AI
                dashboard in preview, making it possible for customers to
                implement it more easily by debugging machine learning models
                and making informed data-driven decisions. The dashboard brings
                together capabilities such as data explorer, model
                interpretability, error analysis, counterfactual, and causal
                inference analysis in a single view. In addition, Azure Machine
                Learning now offers a Responsible AI scorecard in preview to
                summarize model performance and insights so that all
                stakeholders can easily participate in compliance reviews.
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
                Our team of AI experts are readily available to offer the opportunity to accelerate innovation in your
                business and achieve agility across all your data that is
                substantial. Now is the time to realize its limitless potential.
                We look forward to seeing what you can do with it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AI;

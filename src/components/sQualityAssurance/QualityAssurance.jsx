import React from 'react';
import styles from './SQualityAssurance.module.css';
import img1 from '../../assets/sQualityAssurance/recycle1.jpg';
import img2 from '../../assets/sQualityAssurance/recycle2.jpg';
import img3 from '../../assets/sQualityAssurance/recycle3.jpeg';

const QualityAssurance = () => {
  return (
    <>
      <div>
        {/* Top  */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className="col-md-6 px-0">
            <div className={styles.topContain}>
              <p className={`${styles.headTop}`}>
                <span style={{ color: 'var(--primary-color)' }}>
                  Recycling{' '}
                </span>
              </p>
              <p className={styles.headTop}>Services</p>
              <p className={styles.identityTop}>
                The recycling service process
              </p>
              <p className={styles.content}>
                Recycling services are an important aspect of waste management,
                as they help reduce the amount of waste that ends up in
                landfills and incinerators. Recycling involves the conversion of
                waste materials into new products, which can be used in a
                variety of industries. Recycling services can include the
                collection, sorting, processing, and distribution of recycled
                materials.
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
              <p className={styles.heading}> Our expertise</p>
              <p className={styles.text}>
                Recycling services typically begin with the collection of
                recyclable materials, such as paper, plastic, glass, and metal,
                from homes, businesses, and other sources. These materials are
                then sorted into different categories and processed to remove
                any contaminants, such as food or other non-recyclable
                materials. The processed materials are then sent to
                manufacturers to be used in the production of new products.
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
                Our team operates proactively. Overall, recycling services play
                an important role in waste management and environmental
                sustainability. By reducing the amount of waste that ends up in
                landfills and incinerators, recycling helps to conserve natural
                resources and reduce environmental impact, while also providing
                economic benefits to communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QualityAssurance;

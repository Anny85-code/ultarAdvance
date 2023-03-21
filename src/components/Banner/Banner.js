import React from "react";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <>
      <div className={styles.imgbox}>
        <div>
          <p data-aos="fade-down" className={styles.text}>
            Streamlining solutions for a sustainable future
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;

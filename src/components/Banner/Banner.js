import React from "react";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div>
                <p data-aos='fade-down' className={styles.text}>We provide software solutions for startups and large businesses</p>
              
            </div>
            
        </div>
        
    </>
  );
};

export default Banner;

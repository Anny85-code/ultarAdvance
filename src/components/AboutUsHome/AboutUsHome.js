import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
                        <p data-aos="slide-left" className={styles.heading}>We have a great team in terms of technology</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>CenturyByte is a world-class team working globally. Our clients are business owners looking to create new products or improve existing software solutions. CenturyByte places people at the heart of everything it does and is committed to making the most of digital technology to build a positive future for its clients. </p>
                        </div>
                       
                        
                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt=""/>
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{width:'110%'}} alt=""/>
                                <img data-aos="zoom-in-left" src={img3} alt=""/>
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;
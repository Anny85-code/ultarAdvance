import React from 'react';
import styles from './Bottom.module.css';
import fakeData from './fakeData';

const Bottom = () =>{
    const windowSize = window.innerWidth;
    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                {
                    fakeData.map((x, idx)=>(
                        idx%2 === 0?
                        <div key={x.id} className={`row ${styles.row} flex-column-reverse flex-md-row`}>
                            <div data-aos='slide-right' data-aos-offset="220" className='col-md-6'>
                                <p className={styles.head}>{x.heading}</p>
                                <p className={styles.content}>{x.content}</p>
                            </div>
                            <div data-aos='slide-left' className='col-md-6'>
                                {windowSize > 450?
                                <img src={x.img} 
                                alt='' className={styles.img}/> :
                                <img src={x.img1} 
                                alt='' className={styles.img1}/>
}
                            </div>
                        </div>
                        :
                        <div key={x.id} className={`row ${styles.row}`}>
                            <div data-aos='slide-right' data-aos-offset="220" className='col-md-6'>
                                {windowSize > 450?
                                <img src={x.img2} alt='' className={styles.img2}/> :
                                <img src={x.img3} alt='' className={styles.img3}/>
}
                            </div>
                            <div data-aos='slide-left' className='col-md-6'>
                                <p className={styles.head1}>{x.heading}</p>
                                <p className={styles.content1}>{x.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Bottom;
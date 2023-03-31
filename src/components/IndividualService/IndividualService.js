import React, { useEffect } from "react";
import styles from './IndividualService.module.css';
import { useLocation } from "react-router-dom";
import data from './data';
import timer from '../../assets/individualService/workethic1.png';
import lock from '../../assets/individualService/worker1.png';
import det from '../../assets/individualService/projectcommit1.png';

const IndividualService = () =>{
    const { search } = useLocation(); 
    const id = parseInt(new URLSearchParams(search).get('id'));
    let service = data.filter(x=>{
        return x.id === id;
    })[0];

    useEffect(() => {
        window.scrollTo(0, 0)
      })

    return (
      <>
        <div className={`container ${styles.contain} overflow-hidden`}>
          <p data-aos="slide-right" className={styles.heading}>
            {service.heading}
          </p>
          <p data-aos="slide-left" className={styles.heading_content}>
            {service.content}
          </p>

          <div className="row">
            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-offset="150"
            >
              <img src={timer} alt="" className={styles.img} />
              <p className={styles.logo_head}>Good work ethics</p>
              <p className={styles.heading_content}>
                Good work ethics involves a set of moral principles and values
                that guide individuals in their professional behavior. It
                involves being honest, reliable, responsible, and showing
                respect towards colleagues, customers, and the organization's
                policies.{' '}
              </p>
            </div>

            <div className="col-md-4" data-aos="fade" data-aos-offset="150">
              <img src={det} alt="" className={styles.img} />
              <p className={styles.logo_head}>Project Commitment</p>
              <p className={styles.heading_content}>
                Project commitment involves the level of dedication and
                involvement an individual has towards a specific project or
                task. It involves taking ownership of the project and being
                accountable for its success or failure. A committed worker is
                proactive, takes initiative, and puts in extra effort to ensure
                the project's objectives are met.
              </p>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-left"
              data-aos-offset="150"
            >
              <img src={lock} alt="" className={styles.img} />
              <p className={styles.logo_head}>Expert Workers</p>
              <p className={styles.heading_content}>
                Our teams have a wealth of experience to offer unique
                perspectives on how to do things and anticipate coming trends in
                the industry. An expert worker is someone who possesses advanced
                knowledge, skills, and experience in their field of work.
              </p>
            </div>
          </div>

          {service.contents.map((x, idx) =>
            idx % 2 === 0 ? (
              <div key={idx} className="row" style={{ marginTop: '112px' }}>
                <div
                  data-aos="slide-right"
                  data-aos-offset="150"
                  className="col-md-6"
                >
                  <img src={x.img} alt="" className={styles.contentImg} />
                </div>
                <div
                  data-aos="slide-left"
                  data-aos-offset="150"
                  className="col-md-6"
                >
                  <p className={`${styles.heading} ${styles.subHead}`}>
                    {x.heading}
                  </p>
                  <p className={`${styles.heading_content} ${styles.justify}`}>
                    {x.content}
                  </p>
                </div>
              </div>
            ) : (
              <div key={idx} className="row" style={{ marginTop: '112px' }}>
                <div
                  className="col-md-6"
                  data-aos="slide-right"
                  data-aos-offset="150"
                >
                  <p className={`${styles.heading} ${styles.subHead}`}>
                    {x.heading}
                  </p>
                  <p className={`${styles.heading_content} ${styles.justify}`}>
                    {x.content}
                  </p>
                </div>
                <div
                  className="col-md-6"
                  data-aos="slide-left"
                  data-aos-offset="150"
                >
                  <img src={x.img} alt="" className={styles.contentImg} />
                </div>
              </div>
            )
          )}
        </div>
      </>
    );
}
export default IndividualService;
import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import csp from '../../assets/home/csp.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return (
      <div style={{ backgroundColor: "#cbcbdf" }}>
        <div className="container overflow-hidden">
          <p
            data-aos="slide-right"
            data-aos-offset="220"
            className={styles.heading}
          >
            Top three reasons why you should choose us.
          </p>
          <p data-aos="slide-left" className={styles.sub_text}>
            We have stood out from the crowd in these three key areas;
          </p>
          <div className={`row ${styles.sub}`}>
            <div data-aos="fade-right" className="col-md-4">
              <img src={experience} alt="experience" />
              <p className={styles.logo_head}>Experience & Expertise</p>
              <p className={styles.logo_text}>
                Our company brings extensive experience and expertise to every
                project, ensuring top-tier solutions for our clients. With a
                team of skilled professionals and a proven track record, we
                deliver innovative and efficient results tailored to specific
                needs. Our in-depth industry knowledge guarantees reliable,
                practical approaches to even the most complex challenges.
              </p>
            </div>

            <div data-aos="fade" className="col-md-4">
              <img src={csp} alt="experience" />
              <p className={styles.logo_head}>
                Corporate Social Responsibility
              </p>
              <p className={styles.logo_text}>
                We prioritize ethical practices, community development, and
                environmental sustainability to ensure a positive societal
                impact. Partnering with us means choosing a company committed to
                integrity, transparency, and responsible operations. We foster
                trust by delivering value-driven solutions that benefit clients,
                communities, and the environment, promoting long-term growth and
                sustainability.
              </p>
            </div>

            <div data-aos="fade-left" className="col-md-4">
              <img src={comfort} alt="experience" />
              <p className={styles.logo_head}>Reliability & Commitment</p>
              <p className={styles.logo_text}>
                Our company serves clients with unwavering reliability and
                commitment by delivering consistent, high-quality results
                tailored to their needs. We honor deadlines, maintain
                transparent communication, and provide exceptional support at
                every stage. With a focus on exceeding expectations, we
                prioritize client satisfaction, building trust and long-term
                partnerships through our dependable services.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChoosingUs;
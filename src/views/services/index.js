import React from "react";
import SubBanner from '../../components/SubBanner';
import Services from '../../components/Services';
import bg from '../../assets/services2.jpg';

const ServicesHome = () => {

  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Services' subHeading='Home /Services' img={bg}/>
      </section>

      {/* Services Section  */}
      <section>
        <Services/>
      </section>
    </>
  );
};

export default ServicesHome;
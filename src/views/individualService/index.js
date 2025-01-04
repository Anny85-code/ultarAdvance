import React from "react";
import SubBanner from '../../components/SubBanner';
import bg from '../../assets/service1.jpeg';
import IndividualService from "../../components/IndividualService";

const individualServices = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Services' subHeading='Home /Services' img={bg}/>
      </section>

      {/* Services Section  */}
      <section>
        <IndividualService />
      </section>
    </>
  );
};

export default individualServices;
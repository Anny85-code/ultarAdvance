import React from "react";
import SubBanner from '../../components/SubBanner';
import ContactUsForm from "../../components/ContactUsForm";
import bg from '../../assets/conus.jpg';

const ServicesHome = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Contact Us' subHeading='Home /Contact Us' img={bg}/>
      </section>

      {/* Form Section  */}
      <section>
        <ContactUsForm />
      </section>
    </>
  );
};

export default ServicesHome;
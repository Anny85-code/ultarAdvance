import React from "react";
import bg from '../../assets/aboutUs/about2.jpg';
import SubBanner from '../../components/SubBanner';
import Top from "../../components/AboutUs/Top";
import Middle from "../../components/AboutUs/Middle";
import Bottom from "../../components/AboutUs/Bottom";
import Teams from "../../components/AboutUs/teams/Teams";

const aboutUs = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='About Us' subHeading='Home /About Us' img={bg}/>
      </section>

      {/* Top Section  */}
      <section>
        <Top />
      </section>

      {/* Middle Section  */}
      <section>
        <Middle />
      </section>

      {/* Bottom Section  */}
      <section>
        <Bottom />
      </section>
      
      {/* team section */}
      <section>
        <Teams />
      </section>
    </>
  );
};

export default aboutUs;
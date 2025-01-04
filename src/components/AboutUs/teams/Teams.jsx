import React from 'react';
import CustomCarousel from './TeamCourasel';
/* eslint-disable*/
const Team = () => {
  return (
    <div className="h-[100%] w-[100%] md:pt-[150px] pt-0 md:mb-[300px] mb-[50px] flex flex-col justify-center md:gap-[50px] gap-[30px]">
      <h1 className="text-center text-[#00345B] md:text-[39px] text-[25px] font-medium leading-134%">
        Let&apos;s Meet the Team
      </h1>
      <CustomCarousel />
    </div>
  );
};

export default Team;

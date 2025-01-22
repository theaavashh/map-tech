import AboutUs from '@/components/AboutUs';
import BreadCrumb from '@/components/BreadCrumb';
import React from 'react';

import Culture from '../../../public/work_life.jpeg';

const page = () => {
  return (
    <div>
      <BreadCrumb title="About Us" desc="Home/About Us" />
      <div className="-mt-10">
        <AboutUs
          img_src={Culture}
          h1="About Us"
          desc="Empowering Innovation, 
Shaping the Future"
          sect="Empowering Innovation, Shaping the Future conveys the idea that the company is not just creating new technology but actively enabling progress and driving change."
          isAboutUs={true}
        />
      </div>
    </div>
  );
};

export default page;

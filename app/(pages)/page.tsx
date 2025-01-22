/*
 import packages from react
 */
import React from 'react';

/*
import needed components from components folder
 */
import AboutUs from '@/components/AboutUs';
import HeroSection from '@/components/HeroSection';

/*
 import images from public folder
 */
import work__life from '../../public/work_life.jpeg';

const Home = () => {
  return (
    <>
      <div className="mt-5">
        <HeroSection />
        <AboutUs
          img_src={work__life}
          h1="Transforming Ideas Into Intelligent Solutions"
          desc="Who We Are"
          sect="At M.A.P Tech Pvt. Ltd., we are pioneers in crafting innovative software solutions that drive businesses forward. With expertise in AI technologies and web development, we specialize in turning complex challenges into seamless, scalable, and efficient digital solutions."
          subSect="Founded on the principles of innovation and collaboration, we take pride in working closely with our clients to understand their unique needs and provide tailored solutions that deliver measurable results."
          isAboutUs={true}
        />
      </div>
    </>
  );
};

export default Home;

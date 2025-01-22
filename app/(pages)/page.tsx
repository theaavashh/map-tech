/*
 import packages from react
 */
import React from 'react';

/*
import needed components from components folder
 */
import AboutUs from '@/components/AboutUs';
import HeroSection from '@/components/HeroSection';
import Service from '@/components/Services';

/*
 import images from public folder
 */
import work__life from '../../public/work_life.jpeg';
import work__group from '../../public/work__group.jpeg';

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
        <Service />
        <AboutUs
          img_src={work__group}
          h1="What We Do"
          desc="We design innovative products that users adore."
          sect="We design innovative products that users adore, with a strong focus on website development that delivers exceptional user experiences. Our team combines creativity with cutting-edge technologies to craft visually appealing, responsive websites tailored to your business needs. From intuitive user interfaces to seamless functionality, we ensure that every digital product we build is designed to engage, inspire, and drive lasting connections with your audience."
          isAboutUs={false}
        />
      </div>
    </>
  );
};

export default Home;

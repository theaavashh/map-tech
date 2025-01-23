/*
import package from react
*/
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
 import package from gsap
 */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

/* 
import icons from react-icons
 */
import { FaLongArrowAltRight } from 'react-icons/fa';

/*
 import components and img
 */
import ImgHeroSection from '../public/employee__lady.png';
import Circle from './Circle';

/*
 execute herosection component code
 */
const HeroSection = () => {
  useGSAP(() => {
    gsap.from('.cont-text', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      stagger: 2,
    });
  });
  return (
    <div className="h-fit w-screen md:flex md:pr-4">
      <div className="flex flex-col w-screen h-[80vh] md:h-[50vh] md:w-[60%] pl-[10vw] md:pl-0  items-center justify-center relative md:top-8">
        <Circle />
        <div className="flex flex-col gap-6 absolute top-28 left-20 sm:left-[25%]">
          <h3 className="cont-text w-fit text-3xl sm:text-4xl md:text-4xl md:ml-0 xl:text-4xl text-[#154b9a] 2xl:text-5xl">
            Here for you !
          </h3>
          <h2 className="cont-text h-fit text-2xl -ml-16 md:text-3xl  font-semibold leading-10  text-[#0e1f51] xl:text-3xl md:w-[450px] lg:w-full lg:pl-0 sm:-ml-20 md:-ml-5 lg:ml-0 text-center text-balance md:text-left">
            Transforming Ideas Into Intelligent Solutions With AI & Web
            Technology
          </h2>
          <Link href="/contact" className="">
            <button className="flex gap-2 text-xl justify-center md:text-2xl xl:text-3xl w-[50vw] sm:w-[40vw] md:w-[25vw] xl:w-[20vw] mt-4 px-2 py-2 bg-[#154B9A] text-white ring-2 rounded-lg ">
              Let&apos;s talk <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="h-96 lg:w-[60%] flex justify-center -mt-8 lg:mt-12 md:mt-44">
        <div className="rounded-full h-80 w-80 sm:h-96 sm:w-96 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] bg-[#e8edf5] relative overflow-hidden -mt-5">
          <div className="rounded-full h-72 w-72 sm:h-80 sm:w-80 md:h-[300px] md:w-[300px] xl:h-[380px] xl:w-[380px] bg-[#d3dde6] absolute top-8 left-8"></div>
          <div className="rounded-full h-64 w-64 sm:h-72 sm:w-72 md:h-[270px] md:w-[270px] xl:h-[300px] xl:w-[300px] bg-[#c0cee4] absolute top-16 md:top-15 xl:left-20 left-14"></div>
          <Image
            src={ImgHeroSection}
            alt="Woman using a laptop to work remotely"
            className="absolute top-16 sm:top-8 -left-8 z-50 h-60 sm:h-72 md:top-0 xl:h-80 mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

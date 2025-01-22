/*
import package from react
*/
import React from 'react';
import Image from 'next/image';

/*
import icons from react-icons
*/
import { IoCallOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';

/*
import image from public folder
*/
import footer__logo from '../public/footer_logo.png';
import Link from 'next/link';

/*
default footer components code
*/

const Footer = () => {
  return (
    <footer className="bg-[#0E1F51] text-white">
      <div className="w-screen h-fit bg-[#0E1F51] text-white flex flex-col gap-5 lg:gap-8 md:flex-row md:flex-wrap md:justify-between justify-evenly items-start p-10">
        <div className="flex flex-col pb-4 pt-5  gap-5 items-start">
          <Image src={footer__logo} height={50} alt="map-technology-logo" />
          <section className="text-sm md:text-lg text-white max-w-96">
            At M.A.P Tech Pvt. Ltd., we are pioneers in crafting innovative
            software solutions that drive businesses forward.
          </section>
          <div className="social__mediaHandler flex gap-5">
            <Link
              href="https://www.facebook.com/profile.php?id=61561052357582"
              target="__blank"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="10" fill="white" />
                <path
                  d="M29.0781 26.5H25.5625V37H20.875V26.5H17.0312V22.1875H20.875V18.8594C20.875 15.1094 23.125 13 26.5469 13C28.1875 13 29.9219 13.3281 29.9219 13.3281V17.0312H28C26.125 17.0312 25.5625 18.1562 25.5625 19.375V22.1875H29.7344L29.0781 26.5Z"
                  fill="#3261A7"
                />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/map_technepal/"
              target="_blank"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="10" fill="white" />
                <path
                  d="M25.5 19.6094C28.4531 19.6094 30.8906 22.0469 30.8906 25C30.8906 28 28.4531 30.3906 25.5 30.3906C22.5 30.3906 20.1094 28 20.1094 25C20.1094 22.0469 22.5 19.6094 25.5 19.6094ZM25.5 28.5156C27.4219 28.5156 28.9688 26.9688 28.9688 25C28.9688 23.0781 27.4219 21.5312 25.5 21.5312C23.5312 21.5312 21.9844 23.0781 21.9844 25C21.9844 26.9688 23.5781 28.5156 25.5 28.5156ZM32.3438 19.4219C32.3438 18.7188 31.7812 18.1562 31.0781 18.1562C30.375 18.1562 29.8125 18.7188 29.8125 19.4219C29.8125 20.125 30.375 20.6875 31.0781 20.6875C31.7812 20.6875 32.3438 20.125 32.3438 19.4219ZM35.9062 20.6875C36 22.4219 36 27.625 35.9062 29.3594C35.8125 31.0469 35.4375 32.5 34.2188 33.7656C33 34.9844 31.5 35.3594 29.8125 35.4531C28.0781 35.5469 22.875 35.5469 21.1406 35.4531C19.4531 35.3594 18 34.9844 16.7344 33.7656C15.5156 32.5 15.1406 31.0469 15.0469 29.3594C14.9531 27.625 14.9531 22.4219 15.0469 20.6875C15.1406 19 15.5156 17.5 16.7344 16.2812C18 15.0625 19.4531 14.6875 21.1406 14.5938C22.875 14.5 28.0781 14.5 29.8125 14.5938C31.5 14.6875 33 15.0625 34.2188 16.2812C35.4375 17.5 35.8125 19 35.9062 20.6875ZM33.6562 31.1875C34.2188 29.8281 34.0781 26.5469 34.0781 25C34.0781 23.5 34.2188 20.2188 33.6562 18.8125C33.2812 17.9219 32.5781 17.1719 31.6875 16.8438C30.2812 16.2812 27 16.4219 25.5 16.4219C23.9531 16.4219 20.6719 16.2812 19.3125 16.8438C18.375 17.2188 17.6719 17.9219 17.2969 18.8125C16.7344 20.2188 16.875 23.5 16.875 25C16.875 26.5469 16.7344 29.8281 17.2969 31.1875C17.6719 32.125 18.375 32.8281 19.3125 33.2031C20.6719 33.7656 23.9531 33.625 25.5 33.625C27 33.625 30.2812 33.7656 31.6875 33.2031C32.5781 32.8281 33.3281 32.125 33.6562 31.1875Z"
                  fill="#154B9A"
                />
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/105687482"
              target="__blank"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="10" fill="white" />
                <path
                  d="M18.6875 34H14.3281V19.9844H18.6875V34ZM16.4844 18.1094C15.125 18.1094 14 16.9375 14 15.5312C14 13.6094 16.0625 12.3906 17.75 13.375C18.5469 13.7969 19.0156 14.6406 19.0156 15.5312C19.0156 16.9375 17.8906 18.1094 16.4844 18.1094ZM34.9531 34H30.6406V27.2031C30.6406 25.5625 30.5938 23.5 28.3438 23.5C26.0938 23.5 25.7656 25.2344 25.7656 27.0625V34H21.4062V19.9844H25.5781V21.9062H25.625C26.2344 20.8281 27.6406 19.6562 29.75 19.6562C34.1562 19.6562 35 22.5625 35 26.3125V34H34.9531Z"
                  fill="#154B9A"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="section-two flex flex-col gap-2">
          <h2 className="text-lg md:text-xl font-bold">Services</h2>
          <ul className="text-sm md:text-lg flex flex-col gap-1 ">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>AI Implementation</li>
            <li>Website Migration</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold">Company</h3>
          <ul className="text-sm md:text-lg flex flex-col gap-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="text-lg md:text-xl font-bold">Get in touch</h3>
          <h2 className="text-sm md:text-lg">Sun-Fri</h2>
          <div className="flex gap-1">
            <IoCallOutline />
            <h3 className="text-sm md:text-lg text-center">9745673009</h3>
          </div>
          <div className="flex gap-2">
            <CiMail />
            <h3 className="text-sm md:text-lg text-center">
              info@maptechnepal.com
            </h3>
          </div>
        </div>
      </div>
      <hr className="py-5 mx-20" />
      <div className="text-center text-sm md:text-2xl pb-4">
        Copyright {new Date().getFullYear()}, M.A.P Tech Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;

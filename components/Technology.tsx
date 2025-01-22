import React from 'react';
import Java from '../public/java.png';
import JS from '../public/java-script.png';
import postgres from '../public/postgre.png';
import mysql from '../public/mysql.webp';
import nextjs from '../public/nextjs.webp';
import laravel from '../public/laravel.webp';
import react from '../public/react.png';
import node from '../public/node-js.png';
import mongo from '../public/mongodb.webp';
import aws from '../public/aws.webp';
import golang from '../public/golang.webp';

import Image from 'next/image';

const img = [
  Java,
  JS,
  laravel,
  golang,
  node,
  react,
  nextjs,
  postgres,
  mysql,
  mongo,
  aws,
];

const Technology = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-[#F7F7F7]">
      <div className="flex flex-col gap-2 items-center ">
        <h3 className="text-xl md:text-2xl text-[#154B9A] ">
          Technology We Work With
        </h3>
        <h2 className="text-lg md:text-xl text-[#0E1F51] mx-20 mb-8 text-justify">
          At M.A.P Tech, we specialize in leveraging cutting-edge technologies
          to help startups turn their ideas into scalable, high-performance
          solutions. We understand the unique challenges startups face, and we
          provide the expertise and tools necessary to bring your digital vision
          to life.
        </h2>
        <div className="flex gap-10 flex-wrap mx-14 justify-center">
          {img.map((element, index) => (
            <Image
              key={index}
              src={element}
              alt="tech-stack"
              className="h-16 w-20"
            />
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Technology;

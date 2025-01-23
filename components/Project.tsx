import React from 'react';
import ecommerce__site from '../public/ecomm__site.png';
import order__site from '../public/order__site.png';
import portal__site from '../public/newsportal__site.png';

import Image from 'next/image';

const project = [
  {
    src: ecommerce__site,
    title: 'E-commerce',
  },
  {
    src: portal__site,
    title: 'News Portal',
  },
  {
    src: order__site,
    title: 'Online Ordering Application',
  },
];
const Project = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-[#F7F7F7]">
      <div className="flex flex-col gap-2 ">
        <h3 className="text-lg md:text-2xl text-[#154B9A]">Our Project</h3>
        <h2 className="text-xl md:text-3xl text-[#0E1F51]">Latest Work</h2>
      </div>
      <div className="flex gap-10 mt-8 flex-wrap my-1 justify-center items-center">
        {project.map(({ src, title }, index) => (
          <div className="h-fit p-4" key={index}>
            <div className="w-72 h-72 overflow-hidden">
              <Image
                src={src}
                height={400}
                width={400}
                alt="hotel"
                className="object-cover"
              />
            </div>
            <h4 className="text-center text-sm md:text-xl text-[#0E1F51] pt-5">
              {title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

/*
import packages from react
*/
import React from 'react';

/*
import array of service from resources
*/
import service from '@/resources/ServiceArr';

/* execute service component code*/
const Service = () => {
  return (
    <div className="flex flex-col items-center w-screen h-fit my-8 ">
      <h4 className="text-lg md:text-2xl text-[#154b9a]">Service</h4>
      <h2 className="text-xl mb-5 md:text-3xl text-[#0E1F51]">Our Expertise</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {service.map(({ icon, title, desc }, index) => (
          <div
            key={index}
            className="h-fit px-10 py-5 ml-5 w-80 flex flex-col gap-2  bg-[#ECF4FF]"
          >
            {icon}
            <h3 className="text-lg md:text-lg">{title}</h3>
            <div className="flex gap-2">
              <hr className="h-2 w-32 rounded-lg bg-[#0E1F51]" />
              <hr className="bg-[#0E1F51] rounded-lg h-2 w-4" />
            </div>

            <section className="text-sm md:text-lg text-justify">
              {desc}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

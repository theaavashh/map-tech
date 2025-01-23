/*
import package from react
*/
import React from 'react';

/*
import array-of-plan from resources
*/
import planning from '@/resources/PlanningArr';

/*
execute planning component code
*/
const Planning = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-screen h-fit my-8">
        <h4 className="text-lg md:text-xl text-[#154b9a]">Planning</h4>
        <h2 className="text-xl mb-5 md:text-2xl text-[#0E1F51]">Our Process</h2>
        <div className="flex gap-4 flex-wrap justify-center lg:mx-10">
          {planning.map(({ icon, title, desc }, index) => (
            <div
              key={index}
              className="h-fit px-8 py-5  w-80 flex flex-col gap-2  bg-[#ECF4FF]"
            >
              {icon}
              <h3 className="text-lg md:text-lg">{title}</h3>
              <div className="flex gap-2">
                <hr className="h-2 w-32 rounded-lg bg-[#0E1F51]" />
                <hr className="bg-[#0E1F51] rounded-lg h-2 w-4" />
              </div>

              <section className="text-sm md:text-lg">{desc}</section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planning;

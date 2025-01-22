import React from 'react';

type BCType = {
  title: string;
  desc: string;
};

const BreadCrumb = ({ title, desc }: BCType) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-44 md:h-54 bg-[#0E1F51] gap-3">
      <h2 className="text-white text-xl md:text-3xl">{title}</h2>
      <h3 className="text-white text-lg md:text-2xl">{desc}</h3>
    </div>
  );
};

export default BreadCrumb;

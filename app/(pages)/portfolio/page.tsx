/*
import package from react
*/
import React from 'react';

/*
import needed components
*/
import BreadCrumb from '@/components/BreadCrumb';
import Project from '@/components/Project';

const Portfolios = () => {
  return (
    <div>
      <BreadCrumb title="Portfolio" desc="Home/Portfolio" />
      <Project />
    </div>
  );
};

export default Portfolios;

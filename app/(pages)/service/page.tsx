/*
 import package from react
 */
import React from 'react';

/*
 import needed components
  */
import BreadCrumb from '@/components/BreadCrumb';
import Service from '@/components/Services';

/*
execute service code
 */
const Services = () => {
  return (
    <div>
      <BreadCrumb title="Service" desc="Home/Service" />
      <Service />
    </div>
  );
};

export default Services;

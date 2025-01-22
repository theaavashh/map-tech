/*
import package from react
 */
import React from 'react';

/*
import needed components 
 */
import BreadCrumb from '@/components/BreadCrumb';
import Contact from '@/components/Contact';

/**
 contact us code execute
 */
const Contacts = () => {
  return (
    <div>
      <BreadCrumb title="Contact" desc="Home/Contact" />
      <Contact color="bg-[#f3f6fa]" status={true} />
    </div>
  );
};

export default Contacts;

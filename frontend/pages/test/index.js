// pages/Page.jsx
import React from 'react';
import Navbar from '../../components/navbar'; // Adjusted import path
import FilterPopup from '../../components/filter';

const Page = () => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col justify-center w-full bg-rb-white max-md:max-w-full">
        <FilterPopup />
        </div>
      
    </div>
  );
}

export default Page;

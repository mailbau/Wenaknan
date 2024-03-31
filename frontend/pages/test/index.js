// pages/Page.jsx
import React from 'react';
import Navbar from '../../components/navbar'; // Adjusted import path

const Page = () => {
  return (
    <div>
      <Navbar /> {/* Using Navbar component */}
      <div className="content">
        <h1>Welcome to My Page</h1>
        <p>This is some content for the page.</p>
      </div>
    </div>
  );
}

export default Page;

import React from 'react';
import 'boxicons'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='menu-container'>
        <img src="" alt="logo" />
        <a href="">HOME</a>
        <a href="">EXPLORE</a>
        <a href="">BLOG</a>
        <a href="">CONTACT</a>
      </div>
      <div className="icons-container">
        <box-icon type='logo' name='instagram' color='white'></box-icon>
        <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
        <box-icon type='logo' name='facebook' color='white'></box-icon>
      </div>
    </div>
  );
};

export default Sidebar;
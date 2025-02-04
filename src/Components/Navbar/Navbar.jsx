import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {

  const [active, setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavBar')
  }

  const removeNavBar = () => {
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
           <h1>
            Travel <MdOutlineTravelExplore className='icons'/>
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Package</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
          <button className="btn" > BOOK NOW
            {/* <a href="#">BOOK NOW</a> */}
          </button>
          </ul>

          <div onClick={removeNavBar} className="closeNavBar">
          <IoIosCloseCircle className='icons' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavBar">
        <TbGridDots className='icons' />
        </div>
      </header>

    </section>
  )
}

export default Navbar

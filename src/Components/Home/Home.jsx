import React, { useEffect } from 'react'
import './home.css';
import video from '../../Assets/video1.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
  }, []);
  
  return (
   <section className="home">
    <div className="overlay">
    </div>
      <video className='homeVideo' src={video} muted autoPlay loop type='video/mp4'></video>

    <div data-aos='fade-up' className="homeContent container">
      <div className="textDiv">
        <span className="smallText">
          Our packages
        </span>
        <h1 className="homeTitle">
          Search your holidays
        </h1>
      </div>
      <div className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search your destination:</label>
          <div className="input flex">
            <input type="text" placeholder='Enter name here...' />
            <GrLocation className='icon' />
          </div>
        </div>
        <div className="dateInput">
          <label htmlFor="date">Select your date:</label>
          <div className="input flex">
            <input type="date" />
          </div>
        </div>
        <div className="destinationInput">
          <div className="label_total flex">
            <label htmlFor="price">Max price</label>
            <h3 className="total">$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max='5000' min='1000' />
          </div>
        </div>
        <div className="searchOptions flex">
        <HiFilter className='searchIcon' />
        <span>More Filters</span>
        </div>
      </div>

      <div className="homeFooterIcons flex">
        <div className="rightIcons">
          <FiFacebook className='icons'/>
          <FaInstagram className='icons'/>
          <FaTripadvisor  className='icons'/>

        </div>

        <div className="leftIcons">
        <BsListTask className='icons' />
        <TbApps className='icons'/>
        </div>
      </div>

    </div>

    
  
   </section>
  )
}

export default Home

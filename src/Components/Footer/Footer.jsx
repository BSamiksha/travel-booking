import React, { useEffect } from 'react'
import './footer.css';
import video2 from '../../Assets/video2.mp4';
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay type='video/mp4' muted></video>
      </div>

      <div className="secContent container">
        <div data-aos='fade-up' className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email' />
            <button className="btn flex" type='submit'>
              SEND <FiSend className='icons' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
              <MdTravelExplore className='icons' /> Travel
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate eum consectetur necessitatibus vitae eveniet odit vero consequuntur reiciendis, cumque non culpa, quas, illo debitis tempora quibusdam nam qui ea!
            </div>

            <div data-aos='fade-up' className="footerSocials flex">
              <AiOutlineTwitter className='icons'/>
              <AiFillYoutube className='icons'/>
              <AiFillInstagram className='icons'/>
              <FaTripadvisor className='icons'/>

            </div>
          </div>

          <div className="footerLinks grid">
            {/* //group 1 */}
            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Insaurance
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Tourism
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Payment
              </li>

            </div>

            {/* //group 2 */}
            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Bookings
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Rentcars
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                HostelWorld
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                TripAdvisor
              </li>

            </div>

            {/* //group 3 */}
            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                London
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                California
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Indonesia
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icons'/>
                Europe
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED -2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

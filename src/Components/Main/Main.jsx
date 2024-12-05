import React, { useEffect } from 'react'
import './main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../Assets/img.jpg';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

  useEffect (()=> {
    Aos.init({duration:2000})
  }, []);

  const travelDestinations = [
    {
      id: 1,
      imgSrc: img,
      destTitle: 'Bali Island',
      location: 'Indonesia',
      grade: 'CULTURAL RELAX',
      fees: '$400',
      description: 'Bali is a tropical paradise known for its beaches, temples, and vibrant culture. A perfect blend of nature and relaxation awaits visitors.'
    },
    {
      id: 2,
      imgSrc: img1,
      destTitle: 'Paris',
      location: 'France',
      grade: 'ROMANTIC ADVENTURE',
      fees: '$700',
      description: 'Paris, the "City of Love," is famous for the Eiffel Tower, art museums, and romantic ambiance. A dream destination for couples and art lovers.'
    },
    {
      id: 3,
      imgSrc: img2,
      destTitle: 'Kyoto',
      location: 'Japan',
      grade: 'HISTORIC SERENITY',
      fees: '$500',
      description: 'Kyoto offers a glimpse into traditional Japan with its temples, gardens, and tea houses. Ideal for those seeking peace and cultural immersion.'
    },
    {
      id: 4,
      imgSrc: img3,
      destTitle: 'New York City',
      location: 'USA',
      grade: 'URBAN THRILL',
      fees: '$900',
      description: 'New York City is a bustling metropolis known for its iconic landmarks, shopping, and nightlife. Experience the energy of the "Big Apple."'
    },
    {
      id: 5,
      imgSrc: img4,
      destTitle: 'Santorini',
      location: 'Greece',
      grade: 'SCENIC RETREAT',
      fees: '$600',
      description: 'Santorini boasts stunning sunsets, white-washed buildings, and crystal-clear waters. A top destination for relaxation and scenic views.'
    },
    {
      id: 6,
      imgSrc: img5,
      destTitle: 'Dubai',
      location: 'UAE',
      grade: 'LUXURY VACATION',
      fees: '$1000',
      description: 'Dubai offers futuristic skyscrapers, shopping malls, and desert adventures. A must-visit for luxury seekers and thrill enthusiasts.'
    },
    {
      id: 7,
      imgSrc: img6,
      destTitle: 'Cape Town',
      location: 'South Africa',
      grade: 'ADVENTURE NATURE',
      fees: '$550',
      description: 'Cape Town offers a mix of natural beauty and city life with its mountains, beaches, and cultural experiences. A paradise for adventurers.'
    },
    {
      id: 8,
      imgSrc: img7,
      destTitle: 'Venice',
      location: 'Italy',
      grade: 'ROMANTIC ESCAPE',
      fees: '$750',
      description: 'Venice is known for its canals, gondolas, and charming streets. A perfect setting for romance and exploration by water.'
    },
    {
      id: 9,
      imgSrc: img8,
      destTitle: 'Maldives',
      location: 'Indian Ocean',
      grade: 'ISLAND LUXURY',
      fees: '$1200',
      description: 'The Maldives offers private villas, turquoise waters, and coral reefs. A dream destination for honeymooners and beach lovers.'
    }
  ];

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
      {
          travelDestinations.map((destination) => {
            return (
              <div data-aos='fade-up' className="singleDestination">
                <div key={destination.id} className="imgDiv">
                  <img src={destination.imgSrc} alt={destination.destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destination.destTitle}
                  </h4>
                  <span className="content flex">
                    <HiOutlineLocationMarker className='icons' />
                    <span className="name">{destination.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span> {destination.grade} <small>+1</small> </span>

                    </div>
                    <div className="price">
                      <h5>{destination.fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{destination.description}</p>
                  </div>

                  <button className="btn">
                    DETAILS
                    <HiOutlineClipboardCheck className='icons' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main

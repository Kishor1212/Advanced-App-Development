import React from 'react';
import './Service.css';
// import User from '../User_Panel';
import home1 from "../assets/nurse.jpg";
import home2 from "../assets/pic5.jpg";
import home3 from "../assets/diagnostic.jpg";
import home4 from "../assets/post.jpg";
import home5 from "../assets/physio.jpg";
import home6 from "../assets/other.jpg";
import { Link } from 'react-router-dom';
// import "../../assets/css/view-container.css";
// import { Button, Rating } from '@mui/material';

function Service() {
  const venues = [
    {
      image: home1,
      name:<h6>Nurse Care At Home</h6>,
      Address:" Home care nurses provide care to patients in their homes under the guidance of a physician.,"
    },
    {
      image: home2,
      name: <h6>Elder-care Services</h6>,
      Address: "Compassionate support for seniors, ensuring dignified living and personalized care.",
    },
    {
      image: home3,
      name: <h6>Diagnostic</h6>,
      Address: "Cutting-edge diagnostic solutions delivering accurate insights for informed healthcare decisions.",
    },
    {
      image: home4,
      name: <h6>Post Operative Care</h6>,
      
      Address: "Comprehensive post-operative care providing tailored support for optimal recovery and well-being.",
    },
    {
      image: home5,
      name: <h6>Physiotherapist</h6>,
      rating: 4,
      Address: "Expert physiotherapy services restoring mobility, function, and overall wellness for improved quality of life.",
    },
    {
      image: home6,
      name: <h6>Other Services</h6>,
      rating: 4,
      Address: "Specialized in-home care services offering compassionate assistance tailored to individual needs, ensuring comfort and well-being in familiar surroundings.",
    }
    
  ];

  return (
    <div>
    <div className="viewvenue">
      {venues.map((venue, index) => (
        <div key={index} className='view-container'>
          <img src={venue.image} alt={venue.name} />
          <div className='desc'>
          <h1 className='des-tit'>{venue.name}</h1>
            <p className="ser">{venue.Address}</p><br></br>
            <Link to="/nurse"><button className="butn">Book</button></Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Service;
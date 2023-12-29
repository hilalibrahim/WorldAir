import React from 'react';
import { Carousel,Card } from 'react-bootstrap';
import Navbar from '../../components/Navbar/navbar'
// import Map from '../../components/Map/Map';
// import logo from '../../assets/logo.png'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import './about.css'
import A1 from '../../assets/A1.jpg'
import ExclusiveStays from '../../components/Card/card'

import { Container, Row, Col, Image } from 'react-bootstrap';

import { FaPlane, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
      <Navbar/> 
      
    <ExclusiveStays/>
 </div>
  );
};

export default AboutUs;

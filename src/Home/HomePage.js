import React from 'react';
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import Modal from './Modal';
import Carousel from './Carousel';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <NavBar />
      <Modal />
      <Carousel />
    </div>
  );
}

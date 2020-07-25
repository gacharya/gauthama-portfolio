import React from 'react';
import { Title } from '../components/header/';
import banner from '../images/art/extras/shiva_detail.jpg'

const Home = () => (
  <main>
    <Title />
    <div className="subtitle">
    <img src={banner} className='landingBanner'></img>
    </div>
  </main>
);

export default Home;
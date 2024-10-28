import React from 'react'
import NavBar from './components/navbar/NavBar';

import Hero from './components/hero/Hero';
import ManuSection from './components/manuSection/ManuSection';
import FoodSection from './components/food/FoodSection';
import OurManu from './components/ourmanu/OurManu';
import Footer from './components/footer/Footer';




const page = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Hero/>
      <ManuSection/>
      <FoodSection/>
      <OurManu/>
     {/* <Footer/> */}
    

    </div>
  )
}

export default page;
       

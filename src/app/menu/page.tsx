import React from 'react'
import MenuPage from '../components/menupage/MenuPage';
import ManuSection from '../components/manuSection/ManuSection';
import Information from '../components/information/Information';

const page = () => {
  return (
    <div >
      <Information/>
      <ManuSection/>
      <MenuPage/>
    </div>
  )
}

export default page;
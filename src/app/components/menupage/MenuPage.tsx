import React from 'react'
import Styles from '../menupage/menupage.module.css';
import Image from 'next/image';

const MenuPage = () => {
  return (
    <div className={Styles.main}>
        <div className={Styles.text}>
            <h1>Book A Table</h1>
            <p>We consider all the drivers of change gives you the components<br></br> you need to change to create a truly happens.</p>
        </div>
      
       <div className={Styles.form}>
           <div className={Styles.formImg}>
           <Image src="/images/form.png" alt="formpic" width={500} height={400}/>
           </div>
         
        </div>
      
      
      
    </div>
  )
}

export default MenuPage;
import React from 'react'
import Image from 'next/image';
import Styles from '../food/foodsection.module.css';

const FoodSection = () => {
  return (
    <div className={Styles.fooSection}>
        <div className={Styles.img}>
            <Image src = "/images/fod.png" alt="" width={350} height={350}/>
            <div className={Styles.innerimg}>
                <Image src = "/images/card.png" alt="" width={230} height={230}/>
            </div>
            
        </div>
        <div className={Styles.content}>
            <h1 className={Styles.contentHeading}>We provide healthy <br></br>food for your family.</h1>
            <p className={Styles.para1}>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>

            <p className={Styles.para2}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            <button className={Styles.btn}>More About Us</button>
        </div>
    </div>
  )
}

export default FoodSection;

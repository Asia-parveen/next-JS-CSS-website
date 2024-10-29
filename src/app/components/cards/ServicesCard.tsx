import React from 'react'
import Image from 'next/image';
import Styles from '../servis/services.module.css';



interface ServicesCardProps {
    picture: string;
    title: string;
    subTitle: string;
   
}

const ServicesCard = ({ picture, title, subTitle }:ServicesCardProps) => {
  return (
    <section >
    <div className={Styles.card}>
       
        <Image 
            src={picture}
            alt={title} 
            width={230}
            height={230}
            className={Styles.img}
        />
        <h3 className={Styles.titl}>{title}</h3>
        <p className={Styles.subTitle}>{subTitle}</p>
      
    </div>
    </section>
  
)};

export default ServicesCard;
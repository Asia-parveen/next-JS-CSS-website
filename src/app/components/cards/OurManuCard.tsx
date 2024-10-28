import React from 'react'
import Image from 'next/image';
import Styles from '../ourmanu/ourmanu.module.css';


interface ManuCardProps {
    picture: string;
    title: string;
    subTitle: string;
    description: string;
}

const OurManuCard = ({picture, title, subTitle, description }:ManuCardProps ) => {
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
        <p className={Styles.des}>{description}</p>
    </div>
    </section>
  
)};

export default OurManuCard;
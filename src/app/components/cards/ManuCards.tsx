import React from 'react';
import Image from 'next/image';
import Styles from '../manuSection/ManuSection.module.css';

interface ManuCardProps {
    picture: string;
    title: string;
    subTitle: string;
    description: string;
}

const ManuCards: React.FC<ManuCardProps> = ({ picture, title, subTitle, description }) => {
    return (
        <section >
        <div className={Styles.card}>
           
            <Image 
                src={picture}
                alt={title} 
                width={100}
                height={100}
                className={Styles.img}
            />
            <h3 className={Styles.titl}>{title}</h3>
            <p className={Styles.des}>{description}</p>
            <p className={Styles.subTitle}>{subTitle}</p>
        </div>
        </section>
    );
}

export default ManuCards;

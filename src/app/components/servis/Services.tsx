import React from 'react'
import ServicesCard from '../cards/ServicesCard';
import Styles from '../servis/services.module.css';


interface CardData {
    picture: string;
    title: string;
    subTitle: string;
   
}

const Services = () => {
    const cardsData: CardData[] = [
        {
            picture: '/images/pic2.png',
            title: 'Events',
            subTitle: ' we look in the future with certainty for life.',
         
        },
        {
            picture: '/images/pic3.png',
            title: 'Caterings',
            subTitle: 'we look in the future with certainty for life.',
          
        },
        {
            picture: '/images/pic8.jpg',
            title: 'Home Events',
            subTitle: 'we look in the future with certainty for life.',
           
        },
        {
            picture: '/images/Mask.png',
            title: 'Birthdays',
            subTitle: 'we look in the future with certainty for life.',
           
        },
        {
            picture: '/images/Mask1.png',
            title: 'Weddings',
            subTitle: 'we look in the future with certainty for life.',
          
        },
        {
            picture: '/images/three.jpg',
            title: 'Parties',
            subTitle: 'we look in the future with certainty for life.',
           
        },
        {
            picture: '/images/pic2.png',
            title: 'Gathering',
            subTitle: 'we look in the future with certainty for life.',
           
        },
        {
            picture: '/images/one.jpg',
            title: 'Catering',
            subTitle: 'we look in the future with certainty for life.',
           
        },
    ];


  return (
    <div className={Styles.ourManu}>
        <div className={Styles.head}>
        <h1 className={Styles.heading}>We also offer unique<br></br> services for your events</h1>
        </div>
        
      

        <div  className={Styles.manusec}>
            {cardsData.map((card, index) => (
                <ServicesCard
                    key={index}
                    picture={card.picture}
                    title={card.title}
                    subTitle={card.subTitle}
                   
                />
            ))}
        </div>
           

    </div>
  )
}

export default Services;
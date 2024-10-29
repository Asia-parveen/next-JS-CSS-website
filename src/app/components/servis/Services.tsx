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
            title: '$ 9.99',
            subTitle: 'Fried Eggs',
         
        },
        {
            picture: '/images/pic3.png',
            title: '$ 15.99',
            subTitle: 'Hawaiian Pizza',
          
        },
        {
            picture: '/images/pic2.png',
            title: '$ 7.25',
            subTitle: 'Martinez Cocktail',
           
        },
        {
            picture: '/images/pic2.png',
            title: '$ 20.99',
            subTitle: 'Butterscotch Cake',
           
        },
        {
            picture: '/images/pic4.jpg',
            title: '$ 5.89',
            subTitle: 'Mint Lemonade',
          
        },
        {
            picture: '/images/pic2.png',
            title: '$ 18.05',
            subTitle: 'Chocolate Icecream',
           
        },
        {
            picture: '/images/pic2.png',
            title: '$ 12.55',
            subTitle: 'Cheese Burger',
           
        },
        {
            picture: '/images/pic2.png',
            title: '$ 12.99',
            subTitle: 'Classic Waffles',
           
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
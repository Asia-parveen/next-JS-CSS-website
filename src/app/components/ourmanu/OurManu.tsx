import React from 'react'
import OurManuCard from '../cards/OurManuCard';
import Styles from '../ourmanu/ourmanu.module.css';

interface CardData {
    picture: string;
    title: string;
    subTitle: string;
    description: string;
}

const OurManu = () => {
    const cardsData: CardData[] = [
        {
            picture: '/images/Maska.png',
            title: '$ 9.99',
            subTitle: 'Fried Eggs',
            description:' Made with eggs, lettuce, salt, oil and other ingredients.',
        },
        {
            picture: '/images/Maskb.png',
            title: '$ 15.99',
            subTitle: 'Hawaiian Pizza',
            description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
        },
        {
            picture: '/images/Maskc.png',
            title: '$ 7.25',
            subTitle: 'Martinez Cocktail',
            description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
        },
        {
            picture: '/images/Maskd.png',
            title: '$ 20.99',
            subTitle: 'Butterscotch Cake',
            description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
        },
        {
            picture: '/images/Maske.png',
            title: '$ 5.89',
            subTitle: 'Mint Lemonade',
            description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
        },
        {
            picture: '/images/Maskf.png',
            title: '$ 18.05',
            subTitle: 'Chocolate Icecream',
            description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
        },
        {
            picture: '/images/Maskg.png',
            title: '$ 12.55',
            subTitle: 'Cheese Burger',
            description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
        },
        {
            picture: '/images/Maskh.png',
            title: '$ 12.99',
            subTitle: 'Classic Waffles',
            description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
        },
    ];


  return (
    <div className={Styles.ourManu}>
        <div className={Styles.head}>
        <h1 className={Styles.heading}>Our Menu</h1>
        <p>We consider all the drivers of change gives you the components<br></br> you need to change to create a truly happens.</p>
        </div>
        <div className={Styles.buttons}>
            <button className={Styles.btn1}>All</button>
            <button className={Styles.btn}>Breakfast</button>
            <button className={Styles.btn3}>Main Dishes</button>
            <button className={Styles.btn}>Drinks</button>
            <button className={Styles.btn}>Desserts</button>
        </div>

        <div  className={Styles.manusec}>
            {cardsData.map((card, index) => (
                <OurManuCard
                    key={index}
                    picture={card.picture}
                    title={card.title}
                    subTitle={card.subTitle}
                    description={card.description}
                />
            ))}
        </div>
           

    </div>
  )
}

export default OurManu;
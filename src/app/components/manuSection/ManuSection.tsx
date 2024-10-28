import React from 'react';
import ManuCards from '../cards/ManuCards'; // Make sure this path is correct
import Styles from '../manuSection/ManuSection.module.css';

// Define the type for card data
interface CardData {
    picture: string;
    title: string;
    subTitle: string;
    description: string;
}

const ManuSection: React.FC = () => {
    // Array of card data
    const cardsData: CardData[] = [
        {
            picture: '/images/iconcp.png',
            title: 'Breakfast',
            description: 'In the new era of technology we look in the future with certainty and pride for our life.',
            subTitle: 'Explore Menu',
        },
        {
            picture: '/images/icon.png',
            title: 'Main Dishes',
            description: 'In the new era of technology we look in the future with certainty and pride for our life.',
            subTitle: 'Explore Menu',
        },
        {
            picture: '/images/icon (1).png',
            title: 'Drinks',
            description: 'In the new era of technology we look in the future with certainty and pride for our life.',
            subTitle: 'Explore Menu',
        },
        {
            picture: '/images/icon (2).png',
            title: 'Desserts',
            description: 'In the new era of technology we look in the future with certainty and pride for our life.',
            subTitle: 'Explore Menu',
        },
    ];

    return (
        <section className={Styles.manuSection}>
            <h1 className={Styles.manuHeading}>Browse Our Menu</h1>
        <div  className={Styles.manusec}>
            {cardsData.map((card, index) => (
                <ManuCards
                    key={index}
                    picture={card.picture}
                    title={card.title}
                    subTitle={card.subTitle}
                    description={card.description}
                />
            ))}
        </div>
        </section>
    );
}

export default ManuSection;

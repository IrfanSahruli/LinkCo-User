import React from 'react'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';

const Product = () => {
    const data = [
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
        {
            name: 'Kopi Gayo Aceh',
            description: 'Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati.',
            price: 85000,
            image: 'kopigayo.jpg',
        },
    ];

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4 justify-items-center pt-24 md:pt-18 px-8 py-6 md:px-12 gap-x-4 
                gap-y-6'
            >
                {data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
};

export default Product;

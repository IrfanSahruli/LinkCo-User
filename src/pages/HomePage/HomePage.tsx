import React from 'react'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import CarouselSwiper from '../../components/Carousel';
import { Link } from 'react-router-dom';

const HomePage = () => {
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

    const imageList = [
        'kopigayo.jpg',
        'kopigayo.jpg',
        'kopigayo.jpg',
        'kopigayo.jpg',
    ]

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='pt-14 md:pt-6 px-8'>
                <CarouselSwiper />
            </div>
            <h1 className='text-[30px] text-blue-950 text-center font-extrabold pt-[30px]'>
                Rekomendasi Produk
            </h1>
            <div className='grid grid-cols-1 justify-items-center md:grid-cols-4 px-8 py-6 md:px-12 gap-x-4 
                gap-y-6'
            >
                {data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
                <div className='col-span-full justify-self-center mt-4'>
                    <Link to={'/product'}>
                        <button className='bg-blue-950 text-white rounded-2xl px-4 py-2 hover:bg-blue-700'>
                            Lihat semua produk
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default HomePage;

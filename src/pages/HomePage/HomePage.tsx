import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import CarouselSwiper from '../../components/Carousel';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import axios, { isAxiosError } from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/api/getAllProduct`);
                console.log(res);
                setProducts(res.data.data);
            } catch (error) {
                if (isAxiosError(error)) {
                    console.error(`Error: ${error.response?.data}`);
                }
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='pt-16 md:pt-6 px-8'>
                <CarouselSwiper />
            </div>
            <h1 className='text-[30px] text-blue-950 text-center font-extrabold pt-[30px]'>
                Rekomendasi Produk
            </h1>
            <div className='grid grid-cols-1 justify-items-center md:grid-cols-4 px-8 py-6 md:px-12 gap-x-4 
                gap-y-6'
            >
                {products.map((product, index) => (
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

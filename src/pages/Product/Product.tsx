import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/Product';
import axios, { isAxiosError } from 'axios';

const ProductList = () => {
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
            <div className='grid grid-cols-1 md:grid-cols-4 justify-items-center pt-28 md:pt-18 px-8 py-6 md:px-12 
                gap-x-4 gap-y-6'
            >
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
};

export default ProductList;

import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../../types/Product';
import axios, { isAxiosError } from 'axios';
import { saveOrderData, saveProduct } from '../../../utils/storage';

const DetailProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
    const [isExpanded, setIsExpanded] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

    useEffect(() => {
        checkAuth();
        fetchProduct();
    }, []);

    const checkAuth = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/api/getMe`,
                { withCredentials: true }
            );
        } catch {
            navigate('/login');
        }
    };

    const fetchProduct = async () => {
        try {
            if (id) {
                const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/api/getOneProduct/${id}`);
                setProduct(res.data.data);
            }
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(`Error: ${error.response?.data}`);
            }
        }
    };

    const handleOrder = async () => {
        if (product) {
            saveProduct(product);
        }

        const payload = {
            productId: product?.id,
            jumlah: 1
        }

        try {
            const res = await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/api/createOrder`,
                payload,
                { withCredentials: true }
            );
            saveOrderData(res.data.data);
            setMessage(res.data.message);
            setMessageType('success');
            navigate('/order');
        } catch (error) {
            if (isAxiosError(error)) {
                const msg = error.response?.data?.message || 'Terjadi kesalahan saat login';
                setMessage(msg);
                setMessageType('error');
            } else {
                setMessage('Terjadi kesalahan tak terduga');
                setMessageType('error');
            }
        }
    };

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='bg-white'>
            <Navbar />
            {message && (
                <div
                    className={`text-sm mb-4 px-4 py-2 rounded-lg font-medium ${messageType ===
                        'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                    {message}
                </div>
            )}
            {product && (
                <div className='px-6 pt-26'>
                    <div className='grid grid-cols-1 rounded-2xl shadow-2xl mb-4'>
                        <div>
                            <img
                                src={`${import.meta.env.VITE_PUBLIC_URL}${product?.imageUrl}`}
                                alt={product?.productName}
                                className='w-full h-[270px] object-cover rounded-t-2xl'
                            />
                        </div>
                        <div className='px-4 py-2'>
                            <h1 className='text-[20px] font-bold'>
                                {product?.productName}
                            </h1>
                            <h3 className='text-[20px] text-blue-950 font-semibold mt-1'>
                                Rp. {Number(product.price).toLocaleString('id-ID')}
                            </h3>

                            <div className='mt-4 h-[160px]'>
                                <h3 className='text-[20px] font-semibold'>Deskripsi</h3>
                                <p className='text-md mt-1'>
                                    {isExpanded
                                        ? product?.description
                                        : product?.description?.substring(0, 150) + '...'}
                                </p>
                                <button
                                    onClick={toggleDescription}
                                    className='mt-2 text-blue-950 font-semibold'
                                >
                                    {isExpanded ? (
                                        <p>Lihat lebih sedikit</p>
                                    ) : (
                                        <p>Lihat selengkapnya</p>
                                    )}
                                </button>
                            </div>

                            <div className='mt-2 flex justify-end mb-2'>
                                <button
                                    onClick={handleOrder}
                                    className='bg-blue-950 rounded-4xl w-[170px] md:w-[200px] h-[43px] font-semibold 
                                    text-[18px] text-white'
                                >
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailProduct;

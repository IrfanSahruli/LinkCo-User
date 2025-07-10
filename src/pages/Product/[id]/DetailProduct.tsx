import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';

const DetailProduct = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const description = `
        Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati. 
        Kopi ini sangat cocok untuk para pecinta kopi hitam. Rasanya sangat nendang dan nikmat. 
        Kopi ini memiliki aroma yang sangat khas, beda dari kopi lain.
    `;

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='px-8 pt-26'>
                <div className='grid grid-cols-1 rounded-2xl shadow-2xl mb-4'>
                    <div>
                        <img
                            src="/kopigayo.jpg"
                            alt="Kopi gayo"
                            className='w-full h-[270px] object-cover rounded-t-2xl'
                        />
                    </div>
                    <div className='px-4 py-2'>
                        <h1 className='text-[20px] font-bold'>
                            Kopi Gayo Aceh
                        </h1>
                        <h3 className='text-[20px] text-blue-950 font-semibold mt-1'>
                            Rp. 15.000
                        </h3>

                        <div className='mt-4'>
                            <h3 className='text-[20px] font-semibold'>Deskripsi</h3>
                            <p className='text-md mt-1'>
                                {isExpanded
                                    ? description
                                    : description.substring(0, 150) + '...'}
                            </p>
                            <button
                                onClick={toggleDescription}
                                className='mt-2 text-blue-950 font-semibold'
                            >
                                {isExpanded ? 'Lihat lebih sedikit' : 'Lihat selengkapnya'}
                            </button>
                        </div>

                        <div className='mt-2 flex justify-end mb-2'>
                            <button className='bg-blue-950 rounded-4xl w-[170px] md:w-[200px] h-[43px]'>
                                <p className='font-semibold text-[18px] text-white'>
                                    Pesan
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;

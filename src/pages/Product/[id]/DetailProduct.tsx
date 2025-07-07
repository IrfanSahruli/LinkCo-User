import React from 'react'
import Navbar from '../../../components/Navbar';

const DetailProduct = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className='grid grid-cols-1 pt-[80px]'>
                <div className=''>
                    <img
                        src="/kopigayo.jpg"
                        alt=""
                        className='w-full h-[270px]'
                    />
                </div>
                <div className='px-4 py-2'>
                    <h1 className='text-[20px] font-bold'>
                        Kopi Gayo Aceh
                    </h1>
                    <h3 className='text-[20px] text-blue-950 font-semibold mt-1'>
                        Rp. 15.000
                    </h3>
                    <div className='h-[150px]'>
                        <h3 className='text-[20px] font-semibold mt-4'>
                            Deskripsi
                        </h3>
                        <p className='text-md mt-1'>
                            Kopi khas Gayo dengan aroma harum dan rasa kuat, cocok untuk penikmat kopi sejati. bshssns
                            nsjnbsjnsjnsjnqsnqinso. nsubushushusissnnsnqsns. NJSuhsuqsijisjiqjsqhsuh. njshusbnsbsjsns
                            snjsqsunqisniqnisq. jsnqnsiqnsinqisnis. usbnqusnqsnqnsunqs. sbhshbqsubsubqjs
                        </p>
                    </div>
                    <div className='mt-16 flex justify-end'>
                        <button
                            className='bg-blue-950 rounded-4xl w-[170px] md:w-[200px] h-[43px]'
                        >
                            <p className='font-semibold text-[18px] text-white'>
                                Pesan
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailProduct;

import React from 'react'
import { FiUser } from 'react-icons/fi';
import Navbar from '../../components/Navbar';

const Profile = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-2 pt-28 md:pt-20 px-6 md:px-12 md:gap-x-4'>
                <div className='flex rounded-2xl shadow-2xl px-4 py-4'>
                    <FiUser
                        className='h-30 w-30'
                    />
                    <div className='ml-2 border-b'>
                        <h3 className='text-[23px] font-bold'>
                            Irfan Sahruli
                        </h3>
                        <p className='text-[18px]'>
                            irfan@gmail.com
                        </p>
                        <p className='text-[18px]'>
                            0838-8766-9853
                        </p>
                        <div className='flex justify-between'>
                            <p className='text-[18px]'>
                                Referral: SBG654
                            </p>
                            <button className='bg-gray-400 px-4 py-2 text-white font-semibold rounded-2xl mt-1
                                right-0'
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex rounded-2xl shadow-2xl px-4 py-4 mt-4'>
                    <FiUser
                        className='h-30 w-30'
                    />
                    <div className='ml-2'>
                        <h3 className='text-[23px] font-bold'>
                            Irfan Sahruli
                        </h3>
                        <h4 className='text-[18px] font-semibold'>
                            Saldo:
                        </h4>
                        <p className='text-[18px]'>
                            Rp. 100.000,00
                        </p>
                        <div className='flex gap-x-2'>
                            <button className='bg-blue-950 px-4 py-2 text-white font-semibold rounded-2xl mt-1'>
                                Withdraw
                            </button>
                            <button className='bg-gray-400 px-4 py-2 text-white font-semibold rounded-2xl mt-1'>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;

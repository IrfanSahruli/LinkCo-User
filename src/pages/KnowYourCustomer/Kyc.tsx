import React from 'react'
import Navbar from '../../components/Navbar';
import { GrFormAdd } from 'react-icons/gr';

const Kyc = () => {
    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='grid grid-cols-1 border rounded-2xl w-full h-full px-4 py-2'>
                <div className=''>
                    <GrFormAdd size={24} />
                </div>
            </div>
        </div>
    )
};

export default Kyc;

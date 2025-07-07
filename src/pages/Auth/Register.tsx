import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-blue-950 h-full md:min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center pt-10 px-4 md:py-[210px]'>
                    <img
                        src='LogoLinkCo.png'
                        className='text-white w-[100px] h-[100px] md:w-[220px] md:h-[220px] text-center font-extrabold'
                    />
                </div>
                <div className='flex justify-center mt-[50px] md:mt-[40px]'>
                    <div className='bg-white rounded-t-4xl h-full w-full px-8 py-8 md:py-8 md:rounded-4xl 
                        md:h-[680px] md:w-[500px] md:mb-[40px]'
                    >
                        <h1 className='text-[30px] text-center font-bold'>
                            Register
                        </h1>
                        <p className='text-[18px] text-center text-gray-600 mt-1'>
                            Selamat datang di LinkCo
                        </p>
                        <div className='flex flex-col mt-10'>
                            <label
                                htmlFor="name"
                                className='text-[18px] font-semibold'
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                placeholder='Nama...'
                                className='rounded-4xl border h-[50px] px-6 text-[18px]'
                            />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label
                                htmlFor="email"
                                className='text-[18px] font-semibold'
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder='Email...'
                                className='rounded-4xl border h-[50px] px-6 text-[18px]'
                            />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label
                                htmlFor="noHp"
                                className='text-[18px] font-semibold'
                            >
                                Nomor HandPhone
                            </label>
                            <input
                                type="number"
                                placeholder='Nomor HandPhone...'
                                className='rounded-4xl border h-[50px] px-6 text-[18px]'
                            />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label
                                htmlFor="referral"
                                className='text-[18px] font-semibold'
                            >
                                Kode Referral (jika ada)
                            </label>
                            <input
                                type="text"
                                placeholder='Kode referral...'
                                className='rounded-4xl border h-[50px] px-6 text-[18px]'
                            />
                        </div>
                        <div className='mt-10 flex justify-center'>
                            <button className='bg-blue-950 rounded-4xl w-[360px] md:w-[200px] h-[43px]'>
                                <p className='font-semibold text-[18px] text-white'>
                                    Register
                                </p>
                            </button>
                        </div>
                        <p className='text-center mt-4 mb-16'>
                            Sudah punya akun?
                            <span className='ml-1 text-blue-950 font-semibold'>
                                <Link to={`/`}>
                                    Masuk
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;

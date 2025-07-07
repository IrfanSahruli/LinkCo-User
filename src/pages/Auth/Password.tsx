import React from 'react'
import { GiPadlock } from 'react-icons/gi';
import { PiPassword } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Password = () => {
    return (
        <div className='bg-blue-950 h-full md:min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center pt-10 px-4 md:py-[210px]'>
                    <img
                        src='LogoLinkCo.png'
                        className='text-white w-[100px] h-[100px] md:w-[220px] md:h-[220px] text-center font-extrabold'
                    />
                </div>
                <div className='flex justify-center mt-[50px] md:mt-[90px]'>
                    <div className='bg-white rounded-t-4xl h-[530px] w-full px-8 py-8 md:py-6 md:rounded-4xl 
                        md:h-[470px] md:w-[500px]'
                    >
                        <div className='flex justify-center'>
                            <h1 className='text-[30px] text-center font-bold'>
                                Password
                            </h1>
                            <GiPadlock
                                className='mt-[10px] ml-1 w-[24px] h-[24px]'
                            />
                        </div>
                        <p className='text-[18px] text-center text-gray-600 mt-1'>
                            Mohon konfirmasi password anda
                        </p>
                        <div className='flex flex-col mt-10'>
                            <label
                                htmlFor="password"
                                className='text-[18px] font-semibold'
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder='Password...'
                                className='rounded-4xl border h-[50px] px-6 text-[18px]'
                            />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label
                                htmlFor="confirPassword"
                                className='text-[18px] font-semibold'
                            >
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                placeholder='Konfirmasi password...'
                                className='rounded-4xl border h-[50px] px-6 text-[18px]'
                            />
                        </div>
                        <div className='mt-10 flex justify-center'>
                            <button className='bg-blue-950 rounded-4xl w-[360px] md:w-[200px] h-[43px]'>
                                <p className='font-semibold text-[18px] text-white'>
                                    Konfirmasi
                                </p>
                            </button>
                        </div>
                        <p className='text-center mt-4'>
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

export default Password;

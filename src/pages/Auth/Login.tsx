import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-blue-950 min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center pt-14 px-4 py-2 md:py-[220px]'>
                    <img
                        src='LogoLinkCo.png'
                        className='text-white w-[220px] h-[220px] text-center font-extrabold'
                    />
                </div>
                <div className='flex justify-center mt-[50px] md:mt-[40px]'>
                    <div className='bg-white rounded-t-4xl h-[637px] w-full px-8 py-10 md:py-8 md:rounded-4xl 
                        md:h-[570px] md:w-[500px]'
                    >
                        <h1 className='text-[40px] text-center font-bold'>
                            Login
                        </h1>
                        <p className='text-[18px] text-center text-gray-600 mt-6'>
                            Selamat datang di LinkCo
                        </p>
                        <div className='flex flex-col mt-10'>
                            <label
                                htmlFor="email"
                                className='text-[20px] font-semibold'
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder='Email...'
                                className='rounded-4xl border h-[50px] px-6 text-[23px]'
                            />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label
                                htmlFor="password"
                                className='text-[20px] font-semibold'
                            >
                                Password
                            </label>
                            <input
                                type="text"
                                placeholder='Password...'
                                className='rounded-4xl border h-[50px] px-6 text-[23px]'
                            />
                        </div>
                        <div className='mt-10 flex justify-center'>
                            <button className='bg-blue-800 rounded-4xl w-[360px] py-3'>
                                <p className='font-semibold text-[23px] text-white'>
                                    Login
                                </p>
                            </button>
                        </div>
                        <p className='text-center mt-4'>
                            Belum punya akun?
                            <span className='ml-1 text-blue-800 font-semibold'>
                                <Link to={`/register`}>
                                    Daftar
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;

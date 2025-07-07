import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='bg-blue-950 px-8 md:px-12 py-4 md:py-1 fixed w-full z-10'>
            <div className='max-w-7xl flex items-center justify-between'>
                <img
                    src='LogoLinkCo.png'
                    className='w-[50px] h-[50px] text-white font-bold'
                />
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='md:hidden text-white'
                >
                    <FiMenu size={24} />
                </button>
                <ul className='hidden md:flex gap-x-4 text-white ml-auto font-semibold'>
                    <li>
                        <a
                            href="/homepage"
                            className={`hover:text-amber-500 ${location.pathname === '/homepage' ? 'text-amber-500' : ''}`}
                        >
                            Beranda
                        </a>
                    </li>
                    <li>
                        <a
                            href="/product"
                            className={`hover:text-amber-500 ${location.pathname === '/product' ? 'text-amber-500' : ''}`}
                        >
                            Produk
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
                            className={`hover:text-amber-500 ${location.pathname === '/kegiatan' ? 'text-amber-500' : ''}`}
                        >
                            Kegiatan
                        </a>
                    </li>
                </ul>
            </div>
            <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden
                ${isMobileMenuOpen ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}>
                <ul className="text-white px-4 font-semibold border-t">
                    <li className="py-2 mt-4">
                        <a
                            href="/homepage"
                            className={`hover:text-amber-500 ${location.pathname === '/homepage' ? 'text-amber-500' : ''}`}
                        >
                            Beranda
                        </a>
                    </li>
                    <li className="py-2">
                        <a
                            href="/product"
                            className={`hover:text-amber-500 ${location.pathname === '/product' ? 'text-amber-500' : ''}`}
                        >
                            Produk
                        </a>
                    </li>
                    <li className="py-2">
                        <a
                            href="#"
                            className={`hover:text-amber-500 ${location.pathname === '/kegiatan' ? 'text-amber-500' : ''}`}
                        >
                            Kegiatan
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;

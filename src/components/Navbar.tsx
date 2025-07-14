import React, { useEffect, useState } from 'react'
import { FiLogOut, FiMenu, FiUser } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User } from '../types/User';
import axios, { isAxiosError } from 'axios';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/api/getMe`,
                    { withCredentials: true }
                );
                console.log(res);
                setUser(res.data.data);
            } catch (error) {
                if (isAxiosError(error)) {
                    console.error(`Error: ${error.response?.data}`);
                }
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            const res = await axios.delete(`${import.meta.env.VITE_PUBLIC_URL}/api/logout`,
                { withCredentials: true }
            );
            alert(res.data.message);
            if (location.pathname === "/") {
                window.location.reload();
            } else {
                navigate("/");
            }
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data.message);
                console.error(`Error: ${error.response?.data}`);
            }
        }
    };

    return (
        <div className='bg-blue-950 px-8 md:px-12 py-4 md:py-1 fixed w-full z-10'>
            <div className='max-w-7xl flex items-center justify-between'>
                <img src='/LogoLinkCo.png' className='w-[50px] h-[50px]' />

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='md:hidden text-white'
                >
                    <FiMenu size={24} />
                </button>

                {/* Menu Desktop */}
                <ul className='hidden md:flex gap-x-6 text-white ml-auto font-semibold items-center'>
                    <li>
                        <Link
                            to="/"
                            className={`hover:text-amber-500 ${location.pathname === '/' ? 'text-amber-500' :
                                ''}`}
                        >
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/product"
                            className={`hover:text-amber-500 ${location.pathname === '/product' ?
                                'text-amber-500' : ''}`}
                        >
                            Produk
                        </Link>
                    </li>

                    {user?.name ? (
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 hover:text-amber-500"
                            >
                                <FiUser size={20} />
                                <span>{user?.name}</span>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white text-blue-950 rounded-lg 
                                    shadow-md w-40 z-50"
                                >
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 hover:bg-gray-100">
                                        Profil
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex 
                                        items-center gap-2"
                                    >
                                        <FiLogOut size={16} />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="hover:text-amber-500">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="hover:text-amber-500">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Menu Mobile */}
            <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden
                ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
            >
                <ul className="text-white px-4 font-semibold border-t">
                    <li className="py-2 mt-4">
                        <Link
                            to="/"
                            className={`hover:text-amber-500 ${location.pathname === '/' ?
                                'text-amber-500' : ''}`}
                        >
                            Beranda
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link to="/product" className={`hover:text-amber-500 ${location.pathname === '/product'
                            ? 'text-amber-500' : ''}`}
                        >
                            Produk
                        </Link>
                    </li>

                    {user ? (
                        <>
                            <li className="py-2 flex items-center justify-between">
                                <div
                                    className="flex items-center gap-2"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <FiUser size={20} />
                                    <span>{user.name}</span>
                                </div>
                            </li>

                            {isDropdownOpen && (
                                <>
                                    <li className="py-2 pl-6">
                                        <Link
                                            to="/profile"
                                            className="hover:text-amber-500"
                                        >
                                            Profil
                                        </Link>
                                    </li>
                                    <li className="py-2 pl-6">
                                        <button
                                            onClick={handleLogout}
                                            className="hover:text-amber-500"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <li className="py-2">
                                <Link to="/login" className="hover:text-amber-500">Login</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/register" className="hover:text-amber-500">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Navbar;

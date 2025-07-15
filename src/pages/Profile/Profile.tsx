import React, { useEffect, useState } from 'react';
import { FiUser, FiCopy, FiUpload } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import { User } from '../../types/User';
import axios, { isAxiosError } from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState<User>();

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
                    console.error(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="bg-white">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 pt-28 md:pt-20 px-6 md:px-12 md:gap-x-4">
                {user && (
                    <div className="rounded-2xl bg-[#065084] p-5 space-y-4 md:space-y-0">

                        <div className="flex items-start gap-4 rounded-2xl shadow-2xl px-6 py-6 bg-white max-w-xl">
                            <FiUser className="w-20 h-20 rounded-full" />

                            <div className="flex-1">
                                <h3 className="text-xl font-bold">{user?.name}</h3>
                                <p className="text-base text-gray-800">{user?.email}</p>
                                <p className="text-base text-gray-800">{user?.noHandPhone}</p>
                                {user?.isKYCApproved ? (
                                    <p className="text-green-600 font-semibold">
                                        Data diri telah diverifikasi
                                    </p>
                                ) : (
                                    <Link to={'/kycdata'}>
                                        <button className="text-red-500 hover:underline">
                                            Verifikasi Data Diri
                                        </button>
                                    </Link>
                                )}
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex items-center border border-gray-500 rounded-lg px-3 py-1 gap-5">
                                        <div>
                                            <p className="text-[14px] text-gray-700">Referral:</p>
                                            <p className="text-[18px] font-semibold text-gray-900">{user?.affiliate?.referral}</p>
                                        </div>
                                        <FiCopy className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl shadow-2xl px-6 py-6 bg-blue-400 max-w-xl text-white">
                            <p className="text-[18px] font-semibold">Saldo</p>

                            <div className="flex items-center justify-between mt-2 border-b pb-5">
                                <div>
                                    <h1 className="text-2xl font-bold">Rp. {Number(user?.saldo).toLocaleString('id-ID')}</h1>
                                    <p className="text-sm">Minimal penarikan: Rp. 50.000</p>
                                </div>

                                <button className="bg-blue-900 hover:bg-blue-950 text-white p-3 rounded-2xl">
                                    <FiUpload className="w-8 h-8" />
                                </button>
                            </div>

                            <div className="flex justify-center">
                                <button className="mt-4 text-sm hover:text-blue-900 font-semibold">
                                    Riwayat Penarikan
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
import React, { useEffect, useState } from 'react';
import { FiUser, FiCopy, FiUpload } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import { User } from '../../types/User';
import axios, { isAxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import RelationTable from '../../components/RelationTable';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();
    const [copied, setCopied] = useState(false);
    const [affiliations, setAffiliations] = useState<any[]>([]);

    useEffect(() => {
        fetchUser();
        fetchAffiliations();
    }, []);

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

    const fetchAffiliations = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/api/getAffiliate`, {
                withCredentials: true
            });
            setAffiliations(res.data.data);
        } catch (error) {
            console.error('Gagal ambil relasi:', error);
        }
    };

    const handleCopyReferral = () => {
        if (user?.affiliate?.referral) {
            navigator.clipboard.writeText(user.affiliate.referral)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch(err => {
                    console.error('Gagal menyalin kode:', err);
                });
        }
    };

    const handleWithdrawClick = () => {
        try {
            if (!user?.isKYCApproved) {
                alert('Mohon verifikasi data diri terlebih dahulu!');
                return;
            }
            navigate('/withdraw')
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

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
                                    <div className="relative flex items-center border border-gray-500 rounded-lg px-3 py-1 gap-5">
                                        <div>
                                            <p className="text-[14px] text-gray-700">Referral:</p>
                                            <p className="text-[18px] font-semibold text-gray-900">{user?.affiliate?.referral}</p>
                                        </div>
                                        <FiCopy
                                            onClick={handleCopyReferral}
                                            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black"
                                        />
                                        {copied && (
                                            <span className="absolute -bottom-6 left-0 mb-2 text-xs text-green-600">
                                                Berhasil disalin ke papan klip
                                            </span>
                                        )}
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

                                <button
                                    onClick={handleWithdrawClick}
                                    className="bg-blue-900 hover:bg-blue-950 text-white p-3 rounded-2xl"
                                >
                                    <FiUpload className="w-8 h-8" />
                                </button>
                            </div>

                            <div className="flex justify-center">
                                <Link to={'/historywithdraw'}>
                                    <button className="mt-4 text-sm hover:text-blue-900 font-semibold">
                                        Riwayat Penarikan
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='mt-6 px-6'>
                {affiliations[0]?.children.map((relasi1: any) => (
                    <RelationTable key={relasi1.userId} rootUser={relasi1} />
                ))}
            </div>
        </div>
    );
};

export default Profile;
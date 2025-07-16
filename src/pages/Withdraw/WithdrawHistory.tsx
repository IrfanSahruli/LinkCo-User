import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { Withdraw } from '../../types/User';
import axios, { isAxiosError } from 'axios';

const WithdrawHistory = () => {
    const [withdraws, setWithdraws] = useState<Withdraw[]>([]);
    const [status, setStatus] = useState<'all' | 'pending' | 'approved'>('all');

    useEffect(() => {
        const fetchMyWithdraws = async () => {
            try {
                const query = status !== 'all' ? `?status=${status}` : '';
                const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/api/getMyWithdraw/${query}`,
                    { withCredentials: true }
                );
                setWithdraws(res.data.data);
            } catch (error) {
                if (isAxiosError(error)) {
                    console.error(error.response?.data);
                }
            }
        };

        fetchMyWithdraws();
    }, [status]);

    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='flex justify-center px-6 pt-[100px]'>
                <div className='bg-white rounded-2xl shadow-xl border border-gray-200 max-w-xl w-full p-6'>
                    {/* Filter Tetap di Atas */}
                    <div className='flex border-b space-x-10 justify-center pb-4 sticky top-[100px] bg-white z-10'>
                        <button
                            onClick={() => setStatus('all')}
                            className={`text-[18px] ${status === 'all' ? 'font-bold text-blue-950' : ''}`}
                        >
                            Semua
                        </button>
                        <button
                            onClick={() => setStatus('pending')}
                            className={`text-[18px] ${status === 'pending' ? 'font-bold text-blue-950' : ''}`}
                        >
                            Proses
                        </button>
                        <button
                            onClick={() => setStatus('approved')}
                            className={`text-[18px] ${status === 'approved' ? 'font-bold text-blue-950' : ''}`}
                        >
                            Selesai
                        </button>
                    </div>

                    {/* Scrollable Card Section */}
                    <div className='max-h-[490px] overflow-y-auto mt-4 pr-1'>
                        {withdraws.map((withdraw, index) => (
                            <div key={index} className='flex flex-col border rounded-xl w-full px-4 py-2 mb-4'>
                                <div className='flex justify-between'>
                                    <h1 className='font-semibold'>Penarikan</h1>
                                    <p className='text-sm'>
                                        Status: <span className='capitalize'>{withdraw?.status}</span>
                                    </p>
                                </div>
                                <div className='mt-2 text-sm'>
                                    <p>Bank/E-Wallet: <span className='font-medium'>{withdraw?.withdrawTo}</span></p>
                                    <p>No rekening: <span className='font-medium'>{withdraw?.noRekening}</span></p>
                                    <p>Total penarikan: <span className='font-medium'>Rp {withdraw?.totalWithdraw?.toLocaleString('id-ID')}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WithdrawHistory;

import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { Withdraw } from '../../types/User';
import axios, { isAxiosError } from 'axios';

type HistoryItem = {
    type: 'masuk' | 'keluar';
    amount: number;
    createdAt: string;
};

const WithdrawHistory = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [withdraws, setWithdraws] = useState<Withdraw[]>([]);
    const [status, setStatus] = useState<'all' | 'pending' | 'approved'>('all');

    useEffect(() => {
        const fetchBalanceHistory = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/api/getMyHistory`, {
                    withCredentials: true
                });
                console.log(res);

                setHistory(res.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBalanceHistory();
    }, []);

    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='flex justify-center px-6 pt-[100px]'>
                <div className='bg-white rounded-2xl shadow-xl border border-gray-200 max-w-xl w-full p-6'>
                    <h1 className='text-center font-semibold text-blue-950 text-[23px] mb-2 border-b py-2'>
                        Riwayat Affiliasi
                    </h1>
                    {/* Scrollable Card Section */}
                    <div className='max-h-[490px] overflow-y-auto mt-4 pr-1'>
                        {history.map((item, index) => (
                            <div key={index} className='flex justify-between border p-4 rounded-xl mb-3 bg-gray-50'>
                                <div>
                                    <p className='font-medium'>
                                        {item.type === 'masuk' ? 'Penambahan Saldo (Komisi)' : 'Pengurangan Saldo (Withdraw)'}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {new Date(item.createdAt)?.toLocaleString('id-ID')}
                                    </p>
                                </div>
                                <div className={`font-bold ${item.type === 'masuk' ? 'text-green-600' : 'text-red-600'}`}>
                                    {item.type === 'masuk' ? '+' : '-'} Rp {item.amount != null ? item.amount.toLocaleString('id-ID') : '0'}
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

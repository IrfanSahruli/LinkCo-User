import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Withdraw } from '../../types/User';
import axios, { isAxiosError } from 'axios';

const RequestWithdraw = () => {
    const navigate = useNavigate();
    const [withdraw, setWithdraw] = useState<Withdraw>({
        withdrawTo: '',
        noRekening: '',
        totalWithdraw: ''
    });
    const [selfieImage, setSelfieImage] = useState<File | null>(null);
    const [selfiePreview, setSelfiePreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setWithdraw(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: 'selfie'
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const previewURL = URL.createObjectURL(file);
        setSelfieImage(file);
        setSelfiePreview(previewURL);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        if (selfieImage) formData.append('selfiePhoto', selfieImage);
        formData.append('withdrawTo', withdraw.withdrawTo || '');
        formData.append('noRekening', withdraw.noRekening || '');
        formData.append('totalWithdraw', String(withdraw.totalWithdraw || ''));

        try {
            const res = await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/api/withdraw`,
                formData,
                { withCredentials: true }
            );

            alert(res.data.message);
            navigate('/profile');
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data.message);
                console.error(error.response?.data);
            }
        }
    };

    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='flex justify-center px-6 pt-[150px] pb-[50px]'>
                <div className='bg-white rounded-2xl shadow-xl border border-gray-200 max-w-xl w-full p-8
                    text-center space-y-4'
                >
                    <div className='text-start'>
                        <label className='text-[18px] font-semibold'>
                            Nama Bank/E-Wallet
                        </label>
                        <input
                            type="text"
                            name='withdrawTo'
                            value={withdraw.withdrawTo}
                            onChange={handleChange}
                            placeholder='Bank/E-Wallet...'
                            className='h-[50px] border rounded-2xl w-full px-4 text-[18px]'
                        />
                    </div>
                    <div className='text-start'>
                        <label className='text-[18px] font-semibold'>
                            No Rekening
                        </label>
                        <input
                            type="text"
                            name='noRekening'
                            value={withdraw.noRekening}
                            onChange={handleChange}
                            placeholder='No rekening...'
                            className='h-[50px] border rounded-2xl w-full px-4 text-[18px]'
                        />
                    </div>
                    <div className='text-start'>
                        <label className='text-[18px] font-semibold'>
                            Total Penarikan
                        </label>
                        <input
                            type="text"
                            name='totalWithdraw'
                            value={withdraw.totalWithdraw}
                            onChange={handleChange}
                            placeholder='Total penarikan...'
                            className='h-[50px] border rounded-2xl w-full px-4 text-[18px]'
                        />
                    </div>

                    <div className='text-start'>
                        <label className="font-semibold text-[18px] mb-1 block">
                            Foto Selfie
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            capture="user"
                            onChange={(e) => handleImageChange(e, 'selfie')}
                            className="text-sm border rounded-2xl px-4 py-2 h-[50px] w-full"
                        />
                        {selfiePreview && (
                            <img src={selfiePreview} alt="Preview Selfie" className="mt-2 w-40 rounded-lg" />
                        )}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className='bg-blue-950 rounded-2xl px-4 py-2 mt-2 text-white font-semibold'
                    >
                        Ajukan Penarikan
                    </button>
                </div>
            </div>
        </div>
    )
};

export default RequestWithdraw;

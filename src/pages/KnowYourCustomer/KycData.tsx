import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { GrFormAdd } from 'react-icons/gr';
import { Kyc } from '../../types/User';
import axios, { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const KycData = () => {
    const navigate = useNavigate();
    const [kyc, setKyc] = useState<Kyc>({
        fullName: '',
        nik: '',
        placeOfBirth: '',
        dateOfBirth: '',
        address: ''
    });
    const [ktpImage, setKtpImage] = useState<File | null>(null);
    const [selfieImage, setSelfieImage] = useState<File | null>(null);
    const [ktpPreview, setKtpPreview] = useState<string | null>(null);
    const [selfiePreview, setSelfiePreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setKyc(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: 'ktp' | 'selfie'
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const previewURL = URL.createObjectURL(file);

        if (type === 'ktp') {
            setKtpImage(file);
            setKtpPreview(previewURL);
        } else {
            setSelfieImage(file);
            setSelfiePreview(previewURL);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        if (ktpImage) formData.append('ktpPhoto', ktpImage);
        if (selfieImage) formData.append('selfiePhoto', selfieImage);
        formData.append('fullName', kyc.fullName || '');
        formData.append('nik', kyc.nik || '');
        formData.append('placeOfBirth', kyc.placeOfBirth || '');
        formData.append('dateOfBirth', kyc.dateOfBirth || '');
        formData.append('addres', kyc.address || '');

        try {
            const res = await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/api/kyc`,
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
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-24 py-6 px-6">
                <div className="bg-gray-50 shadow-2xl p-6 rounded-xl max-w-md mx-auto">
                    <h2 className="text-xl font-bold text-blue-950 mb-4 text-center">Verifikasi KYC</h2>

                    <div className="space-y-4">

                        {/* Upload KTP */}
                        <div>
                            <label className="font-semibold text-sm mb-1 block">Foto KTP</label>
                            <input
                                type="file"
                                accept="image/*"
                                capture="environment"
                                onChange={(e) => handleImageChange(e, 'ktp')}
                                className="text-sm"
                            />
                            {ktpPreview && (
                                <img src={ktpPreview} alt="Preview KTP" className="mt-2 w-40 rounded-lg" />
                            )}
                        </div>

                        {/* Upload Selfie */}
                        <div>
                            <label className="font-semibold text-sm mb-1 block">Foto Selfie</label>
                            <input
                                type="file"
                                accept="image/*"
                                capture="user"
                                onChange={(e) => handleImageChange(e, 'selfie')}
                                className="text-sm"
                            />
                            {selfiePreview && (
                                <img src={selfiePreview} alt="Preview Selfie" className="mt-2 w-40 rounded-lg" />
                            )}
                        </div>

                        {/* Nama Lengkap */}
                        <div>
                            <label className="font-semibold text-sm mb-1 block">Nama Lengkap</label>
                            <input
                                type="text"
                                name="fullName"
                                value={kyc.fullName}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded-lg"
                                required
                            />
                        </div>

                        {/* NIK */}
                        <div>
                            <label className="font-semibold text-sm mb-1 block">NIK</label>
                            <input
                                type="number"
                                name="nik"
                                value={kyc.nik}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded-lg"
                                required
                            />
                        </div>

                        {/* Tempat Lahir */}
                        <div>
                            <label className="font-semibold text-sm mb-1 block">Tempat Lahir</label>
                            <input
                                type="text"
                                name="placeOfBirth"
                                value={kyc.placeOfBirth}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded-lg"
                                required
                            />
                        </div>

                        {/* Tanggal Lahir */}
                        <div>
                            <label className="font-semibold text-sm mb-1 block">Tanggal Lahir</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={kyc.dateOfBirth}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded-lg"
                                required
                            />
                        </div>

                        {/* Alamat */}
                        <div>
                            <label className="font-semibold text-sm mb-1 block">Alamat</label>
                            <textarea
                                name="address"
                                value={kyc.address}
                                onChange={handleChange}
                                rows={3}
                                className="w-full border px-4 py-2 rounded-lg"
                                required
                            />
                        </div>

                        <button
                            onClick={handleSave}
                            className="w-full bg-blue-950 text-white py-2 rounded-lg font-semibold hover:bg-blue-800"
                        >
                            Kirim Verifikasi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KycData;

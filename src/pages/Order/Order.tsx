import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { FiCreditCard } from 'react-icons/fi'
import { clearData, getOrderData, getProduct } from '../../utils/storage'

const Order = () => {
    const order = getOrderData();
    const product = getProduct();

    const handleNext = () => {
        try {
            clearData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="px-4 md:px-8 pt-[210px] flex justify-center">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-xl w-full p-8 text-center space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="bg-blue-100 text-blue-800 rounded-full p-4">
                            <FiCreditCard size={36} />
                        </div>
                    </div>

                    {/* Judul */}
                    <div>
                        <h1 className="text-2xl font-bold text-blue-950">Order ID</h1>
                        <p className="text-lg font-semibold text-gray-700 mt-1">{order?.orderId}</p>
                    </div>

                    {/* Note */}
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">
                            Note:
                        </span>
                        Order ID ini wajib disimpan untuk pengisian data transaksi selanjutnya.
                    </p>

                    {/* Tombol */}
                    <div>
                        <a
                            href={product?.linkProduct}
                            onClick={handleNext}
                            className="px-6 py-2 bg-blue-950 hover:bg-blue-800 text-white text-sm font-semibold 
                            rounded-full transition"
                        >
                            Lanjutkan Transaksi
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order

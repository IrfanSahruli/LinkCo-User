import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className='bg-white rounded-2xl shadow-md w-full transform transition duration-300 hover:scale-105 
            hover:shadow-lg'
            >
                <img
                    src={product.image}
                    alt={product.image}
                    className='w-full h-48 object-cover'
                />
                <div className='p-4 flex flex-col gap-3'>
                    <div>
                        <h2 className='text-lg font-semibold text-gray-800'>
                            {product.name}
                        </h2>
                        <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
                            {product.description}
                        </p>
                    </div>
                    <span className='text-blue-950 font-bold text-md'>
                        Rp {Number(product.price).toLocaleString('id-ID')}
                    </span>
                    <button className='bg-blue-950 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition'>
                        Pesan
                    </button>
                </div>
            </div>
        </Link>
    )
};

export default ProductCard;

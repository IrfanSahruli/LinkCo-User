import React from 'react';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="w-[310px] bg-white rounded-2xl shadow-md flex flex-col overflow-hidden">
            <Link to={`/product/${product.id}`}>
                <div className="h-[170px] w-full overflow-hidden rounded-t-2xl">
                    <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}${product.imageUrl}`}
                        alt={product.productName}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                    <div>
                        <h2 className="text-md font-semibold text-blue-950 leading-tight">
                            {product.productName}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {product.description}
                        </p>
                    </div>
                    <p className="text-blue-950 font-bold mt-1 text-sm">
                        Rp {Number(product.price).toLocaleString('id-ID')}
                    </p>
                </div>
            </Link>

            <a
                href={product.linkProduct}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-4 mb-4 text-center bg-blue-950 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
            >
                Pesan
            </a>
        </div>
    );
};

export default ProductCard;

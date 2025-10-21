import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAdd }) {
    if (!product) return null;

    const priceText = new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD',
    }).format(product.price ?? 0);

    const handleClick = () => onAdd?.(product);

    return (
        <div
            className="group rounded-2xl border border-slate-200 bg-white
                 hover:bg-slate-50 transition
                 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_14px_34px_rgba(15,23,42,.10)]
                 overflow-hidden"
        >
            <Link to={`/products/${product.id}`} className="block p-4">
                <div className="h-44 flex items-center justify-center mb-3">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-44 object-contain transition duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                    />
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2 text-slate-800">{product.title}</h3>
                <p className="font-bold text-sky-600">{priceText}</p>
            </Link>

            <div className="p-4 pt-0">
                <button
                    type="button"
                    onClick={handleClick}
                    className="w-full rounded-xl py-2.5
                     bg-gradient-to-r from-sky-400 via-pink-300 to-violet-400
                     hover:from-sky-300 hover:via-pink-300 hover:to-violet-300
                     text-white font-medium transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default memo(ProductCard);

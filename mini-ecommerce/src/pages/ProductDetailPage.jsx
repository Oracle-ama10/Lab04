// src/pages/ProductDetailPage.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetailPage() {
    const { productId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                setItem(data);
            } catch (e) {
                console.error(e);
                setError('Failed to fetch product.');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [productId]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!item) return <p className="text-center">Product not found.</p>;

    const priceText = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(item.price ?? 0);

    const handleAdd = () => {
        console.log('Add to Cart:', item);
        alert('Added to cart (demo)');
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded p-6 flex items-center justify-center">
                <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-96 object-contain"
                    loading="lazy"
                />
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-3">{item.title}</h1>
                <p className="text-gray-500 mb-2">Category: {item.category}</p>
                <p className="text-blue-600 text-xl font-bold mb-4">{priceText}</p>
                <p className="text-gray-700 mb-6">{item.description}</p>

                <div className="flex gap-3">
                    <button
                        onClick={handleAdd}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Add to Cart
                    </button>
                    <Link to="/products" className="px-4 py-2 border rounded hover:bg-gray-50">
                        ← Back to Products
                    </Link>
                    <Link to="/cart" className="px-4 py-2 border rounded hover:bg-gray-50">
                        Go to Cart
                    </Link>
                </div>
            </div>
        </section>
    );
}

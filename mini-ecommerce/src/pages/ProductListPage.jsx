// src/pages/ProductListPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import ProductCard from '../components/ProductCard';

function ProductListPage() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ TODO 7: memoize handler ด้วย useCallback
    const handleAddToCart = useCallback((p) => {
        if (!p) return;
        dispatch(addItem({
            id: p.id,
            title: p.title,
            price: p.price,
            image: p.image,
        }));
    }, [dispatch]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('https://fakestoreapi.com/products');
                setProducts(data || []);
            } catch (err) {
                setError('Failed to fetch products.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={handleAddToCart}  // ← ส่ง handler ที่ memoized แล้ว
                />
            ))}
        </div>
    );
}

export default ProductListPage;

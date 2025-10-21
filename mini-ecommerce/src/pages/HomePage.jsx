// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <section className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                    Welcome to Mini E-Commerce
                </span>
            </h1>

            <p className="text-slate-600">
                เลือกดูสินค้าทั้งหมดได้ที่หน้า Products
            </p>

            <Link
                to="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl
                   bg-gradient-to-r from-sky-400 via-pink-300 to-violet-400
                   hover:from-sky-300 hover:via-pink-300 hover:to-violet-300
                   text-white font-medium shadow-sm transition"
            >
                ไปหน้า Products →
            </Link>
        </section>
    );
}

// src/components/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Layout() {
    const count = useSelector(s => s.cart.items.reduce((n, i) => n + i.quantity, 0));

    const nav = ({ isActive }) =>
        `px-4 py-2 rounded-xl transition
     ${isActive ? 'bg-sky-400/90 text-white' : 'text-slate-700 hover:bg-sky-100/70'}`;

    return (
        <div className="min-h-screen">
            <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/70 shadow-sm">
                <nav className="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex items-center gap-4">
                    <NavLink to="/" className="text-xl font-bold tracking-wide bg-gradient-to-r from-sky-500 via-pink-400 to-violet-500 bg-clip-text text-transparent">
                        mini-ecommerce
                    </NavLink>

                    <div className="ml-auto flex gap-2">
                        <NavLink to="/" className={nav} end>Home</NavLink>
                        <NavLink to="/products" className={nav}>Products</NavLink>
                        <NavLink to="/cart" className={nav}>
                            Cart
                            {count > 0 && (
                                <span className="ml-2 px-2 py-0.5 rounded-full bg-sky-500 text-white text-xs">
                                    {count}
                                </span>
                            )}
                        </NavLink>
                    </div>
                </nav>
            </header>

            <main className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
                <Outlet />
            </main>

            <footer className="max-w-6xl mx-auto px-4 lg:px-6 py-8 text-sm text-slate-500">
                mini-ecommerce © {new Date().getFullYear()}
            </footer>
        </div>
    );
}

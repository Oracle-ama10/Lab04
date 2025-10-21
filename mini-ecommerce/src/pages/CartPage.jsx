// src/pages/CartPage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
    const items = useSelector(s => s.cart.items);
    const dispatch = useDispatch();

    const totalQty = items.reduce((n, i) => n + i.quantity, 0);
    const totalPrice = items.reduce((n, i) => n + i.quantity * i.price, 0);

    if (!items.length) return (
        <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <p className="text-slate-500">ตะกร้าของคุณยังว่างอยู่</p>
            <Link to="/products" className="px-4 py-2 rounded-xl bg-sky-500 text-white">
                เลือกซื้อสินค้า →
            </Link>
        </div>
    );

    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">Cart</h1>
            <ul className="space-y-4">
                {items.map(item => (
                    <li key={item.id} className="flex items-center gap-4 p-4 rounded-2xl border bg-white">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                        <div className="flex-1">
                            <div className="font-medium line-clamp-2">{item.title}</div>
                            <div className="text-slate-500">${item.price.toFixed(2)}</div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                className="w-9 h-9 rounded-lg border">−</button>
                            <input type="number" min="1" value={item.quantity}
                                onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, +e.target.value || 1) }))}
                                className="w-14 text-center rounded-lg border px-2 py-1" />
                            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                className="w-9 h-9 rounded-lg border">+</button>
                        </div>

                        <div className="w-24 text-right font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button onClick={() => dispatch(removeItem(item.id))}
                            className="px-3 py-2 rounded-lg border hover:bg-slate-50">ลบ</button>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-end gap-6 p-4 rounded-2xl border bg-white">
                <div className="text-slate-600">รวม {totalQty} ชิ้น</div>
                <div className="text-xl font-bold">${totalPrice.toFixed(2)}</div>
                <button className="px-5 py-2.5 rounded-2xl bg-emerald-500 text-white">ชำระเงิน</button>
            </div>
        </section>
    );
}

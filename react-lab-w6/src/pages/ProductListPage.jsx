import { Link } from 'react-router-dom';

export function ProductListPage() {
    const products = [
        { id: 1, name: 'Keyboard' },
        { id: 2, name: 'Mouse' },
    ];
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Router: Product List</h2>
            <ul className="list-disc pl-5 space-y-1">
                {products.map((p) => (
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`} className="text-blue-600 underline">
                            {p.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

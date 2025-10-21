import { useLocalStorage } from '../hooks/useLocalStorage';

export function NameSaver() {
    const [name, setName] = useLocalStorage('username', '');

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Topic 1: Custom Hook</h2>
            <input
                className="border p-2 rounded w-full"
                value={name ?? ''}                           // กัน null/undefined
                onChange={(e) => {
                    const v = e.target.value;
                    setName(v === '' ? undefined : v);         // ✅ ว่าง = ลบ key ออกจาก LS
                }}
                placeholder="Enter your name"
            />
            <h3 className="text-xl mt-4">
                Hello, <span className="font-semibold text-blue-600">{(name ?? '') || 'Guest'}</span>!
            </h3>

            {/* ปุ่มลัดสำหรับเคลียร์ (ลบ key) */}
            <button
                className="mt-3 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setName(undefined)}           // ✅ ลบ key
            >
                Clear
            </button>

            <p className="text-gray-500 mt-2">(ลองพิมพ์ชื่อแล้วรีเฟรชหน้าเว็บ)</p>
        </div>
    );
}

// src/components/ParentComponent.jsx
import React, { useState, useCallback, memo } from 'react';

// ✅ ห่อด้วย React.memo
const HeavyCalculationComponent = memo(function HeavyCalculationComponent({ onCalculate }) {
    console.log('HeavyCalculationComponent render');
    return (
        <button
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            onClick={onCalculate}
        >
            Perform Heavy Calculation
        </button>
    );
});

function ParentComponent() {
    console.log('ParentComponent render');
    const [count, setCount] = useState(0);

    // ✅ useCallback ทำให้ reference ของฟังก์ชันคงที่ (ตราบใดที่ deps ไม่เปลี่ยน)
    const performCalculation = useCallback(() => {
        // สมมติคำนวณหนัก ๆ
        console.log('Performing calculation...');
    }, []); // ไม่มีการใช้ state/props ภายใน ⇒ deps ว่างได้

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Topic 5: Performance Optimization</h2>

            <div className="mb-4">
                <p className="text-lg">
                    Unrelated Counter: <span className="font-bold">{count}</span>
                </p>
                <button
                    className="mt-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                    onClick={() => setCount(c => c + 1)}
                >
                    Increment
                </button>
            </div>

            <hr className="my-4" />
            <p className="mb-2">This button's component should not re-render when the counter changes:</p>

            {/* ✅ ด้วย memo + useCallback ด้านบน นี้จะไม่ re-render เมื่อ count เปลี่ยน */}
            <HeavyCalculationComponent onCalculate={performCalculation} />
        </div>
    );
}

export default ParentComponent;

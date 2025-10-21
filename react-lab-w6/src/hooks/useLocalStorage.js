// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw !== null ? JSON.parse(raw) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            if (value !== undefined) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                localStorage.removeItem(key);     // ✅ ลบเมื่อเป็น undefined
            }
        } catch { }
    }, [key, value]);

    return [value, setValue];
}

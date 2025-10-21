// src/contexts/AuthContext.jsx
import { createContext, useState, useContext, useMemo } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // ให้ login รับเป็นออบเจกต์ผู้ใช้ เช่น { name: 'Alice' }
    const login = (u) => setUser(u);
    const logout = () => setUser(null);

    // ใส่ฟังก์ชันลงไปใน value และ memoize เพื่อลด re-render ที่ไม่จำเป็น
    const value = useMemo(() => ({ user, login, logout }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (ctx === null) {
        throw new Error('useAuth must be used within <AuthProvider>');
    }
    return ctx;
}

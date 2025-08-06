import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storageUser = localStorage.getItem("user");
        const storageToken = localStorage.getItem("token")

        if (storageUser && storageToken) {
            setUser(JSON.parse(storageUser));
            setToken(storageToken);
        }

        setLoading(false)
    }, [])


    const login = (userData, jwt) => {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", jwt)
        setUser(userData)
        setToken(jwt)
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, loading, isAuthenticated: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [role, setRole] = useState(localStorage.getItem("role") || "");

    // Update axios headers whenever the token changes
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

            if (response.status === 200) {
                const { token, user } = response.data;
                setUser(user);
                setToken(token);
                setRole(user.role);

                localStorage.setItem("token", token);
                localStorage.setItem("role", user.role);
                
                return user;
            }
        } catch (error) {
            console.error("Login error:", error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || "Login failed");
        }
    };

    const register = async (username, email, password, role) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", { username, email, password, role });

            if (response.status === 201) {
                const { token, user } = response.data;
                setUser(user);
                setToken(token);
                setRole(user.role);

                localStorage.setItem("token", token);
                localStorage.setItem("role", user.role);
            }

            return response.data;
        } catch (error) {
            console.error("Registration error:", error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || "Registration failed");
        }
    };

    const logout = () => {
        setUser(null);
        setToken("");
        setRole("");

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        delete axios.defaults.headers.common["Authorization"];
    };

    return (
        <AuthContext.Provider value={{ user, token, role, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
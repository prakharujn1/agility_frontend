import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import { useAuth } from "../context/AuthContext"; // For managing authentication state

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth(); // Use the login function from AuthContext
    const navigate = useNavigate(); // For navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call the login function from AuthContext
            const user = await login(email, password);

            // Redirect based on the user's role
            if (user.role === "admin") {
                navigate("/admin"); // Redirect to admin dashboard
            } else if (user.role === "business") {
                navigate("/contact"); // Redirect to contact page
            } else if (user.role === "student") {
                navigate("/"); // Redirect to home page
            } else {
                navigate("/"); // Default redirect
            }
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
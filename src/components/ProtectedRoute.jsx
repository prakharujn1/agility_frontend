import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ roles, children }) => {
    const { token, role } = useAuth();

    // console.log("Role from context:", role);
    // console.log("Allowed roles:", roles);
    // console.log("Role from localStorage:", localStorage.getItem("role"));

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Check if the role is allowed
    if (roles && roles.includes(role)) {
        return children; 
    }

    return <Navigate to="/" replace />;
};

export default ProtectedRoute;

import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminEvWo from "./AdminEvWo";
import AdminCourses from "./AdminCourses";
import AdminJobListings from "./AdminJobListings";
import AdminJobApplications from "./AdminJobApplications";
import AdminEnquiries from "./AdminEnquiries";
// import AdminWebinar from "./AdminWebinar";

const AdminHome = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clears auth data
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <div className="flex justify-between items-center px-6 my-6">
        <h1 className="text-3xl font-bold text-center">Admin Page</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <AdminEnquiries/>
      <AdminJobListings/>
      <AdminJobApplications/>
      {/* <AdminWebinar/> */}
      {/* <AdminEvWo />
      <AdminCourses /> */}
    </>
  );
};

export default AdminHome;

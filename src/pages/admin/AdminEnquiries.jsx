import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import React from "react";
import { useAuth } from "../../context/AuthContext";

Modal.setAppElement("#root");

const AdminEnquiries = () => {
    const [enquiry, setEnquiry] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const { token } = useAuth();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const enquiryRes = await axios.get("http://localhost:5000/api/enquiry",{
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the header
                    },
                }
            );
            setEnquiry(enquiryRes.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:5000/api/enquiry/${_id}`);
            fetchData(); // Refresh the data after deletion
        } catch (error) {
            console.error("Error deleting:", error);
        } 
    };

    const handleRead = (item) => {
        setSelectedEnquiry(item);
        setModalIsOpen(true);
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-xl font-bold text-center mb-6">Business Enquiries</h1>
            <div className="grid grid-cols-1 gap-6">
                <TableComponent title="Business Enquiries" data={enquiry} handleDelete={handleDelete} handleRead={handleRead} />
            </div>

            {/* Modal for reading enquiry details */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="bg-gray-800 p-6 rounded shadow-md w-1/2 mx-auto mt-20 text-white"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                {selectedEnquiry && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Enquiry Details</h2>
                        <p><strong>Id:</strong> {selectedEnquiry._id}</p>
                        <p><strong>Name:</strong> {selectedEnquiry.name}</p>
                        <p><strong>Email:</strong> {selectedEnquiry.email}</p>
                        <p><strong>Company:</strong> {selectedEnquiry.company}</p>
                        <p><strong>Description:</strong> {selectedEnquiry.description}</p>
                        <button 
                            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mt-4 rounded"
                            onClick={() => setModalIsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

const TableComponent = ({ title, data, handleDelete, handleRead }) => {
    return (
        <div className="bg-gray-800 p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <table className="w-full border-collapse border text-white">
                <thead>
                    <tr className="bg-gray-700">
                        {/* <th className="border p-2">Id</th> */}
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email ID</th>
                        <th className="border p-2">Company</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id} className="text-center border-b border-gray-700">
                            {/* <td className="border p-2">{item._id}</td> */}
                            <td className="border p-2">{item.name}</td>
                            <td className="border p-2">{item.email}</td>
                            <td className="border p-2">{item.company}</td>
                            <td className="border p-2">{item.description}</td>
                            <td className="border p-2">
                                <button 
                                    className="bg-green-500 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                                    onClick={() => handleRead(item)}
                                >
                                    Read
                                </button>
                                <button 
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminEnquiries;

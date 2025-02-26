import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

const AdminJobApplications = () => {
    const [jobapplications, setjobapplications] = useState([]);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false); // State for confirmation modal
    const [candidateToDelete, setCandidateToDelete] = useState(null); // State to store the candidate ID to delete

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const jobapplicationsRes = await axios.get("http://localhost:5000/api/jobapplications");
            setjobapplications(jobapplicationsRes.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    
    const handleDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:5000/api/jobapplications/${_id}`);
            fetchData(); // Refresh the data after deletion
        } catch (error) {
            console.error("Error deleting:", error);
        } finally {
            setIsConfirmationModalOpen(false); // Close the confirmation modal
        }
    };

    // Function to open the confirmation modal
    const openConfirmationModal = (_id) => {
        setCandidateToDelete(_id); // Store the candidate ID to delete
        setIsConfirmationModalOpen(true); // Open the confirmation modal
    };

    // Function to handle the confirmation
    const handleConfirmation = (confirmed) => {
        if (confirmed) {
            handleDelete(candidateToDelete, "jobapplications"); // Call handleDelete if confirmed
        } else {
            setIsConfirmationModalOpen(false); // Close the modal if not confirmed
        }
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-xl font-bold text-center mb-6">Job Applications</h1>

            <div className="grid grid-cols-1 gap-6">
                <TableComponent
                    title="Job Applications"
                    data={jobapplications}
                    openConfirmationModal={openConfirmationModal} // Pass the openConfirmationModal function
                />
            </div>

            {/* Confirmation Modal */}
            <Modal
                isOpen={isConfirmationModalOpen}
                onRequestClose={() => setIsConfirmationModalOpen(false)}
                className="bg-gray-800 text-white p-6 rounded shadow-md max-w-lg mx-auto mt-20"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                <h2 className="text-xl font-semibold mb-4">Are you sure you want to reject this candidate?</h2>
                <div className="flex gap-4">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleConfirmation(true)} // Confirm deletion
                    >
                        Yes
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => handleConfirmation(false)} // Cancel deletion
                    >
                        No
                    </button>
                </div>
            </Modal>
        </div>
    );
};

const TableComponent = ({ title, data, openConfirmationModal }) => {
    // Group data by jobtitle
    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.jobtitle]) {
            acc[item.jobtitle] = [];
        }
        acc[item.jobtitle].push(item);
        return acc;
    }, {});

    return (
        <div className="bg-gray-800 p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <table className="w-full border-collapse border text-white">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="border p-2">Job title</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email ID</th>
                        <th className="border p-2">LinkedIn URL</th>
                        <th className="border p-2">Phone No.</th>
                        <th className="border p-2">Resume</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(groupedData).map(([jobtitle, entries]) => (
                        <React.Fragment key={jobtitle}>
                            {entries.map((item, index) => (
                                <tr key={item._id} className="border bg-gray-900">
                                    {index === 0 && (
                                        <td className="p-2 border" rowSpan={entries.length}>
                                            {item.jobtitle}
                                        </td>
                                    )}
                                    <td className="p-2 border">{item.name}</td>
                                    <td className="p-2 border">{item.email}</td>
                                    <td className="p-2 border">
                                        <a
                                            href={item.linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            LinkedIn Profile
                                        </a>
                                    </td>
                                    <td className="p-2 border">{item.phone}</td>
                                    <td className="p-2 border">
                                        <a
                                            href={item.resume}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            View Resume
                                        </a>
                                    </td>
                                    <td className="p-2 border flex gap-2">
                                        <button
                                            className="bg-red-500 px-2 py-1 rounded"
                                            onClick={() => openConfirmationModal(item._id)} // Open confirmation modal
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminJobApplications;
import { useEffect, useState } from "react"; 
import axios from "axios"; 
import Modal from "react-modal";

Modal.setAppElement("#root");

const AdminJobListings = () => {
    const [jobListings, setjobListings] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [formData, setFormData] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [createType, setCreateType] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const jobListingsRes = await axios.get("http://localhost:5000/api/joblistings");
            setjobListings(jobListingsRes.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleRead = (data) => {
        setModalData(data);
        setIsEdit(false);
    };

    const handleEdit = (data) => {
        setModalData(data);
        setFormData(data);
        setIsEdit(true);
    };

    const handleDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:5000/api/joblistings/${_id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.put(`http://localhost:5000/api/joblistings/${modalData._id}`, formData);
            setModalData(null);
            fetchData();
        } catch (error) {
            console.error("Error updating:", error);
        }
    };

    const handleCreate = async () => {
        try {
            await axios.post(`http://localhost:5000/api/joblistings`, formData);
            setIsCreate(false);
            fetchData();
        } catch (error) {
            console.error("Error creating:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-xl font-bold text-center mb-6">Job Listings</h1>

            <div className="flex justify-end gap-4 mb-4">
                <button 
                    onClick={() => { 
                        setCreateType("jobListings"); 
                        setIsCreate(true); 
                        setFormData({ location: "", title: "", description: "", skills: "" }); 
                    }} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Job
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <TableComponent title="Job Listing" data={jobListings} handleRead={handleRead} handleEdit={handleEdit} handleDelete={handleDelete} />
            </div>

            {/* Modal for Read/Edit/Create */}
            {modalData && (
                <Modal isOpen onRequestClose={() => setModalData(null)} className="bg-gray-800 text-white p-6 rounded shadow-md max-w-2xl w-full mx-auto mt-20 max-h-[80vh] overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-4">{isEdit ? "Edit" : "View"} {modalData.title}</h2>
                    {isEdit ? (
                        <div>
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" />
                            <textarea className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description"></textarea>
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Location" />
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(",") })} placeholder="Skills(comma-separated)" />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <p><strong>Job Title : </strong> {modalData.title}</p>
                            <p><strong>Description : </strong> {modalData.description}</p>
                            <p><strong>Location : </strong> {modalData.location}</p>
                            <p><strong>Skills:</strong> {modalData.skills.join(", ")}</p>
                        </div>
                    )}
                    <button className="mt-4 text-red-500" onClick={() => setModalData(null)}>Close</button>
                </Modal>
            )}

            {/* Modal for Create Course */}
            {isCreate && (
                <Modal isOpen onRequestClose={() => setIsCreate(false)} className="bg-gray-800 text-white p-6 rounded shadow-md max-w-lg mx-auto mt-20">
                    <h2 className="text-xl font-semibold mb-4">Create New Job</h2>
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Job Title" />
                    <textarea className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Job Description"></textarea>
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Location" />
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(",") })} placeholder="Skills (comma-separated)" />
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleCreate}>Create</button>
                    <button className="mt-4 text-red-500" onClick={() => setIsCreate(false)}>Cancel</button>
                </Modal>
            )}
        </div>
    );
};

const TableComponent = ({ title, data, handleRead, handleEdit, handleDelete }) => (
    <div className="bg-gray-800 p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <table className="w-full border-collapse border text-white">
            <thead>
                <tr className="bg-gray-700">
                    { /* <th className="border p-2">ID</th> */}
                    <th className="border p-2">Job Title</th>
                    <th className="border p-2">Location</th>
                    <th className="border p-2">Job Description</th>
                    <th className="border p-2">Skiils</th>
                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item._id} className="border bg-gray-900">
                        {/* <td className="p-2 border">{item._id}</td> */}
                        <td className="p-2 border">{item.title}</td>
                        <td className="p-2 border">{item.location}</td>
                        <td className="p-2 border">{item.description}</td>
                        <td className="p-2 border">{item.skills.join(", ")}</td>
                        <td className="p-2 border flex gap-2">
                            <button className="bg-green-500 px-2 py-1 rounded" onClick={() => handleRead(item)}>Read</button>
                            <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => handleEdit(item)}>Edit</button>
                            <button className="bg-red-500 px-2 py-1 rounded" onClick={() => handleDelete(item._id, "jobListings")}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default AdminJobListings;

import { useEffect, useState } from "react"; 
import axios from "axios"; 
import Modal from "react-modal";

Modal.setAppElement("#root");

const AdminCourses = () => {
    const [courses, setCourses] = useState([]);
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
            const coursesRes = await axios.get("http://localhost:5000/courses");
            setCourses(coursesRes.data);
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

    const handleDelete = async (id, type) => {
        try {
            await axios.delete(`http://localhost:5000/${type}/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.put(`http://localhost:5000/${createType}/${modalData.id}`, formData);
            setModalData(null);
            fetchData();
        } catch (error) {
            console.error("Error updating:", error);
        }
    };

    const handleCreate = async () => {
        try {
            await axios.post(`http://localhost:5000/${createType}`, formData);
            setIsCreate(false);
            fetchData();
        } catch (error) {
            console.error("Error creating:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-xl font-bold text-center mb-6">Courses</h1>

            <div className="flex justify-end gap-4 mb-4">
                <button 
                    onClick={() => { 
                        setCreateType("courses"); 
                        setIsCreate(true); 
                        setFormData({ icon: "", title: "", description: "", price: "" }); 
                    }} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Course
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <TableComponent title="Courses" data={courses} handleRead={handleRead} handleEdit={handleEdit} handleDelete={handleDelete} />
            </div>

            {/* Modal for Read/Edit/Create */}
            {modalData && (
                <Modal isOpen onRequestClose={() => setModalData(null)} className="bg-gray-800 text-white p-6 rounded shadow-md max-w-lg mx-auto mt-20">
                    <h2 className="text-xl font-semibold mb-4">{isEdit ? "Edit" : "View"} {modalData.title}</h2>
                    {isEdit ? (
                        <div>
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" />
                            <textarea className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description"></textarea>
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="Icon" />
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="Price" />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <p><strong>Title : </strong> {modalData.title}</p>
                            <p><strong>Description : </strong> {modalData.description}</p>
                            <p><strong>Price : </strong> {modalData.price}</p>
                            <p><strong>Icon :</strong> {modalData.icon}</p>
                        </div>
                    )}
                    <button className="mt-4 text-red-500" onClick={() => setModalData(null)}>Close</button>
                </Modal>
            )}

            {/* Modal for Create Course */}
            {isCreate && (
                <Modal isOpen onRequestClose={() => setIsCreate(false)} className="bg-gray-800 text-white p-6 rounded shadow-md max-w-lg mx-auto mt-20">
                    <h2 className="text-xl font-semibold mb-4">Create New Course</h2>
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" />
                    <textarea className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description"></textarea>
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="Icon" />
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="Price" />
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
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Price</th>
                    <th className="border p-2">Icon</th>
                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="border bg-gray-900">
                        <td className="p-2 border">{item.id}</td>
                        <td className="p-2 border">{item.title}</td>
                        <td className="p-2 border">{item.description}</td>
                        <td className="p-2 border">{item.price}</td>
                        <td className="p-2 border">{item.icon}</td>
                        <td className="p-2 border flex gap-2">
                            <button className="bg-green-500 px-2 py-1 rounded" onClick={() => handleRead(item)}>Read</button>
                            <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => handleEdit(item)}>Edit</button>
                            <button className="bg-red-500 px-2 py-1 rounded" onClick={() => handleDelete(item.id, "courses")}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default AdminCourses;

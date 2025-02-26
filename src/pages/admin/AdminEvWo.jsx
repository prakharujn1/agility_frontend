import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AdminEvWo = () => {
    const [events, setEvents] = useState([]);
    const [webinars, setWebinars] = useState([]);
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
            const eventsRes = await axios.get("http://localhost:5000/events");
            const webinarsRes = await axios.get("http://localhost:5000/webinars");
            setEvents(eventsRes.data);
            setWebinars(webinarsRes.data);
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
            await axios.put(`http://localhost:5000/${modalData.type}/${modalData.id}`, formData);
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
            <h1 className="text-xl font-bold text-center mb-6">Events and Webinars</h1>

            <div className="flex justify-end gap-4 mb-4">
                <button onClick={() => { setCreateType("events"); setIsCreate(true); setFormData({ title: "", description: "", image: "", tags: "" }); }} className="bg-blue-500 text-white px-4 py-2 rounded">Add Event</button>
                <button onClick={() => { setCreateType("webinars"); setIsCreate(true); setFormData({ title: "", description: "", image: "", tags: "" }); }} className="bg-blue-500 text-white px-4 py-2 rounded">Add Webinar</button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <TableComponent title="Events" data={events} handleRead={handleRead} handleEdit={handleEdit} handleDelete={handleDelete} />
                <TableComponent title="Webinars" data={webinars} handleRead={handleRead} handleEdit={handleEdit} handleDelete={handleDelete} />
            </div>

            {modalData && (
                <Modal isOpen onRequestClose={() => setModalData(null)} className="bg-gray-800 text-white p-6 rounded shadow-md max-w-lg mx-auto mt-20">
                    <h2 className="text-xl font-semibold mb-4">{isEdit ? "Edit" : "Read"} {modalData.title}</h2>
                    {isEdit ? (
                        <div>
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" />
                            <textarea className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description"></textarea>
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="Image URL" />
                            <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.tags} onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",") })} placeholder="Tags (comma-separated)" />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <p><strong>Title:</strong> {modalData.title}</p>
                            <p><strong>Description:</strong> {modalData.description}</p>
                            <p><strong>Image:</strong></p>
                            <img src={modalData.image} alt={modalData.title} className="w-32 h-32 rounded my-2" />
                            <p><strong>Tags:</strong> {modalData.tags.join(", ")}</p>
                        </div>
                    )}
                    <button className="mt-4 text-red-500" onClick={() => setModalData(null)}>Close</button>
                </Modal>
            )}

            {isCreate && (
                <Modal isOpen onRequestClose={() => setIsCreate(false)} className="bg-gray-800 text-white p-6 rounded shadow-md max-w-lg mx-auto mt-20">
                    <h2 className="text-xl font-semibold mb-4">Create New {createType.charAt(0).toUpperCase() + createType.slice(1)}</h2>
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" />
                    <textarea className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description"></textarea>
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="Image URL" />
                    <input type="text" className="w-full p-2 border bg-gray-700 text-white mb-2" value={formData.tags} onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",") })} placeholder="Tags (comma-separated)" />
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
                    <th className="border p-2">Image</th>
                    <th className="border p-2">Tags</th>
                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="border bg-gray-900">
                        <td className="p-2 border">{item.id}</td>
                        <td className="p-2 border">{item.title}</td>
                        <td className="p-2 border">{item.description}</td>
                        <td className="p-2 border"><img src={item.image} alt={item.title} className="w-16 h-16 rounded" /></td>
                        <td className="p-2 border">{item.tags.join(", ")}</td>
                        <td className="p-2 border flex gap-2">
                            <button className="bg-green-500 px-2 py-1 rounded" onClick={() => handleRead({ ...item, type: title.toLowerCase() })}>Read</button>
                            <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => handleEdit({ ...item, type: title.toLowerCase() })}>Edit</button>
                            <button className="bg-red-500 px-2 py-1 rounded" onClick={() => handleDelete(item.id, title.toLowerCase())}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default AdminEvWo;

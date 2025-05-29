import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDoctor, getallDoctor, deleteDoctor } from '../../features/doctorSlice';
import { useNavigate } from 'react-router-dom';
import Table from './table/table';
import { FiTrash2 } from 'react-icons/fi';

const Dashboard = () => {
  const { doctors } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [doctorForm, setDoctorForm] = useState({
    name: '',
    specialization: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setDoctorForm({ ...doctorForm, [e.target.name]: e.target.value });
  };

  const handleAddDoctor = () => {
    if (!doctorForm.name || !doctorForm.specialization || !doctorForm.phone) return alert('All fields are required');
    dispatch(createDoctor(doctorForm));
    setDoctorForm({ name: '', specialization: '', phone: '' });
    setShowModal(false);
  };

  const handleDeleteDoctor = (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      dispatch(deleteDoctor(id));
    }
  };

  useEffect(() => {
    dispatch(getallDoctor());
  }, [dispatch]);

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'specialization', header: 'Specialization' },
    { accessorKey: 'phone', header: 'Phone' },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <button
          onClick={() => handleDeleteDoctor(row.original._id)}
          className="text-red-600 hover:text-red-800 transition duration-200"
        >
          <FiTrash2 size={20} />
        </button>
      )
    }
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Doctor Management Dashboard</h2>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-gray-700">Doctor List</h1>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition duration-300"
            >
              + Add Doctor
            </button>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <Table data={doctors} columns={columns} />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Doctor</h2>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={doctorForm.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={doctorForm.specialization}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={doctorForm.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDoctor}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

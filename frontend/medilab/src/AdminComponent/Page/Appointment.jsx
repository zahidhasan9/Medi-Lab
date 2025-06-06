import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallAppointment, updateAppointment, deleteAppointment } from '../../features/appointmentSlice';
import { FiTrash2, FiEye } from 'react-icons/fi';
import Table from './table/table';

const Dashboard = () => {
  const { appointments } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState('');
  const [serial, setSerial] = useState('');

  const status = {
    status: statusUpdate,
    serial: serial
  };

  useEffect(() => {
    dispatch(getallAppointment());
  }, [dispatch]);

  const handleStatusChange = () => {
    if (!statusUpdate) return;
    dispatch(updateAppointment({ id: selectedAppointment._id, updatedData: status }));
    setSelectedAppointment(null);
  };

  const handleDeleteAppointment = (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      dispatch(deleteAppointment(id));
    }
  };

  const columns = [
    { accessorKey: 'patientName', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'status', header: 'status' },
    { accessorKey: 'date', header: 'Date' },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex gap-3">
          <button onClick={() => setSelectedAppointment(row.original)} className="text-blue-600 hover:text-blue-800">
            <FiEye size={20} />
          </button>
          <button onClick={() => handleDeleteAppointment(row.original._id)} className="text-red-600 hover:text-red-800">
            <FiTrash2 size={20} />
          </button>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Appointment Management Dashboard</h2>
          <div className="bg-white p-5 rounded-lg shadow">
            <Table data={appointments} columns={columns} />
          </div>
        </div>
      </div>

      {/* View Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Appointment Details</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Name:</strong> {selectedAppointment.patientName}
              </p>
              <p>
                <strong>Email:</strong> {selectedAppointment.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedAppointment.phone}
              </p>
              <p>
                <strong>Date:</strong> {new Date(selectedAppointment.date).toLocaleString()}
              </p>
              <p>
                <strong>Department:</strong> {selectedAppointment.department}
              </p>
              <p>
                <strong>Doctor:</strong> {selectedAppointment.doctorName}
              </p>
              <p>
                <strong>Message:</strong> {selectedAppointment.message}
              </p>

              <div className="flex gap-x-2">
                <label className="font-semibold block mb-1">Paitent serial no:</label>
                <input
                  className=" max-w-sm px-4  border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  type="text"
                  name="serial"
                  value={selectedAppointment.serial}
                  onChange={(e) => setSerial(e.target.value)}
                  placeholder="Set serial"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Status</label>
                <select
                  className="w-full border px-3 py-2 rounded"
                  value={statusUpdate}
                  onChange={(e) => setStatusUpdate(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedAppointment(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={handleStatusChange}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

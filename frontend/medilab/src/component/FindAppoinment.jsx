import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallAppointment, updateAppointment, deleteAppointment } from '../features/appointmentSlice';
import { FiTrash2, FiEye } from 'react-icons/fi';
import Table from '../AdminComponent/Page/table/table';
import { data } from 'react-router-dom';

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
    { accessorKey: 'doctorName', header: 'Doctor' },
    { accessorKey: 'serial', header: 'Serial' },
    { accessorKey: 'status', header: 'status' },
    { accessorKey: 'date', header: 'Date' },
    {
      accessorKey: 'action',
      header: 'Viwe',
      cell: ({ row }) => (
        <div className="flex gap-3">
          <button onClick={() => setSelectedAppointment(row.original)} className="text-blue-600 hover:text-blue-800">
            <FiEye size={20} />
          </button>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Peitent Appointment Dashboard</h2>
          <p className="py-2 text-gray-600">Here has only available approved appointment Peitent</p>
          <div className="bg-white p-5 rounded-lg shadow">
            <Table data={appointments.filter((data) => data.status === 'approved')} columns={columns} />
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
              <p>
                <strong>Serial:</strong> {selectedAppointment.serial}
              </p>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedAppointment(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

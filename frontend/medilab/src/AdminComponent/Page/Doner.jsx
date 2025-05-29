import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallDonor, updateDonor, deleteDonor } from '../../features/donorSlice';
import { FiTrash2, FiEye } from 'react-icons/fi';
import Table from './table/table';

const Dashboard = () => {
  const { donors } = useSelector((state) => state.donor);
  const dispatch = useDispatch();

  const [selectedDonors, setSelectedDonors] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState('');
  console.log('s', statusUpdate);
  const status = {
    status: statusUpdate
  };

  useEffect(() => {
    dispatch(getallDonor());
  }, [dispatch]);

  const handleStatusChange = () => {
    if (!statusUpdate) return;
    dispatch(updateDonor({ id: selectedDonors._id, updatedData: status }));
    setSelectedDonors(null);
  };

  const handleDeleteDonor = (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      dispatch(deleteDonor(id));
    }
  };

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'phone', header: 'phone' },
    { accessorKey: 'status', header: 'status' },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex gap-3">
          <button onClick={() => setSelectedDonors(row.original)} className="text-blue-600 hover:text-blue-800">
            <FiEye size={20} />
          </button>
          <button onClick={() => handleDeleteDonor(row.original._id)} className="text-red-600 hover:text-red-800">
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Donor Management Dashboard</h2>
          <div className="bg-white p-5 rounded-lg shadow">
            <Table data={donors} columns={columns} />
          </div>
        </div>
      </div>

      {/* View Modal */}
      {selectedDonors && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Donor Details</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Name:</strong> {selectedDonors.name}
              </p>
              <p>
                <strong>Age:</strong> {selectedDonors.age}
              </p>
              <p>
                <strong>Phone:</strong> {selectedDonors.phone}
              </p>

              <p>
                <strong>Blood Group:</strong> {selectedDonors.bloodGroup}
              </p>
              <p>
                <strong>Address:</strong> {selectedDonors.address}
              </p>
              <p>
                <strong>Living Donor? :</strong> {selectedDonors.donation_type}
              </p>
              <p>
                <strong>Health Issues:</strong> {selectedDonors.health_issues}
              </p>
              <div>
                <label className="font-semibold block mb-1">Status</label>
                <select
                  className="w-full border px-3 py-2 rounded"
                  value={statusUpdate}
                  onChange={(e) => setStatusUpdate(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="verified">Verified</option>
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

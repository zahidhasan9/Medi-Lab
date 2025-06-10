import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallDonor, updateDonor, deleteDonor } from '../features/donorSlice';
import { FiTrash2, FiEye } from 'react-icons/fi';
import Table from '../AdminComponent/Page/table/table';
import ReviewForm from './reviewForm';
const Dashboard = () => {
  const { donors } = useSelector((state) => state.donor);
  const dispatch = useDispatch();

  const token = window.localStorage.getItem('token');
  console.log('token', token);

  const [selectedDonors, setSelectedDonors] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState('');
  console.log('s', statusUpdate);
  const status = {
    status: statusUpdate
  };

  useEffect(() => {
    dispatch(getallDonor());
  }, [dispatch]);

  // const columns = [
  //   { accessorKey: 'name', header: 'Name' },
  //   { accessorKey: 'phone', header: 'phone' },
  //   { accessorKey: 'status', header: 'status' },
  //   { accessorKey: 'bloodGroup', header: 'Blood Group' },
  //   {
  //     accessorKey: 'action',
  //     header: 'View details',
  //     cell: ({ row }) => (
  //       <div className="flex gap-3">
  //         <button onClick={() => setSelectedDonors(row.original)} className="text-blue-600 hover:text-blue-800">
  //           <FiEye size={20} />
  //         </button>
  //       </div>
  //     )
  //   }
  // ];

  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'bloodGroup', header: 'Blood Group' }
  ];

  // Push phone column if token exists
  if (token) {
    columns.splice(1, 0, {
      accessorKey: 'phone',
      header: 'Phone'
    });

    columns.push({
      accessorKey: 'action',
      header: 'View details',
      cell: ({ row }) => (
        <div className="flex gap-3">
          <button onClick={() => setSelectedDonors(row.original)} className="text-blue-600 hover:text-blue-800">
            <FiEye size={20} />
          </button>
        </div>
      )
    });
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800"> Find your Donor</h2>
          <div className="bg-white p-5 rounded-lg shadow">
            <Table data={donors.filter((donor) => donor.status === 'verified')} columns={columns} />
            {token ? <ReviewForm /> : ''}
          </div>
        </div>
        {token ? (
          ''
        ) : (
          <h1 className="m-8 font-semibold text-red-500 font-sans">
            Please{' '}
            <a href="/login" className="text-blue-500">
              Login
            </a>{' '}
            to see full doner information
          </h1>
        )}
      </div>

      {/* View Modal */}
      {selectedDonors && (
        <div
          onClick={() => setSelectedDonors(null)}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        >
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-md p-6 rounded shadow-lg">
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
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedDonors(null)}
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

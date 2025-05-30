import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDonor } from '../features/donorSlice';

const DonorForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.donor);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    bloodGroup: '',
    nid: '',
    donation_type: '',
    health_issues: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDonor(formData));
    setFormData({
      name: '',
      age: '',
      address: '',
      phone: '',
      nid: '',
      bloodGroup: '',
      donation_type: '',
      health_issues: ''
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#ffffff] py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 transition-all duration-300">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-blue-700">Become a Donor</h2>
          <p className="mt-2 text-gray-600 text-lg">
            Join our life-saving mission by registering as a kidney donor today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">NID Card Number</label>
              <input
                type="text"
                name="nid"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.nid}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="number"
                name="phone"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Group</label>
              <select
                name="bloodGroup"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Living Donor?</label>
              <select
                name="donation_type"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.donation_type}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Health Concerns</label>
              <textarea
                name="health_issues"
                rows={4}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.health_issues}
                onChange={handleChange}
              />
            </div>
          </div>

          {success && <div className="text-green-600 font-semibold text-center">✅ Donor registered successfully!</div>}
          {error && (
            <div className="text-red-600 font-semibold text-center">
              ❌ {error.message || 'Something went wrong. Please try again.'}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 mt-6 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200"
          >
            {loading ? 'Submitting...' : 'Register as Donor'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonorForm;

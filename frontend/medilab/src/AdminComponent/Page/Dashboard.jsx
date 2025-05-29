import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Dashboard = () => {
  const admin = JSON.parse(localStorage.getItem('admin')) || {
    name: 'Admin Name',
    email: 'admin@example.com'
  };

  const stats = {
    totalDonors: 120,
    verifiedDonors: 87,
    doctors: 10,
    appointments: 35,
    approvedAppointments: 22
  };

  const chartData = [
    { label: 'Donors', total: stats.totalDonors, verified: stats.verifiedDonors },
    { label: 'Appointments', total: stats.appointments, verified: stats.approvedAppointments },
    { label: 'Doctors', total: stats.doctors, verified: stats.doctors }
  ];

  return (
    <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, <span className="font-medium">{admin.name}</span>!
        </p>
        <p className="text-sm text-gray-500">Email: {admin.email}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Donors" value={stats.totalDonors} color="blue" />
        <StatCard title="Verified Donors" value={stats.verifiedDonors} color="green" />
        <StatCard title="Doctors" value={stats.doctors} color="purple" />
        <StatCard title="Appointments" value={stats.appointments} color="yellow" />
        <StatCard title="Approved Appointments" value={stats.approvedAppointments} color="teal" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Overview Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#60A5FA" name="Total" />
            <Bar dataKey="verified" fill="#34D399" name="Verified/Approved" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

const StatCard = ({ title, value, color }) => {
  const borderColor = {
    blue: 'border-blue-500 text-blue-700',
    green: 'border-green-500 text-green-700',
    purple: 'border-purple-500 text-purple-700',
    yellow: 'border-yellow-500 text-yellow-700',
    teal: 'border-teal-500 text-teal-700'
  };

  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 border-t-4 ${borderColor[color]}`}>
      <h2 className="text-gray-600 text-sm mb-2">{title}</h2>
      <p className={`text-2xl font-bold ${borderColor[color].split(' ')[1]}`}>{value}</p>
    </div>
  );
};

export default Dashboard;

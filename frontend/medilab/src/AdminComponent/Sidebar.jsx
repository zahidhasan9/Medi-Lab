import { FaHome, FaUserMd, FaUsers, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate(); // ✅ Initialize navigate
  const { admin } = useSelector((state) => state.user);
  console.log(admin);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin'); // optional: if you store user info
    navigate('/'); // ✅ Redirect to login page
  };

  const menuItems = [
    { key: 'home', label: 'Home', icon: <FaHome /> },
    { key: 'donor', label: 'Donor List', icon: <FaUsers /> },
    { key: 'doctor', label: 'Doctor List', icon: <FaUserMd /> },
    { key: 'appointment', label: 'Appointment List', icon: <FaCalendarAlt /> },
    { key: 'settings', label: 'Settings', icon: <FaCog /> }
  ];

  return (
    <div className="w-72 h-screen bg-gray-950 text-white flex flex-col justify-between shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">Admin Panel</h1>
        <p className="text-sm text-gray-400">
          Welcome, <span className="text-white font-medium">{admin.name}</span>
        </p>
      </div>

      {/* Menu Items */}
      <div className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-md text-base transition-all duration-200 
                ${
                  activeTab === item.key
                    ? 'bg-yellow-400 text-black font-semibold shadow-inner'
                    : 'hover:bg-gray-800 hover:text-yellow-300'
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-800">
        <button
          onClick={handleLogout} // ✅ Updated here
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold transition-all"
        >
          <FaSignOutAlt className="text-lg" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

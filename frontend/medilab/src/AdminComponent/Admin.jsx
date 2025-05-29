import { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Page/Dashboard';
import Users from './Page/Users';
import Appointment from './Page/Appointment';
import Doctor from './Page/Doctor';
import Donar from './Page/Doner';
import Settings from './Page/Setting';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderComponent = () => {
    switch (activeTab) {
      case 'doner':
        return <Users />;
      case 'settings':
        return <Settings />;
      case 'donor':
        return <Donar />;
      case 'appointment':
        return <Appointment />;
      case 'doctor':
        return <Doctor />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex ">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 bg-gray-100 min-h-screen">{renderComponent()}</main>
    </div>
  );
};

export default Admin;

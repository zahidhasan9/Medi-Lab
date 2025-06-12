import { useState } from 'react';
import toast from 'react-hot-toast';
const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Find Appointment ', href: '/myappointment' },
  // { name: 'Services', href: '#services' },
  // {
  //   name: 'Departments',
  //   dropdown: true,
  //   items: [
  //     { name: 'Nephrology', href: '#departments-tab-1' },
  //     { name: 'Dialysis', href: '#departments-tab-2' },
  //     { name: 'Kidney Transplantation', href: '#departments-tab-3' },
  //     { name: 'Kidney Disease Diagnosis', href: '#departments-tab-4' },
  //     { name: 'Emergency Care', href: '#departments-tab-5' }
  //   ]
  // },
  { name: 'Find Donor', href: '/donorlist' },
  { name: 'Doctors', href: '/doctors' },
  {
    name: 'Learn Kidney',
    dropdown: true,
    items: [
      { name: 'Learn Kidney', href: '/learn' },
      { name: 'Health of Kidney', href: '/kidney' }
    ]
  },
  { name: 'Contact', href: '/hospital' }
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };
  const token = window.localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin'); // optional: if you store user info
    setTimeout(() => (window.location.href = '/'), 1000);
    toast.success('Update Appointments Successful');
  };

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <div className={click ? 'starter-page-page mobile-nav-active' : 'starter-page-page'}>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:afiaanjum52@gmail.com">afiaanjum52@gmail.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+8001729372327</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center me-auto">
              <h1 className="sitename">Renal Health Portal</h1>
            </a>

            {/* ✅ Navigation Menu */}
            <nav id="navmenu" className="navmenu">
              <ul>
                {menuItems.map((item, index) =>
                  item.dropdown ? (
                    <li key={index} className="dropdown active ">
                      <a href="#" className="active">
                        <span>{item.name}</span> <i className="bi bi-chevron-down toggle-dropdown  " />
                      </a>
                      <ul>
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.href}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={index}>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  )
                )}
              </ul>
              <i
                onClick={handleClick}
                className={!click ? 'mobile-nav-toggle d-xl-none bi bi-list' : 'mobile-nav-toggle d-xl-none bi bi-x'}
              />
            </nav>

            <a className="cta-btn d-none d-sm-block" href="/donor">
              Be a Donor
            </a>
            <a className="cta-btn d-none d-sm-block" href="/appointment">
              Appointment
            </a>
            {token ? (
              <a onClick={handleLogout} className="cta-btn d-none d-sm-block cursor-pointer bg-red-500 ">
                Log Out
              </a>
            ) : (
              <a className="cta-btn d-none d-sm-block" href="/login">
                login
              </a>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

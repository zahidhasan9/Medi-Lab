import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './test';

// main pages
import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Service from './component/service';
import Appointment from './component/appoinment';
import Helth from './component/helth';
import Doner from './component/doner';
import Doctor from './component/doctor';
import Faq from './component/faq';
import Testimonial from './component/testimonial';
import Gallary from './component/gallary';
import Contact from './contact';
import LearnKidney from './component/learnkidney';
import HealthOfKidney from './component/healthKidney';
import DoctorList from './component/doctorList';
import DonorList from './component/DonerList';
import Diet from './DietPlan/Diet';

// PrivateRoute
import PrivateRoute from './HOC/PrivateRoute';

// Admin
import Admin from './AdminComponent/Admin';
import LoginForm from './component/login';
import RegisterForm from './component/register';

import Footer from './component/footer';

import './App.css';
// toster
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Service />
              <Helth />
              <Doner />
              <Doctor />
              <Faq />
              <Testimonial />
              <Gallary />
              <Contact />
            </>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/donor" element={<Doner />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/donorlist" element={<DonorList />} />
        <Route path="/learn" element={<LearnKidney />} />
        <Route path="/kidney" element={<HealthOfKidney />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Test />
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </>
  );
}

export default App;

import { useState } from 'react';
import Test from './test';

import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Service from './component/service';
import Appointment from './component/appoinment';
import Helth from './component/helth';
import Doner from './component/doner';
import Doctor from './component/doctor';
import Faq from './component/faq';
import Footer from './component/footer';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Appointment />
      <Helth />
      <Doner />
      <Doctor />
      <Faq />
      <Test />
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../features/appointmentSlice';
import { getallDoctor } from '../features/doctorSlice';

const Appointment = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctor);

  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctorName: '',
    message: ''
  });

  useEffect(() => {
    dispatch(getallDoctor());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAppointment(formData));
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      doctorName: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Section Title */}
      <section className="text-center py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Make an Appointment</h2>
          <p className="text-gray-600">
            Schedule your appointment with our experienced doctors. We’re here to provide the best healthcare.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Appointment Date </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          {/* <div>
            <label className="block text-gray-700 font-semibold mb-2">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div> */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Doctor</label>
            <select
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            >
              <option value="">Select Doctor</option>
              {doctors?.map((doc) => (
                <option key={doc._id} value={doc.name}>
                  {doc.name}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Write a message..."
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Book Appointment
            </button>
          </div>
        </form>
      </section>

      {/* Additional Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Our Hospital?</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded shadow">
              <h4 className="font-bold mb-2">Expert Doctors</h4>
              <p>Our team consists of experienced professionals across all departments.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow">
              <h4 className="font-bold mb-2">Modern Equipment</h4>
              <p>Equipped with latest medical technologies for precise diagnosis and treatment.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow">
              <h4 className="font-bold mb-2">24/7 Support</h4>
              <p>Round-the-clock service to take care of any emergency needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">How do I know my appointment is confirmed?</h4>
              <p className="text-gray-600">You will receive a confirmation email or SMS after submitting the form.</p>
            </div>
            <div>
              <h4 className="font-semibold">Can I cancel or reschedule?</h4>
              <p className="text-gray-600">Yes, contact us 24 hours in advance to reschedule or cancel.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;

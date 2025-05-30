import Appointment from '../models/appointment.model.js';

// ✅ 1. Create Appointment (patient creates appointment with doctor)
export const createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date } = req.body;

    if (!patientId || !doctorId || !date) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const appointment = await Appointment.create({
      patientId,
      doctorId,
      date,
      status: 'pending' // default status
    });

    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ 2. Approve Appointment (doctor approves by appointmentId)
export const approveAppointment = async (req, res) => {
  try {
    const { id } = req.params; // appointmentId

    const updated = await Appointment.findByIdAndUpdate(id, { status: 'approved' }, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Appointment not found.' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ 3. Get All Appointments of a Doctor (doctorId from params)
export const getDoctorAppointments = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const appointments = await Appointment.find({ doctorId }).populate('patientId', 'name email');

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ 4. Get All Appointments of a Patient (patientId from params)
export const getPatientAppointments = async (req, res) => {
  try {
    const { patientId } = req.params;

    const appointments = await Appointment.find({ patientId }).populate('doctorId', 'name email');

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

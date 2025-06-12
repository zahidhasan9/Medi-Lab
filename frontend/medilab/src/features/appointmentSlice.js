// src/redux/features/appointment/appointmentSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../API/apiUtility';
import toast from 'react-hot-toast';

// Create Appointment
export const createAppointment = createAsyncThunk(
  'appointment/create',
  async (appointmentData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/appointment', appointmentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create appointment');
    }
  }
);

// Get All Appointment
export const getallAppointment = createAsyncThunk('appointment/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/appointment/get');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch doctors');
  }
});

// Update Appointment
export const updateAppointment = createAsyncThunk(
  'appointment/update',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/appointment/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update appointment');
    }
  }
);

// Delete Appointment
export const deleteAppointment = createAsyncThunk('appointment/delete', async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.delete(`/appointment/${id}`);
    return { id, message: response.data.message };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to delete appointment');
  }
});

// Slice
const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    appointments: [],
    loading: false,
    error: null,
    message: null
  },
  reducers: {
    clearAppointmentError: (state) => {
      state.error = null;
    },
    clearAppointmentMessage: (state) => {
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createAppointment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.loading = false;
        // state.appointments.push(action.payload.appointment);
        state.message = action.payload.message;
        toast.success('Add Appointments Successful');
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Add doctor failed: ${action.payload}`);
      })

      // getallAppointment
      .addCase(getallAppointment.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(getallAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Fetch Appointment failed: ${action.payload}`);
      })

      // Update
      .addCase(updateAppointment.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = state.appointments.map((appt) =>
          appt._id === action.payload._id ? action.payload : appt
        );
        toast.success('Update Appointments Successful');
        state.message = action.payload.message;
      })
      .addCase(updateAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Update doctor failed: ${action.payload}`);
      })

      // Delete
      .addCase(deleteAppointment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = state.appointments.filter((appt) => appt._id !== action.payload.id);
        state.message = action.payload.message;
        toast.success('Delete Appointments Successful');
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Delete doctor failed: ${action.payload}`);
      });
  }
});

export const { clearAppointmentError, clearAppointmentMessage } = appointmentSlice.actions;

export default appointmentSlice.reducer;

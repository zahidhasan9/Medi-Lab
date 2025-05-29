// src/redux/features/doctor/doctorSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../API/apiUtility';
import toast from 'react-hot-toast';

// Create Doctor
export const createDoctor = createAsyncThunk('doctor/create', async (doctorData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/doctor', doctorData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to create doctor');
  }
});

// Get All Doctor
export const getallDoctor = createAsyncThunk('doctor/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/doctor/get');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch doctors');
  }
});

// Update Doctor
export const updateDoctor = createAsyncThunk('doctor/update', async ({ id, updatedData }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put(`/doctor/${id}`, updatedData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to update doctor');
  }
});

// Delete Doctor
export const deleteDoctor = createAsyncThunk('doctor/delete', async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.delete(`/doctor/${id}`);
    return { id, message: response.data.message };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to delete doctor');
  }
});

// Slice
const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    doctors: [],
    loading: false,
    error: null,
    message: null
  },
  reducers: {
    clearDoctorError: (state) => {
      state.error = null;
    },
    clearDoctorMessage: (state) => {
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.loading = false;
        // state.doctors.push(action.payload.doctor);
        state.message = action.payload.message;
        toast.success('Add Doctor Successful');
      })
      .addCase(createDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Add doctor failed: ${action.payload}`);
      })

      // getallDocto
      .addCase(getallDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload; // Assuming backend returns doctor array directly
      })
      .addCase(getallDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Fetch doctors failed: ${action.payload}`);
      })

      // Update
      .addCase(updateDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = state.doctors.map((doc) =>
          doc._id === action.payload.doctor._id ? action.payload.doctor : doc
        );
        state.message = action.payload.message;
      })
      .addCase(updateDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = state.doctors.filter((doc) => doc._id !== action.payload.id);
        state.message = action.payload.message;
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearDoctorError, clearDoctorMessage } = doctorSlice.actions;

export default doctorSlice.reducer;

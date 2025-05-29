// src/redux/features/donor/donorSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../API/apiUtility';
import toast from 'react-hot-toast';

// Create Donor
export const createDonor = createAsyncThunk('donor/create', async (donorData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/donor', donorData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to create donor');
  }
});

// Get All Donor
export const getallDonor = createAsyncThunk('Donor/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/donor/get');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch doctors');
  }
});

// Update Donor
export const updateDonor = createAsyncThunk('donor/update', async ({ id, updatedData }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put(`/donor/${id}`, updatedData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to update donor');
  }
});

// Delete Donor
export const deleteDonor = createAsyncThunk('donor/delete', async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.delete(`/donor/${id}`);
    return { id, message: response.data.message };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to delete donor');
  }
});

// Slice
const donorSlice = createSlice({
  name: 'donor',
  initialState: {
    donors: [],
    loading: false,
    error: null,
    message: null
  },
  reducers: {
    clearDonorError: (state) => {
      state.error = null;
    },
    clearDonorMessage: (state) => {
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createDonor.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDonor.fulfilled, (state, action) => {
        state.loading = false;
        state.donors.push(action.payload.donor);
        state.message = action.payload.message;
        toast.success('Add Donor Successful');
      })
      .addCase(createDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Add doctor failed: ${action.payload}`);
      })

      // getall Doner
      .addCase(getallDonor.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallDonor.fulfilled, (state, action) => {
        state.loading = false;
        state.donors = action.payload;
        console.log('App', action.payload);
      })
      .addCase(getallDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Fetch Appointment failed: ${action.payload}`);
      })

      // Update
      .addCase(updateDonor.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDonor.fulfilled, (state, action) => {
        state.loading = false;
        state.donors = state.donors.map((donor) => (donor._id === action.payload._id ? action.payload : donor));
        state.message = action.payload.message;
        toast.success('Update Appointments Successful');
      })
      .addCase(updateDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Add doctor failed: ${action.payload}`);
      })

      // Delete
      .addCase(deleteDonor.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteDonor.fulfilled, (state, action) => {
        state.loading = false;
        state.donors = state.donors.filter((donor) => donor._id !== action.payload.id);
        state.message = action.payload.message;
      })
      .addCase(deleteDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Add doctor failed: ${action.payload}`);
      });
  }
});

export const { clearDonorError, clearDonorMessage } = donorSlice.actions;

export default donorSlice.reducer;

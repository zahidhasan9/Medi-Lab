// src/redux/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../API/apiUtility';
import toast from 'react-hot-toast';

// Register Admin
export const registerAdmin = createAsyncThunk('user/registerAdmin', async (adminData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/admin/register', adminData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Registration failed');
  }
});

// Login Admin
export const loginAdmin = createAsyncThunk('user/loginAdmin', async (loginData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/admin/login', loginData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Login failed');
  }
});

// Get All Admins
export const getAllAdmins = createAsyncThunk('user/getAllAdmins', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/admin');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Failed to fetch admins');
  }
});

// Delete Admin
export const deleteAdmin = createAsyncThunk('user/deleteAdmin', async (adminId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.delete(`/admin/${adminId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Failed to delete admin');
  }
});

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    admin: localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null,
    admins: [],
    loading: false,
    error: null,
    success: false,
    message: null,
    token: localStorage.getItem('token') || null
  },
  reducers: {
    logoutAdmin: (state) => {
      state.admin = null;
      state.message = 'Logged out successfully';
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.success = true;
        toast.success('Registration Admin successful');
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        toast.error(`Registration failed: ${action.payload}`);
      })

      // Login
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
        state.message = action.payload.message;
        state.success = true;
        // state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token); // <-- Save token
        localStorage.setItem('admin', JSON.stringify(action.payload.admin)); // <-- Save token
        toast.success('Login successful');
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        toast.error(`Login failed: ${action.payload}`);
      })

      // Get All
      .addCase(getAllAdmins.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.admins = action.payload.admins;
      })
      .addCase(getAllAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.admins = state.admins.filter((admin) => admin._id !== action.meta.arg);
      })
      .addCase(deleteAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logoutAdmin, clearMessage, clearError } = userSlice.actions;

export default userSlice.reducer;

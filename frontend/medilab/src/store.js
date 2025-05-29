// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import donorReducer from './features/donorSlice';
import appointmentReducer from './features/appointmentSlice';
import doctorReducer from './features/doctorSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    donor: donorReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer
  }
});

export default store;

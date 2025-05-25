import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import './assets/main.css';
// import './assets/vendor/bootstrap/css/bootstrap.min.css';
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets/vendor/fontawesome-free/css/all.min.css';
// import './assets/vendor/swiper/swiper-bundle.min.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

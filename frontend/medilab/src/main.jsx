import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import './assets/main.css';
// import './assets/vendor/bootstrap/css/bootstrap.min.css';
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets/vendor/fontawesome-free/css/all.min.css';
// import './assets/vendor/swiper/swiper-bundle.min.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

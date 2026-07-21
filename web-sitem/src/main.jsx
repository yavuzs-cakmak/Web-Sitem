import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SiteProvider } from './context/SiteContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteProvider>
    <App />
    </SiteProvider>
    <ToastContainer/>
  </StrictMode>,
);

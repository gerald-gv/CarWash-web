import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import ScrollToTop from './components/helpers/ScrollToTop'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <App />
        {/* Toast Global */}
        <Toaster position='top-right' />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)

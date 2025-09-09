import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AdminDashboard from './pages/admin/adminDashboard.jsx'
import AdminBooking from './pages/admin/AdminBooking.jsx'
import './index.css'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/admin", element: <AdminDashboard />},
  {path: "/booking", element: <AdminBooking />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

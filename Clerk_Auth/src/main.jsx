import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import RootLayout from './layouts/root-layout.jsx'
import IndexPage from './routes/index.jsx'
import ContactPage from './routes/contact.jsx'
import SignInPage from './routes/sign-in.jsx'
import SignUpPage from './routes/sign-up.jsx'
import DashboardLayout from './layouts/dashboard-layout.jsx'
import DashboardPage from './routes/dashboard.jsx'
import InvoicesPage from './routes/dashboard.invoices.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

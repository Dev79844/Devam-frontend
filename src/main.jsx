import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import Admin from './Pages/Admin'
import Homepage from './Pages/Homepage'
import PhoneForm from './components/PhoneForm'
import Product from './Pages/Product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: "/add",
    element: <PhoneForm />
  },
  {
    path: "/product/:id",
    element: <Product />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

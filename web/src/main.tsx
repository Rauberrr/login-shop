import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/Cadastro/index.tsx'
import Error from './pages/Error/index.tsx'
import Home from './pages/Home/index.tsx'
import Login from './pages/Login/index.tsx'
import Payment from './pages/Payment/index.tsx'
import Product from './pages/Product/index.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Cadastro />
      },
      {
        path: '/products/:id',
        element: <Product />
      },
      {
        path: '/payment',
        element: <Payment />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)

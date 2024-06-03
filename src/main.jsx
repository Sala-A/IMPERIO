import React from 'react'
import './Style/Style.scss'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Page/Home'
import Error from './Components/Page/Error'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
  },
  {
    path:'Error',
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);



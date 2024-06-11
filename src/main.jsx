import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componants/Home.jsx';
import Mobile from "./Componants/Mobile.jsx"
import Filter from './Componants/filter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: "/:category",
      element: <Filter />
    }
  ]
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

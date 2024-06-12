import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componants/Home.jsx';
import Filter from './Componants/filter.jsx';
import FilterContainer from './Componants/FilterContainer.jsx';

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
      element: <FilterContainer />
    }
  ]
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

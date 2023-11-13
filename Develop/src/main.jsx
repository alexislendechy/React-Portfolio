import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"

import App from './App.jsx'
import Home from "./pages/Home.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import Contact from "./pages/Contact.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Resume from "./pages/Resume.jsx"


import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    children: [

      {
        index: true,
        element: <Navigate to="/AboutMe" replace />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
    ],
  },
]);

RactDOM.createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
);
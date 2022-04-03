import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
import Home from '../pages/Home'
import Protfolio from '../pages/Portfolio'
import Service from '../pages/Service'
import Layout from '../layouts'

const Router = () => {
  let element = [
    { 
      path: "/",
      element: <Layout/>,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/protfolio", element: <Protfolio /> },
        { path: "/service", element: <Service /> },
        { path: "/about-us", element: <Aboutus /> },
        { path: "/contact-us", element: <Contactus /> },
        { path: "/", element: <Navigate to="/home" /> },
        { path: "*", element: <Navigate to="/home" /> }
      ]
    }
  ]
  return useRoutes(element);
}


export default Router
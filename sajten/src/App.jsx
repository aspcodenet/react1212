import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Contact from './components/Contact'

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const routerStefan = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <div>FEL</div>,    
    children:[
        {
          path:'/',
          element: <Main/>,
        },
        {
          path:'/contact',
          element: <Contact/>,
        }
    ]
  }
])


function App() {

  return (
  <>
    <RouterProvider router={routerStefan}>

    </RouterProvider>
    </>
  )
}

export default App

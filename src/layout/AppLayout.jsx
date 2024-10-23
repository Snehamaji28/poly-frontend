import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function AppLayout() {
  return (<>
    <ScrollToTop/>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
)
}

export default AppLayout
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import { Toaster } from "@/components/ui/toaster"
const Layout = () => {
  return (
    <>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster/>
    </>
  )
}

export default Layout


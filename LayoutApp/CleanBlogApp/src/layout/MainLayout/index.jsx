import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet, useLocation } from 'react-router-dom'; 


const MainLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/samplepost';
  return (
    <div>
      <Header/>
      <Outlet/>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default MainLayout
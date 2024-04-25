import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function Layout() {
  return (
   <>
   <Header/>
   <Outlet/> {/*using outlet now header and footer will be same for every component bcz all components will render btw header and footer. in routes we difine layout and there within layout we defines components */}
   <Footer/>

   </>
  )
}

export default Layout
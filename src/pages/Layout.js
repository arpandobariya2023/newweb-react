import React from 'react'
import Footer from '../componets/Footer'
import Header from '../componets/Header'


const Layout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout

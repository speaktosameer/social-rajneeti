import React, { Fragment } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ContactDetail from '../../components/Contact/Contact'

const Contact = () => {
  return (
    <Fragment>
    <Navbar/>
    <ContactDetail/>
    <Footer/>
    </Fragment>
  )
}

export default Contact
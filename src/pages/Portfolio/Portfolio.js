import React, { Fragment } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import PortfolioDetail from '../../components/Portfolio/Portfolio'

const Portfolio = () => {
  return (
    <Fragment>
    <Navbar/>
    <PortfolioDetail/>
    <Footer/>
    </Fragment>
  )
}

export default Portfolio
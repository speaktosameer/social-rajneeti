import { Fragment } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import HeroSection from '../../components/HeroSection/HeroSection';
import Portfolio from '../../components/Portfolio/Portfolio';
import Services from '../../components/Serve/Services';


function Home() {
  return (
    <Fragment>
      <HeroSection/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
    </Fragment>
  );
}

export default Home;

import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from '../../components/Portfolio/Portfolio';
import Services from '../../components/Serve/Services';


function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;

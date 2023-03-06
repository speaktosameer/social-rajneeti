import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import  {Routes} from 'react-router-dom'
import WhyUs from "./pages/WhyUs/WhyUs";
import Faq from "./pages/FAQ/Faq";
import Portfolio from "./pages/Portfolio/Portfolio";
import DigitalMarket from "./pages/Services/DigitalMarket";
import OnlineAdvertise from "./pages/Services/OnlineAdvertise";
import OnlineEvent from "./pages/Services/OnlineEvent";
import SocialMedia from "./pages/Services/SocialMedia";
import WebsiteDesign from "./pages/Services/WebsiteDesign";
import WhatsAppAdver from "./pages/Services/WhatsAppAdver";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <Router>
            <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/socialrajneeti" element={<WhyUs/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/digital-marketing" element={<DigitalMarket/>} />
            <Route path="/online-advertising" element={<OnlineAdvertise/>} />
            <Route path="/online-event" element={<OnlineEvent/>} />
            <Route path="/social-media" element={<SocialMedia/>} />
            <Route path="/website-design"element={<WebsiteDesign/>} />
            <Route path="/whatsapp-advertise" element={<WhatsAppAdver/>} />
        </Routes>
            <Footer/>
      </Router>
  );
}

export default App;

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import WhyUs from "./pages/WhyUs/WhyUs";
import Faq from "./pages/FAQ/Faq";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="socialrajneeti" element={<WhyUs/>}/>
            <Route path="faq" element={<Faq/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

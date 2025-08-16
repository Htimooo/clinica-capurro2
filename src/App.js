import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Financiamiento from "./pages/Financiamiento";
import Contacto from "./pages/Contacto";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tratamiento from "./pages/Tratamiento";
import LandingOrtodoncia from "./pages/LandingOrtodoncia";
import LandingOrtopedia from "./pages/LandingOrtopedia";
import Articulo from "./pages/Articulo";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactForm from "./components/ContactForm";
import NotFound from "./pages/NotFound";

 



function App() {
 

  return (

    <div className="App">
      <Router>
      <ScrollToTop />
     {/*  <WhatsAppButton /> */}
      
        <Navbar />     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= '/ortodoncia' element={<LandingOrtodoncia/>}/>
          <Route path= '/ortopedia' element={<LandingOrtopedia/>}/>
          <Route path= '/blog/:ruta' element={<Articulo/>}/>
          <Route path= '/blog' element={<Blog/>}/>
          <Route path= '/tratamiento/:ruta' element={<Tratamiento/>}/>
          <Route path= '/financiamiento' element={<Financiamiento/>}/>
          <Route path= '/contacto' element={<Contacto/>}/>          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ContactForm/>
        <Footer />
      </Router>      
    </div>
        
  );
}

export default App;

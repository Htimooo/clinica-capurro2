import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactForm from "./components/ContactForm";

const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const Financiamiento = lazy(() => import("./pages/Financiamiento"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Tratamiento = lazy(() => import("./pages/Tratamiento"));
const LandingOrtodoncia = lazy(() => import("./pages/LandingOrtodoncia"));
const LandingOrtopedia = lazy(() => import("./pages/LandingOrtopedia"));
const Articulo = lazy(() => import("./pages/Articulo"));
const NotFound = lazy(() => import("./pages/NotFound"));

 



function App() {
 

  return (

    <div className="App">
      <Router>
      <ScrollToTop />
     {/*  <WhatsAppButton /> */}
      
        <Navbar />
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/ortodoncia' element={<LandingOrtodoncia/>}/>
            <Route path='/ortopedia' element={<LandingOrtopedia/>}/>
            <Route path='/blog/:ruta' element={<Articulo/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/tratamiento/:ruta' element={<Tratamiento/>}/>
            <Route path='/financiamiento' element={<Financiamiento/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ContactForm/>
        <Footer />
      </Router>      
    </div>
        
  );
}

export default App;


import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/index';
import AboutUs from './components/MainAboutUs/index';
import PopularInternship from './components/PopularInternship/index';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/about" element={<AboutUs />}  />

      <Route path="/training-internship" element={<PopularInternship/>} />
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
    
    </Routes>
  </BrowserRouter>
  )
}

export default App

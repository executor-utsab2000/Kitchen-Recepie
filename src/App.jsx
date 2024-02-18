import { useEffect } from 'react';
import './App.css'
import About from './Components/JSX/About';
import Contact from './Components/JSX/Contact';
import Landing from './Components/JSX/Landing';
import Speciality from './Components/JSX/Speciality';
import Navbar from './Components/Fixed Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Fixed Components/Footer';
import DetailsDish from './Components/JSX/DetailsDish';

function App() {


  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      {/* <Navbar/> */}
      {/* <Landing/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Speciality/> */}
      {/* <Footer/> */}

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/dishes/:dishName" element={<DetailsDish />} />

        </Routes>



      </BrowserRouter>


    </>
  )
}

export default App

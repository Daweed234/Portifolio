import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero'; // Corrected import path
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Projects from './Pages/Projects';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Hero />}/>
            <Route path="/Hero" element={<Hero />} /> {/* Corrected Route syntax */}
            <Route path="/about" element={<About />} /> {/* Added Route for About page */}
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={< Projects/>} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Background /> */}
    </>
  );
}

export default App;

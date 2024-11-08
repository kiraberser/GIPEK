import Navbar from '../src/components/common/Navbar'
import Footer from '../src/components/common/Footer'
import Home from './pages/Home'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import ProductList from './pages/ProductList';
import Login from './pages/Login'
import ProtectedRoute from './components/specificComponent/ProtectedRoute'
import Register from './pages/Register';


function App() {
  return (
    <>
      <Navbar /> {/* Colocado fuera de Routes */}
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer /> {/* Colocado fuera de Routes */}
    </>
  );
}

export default App

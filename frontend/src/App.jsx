import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog'
import Error from './pages/Error'
import CartPage from "./pages/CartPage";

import Navbar from './components/common/Navbar'
import Login from './components/common/Login';
import Footer from './components/common/Footer'
import ProductList from './components/common/ProductList';
import Register from './components/common/Register';
import ScrollToTop from "./components/specificComponent/ScrollToTop";

function Logout() {
  localStorage.clear()
  return <Navigate to='/login'/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register/>
}

export default function App() {
  const endpointForm = '/api/form/contact/'
  return (
    <>
      <Navbar /> {/* Colocado fuera de Routes */}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='*' element={<Error/>}/ >
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact route={endpointForm}/>} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<RegisterAndLogout/>} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <Footer /> {/* Colocado fuera de Routes */}
    </>
  );
}


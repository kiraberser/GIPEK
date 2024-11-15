import Navbar from '../src/components/common/Navbar'
import Footer from '../src/components/common/Footer'
import Home from './pages/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import ProductList from './pages/ProductList';
import Login from './components/common/Login';
import Blog from './pages/Blog'
import Error from './pages/Error'
import Register from './components/common/Register';

function Logout() {
  localStorage.clear()
  return <Navigate to='/login'/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register/>
}

function App() {
  const endpointForm = '/api/form/contact/'
  return (
    <>
      <Navbar /> {/* Colocado fuera de Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='*' element={<Error/>}/ >
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact route={endpointForm}/>} />
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

export default App

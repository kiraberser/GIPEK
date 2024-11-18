import { useState } from 'react';
import { Facebook, Instagram, ChevronRight, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../api';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const csrfToken = getCookie('csrftoken');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verificar que el email no esté vacío y sea válido
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }
  
    try {
      const res = await api.post(
        'api/form/',
        { email },
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      // Verificar si la respuesta de la API fue exitosa
      if (res.status === 200 || res.status === 201) {
        setIsSubmitted(true);
        setEmail(""); // Limpiar el campo de email
        setErrorMessage("");
        console.log("Formulario enviado correctamente:", res.data);
      } else {
        setErrorMessage("Hubo un problema al enviar tu información. Intenta nuevamente.");
      }
    } catch (error) {
      // Manejo de errores más específico
      if (error.response) {
        setErrorMessage(error.response.data.message || "Hubo un problema en el servidor.");
      } else if (error.request) {
        setErrorMessage("No se pudo conectar con el servidor. Verifica tu conexión a internet.");
      } else {
        setErrorMessage("Ocurrió un error inesperado. Por favor, intenta nuevamente.");
      }
    }
  };
  
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">GIPEK</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empoderando la conservación ambiental y creando un futuro sostenible para las generaciones venideras.
            </p>
            {isSubmitted && <p className='text-green-600'>¡Te has suscrito con éxito!</p>}
            {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Introduce tu correo electrónico"
                className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-r-full hover:bg-green-600 transition duration-300 flex items-center"
              >
                Suscribirse
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
              
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-500">Inicio</a></li>
              <li><Link to={'/about'} className="text-gray-600 hover:text-green-500">Sobre Nosotros</Link></li>
              <li><Link to={'/services'} className="text-gray-600 hover:text-green-500">Servicios</Link></li>
              <li><Link to={'/blog'} className="text-gray-600 hover:text-green-500">Blog</Link></li>
              <li><Link to={'/contact'} className="text-gray-600 hover:text-green-500">Contacto</Link></li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Conéctate con Nosotros</h3>
            <div className="flex space-x-4">
              <Link to={''} className="text-gray-600 hover:text-green-500">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to={''} className="text-gray-600 hover:text-green-500">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to={''} className="text-gray-600 hover:text-green-500">
                <Youtube className="h-10' w-10" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">© 2024 GIPEK. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

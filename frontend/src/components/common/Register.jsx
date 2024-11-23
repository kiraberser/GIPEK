import { useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

export default function Register() {
  const router = import.meta.env.VITE_API_URL + '/user/create-user/'
  const csrfToken = Cookies.get('csrftoken')
  console.log(csrfToken)
  console.log(router)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [signupValues, setSignupValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setSignupValues({
      ...signupValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signupValues.password !== signupValues.confirmPassword) {
        alert('Las contraseñas no coinciden')
        return
      }
      setIsSubmitted(true)

      const res = await api.post(router, {
        username: signupValues.username,
        email: signupValues.email,
        password: signupValues.password
      },
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      )
      setSignupValues({ username: '', password: '', email: '', confirmPassword: '' })
      console.log(res.status)
      return res
    } catch (error) {
      console.log(error)
      alert('Hay un error', error.status)
    } finally {
      setIsSubmitted(false)
    }

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 py-16 sm:py-24 lg:py-32">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 text-green-900 rounded-3xl p-8 ring-1 ring-gray-900/10 shadow-xl w-full max-w-lg"
      >
        <h1 className="text-lg font-semibold leading-7 text-green-600 mb-4">Crear cuenta</h1>
        <div className="space-y-4">
          <input
            className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            name="username"
            type="text"
            value={signupValues.username}
            placeholder="Nombre de usuario"
            onChange={handleChange}
          />
          <input
            className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            name="email"
            type="email"
            value={signupValues.email}
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
          <input
            className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            name="password"
            type="password"
            value={signupValues.password}
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <input
            className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            name="confirmPassword"
            type="password"
            value={signupValues.confirmPassword}
            placeholder="Confirmar contraseña"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            disabled={isSubmitted}
            className={`${isSubmitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } text-white rounded-md py-2 px-4 text-sm font-semibold w-full`}
          >
            {isSubmitted ? 'Cargando...' : 'Crear cuenta'}
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link to={"/login"} className="text-green-600 hover:text-green-700 font-semibold">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

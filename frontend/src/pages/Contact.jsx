import { useState } from "react"
import api from '../api'

function Contact({ route }) {
  const [formData, setFormData] = useState({ username: "", email: "", content: "" })
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post(route, {
        name: formData.username,
        email: formData.email,
        content: formData.content
      },
      {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    )
      setIsSubmitted(true)
      setFormData({ username: "", email: "", content: "" })
      setErrorMessage("")
      console.log(res.status)
      return res
    } catch (error) {
      setErrorMessage("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde")
      console.log(error)
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl py-28 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen ">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Contáctanos</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          ¿Tienes alguna pregunta? Nos encantaría saber de ti. Completa el formulario y te responderemos a la brevedad.
        </p>

        {isSubmitted && <p className="text-green-600 text-center">¡Mensaje enviado exitosamente!</p>}
        {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

        <form className="mt-8 space-y-6 " onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-md focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full rounded-md border border-gray-300  shadow-md focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              name="content"
              id="content"
              value={formData.content}
              onChange={handleChange}
              rows="4"
              required
              className="mt-1 p-2 block w-full rounded-md border border-gray-300  shadow-md focus:border-green-500 focus:ring-green-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact

import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl py-28 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Contáctanos</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          ¿Tienes alguna pregunta? Nos encantaría saber de ti. Completa el formulario y te responderemos a la brevedad.
        </p>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-md focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-md focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-md focus:border-green-500 focus:ring-green-500 sm:text-sm"
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

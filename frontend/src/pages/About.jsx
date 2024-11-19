import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna de Misión, Visión y Valores */}
        <div className="sm:m-10 lg:p-16">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-2 flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Misión
            </h2>
            <p className="text-gray-600">
              En GIPEK, buscamos conectar a las personas con la naturaleza
              mediante kits de jardinería que facilitan el cultivo de plantas,
              ofreciendo herramientas, conocimientos y una experiencia educativa
              que inspire alegría y satisfacción al verlas crecer.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-2 flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11m4 0h3m-11 4h4m1 0h6"
                />
              </svg>
              Visión
            </h2>
            <p className="text-gray-600">
              En GIPEK, aspiramos a ser referentes en educación ambiental y
              cultivo casero, promoviendo espacios verdes en cada hogar para un
              futuro más saludable, sostenible y en armonía con la naturaleza.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-2 flex items-center">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11m4 0h3m-11 4h4m1 0h6"
                />
              </svg>
              Valores
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Respeto por la Naturaleza</li>
              <li>Transparencia y Honestidad</li>
              <li>Responsabilidad Ambiental</li>
              <li>Compromiso con la Calidad</li>
              <li>Mejora Continua</li>
            </ul>
          </section>
        </div>
        {/* Columna de Imagen */}
        <div className="relative flex justify-center">
          {/* Fondo tenue detrás de la imagen */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-100 rounded-3xl blur-lg opacity-50"></div>

          {/* Imagen principal con bordes y efectos */}
          <img
            src="/assets/GipekAboutUs.jpg"
            alt="Imagen Representativa"
            className="relative rounded-3xl shadow-2xl w-full h-auto sm:w-1/2 sm:h-1/4 border-4 border-transparent bg-clip-padding 
            hover:scale-105 transition-transform duration-300"/>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Misión</h2>
        <p className="text-gray-600">
          Nuestra misión es ofrecer productos sostenibles que promuevan un estilo de vida saludable y respetuoso con el medio ambiente.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Visión</h2>
        <p className="text-gray-600">
          Ser líderes en productos sostenibles, inspirando a una comunidad consciente y comprometida con el cuidado ambiental.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Valores</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Sostenibilidad</li>
          <li>Salud</li>
          <li>Transparencia</li>
          <li>Innovación</li>
          <li>Consumo consciente</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

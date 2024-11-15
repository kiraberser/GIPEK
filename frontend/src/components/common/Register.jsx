import { useState } from 'react';

export default function Register() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro, validaciones y envío de datos
    console.log('Usuario:', signupValues.username);
    console.log('Correo electrónico:', signupValues.email);
    console.log('Contraseña:', signupValues.password);
    console.log('Confirmar contraseña:', signupValues.confirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 py-16 sm:py-24 lg:py-32">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="bg-gray-100 text-green-900 rounded-3xl p-8 ring-1 ring-gray-900/10 shadow-xl w-full max-w-lg"
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
            className="bg-green-600 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-green-700 w-full"
          >
            Crear cuenta
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <a href="/login" className="text-green-600 hover:text-green-700 font-semibold">
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

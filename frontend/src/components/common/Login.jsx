import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
    const Navigate = useNavigate()
    const [loginValues, setLoginValues] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginValues({
            ...loginValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginValues.username, loginValues.password)
        setLoginValues(
            {
                username: '',
                password: ''
            }
        )
        Navigate('/')
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-6 py-16 sm:py-24 lg:py-32">
            <form
                method="POST"
                onSubmit={handleSubmit}
                className="bg-white text-green-900 border border-gray-300 rounded-3xl p-8 ring-1 ring-gray-900/10 shadow-2xl w-full max-w-lg"
            >
                <h1 className="text-lg font-semibold leading-7 text-green-600 mb-4">Iniciar sesión</h1>
                <div className="space-y-4">
                    <input
                        className="p-3 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        name="username"
                        type="text"
                        value={loginValues.username}
                        placeholder="Nombre de usuario"
                        onChange={handleChange}
                    />
                    <input
                        className="p-3 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        name="password"
                        type="password"
                        value={loginValues.password}
                        placeholder="Contraseña"
                        onChange={handleChange}
                    />
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-x-2">
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-500 rounded"
                        />
                        <label htmlFor="remember" className="text-sm text-gray-600">Recuérdame</label>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-green-700"
                    >
                        Iniciar sesión
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        ¿No tienes una cuenta?{' '}
                        <Link to={'/register'} className="text-green-600 hover:text-green-700 font-semibold">
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
export default Login

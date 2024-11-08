import React from 'react'
import { Link, useRouteError } from "react-router-dom";

function Error() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
                <p className="text-3xl font-bold text-green-700">404</p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900">
                    {"Página no encontrada"}
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Lo sentimos, no hemos podido encontrar la página que buscas. Tal vez quieras explorar nuestras especies de plantas.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        to={'/'}
                        className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Error

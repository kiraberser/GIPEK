import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Obtiene la ubicación actual de la ruta

  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll a la parte superior de la página
  }, [location]); // Ejecuta este efecto cada vez que la ruta cambie

  return null;
};

export default ScrollToTop;

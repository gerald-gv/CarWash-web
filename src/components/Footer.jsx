import React from "react";
import Imagen2 from "/images/Logo.png";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const links = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Nosotros", href: "/nosotros" },
    { nombre: "Servicios", href: "/servicios" },
    { nombre: "FAQs", href: "/faqs" },
    { nombre: "Tus Reservas", href: "/reservas" },
  ];
  return (
    <div className="w-full px-4 bg-slate-800">
      <footer>
        <div className="flex flex-wrap items-start w-full ">
          {/* Sección 1 */}
          <div className=" w-full sm:w-1/2 md:w-1/4 px-2 text-center pt-2">
            <img
              className="w-[40%] aspect-square object-cover rounded-full block mx-auto my-4 border-4 border-white transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-400"
              src={Imagen2}
              alt=""
            />
            <h5 className="text-lg font-semibold text-white">Sobre Nosotros</h5>
            <p className="text-gray-100">
              Pagina para un CarWash creada para un proyecto de Cibertec usando
              React, Tailwind y Vite, GAAAAAAAAAAAAAAAAAAAA.
            </p>
          </div>
          {/* Sección 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6 pt-6">
            <h5 className="text-lg font-semibold mb-4 text-white">Sección</h5>
            <ul className="flex flex-col space-y-2">
              {links.map(({ nombre, href }) => (
                <li key={nombre}>
                  <Link
                    to={href}
                    className="text-gray-100 hover:text-emerald-300 transition"
                  >
                    {nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Suscribirse por correo */}
          <div className="w-full md:w-1/3 md:ml-auto px-4 mb-6 pt-6">
            <form>
              <h5 className="text-white text-lg font-semibold mb-2">
                Subscribete para saber nuestras Ofertas.
              </h5>
              <p className="text-sm text-gray-100 mb-4">
                Se le enviaran correos semanales para saber nuestras ofertas.
              </p>
              <div className="flex flex-col sm:flex-row w-full gap-2">
                <label htmlFor="newsletter1" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  placeholder="Email address"
                  className="hover:border-blue-400 w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-900 text-white placeholder-gray-400 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 hover:shadow-md"
                />
                <button
                  type="button"
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-[1.5px] focus:ring-blue-400 focus:ring-offset-0 active:scale-95"
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Copyright y Redes sociales */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 mt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500">
            © 2025 CarWash. Todos los derechos reservados.
          </p>
          <ul className="flex space-x-4 mt-4 sm:mt-0">
            <li>
              <a
                href="#"
                target="_self"
                className="hover:scale-110 transition-all duration-300 block text-gray-400 hover:text-pink-500"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_self"
                className="hover:scale-110 transition-all duration-300 block text-gray-400 hover:text-blue-600"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

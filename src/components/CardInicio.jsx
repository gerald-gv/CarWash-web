import Imagen from "/images/SobreNosotros.png";
import Imagen2 from "/images/Servicios.png";
import Imagen3 from "/images/Preguntas.png";
import { Link } from "react-router-dom";

function Card() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div data-aos="fade-down" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:text-indigo-600 cursor-pointer">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="md:text-2xl/relaxed text-muted-foreground">
              Más que un simple lavado, una experiencia de cuidado a tu vehiculo
            </p>
          </div>
        </div>

        {/*Contenedor Cards */}

        <div
          data-aos="fade-up"
          className="grid gap-8 md:grid-cols-2 w-full max-w-6xl mx-auto"
        >
          {/* Card 1 */}
          <div data-aos="fade-right">
            <div className="shadow-2xl shadow-black/60 hover:shadow-2xl hover:shadow-blue-900 hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)] relative group bg-neutral-200 text-white rounded-xl overflow-hidden w-full md:w-[95%] m-auto p-6 transition-all duration-300 ease-in-out hover:[transform:perspective(1000px)_rotateY(6deg)_rotateX(1deg)]">
              {/* Imagen redonda animada */}
              <img
                className="w-[60%] aspect-square object-cover rounded-full mx-auto my-4 border-4 border-white shadow-lg group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-200 ease-linear hover:[transform:perspective(1000px)_rotateY(6deg)_rotateX(1deg)]"
                src={Imagen}
                alt="Sobre Nosotros"
              />
              {/* Título animado */}
              <h2 className="font-sans m-0 text-indigo-600 font-black text-[20px] underline pb-2 group-hover:text-blue-900 group-hover:-translate-y-1 transition-all duration-150 ease-linear">
                Sobre Nosotros
              </h2>

              {/* Texto descriptivo */}
              <p className="text-black text-sm md:text-base leading-relaxed">
                Cada vehículo es tratado como si fuera nuestro. Nos enfocamos en
                dejarlo impecable por dentro y por fuera. Usamos productos
                biodegradables y de primera línea que protegen la pintura y el
                interior de tu auto, además ¡En menos de 30 minutos tu auto
                estará reluciente! Perfecto para nuestros clientes que valoran
                su tiempo.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div data-aos="fade-left">
            <div className="shadow-2xl shadow-black/60 hover:shadow-2xl hover:shadow-blue-900 hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)] relative group bg-neutral-200 text-white rounded-xl overflow-hidden w-full md:w-[95%] m-auto p-6 transition-all duration-300 ease-in-out hover:[transform:perspective(1000px)_rotateY(-6deg)_rotateX(1deg)]">
              {/* Imagen redonda animada */}
              <img
                className="w-[60%] aspect-square object-cover rounded-full mx-auto my-4 border-4 border-white shadow-lg group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-200 ease-linear hover:[transform:perspective(1000px)_rotateY(-6deg)_rotateX(1deg)]"
                src={Imagen2}
                alt="Nuestros Servicios"
              />
              {/* Título animado */}
              <h2 className="font-sans m-0 text-indigo-600 font-black text-[20px] underline pb-2 group-hover:text-blue-900 group-hover:-translate-y-1 transition-all duration-150 ease-linear">
                Conoce más de nuestros Servicios
              </h2>
              {/* Texto descriptivo */}
              <p className="text-black text-sm md:text-base leading-relaxed">
                Puedes revisar nuestras diversas opciones de servicio en el
                siguiente enlace. ¡Seguro que no te arrepentirás!
              </p>

              {/* Botón con animación */}
              <Link
                to="/servicios"
                className="mt-6 inline-block bg-sky-200 text-black border border-gray-300 hover:bg-orange-200 hover:border-orange-300 hover:shadow-lg rounded-md px-10 py-3 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2"
              >
                Ver Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left">
      <div
        className="shadow-2xl shadow-black/60 hover:shadow-2xl hover:shadow-indigo-900 hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)] relative group bg-neutral-200 py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
      >
        {/* Imagen */}
        <div className="transition-opacity duration-300 hover:opacity-85 md:w-1/2 flex justify-center">
          <img
            src={Imagen3}
            alt="Carwash service"
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:text-indigo-600 cursor-pointer">
            ¿Tienes dudas sobre nuestro servicio?
          </h2>
          <p className="leading-relaxed">
            En esta sección encontrarás las respuestas a las preguntas más
            comunes sobre nuestro servicio de carwash. Nuestro objetivo es
            brindarte toda la información que necesites para que tu experiencia
            sea rápida, confiable y sin dudas.
          </p>
          <Link
            to="/FAQs"
            className="inline-block bg-sky-600 text-white hover:bg-sky-500 hover:shadow-lg rounded-xl px-10 py-3 text-base md:text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Ver FAQs
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
export default Card;

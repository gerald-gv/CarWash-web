import { Link } from "react-router-dom"
import SwiperHero from "./SwiperHero"


const HeroSlider = () => {
    return (
        <section className="h-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                
                {/* Contenedor de Slider - Slider Hero */}

                <div className="relative h-full w-full md:order-last" data-aos="fade-right">
                    <SwiperHero />
                </div>

                {/* Contenedor Hero - HeroSection */}

                <div className="bg-sky-500 flex flex-col items-center justify-center p-8 text-center md:text-left md:items-start md:order-first" data-aos="fade-right">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4" data-aos="fade-down">
                        <div>Tu Coche,</div>
                        <div className="md:inline-block">Brillante Como Nuevo</div>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md" data-aos="fade-up ">Nuestro servicio te ofrece los mejores autolavados para que su vehiculo quede reluciente por dentro y por fuera.</p>
                    <Link to="/servicios" data-aos="zoom-in">
                        <button className="bg-white text-sky-600 hover:bg-sky-100 hover:shadow-lg border-0 rounded-md px-10 py-3 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2">
                            Ver Nuestros Servicios
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSlider
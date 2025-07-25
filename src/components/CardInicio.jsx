import Imagen from '/images/SobreNosotros.png'
import Imagen2 from '/images/Card.png'
import { Link } from "react-router-dom";
function Card() {
    return (
        <section className='w-full py-12 md:py-24 bg-background'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center'>
                <div className='flex flex-col items-center justify-center text-center mb-12'>
                    <div className='space-y-4'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-5xl text-gray-800'>¿Por Qué Elegirnos?</h2>
                        <p className='md:text-2xl/relaxed text-muted-foreground'>Más que un simple lavado, una experiencia de cuidado a tu vehiculo</p>
                    </div>
                </div>

                {/*Contenedor Cards */}

                <div className='grid gap-8 md:grid-cols-2 w-full max-w-6xl mx-auto'>
                    
                    {/* Card 1 */}

                    <div className="text-center border-2 border-neutral-300 rounded-[10px] shadow-[5px_5px_5px_hsl(0,0%,0%)] p-5 m-auto w-full md:w-[95%]">
                        <img className='w-[60%] aspect-square object-cover rounded-full block mx-auto my-4' src={Imagen} alt="" />
                        <h2 className='font-sans m-0 text-[hsl(0,0%,20%)] font-black text-[20px] underline'>¿Porque Elegirnos?</h2>
                        <p className='card-texto'>Cada vehículo es tratado como si fuera nuestro. Nos enfocamos en dejarlo impecable por dentro y por fuera.
                            Usamos productos biodegradables y de primera línea que protegen la pintura y el interior de tu auto, además ¡En menos de 30 minutos tu auto estará reluciente! Perfecto para nuestros clientes
                            que valoran su tiempo.
                        </p>
                    </div>

                    {/* Card 2 */}

                    <div className="text-center border-2 border-neutral-300 rounded-[10px] shadow-[5px_5px_5px_hsl(0,0%,0%)] p-5 m-auto w-full md:w-[95%]">
                        <img className='w-[60%] aspect-square object-cover rounded-full block mx-auto my-4' src={Imagen2} alt="" />
                        <h2 className='font-sans m-0 text-[hsl(0,0%,20%)] font-black text-[20px] underline'>Conoce mas de nuestros Servicios</h2>
                        <p className='font-sans text-[hsl(0,0%,30%)]'>Puedes revisar nuestras diversas opciones de servicio en el siguiente enlace, seguro que no te arrepentiras.</p>
                        <Link
                            to="/servicios"
                            className="mt-6 inline-block bg-sky-200 text-black border border-gray-300 hover:bg-orange-200 hover:border-orange-300 hover:shadow-lg rounded-md px-10 py-3 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2"
                        >
                            Ver Nuestros Servicios
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
export default Card;
import Imagen from '/images/SobreNosotros.png'
import Imagen2 from '/images/Card.png'
import { Link } from "react-router-dom";
function Card() {
    return (
        <div className='flex justify-center flex-wrap gap-4'>
            <div className="border-2 border-neutral-300 rounded-[10px] shadow-[5px_5px_5px_hsl(0,0%,0%)] p-5 m-2 text-center max-w-[550px] inline-block">
                <img className='w-[60%] aspect-square object-cover rounded-full block mx-auto my-4' src={Imagen} alt="" />
                <h2 className='font-sans m-0 text-[hsl(0,0%,20%)] font-black text-[20px] underline'>¿Porque Elegirnos?</h2>
                <p className='card-texto'>Cada vehículo es tratado como si fuera nuestro. Nos enfocamos en dejarlo impecable por dentro y por fuera.
                    Usamos productos biodegradables y de primera línea que protegen la pintura y el interior de tu auto, además ¡En menos de 30 minutos tu auto estará reluciente! Perfecto para nuestros clientes
                    que valoran su tiempo.
                </p>
            </div>
            <div className="border-2 border-neutral-300 rounded-[10px] shadow-[5px_5px_5px_hsl(0,0%,0%)] p-5 m-2 text-center max-w-[550px] inline-block">
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
    );
}
export default Card;
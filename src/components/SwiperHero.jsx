import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperHero = () => {

    const imagenes = [
        { src: '/images/imagen1.jpg', alt: 'Imagen1'},
        { src: '/images/imagen2.jpg', alt: 'Imagen2'},
        { src: '/images/imagen3.jpg', alt: 'Imagen3'}
    ]

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, }}
            loop
            className='h-full w-full'>
                {imagenes.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img.src} alt={img.alt} className='w-full h-full object-cover' />
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default SwiperHero
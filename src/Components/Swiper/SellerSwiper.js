import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SellerCard from '../Card/SellerCard';


const SellerSwiper = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then((datas) => {
                setDatas(datas); // Store the products array
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="seller-slider">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    }
                }}
            >
                {datas?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SellerCard data={item}  />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default SellerSwiper

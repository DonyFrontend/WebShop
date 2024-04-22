import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide_1 from './SwiperImages/slide_1.png';
import slide_2 from './SwiperImages/slide_2.png';

const MainPage = () => {
    return <div>
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{clickable: true}}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src={slide_1} alt="Error!" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_2} alt="Error!" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
}

export default MainPage;
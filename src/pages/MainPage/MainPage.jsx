import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide_1 from './SwiperImages/slide_1.png';
import slide_2 from './SwiperImages/slide_2.png';
import MainCard from './Card';
import NikeImage from './BrandsImages/Nike.png';
import HMImage from './BrandsImages/H&M.png';
import LevisImage from './BrandsImages/Levis.png';
import PoloImage from './BrandsImages/Polo.png';
import PumaImage from './BrandsImages/Puma.png';
import { scrollToZero } from '../utils/CustomFC';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { newsProductsTC, mensProductsTC, womensProductsTC } from '../../Slices/getProductsSlice';

const MainPage = () => {
    const products = useSelector(state => state.getProductsSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        scrollToZero()
        dispatch(newsProductsTC());
        dispatch(mensProductsTC());
        dispatch(womensProductsTC());
    }, [])




    return <div>
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{ clickable: true }}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img style={{ width: '100%' }} src={slide_1} alt="Error!" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_2} alt="Error!" />
                </SwiperSlide>
            </Swiper>
        </div>

        <div className='w-[100%] flex justify-center'>
            <div className='w-[90%] flex flex-col gap-y-[100px]'>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                        <h1 className='font-semibold text-3xl'>New Arrial</h1>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-4 gap-5'>
                        {products.new.length != 0 ? products.new.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                    <div className='flex flex-col h-[100%] justify-between'>
                        <div>
                            <img src={item.images[0]} alt="Error!"/>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-xl'>{item.title}</h2>
                            <div className='flex gap-1 text-lg'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                            <p className='text-lg text-gray-600'>{item.colors.length} Colors</p>
                            <p className='font-medium text-base'>Price: ${item.price}</p>
                        </div>
                    </div>
                </Link>) : <h1 className='font-semibold text-3xl'>Loading...</h1>}
                    </div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                        <h1 className='font-semibold text-3xl'>Categories For Men</h1>
                    </div>
                    <div className='grid grid-rows-2 grid-cols-4 gap-5'>
                    {products.men.length != 0 ? products.men.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                    <div className='flex flex-col h-[100%] justify-between'>
                        <div>
                            <img src={item.images[0]} alt="Error!"/>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-xl'>{item.title}</h2>
                            <div className='flex gap-1 text-lg'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                            <p className='text-lg text-gray-600'>{item.colors.length} Colors</p>
                            <p className='font-medium text-base'>Price: ${item.price}</p>
                        </div>
                    </div>
                </Link>) : <h1 className='font-semibold text-3xl'>Loading...</h1>}
                    </div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                        <h1 className='font-semibold text-3xl'>Categories For Women</h1>
                    </div>
                    <div className='grid grid-rows-2 grid-cols-4 gap-5'>
                    {products.women.length != 0 ? products.women.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                    <div className='flex flex-col h-[100%] justify-between'>
                        <div>
                            <img src={item.images[0]} alt="Error!"/>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-xl'>{item.title}</h2>
                            <div className='flex gap-1 text-lg'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                            <p className='text-lg text-gray-600'>{item.colors.length} Colors</p>
                            <p className='font-medium text-base'>Price: ${item.price}</p>
                        </div>
                    </div>
                </Link>) : <h1 className='font-semibold text-3xl'>Loading...</h1>}
                    </div>
                </div>

                <div className='w-[100%] flex flex-col items-center gap-y-12 bg-[#3C4242] p-6 rounded-xl'>
                    <div>
                        <h1 className='text-4xl text-white'>Top Brands Deal</h1>
                    </div>
                    <div>
                        <h5 className='text-white text-lg'>Up To <span className='text-yellow-400'>60%</span> off on brands</h5>
                    </div>
                    <div className='grid grid-cols-5 grid-rows-1 gap-x-5'>
                        <img src={NikeImage} alt="Error!" />
                        <img src={HMImage} alt="Error!" />
                        <img src={LevisImage} alt="Error!" />
                        <img src={PoloImage} alt="Error!" />
                        <img src={PumaImage} alt="Error!" />
                    </div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                        <h1 className='font-semibold text-3xl'>FeedBack</h1>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-3 gap-5'>
                        <MainCard />
                        <MainCard />
                        <MainCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MainPage;
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NikeImage from './BrandsImages/Nike.png';
import HMImage from './BrandsImages/H&M.png';
import LevisImage from './BrandsImages/Levis.png';
import PoloImage from './BrandsImages/Polo.png';
import PumaImage from './BrandsImages/Puma.png';
import { scrollToZero } from '../utils/CustomFC';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsProductsTC, mensProductsTC, womensProductsTC } from '../../Slices/getProductsSlice';
import SendFB from '../SendFeedBack/SendFB';
import { getLimitCurrentFeedBacksTC } from '../../Slices/getLimitCurrentFeedBacksSlice';
import { Button } from '@chakra-ui/react';
import MainCard from './Card';
import { Spinner } from '@chakra-ui/react';

const MainPage = () => {
    const products = useSelector(state => state.getProductsSlice);
    const { limitFeedBacks, isFetch } = useSelector(state => state.getLimitCurrentFeedBacksSlice);
    const dispatch = useDispatch();
    console.log(limitFeedBacks);

    useEffect(() => {
        scrollToZero()
        dispatch(newsProductsTC());
        dispatch(mensProductsTC());
        dispatch(womensProductsTC());
        dispatch(getLimitCurrentFeedBacksTC());
    }, [dispatch])

    return <div>
        <div className='mb-5'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ clickable: true }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className='z-0'
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <Link to={'/shop/kkem3MhSSKFcCIBaAfwa'}>
                        <img width={'100%'} style={{ maxHeight: '700px' }} src='https://s41921.pcdn.co/wp-content/uploads/2007/01/Sneaker3Spl1.jpg' alt="Error!" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/shop/FHvDYNim5tRDGIx7P9vr'}>
                        <img width={'100%'} style={{ maxHeight: '700px' }} src='https://runnerexpert.com/wp-content/uploads/2021/04/Untitled-design-5-2-1024x536.jpg' alt="Error!" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/shop/Ia1eOxOijMRt3fhDRjlr'>
                        <img width={'100%'} style={{ maxHeight: '700px' }} src='https://th.bing.com/th/id/R.8baf3530281e3ca8a315eeb631d79b25?rik=wuJiCr%2bbQuKUMA&pid=ImgRaw&r=0' alt="Error!" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/shop/0ufiIl0SMp7leyMYKkid'>
                        <img width={'100%'} style={{ maxHeight: '700px' }} src='https://th.bing.com/th/id/R.068ac0c2aa3c810c33c52d2270cb180c?rik=fDUNhVKqRQ3DKw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fJGwAprF.jpg&ehk=Fgk7R7fqIYM78QkPIqb0Z%2fLL7HN30YNvgF2Eo1pfB2s%3d&risl=&pid=ImgRaw&r=0' alt="Error!" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>

        <div className='w-[100%] flex justify-center'>
            <div className='w-[90%] flex flex-col gap-y-[100px]'>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                        <h1 className='font-semibold text-3xl md:text-4xl lg:text-3xl'>New Arrial</h1>
                    </div>
                    <div className='grid auto-grid-row:auto md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-5'>
                        {products.new.length != 0 ? products.new.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                            <div className='flex flex-col h-[100%] justify-between'>
                                <div>
                                    <img src={item.images[0]} alt="Error!" />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <h2 className='font-medium md:text-3xl lg:text-xl'>{item.title}</h2>
                                    <div className='flex gap-1 lg:text-lg md:text-2xl'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                                    <p className='lg:text-lg text-gray-600 md:text-2xl'>{item.colors.length} Colors</p>
                                    <p className='font-medium lg:text-base md:text-xl'>Price: ${item.price}</p>
                                </div>
                            </div>
                        </Link>) : <Spinner
                            thickness='3px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='purple.500'
                            size='xl'
                        />}
                    </div>
                </div>

                <div className='flex  flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                        <h1 className='font-semibold text-3xl md:text-4xl lg:text-3xl'>Categories For Men</h1>
                    </div>
                    <div className='grid aut0-grid-row:auto md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-5'>
                        {products.men.length != 0 ? products.men.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                            <div className='flex flex-col h-[100%] justify-between'>
                                <div>
                                    <img src={item.images[0]} alt="Error!" />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <h2 className='font-medium md:text-3xl lg:text-xl'>{item.title}</h2>
                                    <div className='flex gap-1 lg:text-lg md:text-2xl'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                                    <p className='lg:text-lg text-gray-600 md:text-2xl'>{item.colors.length} Colors</p>
                                    <p className='font-medium lg:text-base md:text-xl'>Price: ${item.price}</p>
                                </div>
                            </div>
                        </Link>) : <Spinner
                            thickness='3px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='purple.500'
                            size='xl'
                        />}
                    </div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                        <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                        <h1 className='font-semibold text-3xl md:text-4xl lg:text-3xl'>Categories For Women</h1>
                    </div>
                    <div className='grid auto-grid-row:auto md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-5'>
                        {products.women.length != 0 ? products.women.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                            <div className='flex flex-col h-[100%] justify-between'>
                                <div>
                                    <img src={item.images[0]} alt="Error!" />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <h2 className='font-medium md:text-3xl lg:text-xl'>{item.title}</h2>
                                    <div className='flex gap-1 lg:text-lg md:text-2xl '>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                                    <p className='lg:text-lg text-gray-600 md:text-2xl'>{item.colors.length} Colors</p>
                                    <p className='font-medium lg:text-base md:text-xl'>Price: ${item.price}</p>
                                </div>
                            </div>
                        </Link>) :<Spinner
                            thickness='3px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='purple.500'
                            size='xl'
                        />}
                    </div>
                </div>

                <div className='w-[100%] flex flex-col items-center gap-y-12 bg-[#3C4242] p-6 rounded-xl'>
                    <div>
                        <h1 className='text-4xl text-white'>Top Brands Deal</h1>
                    </div>
                    <div>
                        <h5 className='text-white text-lg'>Up To <span className='text-yellow-400'>60%</span> off on brands</h5>
                    </div>
                    <div className='grid grid-col-1 md:grid-cols-5 gap-y-10 lg:gap-y-0 lg:grid-cols-5 lg:grid-rows-1 gap-x-5'>
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
                        <h1 className='font-semiboldtext-3xl text-3xl md:text-4xl lg:text-3xl'>FeedBacks</h1>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 auto-grid-row:auto lg:grid-cols-4 gap-5'>
                        {isFetch ?<Spinner
                            thickness='3px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='purple.500'
                            size='xl'
                        /> : limitFeedBacks.map((item, index) => <MainCard key={index} name={item.name} feedBack={item.feedBack} date={item.date} />)}
                    </div>
                </div>

                <div className='flex gap-x-2 mb-4'>
                    <Button colorScheme='purple'>Show all FeedBacks</Button>

                    <SendFB />
                </div>
            </div>
        </div>
    </div>
}

export default MainPage;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide_3 from '../MainPage/SwiperImages/slide_3.png'
import stars from '../../assets/stars.png'
import Icon from '../../assets/Icon.png'
import cart from '../../assets/cart.png'
import credit from '../../assets/credit.png'
import truck from '../../assets/truck.png'
import Size from '../../assets/Size.png'
import Free from '../../assets/Free.png'
function Product(){
    return(
        <>
            <div className='w-full flex justify-evenly '>
            <div className='w-[20%]'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{ clickable: true }}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    <SwiperSlide className='flex items-center'>
                        <img style={{width: '100%'}} src={slide_3} alt="Error!" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{width: '100%'}} src={slide_3} alt="Error!" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{width: '100%'}} src={slide_3} alt="Error!" />
                    </SwiperSlide>
                </Swiper>
            </div>

                <div className='w-80'>
                    <div className='w-full'>
                            <h1 className='text-4xl'>Raven Hoodie With Black colored Design</h1>
                            <div className='flex items-start gap-x-4'>
                                <img src={stars} alt="Error!" /> 
                                <p>3.5</p>
                                <img className='gap-x-2' src={Icon} alt="Error!" /> 
                                <p>120 comment</p>
                            </div>
                            <div>
                                <h2 className='text-2xl'>Select Size</h2>
                                <div className='text-xl mt-5'>
                                    <button className='rounded-2xl border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>XS</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>S</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>M</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>L</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>XL</button>
                                </div>
                                <div className='mt-5 flex gap-10'>
                                    <button className='bg-[#8A33FD] border-[1px] border-black text-white flex rounded-lg gap-x-2 py-3 px-10'><img src={cart} alt="" /> Add to cart</button>
                                    <button className='border-[1px] border-black py-3 px-5 font-medium rounded-lg'>$63.00</button>
                                </div>
                                <div className='w-full mt-5 border-y-[1px] border-gray-300'></div>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <img src={credit} alt="" /> <p>Secure payment</p>
                                        <img src={truck} alt="" /> <p>Free shipping</p>
                                    </div>
                                   <div className='flex ml-10'>
                                        <img src={Size} alt="" /> <p>Size & Fit</p>
                                        <img src={Free} alt="" /> <p>Free Shipping & Returns</p>
                                   </div>
                                   
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
export default Product
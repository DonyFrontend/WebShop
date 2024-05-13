import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide_3 from './productImages/slide_3.png'
import stars from './productImages/stars.png'
import Icon from './productImages/Icon.png'
import cart from './productImages/cart.png'
import credit from './productImages/credit.png'
import truck from './productImages/truck.png'
import Size from './productImages/Size.png'
import Free from './productImages/Free.png'
import hoody from './productImages/hoody.png'
function Product(){
    return(
        <>
        <div className=' flex items-center'>
            <div className='flex gap-40 '>
            <div className='w-[20%]  '>
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

                <div className='w-[80%] flex'>
                    <div className=''>
                            <h1 className='text-4xl'>Raven Hoodie With Black colored Design</h1>
                            <div className='flex mt-10 items-start gap-x-4'>
                                <img src={stars} alt="Error!" /> 
                                <p>3.5</p>
                                <img className='gap-x-2' src={Icon} alt="Error!" /> 
                                <p>120 comment</p>
                            </div>
                            <div>
                                <div className='text-xl my-10'>
                                    <h2 className='text-2xl pb-5'>Select Size</h2>
                                    <button className='rounded-2xl border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>XS</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>S</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>M</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>L</button>
                                    <button className='rounded-2xl ml-3 border-[1px] border-black px-4 py-2 active:bg-black active:text-white'>XL</button>
                                </div>
                                <div className='my-10 flex gap-10'>
                                    <button className='bg-[#8A33FD] border-[1px] border-black text-white flex rounded-lg gap-x-2 py-3 px-10'><img src={cart} alt="" /> Add to cart</button>
                                    <button className='border-[1px] border-black py-3 px-5 font-medium rounded-lg'>$63.00</button>
                                </div>
                                <div className='w-full mt-5 border-y-[1px] border-gray-300'></div>
                                <div className='flex mt-16 text-xl flex-col'>
                                    <div className='flex gap-10'>
                                        <img className='w-5 h-5 mt-1' src={credit} alt="" /> <p>Secure payment</p>
                                        <img className='w-5 h-5 mt-1' src={truck} alt="" /> <p>Free shipping</p>
                                    </div>
                                   <div className='flex mt-5 gap-10'>
                                        <img className='w-5 h-5 mt-1' src={Size} alt="" /> <p>Size & Fit</p>
                                        <img className='h-5 ml-14 w-5 mt-1' src={Free} alt="" /> <p>Free Shipping & Returns</p>
                                   </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[80%] my-20 gap-y-10 flex flex-col'>
                <div className='flex'>
                    <div className='bg-[#8A33FD] w-2 rounded-lg border-[1px]'></div>
                    <h1 className='text-4xl'>Product Description</h1>
                </div>
                
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-2xl font-400'>Description</h2>
                    <p className='text-xl pl-5 text-gray-500'>User comments</p>
                    <div className='bg-[#8A33FD] px-1 text-center rounded-lg text-white'>24</div>
                    <p className='text-xl pl-5 text-gray-500'>Question & Answer</p>
                    <div className='bg-black px-2 text-center rounded-lg text-white'>4</div>
                </div>
                <div className='flex w-[50%]'>
                    <p>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
                </div>

                <div className='flex mt-10 ml-20'>
                <div className='flex w-[60%]  gap-20 flex-wrap'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-gray-500'>Fabric</h2>
                        <p className='text-2xl'>Bio-washed Cotton</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-gray-500'>Pattern</h2>
                        <p className='text-2xl'>Printed</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-gray-500'>Fit</h2>
                        <p className='text-2xl'>Regular-fit</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-gray-500'>Regular-fit</h2>
                        <p className='text-2xl'>Round Neck</p>
                    </div>
                    <div className='flex flex-col gap-3 ml-16'>
                        <h2 className='text-xl text-gray-500 '>Sleeve</h2>
                        <p className='text-2xl'>Half-sleeves</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-gray-500'>Style</h2>
                        <p className='text-2xl'>Casual Wear</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Product
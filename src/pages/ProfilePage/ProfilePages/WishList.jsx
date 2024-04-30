import image from './wishlistIcon.svg';

const WishList = () => {

    return <div className='flex flex-col gap-y-11'>
        <div>
            <h1 className='font-semibold text-3xl'>Wishlist</h1>
        </div>
        <div className='flex flex-col gap-y-10'>
            <div className='w-[100%] flex justify-between'>
                <div className='flex items-center gap-x-10'>
                    <div>
                        <img className='cursor-pointer' src={image} alt="Error" />
                    </div>
                    <div>
                        <img src="https://avatars.mds.yandex.net/i?id=93ff1a185887ca7273487ca891da2196db42978e-12569756-images-thumbs&n=13" alt="Error!" style={{width: 200}}/>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Blue Flower Print Crop Top </h1>
                        <div className='flex gap-x-3'>
                            <p className='font-semibold'>Color:</p>
                            <p>Yellow</p>
                        </div>
                        <div className='flex gap-x-3'>
                            <p className='font-semibold'>Quantity:</p>
                            <p>1</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-x-12'>
                    <p className='text-lg text-gray-600'>$29.00</p>
                    <button className='bg-[#8A33FD] text-white p-2 rounded-md hover:bg-[#6620C1] transition-all'>Add to cart</button>                    
                </div> 
            </div>
            <div className='w-[100%] flex justify-between'>
                <div className='flex items-center gap-x-10'>
                    <div>
                        <img className='cursor-pointer' src={image} alt="Error" />
                    </div>
                    <div>
                        <img src="https://avatars.mds.yandex.net/i?id=93ff1a185887ca7273487ca891da2196db42978e-12569756-images-thumbs&n=13" alt="Error!" style={{width: 200}}/>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Blue Flower Print Crop Top </h1>
                        <div className='flex gap-x-3'>
                            <p className='font-semibold'>Color:</p>
                            <p>Yellow</p>
                        </div>
                        <div className='flex gap-x-3'>
                            <p className='font-semibold'>Quantity:</p>
                            <p>1</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-x-12'>
                    <p className='text-lg text-gray-600'>$29.00</p>
                    <button className='bg-[#8A33FD] text-white p-2 rounded-md hover:bg-[#6620C1] transition-all'>Add to cart</button>                    
                </div> 
            </div>  

        </div>
    </div>
}

export default WishList;
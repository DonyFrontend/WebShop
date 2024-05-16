import image from './wishlistIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistProductsTC } from '../../../Slices/getWishlistProductSlice';
import { useEffect } from 'react';
import { addBasketProduct } from '../../../Slices/addBasketProductTC';
import { deleteWishlistProductTC } from '../../../Slices/deleteWishlistProductTC';

const WishList = () => {
    const { products } = useSelector(state => state.getWishlistProductSlice)
    const disptach = useDispatch()

    useEffect(() => {
        disptach(wishlistProductsTC())
    }, [])

    function deleteProduct(id) {
        disptach(deleteWishlistProductTC(id));
        disptach(wishlistProductsTC());
    }
    return <div className='flex flex-col gap-y-11'>
        <div>
            <h1 className='font-semibold text-3xl'>Wishlist</h1>
        </div>
        <div className='flex flex-col gap-y-10'>
            {products.map((item, index) => <div key={index} className='w-[100%] flex justify-between'>
                <div className='flex items-center gap-x-10'>
                    <div onClick={() => deleteProduct(item.id)}>
                        <img className='cursor-pointer' src={image} alt="Error" />
                    </div>
                    <div>
                        <img src={item.images} alt="Error!" style={{ width: 200 }} />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>{item.title}</h1>
                        <div className='flex gap-x-3'>
                            <p className='font-semibold'>Color:</p>
                            <p>{item.color}</p>
                        </div>
                        <div className='flex gap-x-3'>
                            <p className='font-semibold'>Size:</p>
                            <p>{item.size}</p>
                        </div>
                        <div className='flex gap-x-3'>
                            <p className='font-semibold'>Quantity:</p>
                            <p>1</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-x-12'>
                    <p className='text-lg text-gray-600'>$29.00</p>
                    <button onClick={() => disptach(addBasketProduct({
                        product: {
                            title: item.title,
                            description: item.description,
                            images: [item.images],
                            price: item.price,
                        }, newSize: item.size, newColor: item.color
                    }))} className='bg-[#8A33FD] active:bg-[#4c2185] text-white p-2 rounded-md hover:bg-[#6620C1] transition-all'>Add to cart</button>
                </div>
            </div>)}
        </div>
    </div>
}

export default WishList;
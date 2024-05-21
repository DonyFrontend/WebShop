import image from './wishlistIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistProductsTC } from '../../../Slices/getWishlistProductSlice';
import { useEffect } from 'react';
import { addBasketProduct } from '../../../Slices/addBasketProductTC';
import { deleteWishlistProductTC } from '../../../Slices/deleteWishlistProductTC';
import { useToast, Button, Box } from '@chakra-ui/react';

const WishList = () => {
    const { products } = useSelector(state => state.getWishlistProductSlice)
    const disptach = useDispatch()
    const toast = useToast();

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
                        <Button
                            onClick={() => {
                                toast({
                                    position: 'bottom-left',
                                    render: () => (
                                        <Box color='white' p={3} bg='darkviolet'>
                                            Delete product from wishlist
                                        </Box>
                                    ),
                                }),
                                deleteProduct(item.id);
                            }
                            }
                        >
                            <img src={image} alt="Error!" />
                        </Button>
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
                    <div onClick={() => disptach(addBasketProduct({
                        product: {
                            title: item.title,
                            description: item.description,
                            images: [item.images],
                            price: item.price,
                        }, newSize: item.size, newColor: item.color
                    }))}>
                        <Button
                            onClick={() =>
                                toast({
                                    position: 'bottom-left',
                                    render: () => (
                                        <Box color='white' p={3} bg='darkviolet'>
                                            Add product to basket
                                        </Box>
                                    ),
                                })
                            }
                            colorScheme='purple'
                        >
                            Add to basket
                        </Button>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
}

export default WishList;
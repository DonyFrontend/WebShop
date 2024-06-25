import image from './wishlistIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addBasketProduct } from '../../../Slices/addBasketProductTC';
import { deleteWishlistProductTC } from '../../../Slices/deleteWishlistProductTC';
import { useToast, Button, Box } from '@chakra-ui/react';
import { getUserTC } from '../../../Slices/getThisUserTC';

const WishList = () => {
    const { user, isFetch } = useSelector(state => state.getThisUserTC);
    const dispatch = useDispatch()
    const toast = useToast();

    useEffect(() => {
        dispatch(getUserTC());
    }, [dispatch])

    if (isFetch) {
        return <h1>Loading...</h1>
    }

    function deleteProduct(product) {
        dispatch(deleteWishlistProductTC(product));
        dispatch(getUserTC());
    }

    function addProduct(item) {
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' p={3} bg='darkviolet'>
                    Add product to basket
                </Box>
            ),
        })

        dispatch(addBasketProduct({
            product: {
                title: item.title,
                description: item.description,
                images: [item.images],
                price: item.price,
            }, newSize: item.size, newColor: item.color
        }))
    }

    return <div className='flex flex-col gap-y-11'>
        <div>
            <h1 className='font-semibold text-3xl text-center lg:text-left'>Wishlist</h1>
        </div>
        <div className='flex flex-col gap-y-10'>
            {user.wishlist.length != 0 ? user.wishlist.map((item, index) => <div key={index} className='w-[100%] flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-col justify-between lg:flex-row items-center gap-x-10'>
                    <div className='flex' onClick={() => deleteProduct(item)}>
                        <Button
                            onClick={() => {
                                toast({
                                    position: 'bottom-left',
                                    render: () => (
                                        <Box color='white' p={3} bg='darkviolet'>
                                            Delete product from wishlist
                                        </Box>
                                    ),
                                })
                            }
                            }
                        >
                            <img src={image} alt="Error!" />
                        </Button>
                    </div>
                    <div>
                        <img src={item.images} alt="Error!" style={{ width: 200 }} />
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        <h1 className='font-bold text-xl'>{item.title}</h1>

                        <div>
                            <div className='flex text-center lg:text-left gap-y-3 lg:gap-y-0 flex-col gap-x-3'>
                                <p className='font-semibold '>Color:</p>
                                <p>{item.color}</p>
                            </div>
                            <div className='flex flex-col text-center lg:text-left lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                                <p className='font-semibold'>Size:</p>
                                <p>{item.size}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex mt-2.5 lg:flex-row flex-col items-center gap-x-12'>
                    <p className='text-lg text-gray-600'>{item.price}$</p>
                    <Button
                        onClick={() => addProduct(item)}
                        colorScheme='purple'
                    >
                        Add to basket
                    </Button>
                </div>
            </div>) : <h1>Dont have</h1>}
        </div>
    </div>
}

export default WishList;
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
            {user.wishlist.length != 0 ? user.wishlist.map((item, index) => <div key={index} className='w-[100%] flex flex-col md:flex-row lg:flex-row justify-between'>
                <div className='flex flex-col justify-between lg:flex-row md:flex-row md:items-start items-center lg:items-center gap-x-10'>
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
                            <img className='w-4 md:w-24 lg:w-3' src={image} alt="Error!" />
                        </Button>
                    </div>
                    <div className='flex w-full mt-2.5 lg:mt-0 md:mt-0 lg:w-52 lg:justify-start justify-center'>
                        <img src={item.images} alt="Error!" style={{ width: 200 }} />
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        <h1 className='font-bold text-center md:text-left lg:text-left text-xl'>{item.title}</h1>

                        <div>
                            <div className='flex text-center justify-center lg:justify-start md:justify-start md:flex-row lg:flex-row md:text-left md:gap-y-0 lg:text-left gap-y-3 lg:gap-y-0 gap-x-3'>
                                <p className='font-semibold '>Color:</p>
                                <p>{item.color}</p>
                            </div>
                            <div className='flex justify-center lg:justify-start md:justify-start text-center gap-x-1 md:flex-row md:text-left md:gap-y-0 lg:text-left lg:flex-row gap-y-1 pt-2.5 lg:pt-0 lg:gap-y-0 lg:gap-x-3'>
                                <p className='font-semibold'>Size:</p>
                                <p>{item.size}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex mt-2.5 lg:flex-row gap-y-1 flex-col md:justify-end items-center gap-x-6'>
                    <p className='text-lg border border-black p-1.5 px-7 rounded-lg text-gray-600'>{item.price}$</p>
                    <Button
                        onClick={() => addProduct(item)}
                        colorScheme='purple'
                    >
                        Add to basket
                    </Button>
                </div>
            </div>) : <div className='flex gap-x-2'>
            <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
            <h1 className='font-semibold text-3xl'>You don`t have any products right now</h1></div>}
        </div>

    </div>
}

export default WishList;

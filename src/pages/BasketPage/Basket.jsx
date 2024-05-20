import { useEffect} from 'react';
import bag from './images/bag.svg';
import { scrollToZero } from '../utils/CustomFC';
import { useSelector, useDispatch } from 'react-redux';
import { basketProductsTC } from '../../Slices/getBasketProductSlice';
import { deleteBasketProductTC } from '../../Slices/deleteBasketProductTC';
import { useToast, Button, Box } from '@chakra-ui/react';

const Basket = () => {
    const { products } = useSelector(state => state.getBasketProductSlice);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        scrollToZero()
        dispatch(basketProductsTC());
    }, [])

    function deleteProduct(id) {
        dispatch(deleteBasketProductTC({ id }))
        dispatch(basketProductsTC());
    }

    let totalPrice = 0;
    products.forEach(element => {
        totalPrice += element.price;
    }); 
    console.log(totalPrice);

    const basketProducts = products.map((item, index) => <div key={index} className="card flex items-center justify-between p-7" style={{ borderBottom: '1px solid #BEBCBD' }}>
        <div className="flex gap-x-[40px] justify-center">
            <div>
                <img src={item.images} alt="Error" width={200} />
            </div>
            <div className="flex flex-col gap-y-4">
                <div>
                    <h1 className="font-medium text-xl">{item.title}</h1>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p>Color : {item.color}</p>
                    <p>Size : {item.size}</p>
                </div>
            </div>
        </div>

        <div className="w-[65%] flex justify-around text-lg gap-x-16">
            <h5>${item.price}</h5>
            <h5>Shipping: FREE</h5>
            <h5>Total: ${item.price}</h5>
            <div onClick={() => deleteProduct(item.id)}>
                <Button
                    onClick={() =>
                        {toast({
                            position: 'bottom-left',
                            render: () => (
                                <Box color='white' p={3} bg='darkviolet'>
                                    Delete product from basket
                                </Box>
                            ),
                        }),
                        deleteProduct(item.id)}
                    }
                >
                    <img src={bag} alt="" />
                </Button>
            </div>
        </div>
    </div>)

    return <div className="flex flex-col">
        <div className="w-[100%] flex items-center justify-between bg-[#3C4242] p-3">
                <h5 className='text-white text-xl'>Your products:</h5>
        </div>

        <div className="w-[100%] flex flex-col gap-y-5">
            {basketProducts}
        </div>

        <div className="w-[100%] flex justify-center p-5  pt-16 bg-[#e7e5e5]">
            <div className="w-[80%] flex justify-between">
                <div className="flex flex-col gap-y-3">
                    <h1 className="font-medium text-xl">Discount  Codes</h1>
                    <p>Enter your coupon code if you have one</p>
                    <div className="flex">
                        <label htmlFor="coupon" className="shadow-md">
                            <input type="text" style={{ border: '1px solid #BEBCBD', borderBottomLeftRadius: '7px', borderTopLeftRadius: '7px', padding: 3 }} />
                            <button className="bg-[#8A33FD] hover:bg-[#6620C1] active:bg-[#4c2185] transition-colors text-white p-1 font-mono" style={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}>Apply Coupon</button>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-y-11">
                    <div className="flex flex-col gap-y-3" style={{ borderBottom: '1px solid black' }}>
                        <p>Sub Total: {totalPrice}</p>
                        <p>Shipping: FREE</p>
                        <h1 className="font-medium">Grand Total: ${totalPrice}</h1>
                    </div>
                    <div>
                        <button className="p-2 bg-[#8A33FD] hover:bg-[#6620C1] active:bg-[#4c2185] transition-colors text-white rounded-[7px]">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Basket;
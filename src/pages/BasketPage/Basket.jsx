import { useEffect } from 'react'; 
import bag from './images/bag.svg'; 
import { scrollToZero } from '../utils/CustomFC'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { deleteBasketProductTC } from '../../Slices/deleteBasketProductTC'; 
import { useToast, Button, Box } from '@chakra-ui/react'; 
import { getUserTC } from '../../Slices/getThisUserTC'; 
import CardPage from '../../components/emptyCardPage/CardPage'; 
import { Link } from 'react-router-dom';
import { addOrderProductsTC } from '../../Slices/addOrderProductsTC';
 
const Basket = () => { 
 
    const { user, isFetch } = useSelector(state => state.getThisUserTC); 
    const dispatch = useDispatch(); 
    const toast = useToast(); 
 
    useEffect(() => { 
        scrollToZero() 
        dispatch(getUserTC()); 
    }, [dispatch]) 
 
    function deleteProduct(product) { 
        toast({ 
            position: 'bottom-left', 
            render: () => ( 
                <Box color='white' p={3} bg='darkviolet'> 
                    Delete product from basket 
                </Box> 
            ), 
        }) 
        dispatch(deleteBasketProductTC(product)) 
        dispatch(getUserTC()); 
    }
    function addProducts() {
        dispatch(addOrderProductsTC({allProducts: user.basket}));
        dispatch(getUserTC());
    }
 
    let totalPrice = 0; 
    if (user?.basket?.length != 0 && !isFetch) { 
        user.basket.forEach(element => { 
            totalPrice += element.price; 
        }); 
    } 
    console.log(totalPrice); 
 
    const basketProducts = isFetch ? <h1 className='font-semibold text-3xl'>Loading...</h1> : user.basket.length == 0 ? <CardPage /> : user.basket.map((item, index) => <div key={index} className="card flex lg:flex-row md:flex-row flex-col items-center justify-between p-7" style={{ borderBottom: '1px solid #BEBCBD' }}> 
        <div className="flex flex-col lg:flex-row md:flex-row gap-x-[40px] justify-center"> 
            <div> 
                <img className='w-full lg:w-52 md:w-48' src={item.images} alt="Error" width={200} /> 
            </div> 
            <div className="flex lg:items-start md:items-start items-center flex-col gap-y-4"> 
                <div> 
                    <h1 className="font-medium lg:text-left md:text-left text-center text-xl">{item.title}</h1> 
                </div> 
                <div className="flex flex-col gap-y-1"> 
                    <p>Color : {item.color}</p> 
                    <p>Size : {item.size}</p> 
                </div> 
            </div> 
        </div> 
 
        <div className="w-[65%] lg:text-left md:text-left text-center items-center lg:items-start md:items-start gap-y-2.5 lg:gap-y-0 md:gap-y-0 mt-5 flex lg:flex-row md:flex-row flex-col  justify-around text-lg gap-x-16"> 
            <h5>${item.price}</h5> 
            <h5>Shipping: FREE</h5> 
            <h5>Total: ${item.price}</h5> 
                <Button 
                    onClick={() => deleteProduct(item)} 
                > 
                    <img src={bag} alt="Error" /> 
                </Button> 
        </div> 
    </div>) 
 
    return <div className="flex flex-col mt-14"> 
        <div className="w-[100%] flex items-center text-center justify-center lg:text-left md:text-left lg:justify-between md:justify-between bg-[#3C4242] p-3"> 
            <h5 className='text-white text-xl'>Your products:</h5> 
        </div> 
 
        <div className="w-[100%] flex flex-col gap-y-5"> 
            {basketProducts} 
        </div> 
 
        <div className="w-[100%] flex justify-center p-5 bg-[#e7e5e5]"> 
            <div className="w-[80%] flex flex-col lg:flex-row md:flex-row justify-between gap-y-20 lg:gap-y-0 md:gap-y-0"> 
                <div className="flex flex-col items-center lg:items-start md:items-start text-center lg:text-left md:text-left gap-y-3"> 
                    <h1 className="flex font-medium text-xl">Discount Codes</h1> 
                    <p>Enter your coupon code if you have one</p>
        <div className="flex"> 
                        <label htmlFor="coupon" className="shadow-md"> 
                            <input type="text" style={{ border: '1px solid #BEBCBD', borderBottomLeftRadius: '7px', borderTopLeftRadius: '7px', padding: 3 }} /> 
                            <button className="bg-[#8A33FD] mt-5 md:mt-0 lg:mt-0 hover:bg-[#6620C1] active:bg-[#4c2185] transition-colors text-white p-1 font-mono" style={{ borderTopRightRadius:'7px', borderBottomRightRadius: '7px' }}>Apply Coupon</button> 
                        </label> 
                    </div> 
                </div> 
                <div className="flex items-center lg:items-start md:items-start text-center lg:text-left md:text-left flex-col gap-y-11 md:gap-y-6 lg:gap-y-11"> 
                    <div className="flex flex-col gap-y-3" style={{ borderBottom: '1px solid black' }}> 
                        <p>Sub Total: {totalPrice}$</p> 
                        <p>Coupon: 0$</p> 
                        <h1 className="font-medium">Grand Total: ${totalPrice}</h1> 
                    </div> 
                    <div> 
                        <Link to={'/profile/orders'} className="p-2 bg-[#8A33FD] hover:bg-[#6620C1] active:bg-[#4c2185] transition-colors text-white rounded-[7px]">Proceed To Checkout</Link> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
} 
 
export default Basket;
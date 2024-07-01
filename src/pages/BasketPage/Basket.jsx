import { useEffect, useState } from 'react';
import bag from './images/bag.svg';
import { scrollToZero } from '../utils/CustomFC';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBasketProductTC } from '../../Slices/deleteBasketProductTC';
import { useToast, Button, Box } from '@chakra-ui/react';
import { getUserTC } from '../../Slices/getThisUserTC';
import CardPage from '../../components/emptyCardPage/CardPage';
import { addOrderProductsTC } from '../../Slices/addOrderProductsTC';
import LoadPage from '../LoadPage/LoadPage';
import { useNavigate } from 'react-router-dom';
import { CouponsSales } from '../utils/Coupons';

const Basket = () => {
    const navigate = useNavigate();
    const { user, isFetch } = useSelector(state => state.getThisUserTC);
    const dispatch = useDispatch();
    const toast = useToast();

    const [userCoupon, setUserCoupon] = useState('');
    const [workCoupons, setWorkoCoupons] = useState(0);

    useEffect(() => {
        scrollToZero()
        dispatch(getUserTC());
    }, [dispatch])

    function showToast(message) {
        toast({
            position: 'bottom-left',
            render: () => (
                <Box color='white' p={3} bg='darkviolet'>
                    {message}
                </Box>
            ),
        })
    }

    function deleteProduct(product) {
        showToast('Delete product from basket');
        dispatch(deleteBasketProductTC(product))
        dispatch(getUserTC());
    }

    function addProducts() {
        if (user.basket.length == 0) {
            showToast('You don`t have any products!');
        } else {
            dispatch(addOrderProductsTC({ allProducts: user.basket, navigate }));
            dispatch(getUserTC());
        }
    }

    const [totalPrice, setTotalPrice] = useState(0);
    const [grandPrice, setGrandPrice] = useState(0);

    useEffect(() => {
        if (user?.basket?.length != 0 & !isFetch) {
            let total = 0;
            user.basket.forEach(element => {
                total += element.price;
            });
            setTotalPrice(total);
            setGrandPrice(total);
        }
    }, [user, isFetch])

    function checkCoupon(e) {
        e.preventDefault();
        if (user.basket.length === 0) {
            showToast('Please buy products!');
        } else if (userCoupon === '') {
            showToast('The input cannot be empty');
        } else {
            const coupon = user.coupons.find(item => item == userCoupon);
            if (coupon === undefined) {
                showToast('The coupon has expired or does not exist.')
            } else {
                const newCoupon = CouponsSales.find(item => item[coupon]);
                console.log(newCoupon[coupon]);
                setWorkoCoupons(newCoupon[coupon]);
                setGrandPrice(grandPrice - newCoupon[coupon]);
            }
        }
    }

    const basketProducts = isFetch ? <div className="h-svh flex items-center">
        <LoadPage />
    </div> : user.basket.length == 0 ? <CardPage /> : user.basket.map((item, index) => <div key={index} className="card flex lg:flex-row md:flex-row flex-col items-center justify-between p-7" style={{ borderBottom: '1px solid #BEBCBD' }}>
        <div className="flex flex-col lg:flex-row md:flex-row gap-x-[40px] justify-center">
            <div>
                <img className='w-full lg:w-52 md:w-48' src={item.images} alt="Error" width={200} />
            </div>
            <div className="flex lg:items-start md:items-start items-center flex-col gap-y-4">
                <div>
                    <h1 className="font-medium lg:text-left md:text-left text-center text-xl">{item.title}</h1>
                </div>
            </div>
        </div>

        <div className="w-[65%] lg:text-left md:text-left text-center items-center lg:items-start md:items-start gap-y-2.5 lg:gap-y-0 md:gap-y-0 mt-5 flex lg:flex-row md:flex-row flex-col  justify-around text-lg gap-x-16">
            <h5>${item.price}</h5>
            <h5>Color: {item.color}</h5>
            <h5>Size: {item.size}  </h5>
            <Button
                onClick={() => deleteProduct(item)}
            >
                <img src={bag} alt="Error!" />
            </Button>
        </div>
    </div>)

    return <div className="flex flex-col">
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
                    <form onSubmit={checkCoupon} className="flex">
                        <label htmlFor="coupon" className="shadow-md">
                            <input type="text" value={userCoupon} onChange={e => setUserCoupon(e.target.value)} style={{ border: '1px solid #BEBCBD', borderBottomLeftRadius: '7px', borderTopLeftRadius: '7px', padding: 3 }} />
                            <button className="bg-[#8A33FD] mt-5 md:mt-0 lg:mt-0 hover:bg-[#6620C1] active:bg-[#4c2185] transition-colors text-white p-1 font-mono" style={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}>Apply Coupon</button>
                        </label>
                    </form>
                </div>
                <div className="flex items-center lg:items-start md:items-start text-center lg:text-left md:text-left flex-col gap-y-11 md:gap-y-6 lg:gap-y-11">
                    <div className="flex flex-col gap-y-3 p-2" style={{ borderBottom: '1px solid black' }}>
                        <p>Sub Total: ${totalPrice}</p>
                        <p>Coupon: {workCoupons}$</p>
                        <div className="flex gap-x-2 items-center"> <h1 className='font-medium'>Grand Total:</h1> {workCoupons === 0 ? <p>${grandPrice}</p> : <div className='flex gap-x-5 items-center'>
                            <div className='flex gap-x-2'>
                                <div className='text-gray-700'> <strike>${totalPrice}</strike> </div>
                                <p>${grandPrice}</p>
                            </div>
                            <div className='border p-1 border-black rounded-md'><p>{-workCoupons}</p></div>
                        </div>}
                        </div>
                    </div>
                    <div>
                        <Button colorScheme='purple' onClick={addProducts}>Proceed To Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Basket;
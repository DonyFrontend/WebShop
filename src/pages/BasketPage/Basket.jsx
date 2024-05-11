import { useEffect } from 'react';
import bag from './images/bag.svg';
import { scrollToZero } from '../utils/CustomFC';

const Basket = () => {
    useEffect(() => {
        scrollToZero()
    }, [])

    return <div className="flex flex-col">
        <div className="w-[100%] flex items-center justify-between bg-[#3C4242] p-3">
            <div className="w-[20%] flex justify-center text-white text-lg">
                <h5>Product Details</h5>
            </div>
            <div className="flex justify-around text-white w-[66%] text-lg gap-x-1">
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Shipping</h5>
                <h5>Subtotal</h5>
                <h5>Action</h5>
            </div>
        </div>

        <div className="w-[100%] flex flex-col gap-y-5">
            <div className="card flex items-center justify-between p-7" style={{borderBottom: '1px solid #BEBCBD'}}>
                <div className="flex gap-x-[40px] justify-center">
                    <div>
                        <img src="https://avatars.mds.yandex.net/i?id=3631379a8fe66c25d99c510770fff6f72ec0e86a-12497467-images-thumbs&n=13" alt="" width={200}/>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <h1 className="font-medium text-xl">Nike Air Jordan</h1>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p>Color : Yellow</p>
                            <p>Size : M</p>
                        </div>
                    </div>
                </div>

                <div className="w-[65%] flex justify-around text-lg gap-x-16">
                        <h5>$29</h5>
                        <h5>1</h5>
                        <h5>FREE</h5>
                        <h5>29%</h5>
                        <img src={bag} alt="Error!" style={{marginRight: 12}}/>
                </div>
            </div>
            <div className="card flex items-center justify-between p-7" style={{borderBottom: '1px solid #BEBCBD'}}>
                <div className="flex gap-x-[40px] justify-center">
                    <div>
                        <img src="https://avatars.mds.yandex.net/i?id=3631379a8fe66c25d99c510770fff6f72ec0e86a-12497467-images-thumbs&n=13" alt="" width={200}/>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <h1 className="font-medium text-xl">Nike Air Jordan</h1>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p>Color : Yellow</p>
                            <p>Size : M</p>
                        </div>
                    </div>
                </div>

                <div className="w-[65%] flex justify-around text-lg gap-x-16">
                        <h5>$29</h5>
                        <h5>1</h5>
                        <h5>FREE</h5>
                        <h5>29%</h5>
                        <img src={bag} alt="Error!" style={{marginRight: 12}}/>
                </div>
            </div>
            <div className="card flex items-center justify-between p-7" style={{borderBottom: '1px solid #BEBCBD'}}>
                <div className="flex gap-x-[40px] justify-center">
                    <div>
                        <img src="https://avatars.mds.yandex.net/i?id=3631379a8fe66c25d99c510770fff6f72ec0e86a-12497467-images-thumbs&n=13" alt="" width={200}/>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <h1 className="font-medium text-xl">Nike Air Jordan</h1>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p>Color : Yellow</p>
                            <p>Size : M</p>
                        </div>
                    </div>
                </div>

                <div className="w-[65%] flex justify-around text-lg gap-x-16">
                        <h5>$29</h5>
                        <h5>1</h5>
                        <h5>FREE</h5>
                        <h5>29%</h5>
                        <img src={bag} alt="Error!" style={{marginRight: 12}}/>
                </div>
            </div>

        </div>

        <div className="w-[100%] flex justify-center p-5  pt-16 bg-[#e7e5e5]">
            <div className="w-[80%] flex justify-between">
                <div className="flex flex-col gap-y-3">
                    <h1 className="font-medium text-xl">Discount  Codes</h1>
                    <p>Enter your coupon code if you have one</p>
                    <div className="flex">
                        <label htmlFor="coupon" className="shadow-md">
                            <input type="text" style={{border: '1px solid #BEBCBD', borderBottomLeftRadius: '7px', borderTopLeftRadius: '7px', padding: 3}}/>
                            <button className="bg-[#8A33FD] hover:bg-[#6620C1] transition-colors text-white p-1 font-mono" style={{borderTopRightRadius: '7px', borderBottomRightRadius: '7px'}}>Apply Coupon</button>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-y-11">
                    <div className="flex flex-col gap-y-3" style={{borderBottom: '1px solid black'}}>
                        <p>Sub Total: $29</p>
                        <p>Shipping: FREE</p>
                        <h1 className="font-medium">Grand Total: $29</h1>
                    </div>
                    <div>
                        <button className="p-2 bg-[#8A33FD] hover:bg-[#6620C1] transition-colors text-white rounded-[7px]">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Basket;
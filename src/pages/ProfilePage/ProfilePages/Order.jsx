const Order = () => {

    return <div className='flex flex-col gap-y-11'>
        <div>
            <h1 className='font-semibold text-3xl'>My Orders</h1>
        </div>

        <div className="flex flex-col gap-y-11">
            <div className="cart flex flex-col p-2 rounded-md">
                <div className="flex flex-col p-2 gap-y-5 bg-[#f1f0f0]">
                    <div>
                        <h1 className="font-semibold text-lg">Order number: #{Date.now()}</h1>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-gray-500"><span className="font-bold">Order Date:</span> {Date()}</p>
                        <p className="text-gray-500"><span className="font-bold">Estimated Delivery Date:</span> 8 June 2023</p>
                        <p className="text-gray-500"><span className="font-bold">Order Status:</span> Inprogress</p>
                        <p className="text-gray-500"><span className="font-bold">Payment Method:</span> Cash on delivery</p>
                    </div>
                </div>

                
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-around">
                        <div>
                            <img src="https://avatars.mds.yandex.net/i?id=93ff1a185887ca7273487ca891da2196db42978e-12569756-images-thumbs&n=13" alt="Error!" style={{ width: 200 }} />
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

                            <div className='flex gap-x-3'>
                                <p className='font-semibold'>Total:</p>
                                <p>$29</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#8A33FD] text-white p-2 rounded-md hover:bg-[#6620C1] transition-all'>View Detail</button>
                    </div>
                </div>
            </div>
            
            <div className="cart flex flex-col p-2 rounded-md">
                <div className="flex flex-col p-2 gap-y-5 bg-[#f1f0f0]">
                    <div>
                        <h1 className="font-semibold text-lg">Order number: #{Date.now()}</h1>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-gray-500"><span className="font-bold">Order Date:</span> {Date()}</p>
                        <p className="text-gray-500"><span className="font-bold">Estimated Delivery Date:</span> 8 June 2023</p>
                        <p className="text-gray-500"><span className="font-bold">Order Status:</span> Inprogress</p>
                        <p className="text-gray-500"><span className="font-bold">Payment Method:</span> Cash on delivery</p>
                    </div>
                </div>

                
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-around">
                        <div>
                            <img src="https://avatars.mds.yandex.net/i?id=93ff1a185887ca7273487ca891da2196db42978e-12569756-images-thumbs&n=13" alt="Error!" style={{ width: 200 }} />
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
                            
                            <div className='flex gap-x-3'>
                                <p className='font-semibold'>Total:</p>
                                <p>$29</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#8A33FD] text-white p-2 rounded-md hover:bg-[#6620C1] transition-all'>View Detail</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Order;
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserTC } from "../../../Slices/getThisUserTC";

const Order = () => {
    const dispatch = useDispatch();
    const { user, isFetch } = useSelector(state => state.getThisUserTC);

    useEffect(() => {
        dispatch(getUserTC());
    }, [dispatch])

    if (isFetch) {
        return <h1>loading</h1>
    }

    return <div className='flex flex-col gap-y-11'>
        <div>
            <h1 className='font-semibold text-3xl text-center lg:text-left'>My Orders</h1>
        </div>

        {isFetch ? <h1 className='font-semibold text-3xl'>Loading...</h1> : user.order.length == 0 ? <div className="flex gap-x-2">
            <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
            <h1 className='font-semibold text-3xl'>You don`t have any orders right now</h1></div> : user.order.map((item, index) => <div key={index} className="flex flex-col gap-y-11">
                <div className="cart flex flex-col p-2 rounded-md">
                    <div className="flex flex-col p-2 gap-y-5 bg-[#f1f0f0]">
                        <div>
                            <h1 className="font-semibold text-lg flex flex-col text-center lg:flex-row">Order number: #{item.number}</h1>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div className="text-gray-500 flex text-center gap-x-1"><span className="font-bold">Order Date:</span> <p>{item.date}</p></div>
                            <div className="text-gray-500 flex text-center gap-x-1"><span className="font-bold">Order Status:</span> <p>Inprogress</p></div>
                            <div className="text-gray-500 flex text-center gap-x-1"><span className="font-bold">Payment Method:</span><p>Cash on delivery</p></div>
                        </div>
                    </div>


                    <div className="flex justify-between items-center flex-col lg:flex-row lg:items-center gap-x-10">
                        <div className="flex items-center justify-around flex-col lg:flex-row lg:items-center gap-x-10">
                            <div>
                                <img src={item.images} style={{ width: 200 }} />
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl text-center lg:text-left '>{item.title}</h1>
                                <div className='flex gap-x-3 flex-col text-center lg:text-left lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                                    <p className='font-semibold'>Color:</p>
                                    <p>{item.color}</p>
                                </div>
                                <div className='flex gap-x-3 flex-col text-center lg:text-left lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                                    <p className='font-semibold'>Size:</p>
                                    <p>{item.size}</p>
                                </div>

                                <div className='flex gap-x-3 flex-col text-center lg:text-left lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                                    <p className='font-semibold'>Price:</p>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <button className='bg-[#8A33FD] active:bg-[#4c2185] text-white p-2 rounded-md hover:bg-[#6620C1] transition-all'>View Detail</button>
                        </div>
                    </div>
                </div>
            </div>)}
    </div>
}

export default Order;
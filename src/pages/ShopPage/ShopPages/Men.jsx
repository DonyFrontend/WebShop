import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { shopPagesTC } from "../../../Slices/shopPagesSlice";
import { Link } from "react-router-dom";
import LoadPage from "../../LoadPage/LoadPage";
import {scrollToZero} from '../../utils/CustomFC';

const Men = () => {
    const { men } = useSelector(state => state.shopPagesSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopPagesTC());
        scrollToZero();
    }, [dispatch])

    if (men.length == 0) {
        return <div className="h-dvh flex items-center">
            <LoadPage />
        </div>
    }

    return <div className="w-[100%] flex justify-center mt-10 pb-6">
        <div className="w-[90%] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-auto gap-9">
            {men.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                <div className='flex flex-col h-[100%] justify-between'>
                    <div>
                        <img src={item.images[0]} alt="Error!" />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <h2 className='font-medium text-xl'>{item.title}</h2>
                        <div className='flex gap-1 text-lg'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                        <p className='text-lg text-gray-600'>{item.colors.length} Colors</p>
                        <p className='font-medium text-base'>Price: ${item.price}</p>
                    </div>
                </div>
            </Link>)}
        </div>
    </div>
}

export default Men;
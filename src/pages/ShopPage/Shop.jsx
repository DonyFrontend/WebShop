import filter from './images/filter.svg';
import AccordionFilter from './Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { scrollToZero } from '../utils/CustomFC';
import { Link } from 'react-router-dom';
import { shopTC } from '../../Slices/getProductsSlice';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        scrollToZero()
        dispatch(shopTC());
    }, [dispatch])

    const selector = useSelector(state => state.getProductsSlice);
    console.log(selector);

    

    return <div className="flex w-[100%] justify-center mt-20">
        <div className="flex w-[95%] justify-between">
            <div className="lg:w-[15%] p-4 gap-y-3 lg:border-r-[1px] lg:border-r-gray-500">
            <div className='sticky left-0 top-12 hidden lg:flex flex-col gap-y-5 p-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-[#807D7E] font-medium text-2xl'>Filter</h1>
                        <img src={filter} alt="Error!" />
                    </div>

                    <div>
                        <AccordionFilter/>
                    </div>
                </div>
            { click ?<div className='flex rounded-lg text-xl text-center flex-col fixed top-0 left-0 gap-3 p-5 md:p-12 bg-white border border-black'>
                <div className='sticky left-0 top-12 flex flex-col gap-y-5 p-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-[#807D7E] font-medium text-2xl md:text-3xl'>Filter</h1>

                        <img src={filter} alt="Error!" />
                    </div>

                    <div>
                        <AccordionFilter/>
                    </div>
                </div>
            </div>

            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {selector.products.length != 0 ? selector.products.map((item, index) => <Link to={`/shop/${item.id}`} key={index}>
                    <div className='flex flex-col h-[100%] justify-between'>
                        <div>
                            <img src={item.images[0]} alt="Error!"/>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-xl'>{item.title}</h2>
                            <div className='flex gap-1 text-lg'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                            <p className='text-lg text-gray-600'>{item.colors.length} Colors</p>
                            <p className='font-medium text-base'>Price: ${item.price}</p>
                        </div>
                    </div>
                </Link>) : <h1 className='font-semibold text-3xl'>Loading...</h1>}
            </div>
        </div>
    </div>
}

export default Shop;
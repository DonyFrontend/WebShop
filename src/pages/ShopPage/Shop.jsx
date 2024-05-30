import filter from './images/filter.svg';
import AccordionFilter from './Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { scrollToZero } from '../utils/CustomFC';
import { Link } from 'react-router-dom';
import { shopTC } from '../../Slices/getProductsSlice';


const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        scrollToZero()
        dispatch(shopTC());

    }, [dispatch])

    const selector = useSelector(state => state.getProductsSlice);
    console.log(selector);

    // const dispatch = useDispatch();

    const [click, setClick] = useState(false)
    function onHandleClick(){
        setClick(!click)
    }
    

    return <div className="flex  w-[100%] justify-center mt-20">
        <div className="flex flex-col md:flex-col lg:flex-row w-[95%] justify-between">
            <div className="lg:w-[15%] p-4 gap-y-3 lg:border-r-[1px] lg:border-r-gray-500">
            <div className='sticky left-0 top-12 hidden lg:flex flex-col gap-y-5 p-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-[#807D7E] font-medium text-2xl'>Filter</h1>
                        <img src={filter} alt="Error!" />
                    </div>

                    <div>
                        <AccordionFilter />
                    </div>
                </div>
            { click ?<div className='flex rounded-lg text-xl text-center flex-col fixed top-0 left-0 gap-3 p-5 md:p-12 bg-white border border-black'>
                <div className='sticky left-0 top-12 flex flex-col gap-y-5 p-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-[#807D7E] font-medium text-2xl md:text-3xl'>Filter</h1>

                        <img src={filter} alt="Error!" />
                    </div>

                    <div>
                        <AccordionFilter />
                    </div>
                </div>
                    <button className='border border-gray-500 rounded-lg px-5 md:mt-5 md:py-2.5' onClick={onHandleClick}>Close</button>
                </div> : ''}
            <div  className='inline-block lg:hidden'>
            <button className='' onClick={onHandleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 md:w-10 md:h-10 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
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
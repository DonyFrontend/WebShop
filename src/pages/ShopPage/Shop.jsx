import { NavLink } from 'react-router-dom';
import filter from './images/filter.svg';
import navBarIcon from './images/navBarIcon.svg';
import { sortData } from './utils/data';
import AccordionFilter from './Accordion';
import { useSelector,  useDispatch } from 'react-redux';
import { shopTC } from '../../Slices/getProductsSlice';
import { useEffect } from 'react';

const Shop = () => {
    const navBar = sortData.map((item, index) => <div key={index}>
        <NavLink className='flex justify-between'>
            <p className='text-[#807D7E] font-semibold'>{item}</p>
            <img src={navBarIcon} alt="Error!" />
        </NavLink>
    </div>)

    const selector = useSelector(state => state.getProductsSlice);
    console.log(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopTC());
    }, [])

    return <div className="flex w-[100%] justify-center mt-20">
        <div className="flex w-[90%] justify-between">
            <div className="w-[15%] flex flex-col gap-y-5 p-3" style={{borderRight: '1px solid gray'}}>
                <div className='flex justify-between'>
                    <h1 className='text-[#807D7E] font-medium text-2xl'>Filter</h1>
                    <img src={filter} alt="Error!" />
                </div>

                <div className='flex flex-col gap-y-4'  >
                    {navBar}
                </div>

                <div>
                    <AccordionFilter/>
                </div>
            </div>

            <div className="w-[80%] grid grid-cols-3 gap-5">
                {selector.products.map((item, index) => <div key={index} className='flex flex-col justify-between'>
                    <div>
                        <img src={item.images[0]}  alt="Error!" />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <h2 className='font-medium text-xl'>{item.title}</h2>
                        <div className='flex gap-1 text-lg'>{item.categories.map((item, index) => <p key={index} className='text-gray-600'>{item}/</p>)}</div>
                        <p className='text-lg text-gray-600'>{item.colors.length} Colors</p>
                        <p className='font-medium text-base'>Price: ${item.price}</p>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}

export default Shop;
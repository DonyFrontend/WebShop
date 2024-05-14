import { NavLink } from 'react-router-dom';
import filter from './images/filter.svg';
import navBarIcon from './images/navBarIcon.svg';
import { sortData } from './utils/data';
import AccordionFilter from './Accordion';

const Shop = () => {
    const navBar = sortData.map((item, index) => <div key={index}>
        <NavLink className='flex justify-between'>
            <p className='text-[#807D7E] font-semibold'>{item}</p>
            <img src={navBarIcon} alt="Error!" />
        </NavLink>
    </div>)


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

            <div className="w-[70%]">

            </div>
        </div>
    </div>
}

export default Shop;
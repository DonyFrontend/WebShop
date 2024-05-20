import logo from '../../assets/logo.png';
import CustomLink from './CustomLink';
import CustomImagesLink from './CustomImagesLink';
import Select from './images/Select.png';
import Profile from './images/Profile.png';
import Bag from './images/Bag.png';
import { useState } from 'react';

const Header = () => {
    const [click, setClick] = useState(false)
    function onHandleClick(){
        setClick(!click)
    }

    return <header className="fixed top-0 w-full z-10 bg-white flex flex-row justify-between h-14 items-center p-6 py-2 border-gray-400 border-b-[1px]">
        <div>
            <img src={logo} width={120} alt="Error!"/>
        </div>
        <div className='hidden lg:flex gap-x-5'>
            <CustomLink to={'/'} text={'Home'}/>
            <CustomLink to={'/shop'} text={'Shop'}/>
            <CustomLink to={'/men'} text={'Men'}/>
            <CustomLink to={'/women'} text={'Women'}/>
            <CustomLink to={'/shoe'} text={'Shoe'}/>
        </div>

        { click ?<div className='flex rounded-lg text-xl text-center flex-col fixed top-0 right-0 gap-3 p-5 md:p-12 bg-white border border-black'>
            <div className='border-b-2 border-gray-300'>
                <h1>MENU</h1>
            </div>
            <CustomLink to={'/'} text={'Home'}/>
            <CustomLink to={'/shop'} text={'Shop'}/>
            <CustomLink to={'/men'} text={'Men'}/>
            <CustomLink to={'/women'} text={'Women'}/>
            <CustomLink to={'/shoe'} text={'Shoe'}/>

           <button className='border border-gray-500 rounded-lg px-5 md:mt-5 md:py-2.5' onClick={onHandleClick}>Close</button>
        </div> : ""} 
        <div>
            <label htmlFor="search">
                <input type="text" placeholder='Search...' className='w-16 md:w-40 lg:w-56 border-gray-500 border-[1px] rounded-lg active:border-violet-600 p-1'/>
            </label>
        </div>
        <div className='flex gap-x-1'>
            <CustomImagesLink to={'/profile/wishlist'} image={Select}/>
            <CustomImagesLink to={'/profile/user'} image={Profile}/>
            <CustomImagesLink to={'/basket'} image={Bag}/>
        </div>
        <div  className='inline-block lg:hidden'>
            <button onClick={onHandleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    </header>
}

export default Header;
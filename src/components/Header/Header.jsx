import logo from '../../assets/logo.png';
import CustomLink from './CustomLink';
import CustomImagesLink from './CustomImagesLink';
import Select from './images/Select.png';
import Profile from './images/Profile.png';
import Bag from './images/Bag.png';

const Header = () => {

    return <header className="fixed top-0 w-[100%] z-10 bg-white flex flex-row justify-between h-14 items-center p-6 py-2 border-gray-400 border-b-[1px]">
        <div>
            <img src={logo} width={120} alt="Error!"/>
        </div>
        <div className='flex gap-x-5'>
            <CustomLink to={'/'} text={'Home'}/>
            <CustomLink to={'/shop'} text={'Shop'}/>
            <CustomLink to={'/men'} text={'Men'}/>
            <CustomLink to={'/women'} text={'Women'}/>
            <CustomLink to={'/shoe'} text={'Shoe'}/>
        </div>
        <div>
            <label htmlFor="search">
                <input type="text" placeholder='Search...' className='p-1 border-gray-500 border-[1px] rounded-lg active:border-violet-600'/>
            </label>
        </div>
        <div className='flex gap-x-1'>
            <CustomImagesLink to={'/select'} image={Select}/>
            <CustomImagesLink to={'/profile'} image={Profile}/>
            <CustomImagesLink to={'/basket'} image={Bag}/>
        </div>
    </header>
}

export default Header;
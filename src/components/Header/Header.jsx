import logo from '../../assets/logo.png';
import CustomLink from './CustomLink';
import CustomImagesLink from './CustomImagesLink';
import Select from './images/Select.png';
import Profile from './images/Profile.png';
import Bag from './images/Bag.png';
import adminIcon from './images/adminPage.svg';
import { useEffect, useState } from 'react';
import { findProductsTC } from '../../Slices/findProductTC';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Input } from '@chakra-ui/react';
import inputImage from './images/inputImage.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { getUserTC } from '../../Slices/getThisUserTC';


const Header = () => {
    const [click, setClick] = useState(false);
    function onHandleClick() {
        setClick(!click)
    }



    const [thisUser, setUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, thisUser => {
            thisUser ? setUser(true) : setUser(false);
        })
    }, [])


    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    const products = useSelector(state => state.findProductTC);
    const { user } = useSelector(state => state.getThisUserTC);

    useEffect(() => {
        dispatch(getUserTC());
    }, [dispatch])

    function onHandleTitle(e) {
        setTitle(e.target.value);
        dispatch(findProductsTC({ title }));
    }

    function closeDiv() {
        setTitle('');
    }
    
    
    return <header className="sticky top-0 w-full z-20 bg-white flex flex-row justify-between h-14 items-center p-6 py-2 border-gray-400 border-b-[1px]">
        <div>
            <Link to='/'>
                <img src={logo} width={120} alt="Error!" />
            </Link>
        </div>
        <div className='hidden lg:flex gap-x-5'>
            <CustomLink to={'/'} text={'Home'} />
            <CustomLink to={'/shop'} text={'Shop'} />
            <CustomLink to={'/men'} text={'Men'} />
            <CustomLink to={'/women'} text={'Women'} />
            <CustomLink to={'/shoe'} text={'Shoe'} />
        </div>

        {click ? <div className='flex rounded-lg text-xl md:text-2xl text-center flex-col fixed top-0 right-0 gap-3 p-5 md:p-12 bg-white border border-black'>
            <div className='border-b-2 border-gray-300'>
                <h1>MENU</h1>
            </div>
            <CustomLink to={'/'} text={'Home'} />
            <CustomLink to={'/shop'} text={'Shop'} />
            <CustomLink to={'/men'} text={'Men'} />
            <CustomLink to={'/women'} text={'Women'} />
            <CustomLink to={'/shoe'} text={'Shoe'} />
            {thisUser ? "" :
                <Button colorScheme='purple'><Link to={'/SignUp'}>Sign Up</Link></Button>
            }

    {thisUser ?  <div className='md:hidden gap-1.5 grid grid-cols-2 border-t-black border-t'>
                    <CustomImagesLink to={'/profile/wishlist'} image={Select} />
                    <CustomImagesLink to={'/profile/user'} image={Profile} />
                    <CustomImagesLink to={'/basket'} image={Bag} />
                {user.isAdmin ? 
                    <CustomImagesLink to={'/adminPanel/products'} image={adminIcon}/>
                 : ''}
            </div> : ""}
        

            <button className='border border-gray-500 rounded-lg px-5 md:mt-5 md:py-2.5' onClick={onHandleClick}>Close</button>
        </div>  : ""}
        
        <form className='flex gap-x-3'>
            <label htmlFor="search">
                <Input focusBorderColor='purple.500' value={title} onChange={onHandleTitle} type="text" placeholder='Search...' className='w-16 md:w-40 lg:w-56 border-gray-500 border-[1px] rounded-lg active:border-violet-600 p-1' />
            </label>
            {/* <button className='px-3 bg-[#8A33FD] hover:bg-[#6620C1] active:bg-[#4c2185] transition-colors text-white rounded-[7px]'>Find</button> */}
        </form>

        {thisUser ?
            <div className='hidden md:flex lg:flex gap-x-6'>
                <div className='flex  gap-x-1'>
                    <CustomImagesLink to={'/profile/wishlist'} image={Select} />
                    <CustomImagesLink to={'/profile/user'} image={Profile} />
                    <CustomImagesLink to={'/basket'} image={Bag} />
                </div>
                {user.isAdmin ? <div className='flex  pr-2 lg:mr-0 gap-x-1'>
                    <CustomImagesLink to={'/adminPanel/products'} image={adminIcon}/>
                </div> : ''}
            </div> : <div className='hidden lg:flex gap-x-1'>
                <Button colorScheme='purple'><Link to={'/SignUp'}>Sign Up</Link></Button>
                <Button colorScheme='purple'><Link to={'/SignIn'}>Log In</Link></Button>
            </div>

        }



        <div className='inline-block lg:hidden'>
            <button onClick={onHandleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>

        {title.length != 0 ? <div className='fixed right-0 top-14 bg-white h-64 w-[74%] lg:w-[100%] lg:top-auto lg:bottom-0  border-[#8A33FD] overflow-y-scroll flex flex-col p-2 gap-y-3'>
            <div className='fixed hidden lg:block top-[445px] left-0'>
                <Button onClick={closeDiv}>
                    <img src={inputImage} alt="Error!" />
                </Button>
            </div>
            {title.length == 0 ? '' : products.products.length != 0 ? products.products.map((item, index) => <div key={index} className="flex justify-between items-center">
                <div className="flex  items-center justify-around gap-x-4">
                    <div>
                        <img src={item.images[0]} alt="Error!" style={{ width: 200 }} />
                    </div>

                    <div className='flex flex-col justify-around gap-2'>
                        <h1 className='font-semibold text-2xl'>{item.title}</h1>
                        <div className='hidden md:flex gap-x-3'>
                            <p className='font-semibold text-lg'>Color:</p>
                            <div className='flex text-lg'>{item.colors.map((item, index) => <p key={index}>{item}/ </p>)}</div>
                        </div>

                        <div className=' gap-x-3 hidden md:flex'>
                            <p className='font-semibold text-lg'>Price:</p>
                            <p className='text-lg'>${item.price}</p>
                        </div>
                    </div>

                </div>

                <div onClick={closeDiv}>
                    <Link to={`/shop/${item.id}`} className='bg-[#8A33FD] flex active:bg-[#4c2185] text-white p-2 rounded-md hover:bg-[#6620C1] transition-all'>View Detail</Link>
                </div>
            </div>) : <h1 className='font-semibold text-3xl md:text-4xl lg:text-3xl'>{products.isFetch == false ? 'Type name of product and click on button' : "Apparently, we don't have such a product :("}  </h1>}
    </div> : ''}
    </header >
}

export default Header;
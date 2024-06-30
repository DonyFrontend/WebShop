import Orders from './Images/orders.svg';
import Heart from './Images/heart.svg';
import User from './Images/user.svg';
import CustomLink from './CustomLink';
import { Routes, Route } from 'react-router-dom';
import UserPage from './ProfilePages/User';
import WishList from './ProfilePages/WishList';
import { useEffect, useState } from 'react';
import Order from './ProfilePages/Order';
import ProfileModal from './ProfileModal';
import { scrollToZero } from '../utils/CustomFC';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTC } from '../../Slices/getThisUserTC';
import LoadPage from '../LoadPage/LoadPage';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        scrollToZero();
        dispatch(getUserTC());
    }, [dispatch])

    const [click, setClick] = useState(false);

    const {user, isFetch} = useSelector(state => state.getThisUserTC);

    if (isFetch) {
        return <div className="h-dvh flex items-center">
        <LoadPage />
    </div>
    }

    function onHandleClick() {
        setClick(!click)
    }

    return (
        <>
            <div className="flex w-[100%] justify-center mt-6 h-[600px]">
                <div className="w-[90%] flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between">
                    <div className='w-[20%] hidden lg:flex flex-col gap-y-12 p-5' style={{ borderRight: '1px solid black' }}>
                        <div className='hidden lg:flex flex-col gap-y-2'>
                            <div className='flex gap-x-2'>
                                <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                                <h1 className='font-semibold text-3xl'>Hello {user.name}</h1>
                            </div>
                            <p className='text-gray-400'>Welcome to your Account</p>
                        </div>
                         <div className='hidden lg:flex flex-col gap-y-4 sticky top-24'>
                            <CustomLink image={Orders} text={'My orders'} to={'/profile/orders'} />
                            <CustomLink image={Heart} text={'Wishlist'} to={'/profile/wishlist'} />
                            <CustomLink image={User} text={'My info'} to={'/profile/user'} />
                            <ProfileModal />
                        </div>
                    </div>


                     {click ? <div className='flex z-50 rounded-lg text-xl text-center flex-col fixed top-0 left-0 gap-3 p-5 bg-white border border-black'>
                            <CustomLink image={Orders} text={'My orders'} to={'/profile/orders'} />
                            <CustomLink image={Heart} text={'Wishlist'} to={'/profile/wishlist'} />
                            <CustomLink image={User} text={'My info'} to={'/profile/user'} />
                            <ProfileModal />
                            <button className='border border-gray-500 rounded-lg px-5 md:mt-5 md:py-2.5' onClick={onHandleClick}>Close</button>
                        </div> : ''}
                            <div className='w-full inline-block lg:hidden'>
                                <button onClick={onHandleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                   

                    <div className='w-[75%] overflow-y-scroll'>
                        <Routes>
                            <Route path='/*' element={<UserPage user={user}/>}></Route>
                            <Route path='wishlist' element={<WishList />}></Route>
                            <Route path='orders' element={<Order />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;

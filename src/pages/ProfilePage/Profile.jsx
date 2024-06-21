import Orders from './Images/orders.svg';
import Heart from './Images/heart.svg';
import User from './Images/user.svg';
import CustomLink from './CustomLink';
import { Routes, Route } from 'react-router-dom';
import UserPage from './ProfilePages/User';
import WishList from './ProfilePages/WishList';
import { useEffect } from 'react';
import Order from './ProfilePages/Order';
import ProfileModal from './ProfileModal';
import { scrollToZero } from '../utils/CustomFC';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTC } from '../../Slices/getThisUserTC';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        scrollToZero();
        dispatch(getUserTC());
    }, [dispatch])

    const {user, isFetch} = useSelector(state => state.getThisUserTC);

    if (isFetch) {
        return <h1 className='font-semibold text-3xl'>Loading...</h1>
    }

    return (
        <>
            <div className="flex w-[100%] justify-center mt-6 h-[600px]">
                <div className="w-[90%] flex justify-between">
                    <div className='w-[20%] flex flex-col gap-y-12 p-5' style={{ borderRight: '1px solid black' }}>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex gap-x-2'>
                                <span style={{ width: 5, height: 40, backgroundColor: '#8A33FD', borderRadius: 15 }}></span>
                                <h1 className='font-semibold text-3xl'>Hello {user.name}</h1>
                            </div>
                            <p className='text-gray-400'>Welcome to your Account</p>
                        </div>

                        <div className='flex flex-col gap-y-4 sticky top-24'>
                            <CustomLink image={Orders} text={'My orders'} to={'/profile/orders'} />
                            <CustomLink image={Heart} text={'Wishlist'} to={'/profile/wishlist'} />
                            <CustomLink image={User} text={'My info'} to={'/profile/user'} />
                            <ProfileModal />
                        </div>
                    </div>

                    <div className='w-[75%]'>
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

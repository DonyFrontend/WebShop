import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { scrollToZero } from "../utils/CustomFC";
import { getUserTC } from "../../Slices/getThisUserTC";
import ChatImage from './images/chat.svg';
import ProductsImage from './images/products.svg';
import CustomLink from "../ProfilePage/CustomLink";
import Products from "./AdminPages/Products";
import FeedBacks from "./AdminPages/FeedBacks";
import { getFeedBacks } from "../../Slices/getFeedBacksTC";
import Chat from "./AdminPages/Chat";
import ChatWithUser from "./AdminPages/ChatWithUser";
import LoadPage from "../LoadPage/LoadPage";

const Admin = () => {

    const [click, setClick] = useState(false)
    function onHandleClick() {
        setClick(!click)
    }

    const dispatch = useDispatch();


    useEffect(() => {
        scrollToZero();
        dispatch(getUserTC());
        dispatch(getFeedBacks());
    }, [dispatch])

    const {isFetch} = useSelector(state => state.getThisUserTC);

    if (isFetch) {
        return <div className="h-dvh flex items-center">
        <LoadPage />
    </div>
    }
    return <div className="flex min-h-[300px] w-[100%] justify-center mt-2">
        <div className='flex lg:hidden justify-start items-start'>
                <button className='' onClick={onHandleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 md:w-10 md:h-10 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
    <div className="w-[98%] flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:items-start">
        <div className='w-[10%] hidden lg:flex flex-col gap-y-12 p-1' style={{ borderRight: '1px solid black' }}>
            <div className='flex flex-col gap-y-4 sticky top-16'>
                <CustomLink image={ProductsImage} text={'Products'} to={'/adminPanel/products'} />
                <CustomLink image={ChatImage} text={'Chat'} to={'/adminPanel/chat'} />
                <CustomLink image={ChatImage} text={'FeedBacks'} to={'/adminPanel/feedBacks'} />
            </div>
        </div>

        {click ?<div className='z-50 flex rounded-lg text-xl text-center flex-col fixed top-0 left-0 gap-3 p-5 md:p-8 bg-white border border-black'>
            <div className='flex flex-col gap-y-3 sticky'>
                <CustomLink image={ProductsImage} text={'Products'} to={'/adminPanel/products'} />
                <CustomLink image={ChatImage} text={'Chat'} to={'/adminPanel/chat'} />
                <CustomLink image={ChatImage} text={'FeedBacks'} to={'/adminPanel/feedBacks'} />
            <button className='border border-gray-500 rounded-lg px-5 md:mt-5 md:py-2.5' onClick={onHandleClick}>Close</button>
            </div>
                </div> : ""}
                

        <div className='w-[87%]'>
            <Routes>
                <Route path="/*" element={<Products/>}/>
                <Route path="feedBacks" element={<FeedBacks/>}/>
                <Route path="chat" element={<Chat/>}/>
                <Route path="chat/:id" element={<ChatWithUser/>}/>
            </Routes>
        </div>
    </div>
</div>
}

export default Admin;
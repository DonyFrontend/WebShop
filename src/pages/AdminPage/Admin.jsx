import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
    <div className="w-[98%] flex justify-between">
        <div className='w-[10%]flex flex-col gap-y-12 p-1' style={{ borderRight: '1px solid black' }}>
            <div className='flex flex-col gap-y-4 sticky top-16'>
                <CustomLink image={ProductsImage} text={'Products'} to={'/adminPanel/products'} />
                <CustomLink image={ChatImage} text={'Chat'} to={'/adminPanel/chat'} />
                <CustomLink image={ChatImage} text={'FeedBacks'} to={'/adminPanel/feedBacks'} />
            </div>
        </div>

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
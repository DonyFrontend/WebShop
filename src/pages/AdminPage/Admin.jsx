import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { scrollToZero } from "../utils/CustomFC";
import { getUserTC } from "../../Slices/getThisUserTC";
import ChatImage from './images/chat.svg';
import ProductsImage from './images/products.svg';
import CustomLink from "../ProfilePage/CustomLink";
import Products from "./AdminPages/Products";

const Admin = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        scrollToZero();
        dispatch(getUserTC());
    }, [dispatch])

    const {isFetch} = useSelector(state => state.getThisUserTC);

    if (isFetch) {
        return <h1 className='font-semibold text-3xl'>Loading...</h1>
    }
    
    return <div className="flex min-h-[300px] w-[100%] justify-center mt-32">
    <div className="w-[98%] flex justify-between">
        <div className='w-[10%] flex flex-col gap-y-12' style={{ borderRight: '1px solid black' }}>
            <div className='flex flex-col gap-y-4'>
                <CustomLink image={ProductsImage} text={'Products'} to={'/adminPanel/products'} />
                <CustomLink image={ChatImage} text={'Chat'} to={'/adminPanel/chat'} />
            </div>
        </div>

        <div className='w-[75%]'>
            <Routes>
                <Route path="/*" element={<Products/>}/>
            </Routes>
        </div>
    </div>
</div>
}

export default Admin;
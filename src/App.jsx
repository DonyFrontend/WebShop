import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import Profile from './pages/ProfilePage/Profile';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SingUp from './components/authentification/singup';
import Shop from './pages/ShopPage/Shop';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { shopTC } from './Slices/getProductsSlice'; 

import Product from './pages/ProductPage/productPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopTC());
}, [])
  return (
    <>
    <Header/>

    <div className='mt-[55px]'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/profile/*' element={<Profile/>}/>
        <Route path='/SingUp' element={<SingUp/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/productpage' element={<Product/>}/>
      </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default App

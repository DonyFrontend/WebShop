import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import Profile from './pages/ProfilePage/Profile';
import WishList from './pages/ProfilePage/ProfilePages/WishList';
import { Routes, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { shopTC } from './Slices/getProductsSlice';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    dispatch(shopTC());
  }, [])

  const selector = useSelector(state => state.getProductsSlice);
  console.log(selector);
  const dispatch = useDispatch();

  return (
    <>
    <Header/>

    <div className='mt-[55px]'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/profile/*' element={<Profile/>}/>
        <Route path='/profile/wishlist' element={<WishList/>}/>
      </Routes>
    </div>

    {selector.products.map((item, index) => <div key={index}>
      <div>categories {item.categories}</div>
      <div>colors {item.colors}</div>
      <div>desc {item.description}</div>
      <div>
        {item.images.map((item, index) => <div key={index}>
          <img style={{width: 200}} src={item} alt="" />
        </div>)}
      </div>
    </div>)}
    </>
  )
}

export default App

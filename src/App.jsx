import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import Profile from './pages/ProfilePage/Profile';
import WishList from './pages/ProfilePage/ProfilePages/WishList';
import { Routes, Route } from 'react-router-dom';

function App() {

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
    </>
  )
}

export default App

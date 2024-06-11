import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import Profile from './pages/ProfilePage/Profile';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/authentification/signup';
import SignIn from './components/authentification/signIn';
import Shop from './pages/ShopPage/Shop';
import Product from './pages/ProductPage/productPage';
import Error from './components/error/Error';
import OrderPage from './components/completeOrderPage/OrderPage';
import CardPage from './components/emptyCardPage/CardPage';
import Wish from './components/Wishlist/Wish';
function App() {

  return (
    <>
    <Header/>

    <div className='mt-[55px]'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/profile/*' element={<Profile/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<Product/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/orderpage' element={<OrderPage/>}/>
        <Route path='/cardpage' element={<CardPage/>}/>
        <Route path='/wish' element={<Wish/>}/>
      </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default App

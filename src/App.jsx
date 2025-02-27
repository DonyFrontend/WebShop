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
import Admin from './pages/AdminPage/Admin';
import ChatPage from './pages/ChatPage/ChatPage';
import FeedBacksPage from './pages/FeedBacksPage/FeedBacksPage';
import Men from './pages/ShopPage/ShopPages/Men';
import Women from './pages/ShopPage/ShopPages/Women';
import Shoe from './pages/ShopPage/ShopPages/Shoe';

function App() {

  return (
    <>
    <Header/>

    <div>
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
        <Route path='/adminPanel/*' element={<Admin/>}/>
        <Route path='/FeedBacks' element={<FeedBacksPage/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/shoe' element={<Shoe/>} />
      </Routes>

      <ChatPage/>
    </div>

    <Footer/>
    </>
  )
}

export default App

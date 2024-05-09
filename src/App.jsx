import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signup';

function App() {

  return (
    <>
    <Header/>

    <div className='mt-[55px]'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/profile/*' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default App

import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import Profile from './pages/ProfilePage/Profile';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
// import SingIn from './components/authentification/singIn';
// import SingUp from './components/authentification/singup';

function App() {

  return (
    <>
    <Header/>
<<<<<<< HEAD

    <div className='mt-[55px]'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/profile/*' element={<Profile/>}/>
      </Routes>
    </div>
=======
  
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      {/* <Route path='/profile' element={<SingIn/>}/> */}
      {/* <Route path='/SingUp' element={<SingUp/>}/> */}
      <Route path='/basket' element={<Basket/>}/>
    </Routes>

    <Footer/>
>>>>>>> e53ace2b948cfe70d8fe9bf70548ccd3da99b7a5
    </>
  )
}

export default App

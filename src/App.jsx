import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
// import SingIn from './components/authentification/singIn';
// import SingUp from './components/authentification/singup';

function App() {

  return (
    <>
    <Header/>
  
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      {/* <Route path='/profile' element={<SingIn/>}/> */}
      {/* <Route path='/SingUp' element={<SingUp/>}/> */}
      <Route path='/basket' element={<Basket/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App

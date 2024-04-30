import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

function App() {

  return (
    <>
    <Header/>
  
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/basket' element={<Basket/>}/>
    </Routes>
    </>
  )
}

export default App

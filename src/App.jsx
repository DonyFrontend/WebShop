import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Basket from './pages/BasketPage/Basket';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Header/>

    <div className='mt-[55px]'>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/basket' element={<Basket/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App

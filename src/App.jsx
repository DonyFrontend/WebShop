import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Header/>

    <div className='mt-20'>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App

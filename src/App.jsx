import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import SingIn from './components/Header/authentification/singIn';
import SingUp from './components/Header/authentification/singup';

function App() {

  return (
    <>
    <Header/>

    <div className='mt-20'>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/profile' element={<SingIn/>}/>
      <Route path='/SingUp' element={<SingUp/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App

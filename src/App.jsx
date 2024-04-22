import './App.css'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
    </>
  )
}

export default App

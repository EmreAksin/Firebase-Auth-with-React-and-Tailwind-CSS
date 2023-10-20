import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import './style/app.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' exact element = {<Home/>} />
      <Route path='/register' exact element = {<Register/>} />
      <Route path='/login' exact element = {<Login/>} />
      <Route path='/profile' exact element = {<Profile/>} />
     </Routes>
     <Footer />
    </>
  )
}

export default App

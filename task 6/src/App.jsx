import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Home from './pages/Home'
import PageNotFound from './components/PageNotFound'
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login'  element={<Login/>} />
  
        
          <Route path='/home'  element={<ProtectedRoute><Home/></ProtectedRoute>} />
        
          <Route path='/register'  element={<Register/>} />
           <Route path='/about'  element={<ProtectedRoute><About/></ProtectedRoute>} />
            <Route path='*'  element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
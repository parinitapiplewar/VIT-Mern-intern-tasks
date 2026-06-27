import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const User=JSON.parse(sessionStorage.getItem('Token'));

  const navigate=useNavigate();
  const handleLogout=()=>{
   sessionStorage.removeItem('Token')
   toast.success("User logout successfully");
   setTimeout(()=>{
    navigate('/login');

   },1000)
   
  }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'end'}}>
          <button className="btn btn-danger"style={{position:'fixed'}} onClick={handleLogout} >LogOut</button>
      </div>
      <h1>Welcome back {User.Fname},😍</h1>
      <h3>Home page</h3>

      <ToastContainer/>
    </div>
  )
}

export default Home
import React, { useRef } from 'react'
import '../assets/LoginStyling.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const emailRef=useRef(" ");
  const passwordRef=useRef(" ");
 const handleSubmit = (e) => {
    e.preventDefault();
     const userDetails=JSON.parse(localStorage.getItem(emailRef.current.value));
    if( userDetails){
    if(userDetails.Password==passwordRef.current.value){
      toast.success("user login successfully");
      e.target.reset();
      userDetails.authenticated=true;
      sessionStorage.setItem('Token',JSON.stringify(userDetails));
      
      setTimeout(()=>{
        navigate('/home');
      },3000)
    }
    else{
      toast.error("Invalid Username and Password");
      e.target.reset();
    }
    }
    else{
      toast.error("user does not exist");
      setTimeout(()=>{
        navigate('/register');

      },2000);
      
    }
     
    
    
  
  };
  return (
    <div id='main'>
        <div id='loginPanel'>
    <form action="" onSubmit={handleSubmit}>
      <div className='row'>
        <label htmlFor="email" className='col'>Email:</label>
        <input type="email"className='col' name="email"  style={{width:'200px',borderRadius:'10px',border:'none'}}placeholder='Enter your Email:' ref={emailRef} />
      </div>
        
        <br/>
        <br />
        <div className='row'>
        <label htmlFor="password" className='col'>Password:</label>
        <input type="password" className='col' id="password" style={{width:'200px',borderRadius:'10px',border:'none'}} placeholder='Enter your Password:'  ref={passwordRef}/>
        </div>

        <br /><br />
        <div id='buttondiv'>
            <button type="submit" style={{backgroundColor:'blue',color:'white',border:'none'}}>Submit</button>
        <button type="reset" style={{backgroundColor:'orange',color:'white', border:'none'}}>Reset</button>
        </div>
        
        </form>   </div>
        <ToastContainer/>
    </div>
  )
}

export default Login
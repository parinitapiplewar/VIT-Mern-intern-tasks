import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const navigate=useNavigate();
  
   const [details, setDetails] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
    gender: "",
    city: "",
    state: "",
    zip: "",
    authenticated:false,
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(e.target.name +" : " + e.target.value);
  };
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
   event.preventDefault();
   const form =event.currentTarget;
   if(!form.checkValidity()){
    event.stopPropagation();
    toast.error("All fields are required");
    setValidated(true);
   }
   else{
    try{
    localStorage.setItem(
      details.Email,
      JSON.stringify(details)
    );
    toast.success("User registered successfully");
    setTimeout(()=>{
     navigate('/login');
    },1000)
    
    

   }catch(error){
    toast.error("Error saving data");
    
    console.error(error);
   };
   }
   
   setValidated(true);

  };

  return (
    <>
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', marginTop:"180px",height:"400px"}}>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" p="5px" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name='Fname'
            onChange={handleChange}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
             name='Lname'
            onChange={handleChange}
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
               name='Email'
            onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose valid Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
       
         <Form.Group as={Col} md="6" controlId="validationCustom0Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required   name='Password'
            onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6"controlId="validationCustom07">
           <Form.Label>Gender</Form.Label>
           <br />
           <input className="form-check-input m-2" type="radio" name="gender" id="Male" onChange={handleChange} value='Male' />
          <label className="form-check-label m-2" htmlFor="Male">
          Male
          </label>
          <input className="form-check-input m-2" type="radio" name="gender" id="Female"  onChange={handleChange} value='Female'/>
          <label className="form-check-label m-2" htmlFor="Female">
          Female
          </label>
          <input className="form-check-input m-2" type="radio" name="gender" id="Others"  onChange={handleChange} value='Others'/>
          <label className="form-check-label m-2" htmlFor="Others">
          Others
          </label>
         
        </Form.Group>

      </Row>
      <Row className="mb-3">
         <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required   name='city'
            onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required  name='state'
            onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required   name='zip'
            onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" style={{position:'relative',left:'30%',top:'20px'}} >Submit</Button>
      <Button type="reset" variant='warning' style={{position:'relative',left:'40%',top:'20px'}}>Reset</Button>
    </Form>
    
    </div>
    <ToastContainer/>
 
</>
  )
}

export default Register;
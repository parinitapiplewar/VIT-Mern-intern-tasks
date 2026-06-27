import './homeStyling.css'
const Home=()=>{
     return (
    <form action="">
    <fieldset>
        <h3>Please SignUp 😊 </h3>
       
       
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" placeholder="Enter your Name"/>
        <br /><br />
         <label htmlFor="Password">Password:</label>
        <input type="password" id="Password" placeholder="Enter your Password"/>
        <br /><br />
         <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" placeholder="Enter your Email"/>
        <br /><br />
         <label htmlFor="Phone">Phone:</label>
        <input type="tel" pattern="[6-9]{1}[0-9]{9}"  id="Phone" placeholder="Enter your Name"/>
        <br /><br />
        <button type="submit">Submit</button>
    </fieldset>
</form>

)}
export default Home;
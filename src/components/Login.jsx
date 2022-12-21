// import './App.css';
import React, { useState } from "react";



function Login() {
  const[panel,setPanel]=useState(true)
  const [all,setAll]=useState([])
  const[value,setValue]=useState({
    namee:'',
    email:'',
    password:''
  })
 



  return (
    <>
     <header>
    <h1>  Qeydiyyat...</h1>
   <div>
    <button onClick={(e)=>setPanel(false)}>Register</button>
  
   </div>
     </header>
     <section className='login_div'>
      {
        panel ? <h1>Xos Gelmisiz {value.namee}</h1> :  <div>
          <h1>Register</h1>
          <form>
            
            <label>

              Name:
              <input type={'text'} placeholder='Adinizi daxil edin...'  onChange={(e)=>setValue({...value,namee:e.target.value})}/>
            </label><br/>
            <label>
              Email:
              <input type={'text'} placeholder='Adinizi daxil edin...' onChange={(e)=>setValue({...value,email:e.target.value})}/>
            </label>
            <label><br/>
              Password:
              <input type={'text'} placeholder='Adinizi daxil edin...'onChange={(e)=>setValue({...value,password:e.target.value})}/>
            </label>
          </form>
          <button type='submit' onClick={(e)=>setPanel(true)}>Send</button>

        </div>
      }
     

     </section>
   
    </>
  );
}

export default Login;

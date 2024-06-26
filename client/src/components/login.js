import React, { useState } from 'react'
import { auth } from '../config/firbase-cocfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

const signin=async()=>{
  await createUserWithEmailAndPassword(auth,email,password);
}

  return (
    <div class="container">
    <h1>Login</h1>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <button onClick={signin} type='button' class="btn">Sign In</button>
  
  </div>
  )
}

export default Login
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  return (
    <div>
         <div className="container">
        <div className="login-text">
                <h1> Login </h1>

            </div>
            </div>
        <div className="login-text1" style="text-align: left;">
            Not a registered member? <span><Link href="../Sign_up/Sign_up.html" style="color: #2190FF;"> Sign_up</Link></span>
        </div>
        <div className="login-form">
            <form>
                <div class="form-group">
                    <label for="email"> Email </label>
                    <input type="text" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                </div>
                <div class="btn-group">
                    <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                    <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                  </div>
                  <br />
                  <div class="login-text">
                    Forgot Password?
                  </div>
                  
                  </form>

                  </div>
                  </div>
       
  )
}

export default Login;
import React from 'react';
import {Link} from 'react-router-dom';
import './Sign_up.css';

const Sign_up = () => {
  return (
    <div>
        <div class=" container">
        <div class="signup-text">
            <h1>Sign Up</h1>
        </div>
        </div>
        <div class="signup-text1" style="text-align: left;">
            Already a member? <span><Link href="../Login/Login.html" style="color: #2190FF;"> Login</Link></span>
        </div>
        <div class="signup-form">
            <div class="signup-grid">
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" required class="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" pattern="[1-9]{1}[0-9]{9}" required class="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                </div>
                <div class="btn-group">
                    <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                    <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                </div>
                </div>
            </form>
       
    </div>

       </div>
       </div>
    


  )
}

export default Sign_up
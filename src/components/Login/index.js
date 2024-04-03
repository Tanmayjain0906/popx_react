import React from 'react'
import "./style.css"

function Login() {
    return (
        <div className='container'>
            <div className='data'>
                <h1>Signin to your PopX account</h1>
                <p className="para">lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <form className='login-form'>
                    <div className="input-container">
                        <input type="email" id="email" placeholder='Enter email address'/>
                        <label for="email">Email Address</label>
                    </div>
                    <div className="input-container">
                        <input type="password" id="password" placeholder='Enter password'/>
                        <label for="password">Password</label>
                    </div>
                </form>
                <button id='login-btn'>Login</button>
            </div>
        </div>
    )
}

export default Login;

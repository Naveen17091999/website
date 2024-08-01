import React, { useState } from 'react';
import logo from "../../assets/amazon_logo.png";
import "./SignIn.scss";

const SignIn = () => {
    const [info, setinfo] = useState("give your information")

    const handleClick = () => {
        console.log(info);
    }

    const handleChange = (e) => {
        setinfo(e.target.value)
    }
    return (
        <div id="SignIn">
            <div className="img">
                <img src={logo} alt="" />
                <span>.in</span>
            </div>


            <div className='form'>
                <h3>Sign in or create account</h3>

                <div className="field">
                    <h5>Enter mobile number or email</h5>
                    <input type="text" onChange={handleChange} />
                    <button onClick={handleClick}>Continue</button>
                </div>

                <p>By continuing, you agree to Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.</p>
                <hr />
                <h5>Buying for work?</h5>
                <p id="shop">Shop on Amazon Business</p>
            </div>
            <hr id='hr' />
        </div>
    )
}

export default SignIn

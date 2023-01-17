import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form>
                <input type="text" placeholder='Your Name' name="" id="" /><br />
                <input type="email" placeholder='Your Email ID' name="" id="" /><br />
                <input type="password" placeholder='Password' name="" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
export default Register;
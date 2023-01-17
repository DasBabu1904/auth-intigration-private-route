import React from 'react';
import useFirebase from '../hooks/useFirebase';

const LogIn = () => {
    const { signInWithGoogle } = useFirebase();
    return (

        <div>
            <div>
                <button
                    onClick={signInWithGoogle}
                    style={{ margin: "20px", backgroundColor: "aqua", borderRadius: "5px" }}
                >
                    Login with google
                </button>
            </div>


            <h1>Please Log in</h1>
            <input type="email" placeholder='Your Email ID' name="" id="" /><br />
            <input type="password" placeholder='Password' name="" id="" /> <br />
            <input type="submit" value="Login" />
        </div>
    );
};

export default LogIn;
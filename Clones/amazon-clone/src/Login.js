import React from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { useState } from "react"
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // FireBase Sign IN

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
    }

    const register = e => {
        e.preventDefault();
        //Firebase register

        auth
        .createUserWithEmailAndPassword(email,password)
        .then ((auth) => {
        console.log(auth);
        if (auth) {
            history.push('/')
        }
    })
        .catch(error=>alert(error.message))

    }
    return (
        <div className='login'>
            <Link to = '/'>
            <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'  />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign IN</button>
                </form>
                <p>Lorem ispum hello hello kdasdasjndnjasdnjansndnajnsdnansndnanskndkansdkna</p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login

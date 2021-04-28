import { useState, useContext } from "react";
import { Redirect, withRouter } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { userService } from '../utils/user.service';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authContext = useContext(AuthContext);

    const [loginSuccess, setLoginSuccess] = useState();
    const [loginError, setLoginError] = useState();
    const [loginLoading, setLoginLoading] = useState(false);
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);

    const submitCredentials = async (e) => {
        e.preventDefault();

        try {
            setLoginLoading(true);
            const json = await userService.login(username, password);
            // console.log(json); // remove later
            if (json.non_field_errors) {
                throw new Error(json.non_field_errors[0]);
            }
            authContext.setAuthState(json);
            setLoginSuccess(json.message);
            setLoginError('');
            setTimeout(() => {
                setRedirectOnLogin(true);
            }, 700);
        } catch (error) {
            setLoginLoading(false);
            setLoginError(error.message);
            setLoginSuccess(null);
        }
    }

    return (
        <>
        {redirectOnLogin && <Redirect to='/dashboard' />}
        <h3>Login</h3>

        <em>{ loginSuccess }</em>
        <em>{ loginError }</em>

        <form onSubmit={submitCredentials}>
            <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} name='username' placeholder='Username' required autoFocus /> <br/>
            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} name='password' placeholder='Password' required /> <br/>

            <button type='submit' disabled={loginLoading}>Login</button>
        </form>
        </>
    );
}

// export default Login;
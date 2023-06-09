import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess('Login Successfully!!');
            setError('');
            navigate(from, {replace:true});
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required />
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide</span> : <span>Show</span>
                            }
                        </small>
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='already-msg'><small>New to Ema-John?</small><Link to="/signup">Create new account</Link></p>
            <p className='error-msg'>{error}</p>
            <p className='error-msg'>{success}</p>
        </div>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    
    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        // console.log(email, password, confirm,name);

        // validation
        setError('');
        if(password !== confirm){
            setError('Password did not match');
            return;
        }
        else if(password < 6){
            setError('Password must be 6 characters or longer');
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser,loggedUser.displayName);
            form.reset();
        })
        .catch(error => {
            setError(error.message);
        })
    }
    
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="" required />
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="" required />
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm Password</label>
                <input type="password" name="confirm" id="" required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p className='already-msg'><small>Already have an account?</small><Link to="/login">Login</Link></p>
        <p className='error-msg'>{error}</p>
    </div>
    );
};

export default SignUp;
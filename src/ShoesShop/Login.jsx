import React from 'react'
import { useFormik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginFacebook from './LoginFacebook'

const Login = () => {
    const navigate = useNavigate();
    const frmLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const res = await axios({
                    url: 'https://shop.cyberlearn.vn/api/Users/signin',
                    method: 'POST',
                    data: values
                });
                console.log(res.data.content);

                const token = res.data.content.accessToken;
                const userLogin = JSON.stringify(res.data.content);
                localStorage.setItem('accessToken', token);
                localStorage.setItem('userLogin', userLogin);


                navigate('/profile');

            } catch (error) {
                console.error('Login failed:', error);
                alert('Login failed: Please check your credentials and try again.');
            }0
        }
    });
    return (
        <div className='login container pt-5 pb-3' style={{ background: '#fffcfc' }}>
            <div className="form-group ps-5 ms-5">
                <h1 className=''>Login</h1>
                <hr />
            </div>
            <form className='d-flex flex-column align-items-center' onSubmit={frmLogin.handleSubmit}>
                <div className="form-group" style={{ width: 443 }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' placeholder='email' className='form-control' onChange={frmLogin.handleChange} />
                </div>
                <div className="form-group mt-2" style={{ width: 443 }}>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" name='password' placeholder='password' className='form-control' onChange={frmLogin.handleChange} />
                </div>
                <div className="form-group">
                    <NavLink to='/register' className='text-decoration-none'>Register now ?</NavLink>
                    <button className='ms-4 btn my-2 rounded rounded-pill text-white px-4 py-1.5' style={{ background: '#6200ee' }}>LOGIN</button>
                </div>
                <LoginFacebook/>
            </form>
        </div>
    )
}

export default Login
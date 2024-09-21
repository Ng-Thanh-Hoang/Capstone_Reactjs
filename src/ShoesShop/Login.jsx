import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginFacebook from './LoginFacebook';

const Login = () => {
  const navigate = useNavigate();

  // Kiểm tra nếu đã đăng nhập thì điều hướng tới trang profile
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      navigate('/profile'); 
    }
  }, [navigate]); 

  // Validation 
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email không được để trống'; 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Định dạng email không hợp lệ'; 
    }

    if (!values.password) {
      errors.password = 'Mật khẩu không được để trống'; 
    } else if (values.password.length < 6) {
      errors.password = 'Mật khẩu phải có ít nhất 6 ký tự'; 
    }

    return errors;
  };

  const frmLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate, 
    onSubmit: async (values) => {
      try {
        const res = await axios({
          url: 'https://shop.cyberlearn.vn/api/Users/signin',
          method: 'POST',
          data: values,
        });
        console.log(res.data.content);

        const token = res.data.content.accessToken;
        const userLogin = JSON.stringify(res.data.content);
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userLogin', userLogin);
        navigate('/profile'); // Điều hướng tới trang profile sau khi đăng nhập thành công
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed: Please check your credentials and try again.');
      }
    },
  });

  return (
    <div className="login container pt-5 pb-3" style={{ background: '#fffcfc' }}>
      <div className="form-group ps-5 ms-5">
        <h1>Login</h1>
        <hr />
      </div>
      <form className="d-flex flex-column align-items-center" onSubmit={frmLogin.handleSubmit}>
        <div className="form-group" style={{ width: 443 }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="form-control"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
            value={frmLogin.values.email}
          />
          {frmLogin.errors.email && frmLogin.touched.email && (
            <p className="text-danger">{frmLogin.errors.email}</p>
          )}
        </div>
        <div className="form-group mt-2" style={{ width: 443 }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            className="form-control"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
            value={frmLogin.values.password}
          />
          {frmLogin.errors.password && frmLogin.touched.password && (
            <p className="text-danger">{frmLogin.errors.password}</p>
          )}
        </div>
        <div className="form-group">
          <NavLink to="/register" className="text-decoration-none">Register now?</NavLink>
          <button className="ms-4 btn my-2 rounded rounded-pill text-white px-4 py-1.5" style={{ background: '#6200ee' }}>LOGIN</button>
        </div>
        <LoginFacebook />
      </form>
    </div>
  );
};

export default Login

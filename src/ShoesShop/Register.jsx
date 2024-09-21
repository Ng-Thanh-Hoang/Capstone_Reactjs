import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { handleChangeInputAction } from '../redux/reducers/userReducer';

const Register = () => {
    const { userRegister } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State lưu lỗi validation
    const [errors, setErrors] = useState({});

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        // Tạo action payload để đưa dữ liệu lên redux
        const action = handleChangeInputAction({ id, value });
        dispatch(action);
        console.log('action', action);
    }

    // Hàm validate form
    const validateForm = () => {
        let validationErrors = {};
        if (!userRegister.email) {
            validationErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(userRegister.email)) {
            validationErrors.email = 'Email không hợp lệ';
        }
        if (!userRegister.password) {
            validationErrors.password = 'Mật khẩu không được để trống';
        } else if (userRegister.password.length < 6) {
            validationErrors.password = 'Mật khẩu phải ít nhất 6 ký tự';
        }
        if (!userRegister.passwordComfirm) {
            validationErrors.passwordComfirm = 'Vui lòng xác nhận mật khẩu';
        } else if (userRegister.password !== userRegister.passwordComfirm) {
            validationErrors.passwordComfirm = 'Mật khẩu không khớp';
        }
        if (!userRegister.name) {
            validationErrors.name = 'Tên không được để trống';
        }
        if (!userRegister.phone) {
            validationErrors.phone = 'Số điện thoại không được để trống';
        } else if (!/^\d{10,11}$/.test(userRegister.phone)) {
            validationErrors.phone = 'Số điện thoại không hợp lệ';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0; // Trả về true nếu không có lỗi
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const res = await axios.post('https://shop.cyberlearn.vn/api/Users/signup', userRegister);
                alert('Đăng ký thành công');
                localStorage.setItem('',)
                navigate('/profile');
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("Validation failed");
        }
    }

    return (
        <div className='register container pb-5 py-5 pb-3' style={{ background: '#fffcfc' }}>
            <div className="form-group ps-5 ms-5">
                <h1 className=''>Register</h1>
                <hr />
            </div>
            <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <div className="form d-flex justify-content-between">
                    <div className="form1">
                        <div className="form-group" >
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='email'
                                className='form-control'
                                value={userRegister.email}
                                onChange={handleChangeInput}
                            />
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="password">Password</label>
                            <input
                                id='password'
                                type="password"
                                name='password'
                                placeholder='password'
                                className='form-control'
                                value={userRegister.password}
                                onChange={handleChangeInput}
                            />
                            {errors.password && <p className="text-danger">{errors.password}</p>}
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="passwordComfirm">Confirm Password</label>
                            <input
                                id='passwordComfirm'
                                type="password"
                                name='passwordComfirm'
                                placeholder='password confirm'
                                className='form-control'
                                value={userRegister.passwordComfirm}
                                onChange={handleChangeInput}
                            />
                            {errors.passwordComfirm && <p className="text-danger">{errors.passwordComfirm}</p>}
                        </div>
                    </div>
                    <div className="form2">
                        <div className="form-group" >
                            <label htmlFor="name">Name</label>
                            <input
                                type="name"
                                id='name'
                                name='name'
                                placeholder='name'
                                className='form-control'
                                value={userRegister.name}
                                onChange={handleChangeInput}
                            />
                            {errors.name && <p className="text-danger">{errors.name}</p>}
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="phone">Phone</label>
                            <input
                                id='phone'
                                type="text"
                                name='phone'
                                placeholder='phone'
                                className='form-control'
                                value={userRegister.phone}
                                onChange={handleChangeInput}
                            />
                            {errors.phone && <p className="text-danger">{errors.phone}</p>}
                        </div>
                        <div className="form-group mt-2">
                            <div className="gender" value={userRegister.gender} onChange={handleChangeInput}>
                                <label className="title" htmlFor="gender">Gender</label>
                                <input className="form-check-input mx-4" type="radio" name="gender" value="true" onChange={handleChangeInput} />
                                <input className="form-check-input mx-2" type="radio" name="gender" value="false" onChange={handleChangeInput} />
                                <br />
                                <label className="title ms-5 ps-3" htmlFor="gender">Male</label>
                                <label className="title ms-2" htmlFor="gender">Female</label>
                            </div>
                        </div>
                        <button className='btn rounded-5 mt-2 text-white px-4 py-1.5' type='submit' style={{ background: '#6200ee', }}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;

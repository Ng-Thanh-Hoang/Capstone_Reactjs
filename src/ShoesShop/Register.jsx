import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { handleChangeInputAction } from '../redux/reducers/userReducer';

const Register = () => {
    const { userRegister } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        //Tạo action payload để đưa dữ liệu lên redux
        const action = handleChangeInputAction({ id, value });
        dispatch(action);
        console.log('action', action);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(userRegister);
        try {
            const res = await axios.post('https://shop.cyberlearn.vn/api/Users/signup', userRegister);
            alert('Đăng ký thành công');
            navigate('/profile');
        } catch (err) {
            console.log(err);
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
                            <input type="email" id='email' name='email' placeholder='email' className='form-control' value={userRegister.id} onChange={handleChangeInput}/>
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" name='password' placeholder='password' className='form-control' value={userRegister.password} onChange={handleChangeInput}/>
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="passwordComfirm">Confirm Password</label>
                            <input id='passwordComfirm' type="passwordComfirm" name='comfirmPassword' placeholder='password comfirm' className='form-control' value={userRegister.passwordComfirm} onChange={handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form2">
                        <div className="form-group" >
                            <label htmlFor="name">Name</label>
                            <input type="name" id='name' name='name' placeholder='name' className='form-control' value={userRegister.name} onChange={handleChangeInput}/>
                        </div>
                        <div className="form-group mt-2" >
                            <label htmlFor="phone">Phone</label>
                            <input id='phone' type="phone" name='phone' placeholder='phone' className='form-control' value={userRegister.phone} onChange={handleChangeInput}/>
                        </div>
                        <div className="form-group mt-2">
                            <div className="gender" value={userRegister.gender} onChange={handleChangeInput}>
                                <label className="title" htmlFor="gender">Gender</label>
                                <input className="form-check-input mx-4" type="radio" name="flexRadioDefault" defaultValue="true" />
                                <input className="form-check-input mx-2" type="radio" name="flexRadioDefault" defaultValue="false" />
                                <br />
                                <label className="title ms-5 ps-3" htmlFor="gender">Male</label>
                                <label className="title ms-2" htmlFor="gender">Female</label>
                            </div>
                            <button className='btn rounded-5 mt-2 text-white px-4 py-1.5' type='submit' style={{ background: '#6200ee', }}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
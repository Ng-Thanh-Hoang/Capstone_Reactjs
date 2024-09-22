import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        email: '',
        phone: '',
        name: '',
        password: '',
        gender: true,
    });

    // Lấy dữ liệu giỏ hàng từ Redux store
    const cartStore = useSelector((state) => state.cartSliceReducer.cart);

    const getProfileApi = async () => {
        try {
            // Lấy thông tin userLogin từ localStorage
            const userLogin = JSON.parse(localStorage.getItem('userLogin'));

            if (!userLogin) {
                navigate('/login');
                return;
            }

            // Gán thông tin userLogin vào profile state
            setProfile({
                email: userLogin.email,
                phone: userLogin.phone || '',
                name: userLogin.name || '',
                password: '',
                gender: userLogin.gender || true,
            });
        } catch (err) {
            console.error('Không thể lấy được thông tin profile:', err);
            alert('Không thể lấy được thông tin profile!');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Hàm cập nhật profile
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/updateProfile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                data: profile,
            });
            alert('Cập nhật thông tin thành công!');
            console.log('Cập nhật thành công:', response.data);
        } catch (error) {
            console.error('Lỗi khi cập nhật thông tin:', error);
            alert('Cập nhật thông tin thất bại!');
        }
    };

    useEffect(() => {
        getProfileApi();
    }, []);

    return (
        <div className='profile container mt-5'>
            <h1 className='ps-4 w-50'>Profile</h1>
            <form className='ms-5 my-4 border-bottom pb-2' onSubmit={handleUpdate}>
                <div className="row">
                    <div className="col-3" style={{ width: 225 }}>
                        <img src="../../public/img/user.png" alt="user" />
                    </div>
                    <div className="col-4 me-5 mt-4">
                        <div className="form-group" style={{ width: 443 }}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='email'
                                className='form-control'
                                value={profile.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4" style={{ width: 443 }}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                id='phone'
                                type="phone"
                                name='phone'
                                placeholder='phone'
                                className='form-control'
                                value={profile.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-4 mt-4">
                        <div className="form-group" style={{ width: 443 }}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="name"
                                id='name'
                                name='name'
                                placeholder='name'
                                className='form-control'
                                value={profile.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4" style={{ width: 443 }}>
                            <label htmlFor="password">Password</label>
                            <input
                                id='password'
                                type="password"
                                name='password'
                                placeholder='password'
                                className='form-control'
                                value={profile.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='group d-flex mt-2' style={{ width: 443 }}>
                            <div className="gender">
                                <label className="title" htmlFor="gender">Gender</label>
                                <input
                                    className="form-check-input mx-4"
                                    type="radio"
                                    name="gender"
                                    value="true"
                                    checked={profile.gender === true}
                                    onChange={() => setProfile({ ...profile, gender: true })}
                                />
                                <input
                                    className="form-check-input mx-2"
                                    type="radio"
                                    name="gender"
                                    value="false"
                                    checked={profile.gender === false}
                                    onChange={() => setProfile({ ...profile, gender: false })}
                                />
                                <br />
                                <label className="title ms-5 ps-3" htmlFor="gender">Male</label>
                                <label className="title ms-2" htmlFor="gender">Female</label>
                            </div>
                        </div>
                        <button className='btn rounded-5 mt-2 text-white px-4 py-1.5' type='submit' style={{ background: '#6200ee' }}>
                            Update
                        </button>
                    </div>
                </div>
            </form>

            <div className="menu">
                <h3 className='d-inline ms-5 px-3 border border-top-0'>Order history</h3>
                <h3 className='d-inline border px-3 border-top-0'>Favourite</h3>
            </div>
            <div className='item-cart mt-5'>
                <p>+ Orders have been placed on 09 - 19 - 2020</p>
                <table className='text-start'>
                    <thead className="table-header mt-2" style={{ background: '#d9d9d9' }}>
                        <tr>
                            <th>id</th>
                            <th>img</th>
                            <th>name</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartStore.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td><img src={item.image} alt={item.name} width={50} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <span className='mx-2 d-inline-block px-4' style={{ background: '#d9d9d9' }}>{item.quantity}</span>
                                </td>
                                <td>{(item.price * item.quantity).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile

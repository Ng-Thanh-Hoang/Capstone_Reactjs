import React from 'react'

const Profile = () => {
    return (
        <div className='profile container mt-5'>
            <h1 className='ps-4 w-50'>Profile</h1>
            <form className='ms-5 my-4 border-bottom pb-2'>
                <div className="row">
                    <div className="col-3" style={{ width: 225 }}>
                        <img src="../../public/img/user.png" alt="user" />
                    </div>
                    <div className="col-4 me-5 mt-4">
                        <div className="form-group" style={{ width: 443 }}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' placeholder='email' className='form-control' />
                        </div>
                        <div className="form-group mt-4" style={{ width: 443 }}>
                            <label htmlFor="phone">Phone</label>
                            <input id='phone' type="phone" name='phone' placeholder='phone' className='form-control' />
                        </div>
                    </div>
                    <div className="col-4 mt-4">
                        <div className="form-group" style={{ width: 443 }}>
                            <label htmlFor="name">Name</label>
                            <input type="name" id='name' name='name' placeholder='name' className='form-control' />
                        </div>
                        <div className="form-group mt-4" style={{ width: 443 }}>
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" name='password' placeholder='password' className='form-control' />
                        </div>
                        <div className='group d-flex mt-2' style={{ width: 443 }}>
                            <div className="gender">
                                <label className="title" htmlFor="gender">Gender</label>
                                <input className="form-check-input mx-4" type="radio" name="flexRadioDefault" defaultValue="true" />
                                <input className="form-check-input mx-2" type="radio" name="flexRadioDefault" defaultValue="false" />
                                <br />
                                <label className="title ms-5 ps-3" htmlFor="gender">Male</label>
                                <label className="title ms-2" htmlFor="gender">Female</label>
                            </div>
                            <button className='btn rounded-5 mt-2 text-white px-4 py-1.5' type='submit' style={{ background: '#6200ee' }}>Update</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="menu">
                <h3 className='d-inline ms-5 px-3 border border-top-0'>Order history</h3>
                <h3 className='d-inline border px-3 border-top-0'>Favourite</h3>
            </div>
            <div className='item-cart mt-5'>
                <p className=''>+ Orders have been placed on 09 - 19 - 2020</p>
                <table style={{}} className='text-start'>
                    <thead className="table-header mt-2" style={{ background: '#d9d9d9' }}>
                        <tr className='ms-2'>
                            <th>id</th>
                            <th>img</th>
                            <th>name</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img src="../../public/img/Shoes.png" alt="Product 1" width={50} /></td>
                            <td>Product 1</td>
                            <td>1000</td>
                            <td>
                                <span className='mx-2 d-inline-block px-4' style={{ background: '#d9d9d9' }}>1</span>
                            </td>
                            <td>1000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='item-cart pb-5'>
                <p className='pt-5'>+ Orders have been placed on 09 - 19 - 2020</p>
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
                        <tr>
                            <td>1</td>
                            <td><img src="../../public/img/Shoes.png" alt="Product 1" width={50} /></td>
                            <td>Product 1</td>
                            <td>1000</td>
                            <td>
                                <span className='mx-2 d-inline-block px-4' style={{ background: '#d9d9d9' }}>1</span>
                            </td>
                            <td>1000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile
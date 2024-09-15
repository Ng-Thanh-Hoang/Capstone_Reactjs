import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ProductList = () => {
    const [arrProduct, setArrproduct] = useState([]);
    const getAllProductApi = async () => {
        const res = await axios.get('https://shop.cyberlearn.vn/api/Product')
        setArrproduct(res.data.content);
        console.log()
    }

    useEffect(() => {
        getAllProductApi();
    }, [])
    return (
        <div className='product container'>
            <h1 className='w-50'>Product Feature</h1>
            <div style={{ paddingBottom: 30 }} className='body'>
                <div className="row text-center" style={{ marginLeft: 80 }}>
                    {arrProduct.map((item) => {
                        return <div className="col-4 pe-0 mt-5" key={item.id}>
                            <i class="fa fa-heart"></i>
                            <div className="img py-2" style={{ background: '#f8f8f8' }}>
                                <img src={item.image} alt width={250} />
                                <div className="text-start ms-3 pb-2">
                                    <h3 className='fs-5'>{item.name}</h3>
                                    <p className="d-inline">{item.shortDescription}</p>
                                </div>
                            </div>
                            <div className="price d-flex">
                                <NavLink to={`/detail/${item.id}`} className="buy w-50 border-0 px-2 py-3 text-decoration-none text-black" style={{ background: '#9DE167', fontWeight: 400}}
                                >Buy now</NavLink>
                                <span className="w-50 pt-3 " style={{ background: '#dedddc', fontWeight: 600 }}>85$</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductList
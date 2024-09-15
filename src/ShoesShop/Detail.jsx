import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Detail = () => {
    const [prodDetail, setProdDetail] = useState({})
    const [number, setNumber] = useState()
    const param = useParams();
    const dispatch = useDispatch()
    console.log(param);
    const getProductByid = async () => {
        const res = await fetch(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${param.prodId}`);
        const jsonRes = await res.json();
        console.log(jsonRes.content)
        setProdDetail(jsonRes.content);
    }
    useEffect(() => {
        //Gọi khi html load xong
        getProductByid();
    }, [param.prodId])
    return (
        <>
            <div className='detail container'>
                <div className="row w-100 ms-5 mt-5">
                    <div className="col-4 text-center" style={{ background: '#f8f8f8' }}>
                        <img src={prodDetail.image} alt="shoes" className='pt-5' width={250} />
                    </div>
                    <div className="col-8 w-50 ms-5 ps-5">
                        <h1>{prodDetail.name}</h1>
                        <p>{prodDetail.description}</p>
                        <h3 style={{ color: '#2bdb1c' }} className='mb-4'>Available size </h3>
                        <div className="menu">
                            {prodDetail.size?.map((size, index) => {
                                return <button key={index} style={{
                                    background: ` ${size === number ? 'rgb(242,18,153)' : '#EEE'}`
                                }} className='p-2 mx-2 rounded rounded-0 border-0' onClick={() => {
                                    setNumber(size);
                                }}>{size}</button>
                            })}
                        </div>
                        <h3 className='my-3 text-danger fw-bold'>{prodDetail.price}$</h3>
                        <div className="group-button">
                            <button className='px-3 py-1 border-0 text-white' style={{ background: '#6c8af5' }} onClick={() => {
                                setNumber(prodDetail.quantity += 1)
                            }}>+</button>
                            <span className='px-3'>{prodDetail.quantity}</span>
                            <button className='px-3 py-1 border-0 text-white' style={{ background: '#6c8af5' }}
                                onClick={() => {
                                    setNumber(prodDetail.quantity -= 1)
                                }}>-</button>
                        </div>
                        <button className='btn-end p-2 border-0 mt-2 px-3'
                        onClick={() => {
                            const action = {
                              type:'cartReducer/addProductAction',
                              payload: {...prodDetail,quantity:1},
                             }
                             dispatch(action)
                             console.log(action)
                          }}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="realate container mt-4">
                <h1 className='text-center'>-Realate Product -</h1>
                <div className='body'>
                    <div className="row text-center">
                        {prodDetail.relatedProducts?.map((prodRelate, index) => {
                            return <div className="col-4 pe-0 mt-5" key={index}>
                                <i class="fa fa-heart"></i>
                                <div className="img py-2" style={{ background: '#f8f8f8' }}>
                                    <img src={prodRelate.image} alt width={250} />
                                    <div className="text-start pb-2 ms-4">
                                        <h3>{prodRelate.name}</h3>
                                        <p className="d-inline">{prodRelate.shortDescription}</p>
                                    </div>
                                </div>
                                <div className="price d-flex">
                                    <NavLink to={`/detail/${prodRelate.id}`} className="buy w-50 border-0 px-2 py-3 text-decoration-none text-black" style={{ background: '#9DE167', fontWeight: 400 }}>Buy now</NavLink>
                                    <span className="w-50 pt-3 " style={{ background: '#dedddc', fontWeight: 600 }}>85$</span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
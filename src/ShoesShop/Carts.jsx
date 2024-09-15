import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantityProductAction, deleteProductAction } from '../redux/reducers/cartReducer';
import { Divider, Radio, Table } from 'antd';


const Carts = () => {
  const cartStore = useSelector(state => state.cartSliceReducer.cart);
  console.log(cartStore)
  const dispatch = useDispatch();
  const columns = [
    {
      title:<th><input type="checkbox"/></th>,
      dataIndex:<th><input type="checkbox" /></th>,
      render:(value,record)=>{
        return <td><input type="checkbox" /></td>
      }
    },
    {
      title:'id',
      dataIndex:'id'
    },
    {
      title:'image',
      dataIndex:'image',
      render:(value,record)=>{
        return <img src={record.image} width={50} alt='...'></img>
      }
    },
    {
      title:'name',
      dataIndex:'name'
    },{
      title:'quantity',
      dataIndex:'quantity',
      render:(value,record)=>{
        return <>
        <button className="btn text-white" style={{ background: '#6200ee' }} onClick={()=>{
          const payload = {
            id:record.id,
            quantity:1
          }
          const action = changeQuantityProductAction(payload);
          //Đưa action lên reducer
          dispatch(action);
        }}>+</button>
        <span className='d-inline-block' style={{ background: '#d9d9d9' }}>{value}</span>
        <button className="btn text-white" style={{ background: '#6200ee' }} onClick={()=>{
          const payload = {
            id:record.id,
            quantity:-1
          }
          const action = changeQuantityProductAction(payload);
          //Đưa action lên reducer
          dispatch(action);
        }}>-</button>
        </>
      }
    },
    {
      title:'price',
      dataIndex:'price',
    },
    {
      title:'total',
      dataIndex:'total',
      render:(value,record)=>{
        return (record.price * record.quantity).toLocaleString();
      }
    },
    {
      title:'action',
      dataIndex:'action',
      render:(value,record)=>{
        return <>
         <button className="btn me-2 text-white" style={{ background: '#6200ee' }}>EDIT</button>
         <button className="btn text-white" style={{ background: '#eb5757' }}
         onClick={()=>{
          //Tạo ra action
          const action = deleteProductAction(record.id);
          //Dispatch action
          dispatch(action)
        }}>DELETE</button>
        </>
      }
    }
  ]
  return (
    <div className='cart container pb-5 py-5 pb-3' style={{ background: '#fffcfc' }}>
      <div className="form-group ps-5 ms-5">
        <h1>Carts</h1>
        <hr />
      </div>
      {/* <table className='text-center'>
        <thead className="table-header mt-2" style={{ background: '#d9d9d9' }}>
          <tr className='ms-2'>
            <th><input type="checkbox" /></th>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {cartStore.map((value, record) => {
            <tr>
              <td><input type="checkbox" defaultChecked /></td>
              <td>{record.id}</td>
              <td><img src={record.image} alt="Product 1" /></td>
              <td>name</td>
              <td>1000</td>
              <td>
                <button className="btn text-white" style={{ background: '#6200ee' }}>-</button>
                <span className='d-inline-block' style={{ background: '#d9d9d9' }}>1</span>
                <button className="btn text-white" style={{ background: '#6200ee' }}>+</button>
              </td>
              <td>1000</td>
              <td>
                <button className="btn me-2 text-white" style={{ background: '#6200ee' }}>EDIT</button>
                <button className="btn text-white" style={{ background: '#eb5757' }}>DELETE</button>
              </td>
            </tr>
          })}
        </tbody>
      </table> */}
      <Table rowKey={'id'} dataSource={cartStore} columns={columns}/>
      <div>
    </div>
      <div className="text-end mt-4">
        <button className="btn text-white px-4" style={{ background: '#f2994a' }}>SUBMIT ORDER</button>
      </div>
    </div>
  )
}

export default Carts
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeQuantityProductAction, deleteProductAction } from '../redux/reducers/cartReducer';
import { Table } from 'antd';
import axios from 'axios';

const Carts = () => {
  const cartStore = useSelector((state) => state.cartSliceReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(cartStore);

  // Lưu giỏ hàng vào localStorage mỗi khi cartStore thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartStore)); // Lưu giỏ hàng vào localStorage
  }, [cartStore]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('accessToken'); // Kiểm tra token trong localStorage
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleOrderSubmit = async () => {
    try {
      const userLogin = JSON.parse(localStorage.getItem('userLogin'));
      console.log(userLogin);
      const orderData = {
        orderDetail: cartStore.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        email: userLogin.email,
      };
      console.log(orderData);

      const response = await axios.post('https://shop.cyberlearn.vn/api/Users/order', orderData);

      console.log('Gửi đơn hàng thành công:', response.data);
      alert('Đơn hàng đã được gửi thành công!');
      console.log('Gửi đơn hàng thành công:', response.data.content);
    } catch (error) {
      console.error('Lỗi khi gửi đơn hàng:', error);
    }
  };

  const columns = [
    {
      title: (
        <th>
          <input type="checkbox" />
        </th>
      ),
      dataIndex: (
        <th>
          <input type="checkbox" />
        </th>
      ),
      render: (value, record) => {
        return (
          <td>
            <input type="checkbox" />
          </td>
        );
      },
    },
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'image',
      dataIndex: 'image',
      render: (value, record) => {
        return <img src={record.image} width={50} alt="..." />;
      },
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'quantity',
      dataIndex: 'quantity',
      render: (value, record) => {
        return (
          <>
            <button
              className="btn text-white"
              style={{ background: '#6200ee' }}
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: 1,
                };
                const action = changeQuantityProductAction(payload);
                dispatch(action);
              }}
            >
              +
            </button>
            <span className="d-inline-block" style={{ background: '#d9d9d9' }}>
              {value}
            </span>
            <button
              className="btn text-white"
              style={{ background: '#6200ee' }}
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: -1,
                };
                const action = changeQuantityProductAction(payload);
                dispatch(action);
              }}
            >
              -
            </button>
          </>
        );
      },
    },
    {
      title: 'price',
      dataIndex: 'price',
    },
    {
      title: 'total',
      dataIndex: 'total',
      render: (value, record) => {
        return (record.price * record.quantity).toLocaleString();
      },
    },
    {
      title: 'action',
      dataIndex: 'action',
      render: (value, record) => {
        return (
          <>
            <button className="btn me-2 text-white" style={{ background: '#6200ee' }}>
              EDIT
            </button>
            <button
              className="btn text-white"
              style={{ background: '#eb5757' }}
              onClick={() => {
                const action = deleteProductAction(record.id);
                dispatch(action);
              }}
            >
              DELETE
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="cart container pb-5 py-5 pb-3" style={{ background: '#fffcfc' }}>
      <div className="form-group ps-5 ms-5">
        <h1>Carts</h1>
        <hr />
      </div>
      <Table rowKey={'id'} dataSource={cartStore} columns={columns} />
      <div></div>
      <div className="text-end mt-4">
        <button
          className="btn text-white px-4"
          style={{ background: '#f2994a' }}
          onClick={handleOrderSubmit}
        >
          SUBMIT ORDER
        </button>
      </div>
    </div>
  );
};

export default Carts

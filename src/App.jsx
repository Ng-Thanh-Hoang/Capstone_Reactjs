import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import React, { createContext, useEffect, useState } from 'react'
import Index from './ShoesShop/Index';
import BodyPage from './ShoesShop/BodyPage';
import Detail from './ShoesShop/Detail';
import Carts from './ShoesShop/Carts';
import { store } from './redux/store';
import Login from './ShoesShop/Login';
import Search from './ShoesShop/Search';
import Register from './ShoesShop/Register';
import Profile from './ShoesShop/Profile';
import AuthContext from './redux/reducers/authContext';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Provider store={store} >
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Routes>
            <Route path='' element={<Index />}>
              <Route index element={<BodyPage />}></Route>
              <Route path='carts' element={<Carts />}></Route>
              <Route path='detail'>
                <Route path=':prodId' element={<Detail />}></Route>
              </Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='search' element={<Search />}></Route>
              <Route path='register' element={<Register />}></Route>
              <Route path='profile' element={<Profile />}></Route>
            </Route>
          </Routes>
        </AuthContext.Provider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
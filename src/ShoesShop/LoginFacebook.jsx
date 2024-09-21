import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';
export default function LoginFacebook() {
    const navigate = useNavigate();
    const responseFacebook = (response) => {
        console.log(response);
        axios({
            url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
            method: "POST",
            data: {
                facebookToken: response.accessToken
            }
        }),
        navigate('/profile',)
        localStorage.setItem("accessToken", response.accessToken);
    };

    return (
        <div>
            <FacebookLogin
                appId="1087944499590107"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} />
        </div>
    );
}




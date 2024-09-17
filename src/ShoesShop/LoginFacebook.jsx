import axios from 'axios';
import React from 'react'
import FacebookLogin from 'react-facebook-login';
export default function LoginFacebook() {

    const responseFacebook = (response) => {
        console.log(response);
        axios({
            url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
            method: "POST",
            data: {
                facebookToken: response.accessToken
            }

        }).then(res => {

            localStorage.getItem("accessToken", res.data.content.accessToken);
        })
    };
    return (
        <div>
            <FacebookLogin
                appId="529796339530041"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} />,
        </div>
    );
}




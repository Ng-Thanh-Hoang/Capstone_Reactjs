import axios from "axios";
const DOMAIN = 'https://shop.cyberlearn.vn';
const TOKENLOGIN = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIyNTc3NTM4NzE1NzgwNDgzQGZhY2Vib29rLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlZJRVdfUFJPRklMRSIsIm5iZiI6MTcyNjcyMjExMiwiZXhwIjoxNzI2NzI1NzEyfQ.tCHyQU53lIZR7o9zOC82dXJXY6ARgip7JwTItAnyA8E';
export const http = axios.create({
    baseURL:DOMAIN,
    timeout:3000 // giới hạn thời gian chờ kết quả từ server
})
http.interceptors.request.use((req)=>{
    req.headers = {
        ...req.headers,//giữ lại các api có header riêng
        'Authorization': localStorage.getItem('accessToken'), //thêm phần chung authorize
        'TokenLogin': TOKENLOGIN
    }
    return req;
})
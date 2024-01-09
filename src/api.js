import axios from 'axios';

// 공통 설정을 가진 인스턴스 생성
const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken){
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response.status === 403){
            window.location.href = "/login";
        }else{
            console.log("http error");
            console.error(error);
        }
        return Promise.reject(error);
    }
)

export default instance;
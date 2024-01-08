import axios from 'axios';

// 공통 설정을 가진 인스턴스 생성
const instance = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export default instance;
import axios from 'axios'
import { AsyncStorage } from 'react-native';


const api = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept-Encondig': 'gzip, deflate, br',
        'Accept': 'application/vnd.api+json',
    }
})
api.interceptors.request.use(config => {
    const token = AsyncStorage.getItem('token')
    if(token){
        config.headers.delete['Authorization'] =  `Bearer ${token}`;
        config.headers.head['Authorization'] =  `Bearer ${token}`;
        config.headers.post['Authorization'] =  `Bearer ${token}`;
        config.headers.get['Authorization'] =  `Bearer ${token}`;
        config.headers.put['Authorization'] =  `Bearer ${token}`;
        config.headers.patch['Authorization'] =  `Bearer ${token}`;
    }

    return config;
});


export default api
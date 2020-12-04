import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('token')

const api = axios.create({
    baseURL: 'https://192.168.1.15:5001/',
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // 'Authorization' : `Bearer ${token}`,
    }
})



export default api
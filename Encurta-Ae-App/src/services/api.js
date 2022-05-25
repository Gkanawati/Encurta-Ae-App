import axios from 'axios';

// Access token: 1e9d6ceab6a4be0273cac027a97cf284f088b759
export const key = '1e9d6ceab6a4be0273cac027a97cf284f088b759';

// base url: https://api-ssl.bitly.com/v4/shorten

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    },
});

export default api;
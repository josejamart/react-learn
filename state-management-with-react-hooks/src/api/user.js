import axios from 'axios';

export const login = (userName, password) => {
    return axios.post("http://localhost:4000/auth/login", {
        userName,
        password
    });
}

export const setProfile = (userName, email) => {
    return axios.post("http://localhost:4000/auth/profile", {
        userName,
        email
    });
}
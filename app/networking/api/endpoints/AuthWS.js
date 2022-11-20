import axios, { setAuthToken } from "../Api";

export const login = async function (email, password) {
    setAuthToken(null);
    console.log("intentando login", {email, password});
    const result = await axios.post('/users/login', {
        email,
        password,
    });
    setAuthToken(result.data.token);
    return result.data;
}

export const registerPartnerAPI = async function (email, name, lastName, password, profilePicture) {
    {
        setAuthToken(null);
        const result = await axios.post('users', {
            email,
            name,
            lastName,
            password,
            profilePicture

        }).catch(err => {
            console.log("Register error", err);
            return Promise.reject(err);
        });
        console.log("Register ok", result);
        return result.data;

    }
}

export const getListRestoAPI = async function() {
    const results = await axios.get('/restaurants/me');
    return results.data;
}
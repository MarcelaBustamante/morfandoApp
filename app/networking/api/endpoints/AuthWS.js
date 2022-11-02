import axios from "../Api";

export const login = async function (email, password) {
    const result = await axios.post('/users/login', {
        email,
        password,
    }).catch(err => {
        console.log("Login error", err);
        return Promise.reject(err);
    });
    console.log("Login ok", result);
    return result.data;
}

export const registerPartnerAPI = async function (email, name, lastName, password, profilePicture) {
    {
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
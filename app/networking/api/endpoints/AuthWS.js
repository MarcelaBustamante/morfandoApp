import axios from "../Api";

export const login = async function (email, password) {
    console.log(`Login: ${email} ${password}`);
    const result = await axios.post('/users/login',{
        email,
        password,
    }).catch(err => {
        console.log("Login error", err);
        return Promise.reject(err);
    });
    console.log("Login ok", result);
    return result.data;
}
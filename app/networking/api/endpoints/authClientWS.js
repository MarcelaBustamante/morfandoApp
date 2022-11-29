
import axios, { setAuthToken } from "../Api";

export const login = async function (idToken) {
    setAuthToken(null);
    const result = await axios.post('/users/oauth', idToken);
    setAuthToken(result.data.token);
    return result.data;
}

export const getUserProfile = async function (userId) {
    const result = await axios.get(`/users/${userId}`);
    return result;
}

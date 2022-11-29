
import axios, { setAuthToken } from "../Api";

export const login = async function (idToken) {
    setAuthToken(null);
    const result = await axios.post('/users/oauth', idToken);
    setAuthToken(result.data.token);
    return result.data;
}


import axios, { setAuthToken } from "../Api";

export const login = async function (idToken) {
    setAuthToken(null);
    const result = await axios.post('/users/oauth', idToken);
    setAuthToken(result.data.token);
    return result.data;
}

export const getUserProfile = async function (userId) {
    const result = await axios.get(`/users/${userId}`);
    return result.data;
}

export const updateUser = async function ({ email, name, lastName, pictures }){
    const result = await axios.put('/users', { email, name, lastName, profilePicture: pictures });
    return result.data;
}

export const getUserFavourite = async function ({ userId,restaurantId }){
    const result = await axios.get(`/getfavourite/${userId}/${restaurantId}`);
    return result.data;
}

export const addUserFavourite = async function ({ userId,restaurantId }){
    const result = await axios.post(`/addfavourite/${userId}/${restaurantId}`);
    return result.data;
}

export const deleteUserFavourite = async function ({ userId,restaurantId }){
    const result = await axios.post(`/deletefavourite/${userId}/${restaurantId}`);
    return result.data;
}

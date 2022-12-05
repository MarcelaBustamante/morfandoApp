import axios, { setAuthToken } from "../Api";

export const login = async function (email, password) {
    setAuthToken(null);
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

export const newRestaurantAPI = async function(form){
    try {
        const result = await axios.post('restaurants', form).catch(err => {
            console.log("Alta de restaurante error", err);
            return Promise.reject(err);
        });
        console.log("Alta restaurante ok", result);
        return result.data;
    } catch (error) {
        return Promise.reject(error);
    }
}
export const updateRestaurantAPI = async function(form, restoId){
    try {
        const result = await axios.put(`restaurants/${restoId}`, form).catch(err => {
            console.log("Editar restaurante error", err);
            return Promise.reject(err);
        });
        console.log("Editar restaurante ok", result);
        return result.data;
    } catch (error) {
        return Promise.reject(error);
    }
}
export const newItemAPI = async function(form, restoId){
    try {
        console.log(form);
        const result = await axios.post(`/restaurants/${restoId}/menu/items`, form).catch(err => {
            console.log("Alta de plato error", err);
            return Promise.reject(err);
        });
        console.log("Alta plato ok", result);
        return result.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getListItemAPI = async function(restoId) {
    const results = await axios.get(`/restaurants/${restoId}/menu/items`);
    return results.data;
}
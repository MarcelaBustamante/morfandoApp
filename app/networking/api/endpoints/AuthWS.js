import axios from "../Api";

export const login = async function (email, password) {
    setClientToken(null);
    console.log("intentando login", {email, password});
    const result = await axios.post('/users/login', {
        email,
        password,
    });
    setClientToken(result.data.token);
    return result.data;
}

export const registerPartnerAPI = async function (email, name, lastName, password, profilePicture) {
    {
        setClientToken(null);
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

export const getListRestoAPI = async function(){
    const results = await axios.get('/restaurants/me').catch(err => {
        console.log('Error obteniendo la lista de restos')
        return Promise.reject(err);
    })
}

export function setClientToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + {token};
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }
}
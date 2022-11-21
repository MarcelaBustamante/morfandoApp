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

export const newRestaurantAPI = async function(){
    // {
    //     "address": {
    //       "street": "Lima",
    //       "number": "775",
    //       "neighborhood": "Montserrat",
    //       "city": "CABA",
    //       "province": "CABA",
    //       "zipCode": "C1073AAO"
    //     },
    //     "businessHours": [
    //         {
    //           "dayOfWeek": "MONDAY",
    //           "fromTime": "09:00:00",
    //           "toTime": "18:30:00"
    //         },
    //         {
    //           "dayOfWeek": "TUESDAY",
    //           "fromTime": "09:00:00",
    //           "toTime": "18:30:00"
    //         }
    //     ],
    //     "name": "San Paolo",
    //     "type": 1,
    //     "priceRange": 2,
    //     "photos": [
    //       "20112022165443.prueba123.png"
    //     ]
    //   }

}
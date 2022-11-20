import axios from 'axios';
import { config } from '../../config/config';
//import { store } from '../../redux/Store';

axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIME_OUT;
axios.defaults.headers.common = {
Accept: 'application/json' , // el formato que espero que la info vuelva
'Content-Type' : 'application/json' ,// el formato en que le mando la info
};

axios.interceptors.response.use(function (resp) {
    console.log(resp.status); 
    console.log(resp.data);
    return resp;
}, function(error) {
    console.log(error);
    console.log(resp.request);
    console.log(resp.data);
    return Promise.reject(error);
});

export function setAuthToken(token) {
    axios.defaults.headers.common['Authorization'] = '';
    delete axios.defaults.headers.common['Authorization'];
    if (token) {
        console.log("Setting token " + token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        console.log("No token privided");
    }
  }

export default axios;
import axios from 'axios';
import { config } from '../../config/config' ;
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
    console.log(error)
    return Promise.reject(error);
});

export default axios;
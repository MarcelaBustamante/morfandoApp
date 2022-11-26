import axios from 'axios';
import { config } from '../../config/config';
//import { store } from '../../redux/Store';

axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIME_OUT;
axios.defaults.headers.common = {
Accept: 'application/json' , // el formato que espero que la info vuelva
'Content-Type' : 'application/json' ,// el formato en que le mando la info
};

axios.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

// TODO
const instance = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIME_OUT,
  common: {
    headers: {
      Accept: 'application/json' , // el formato que espero que la info vuelva
      'Content-Type' : 'application/json' ,// el formato en que le mando la info
    }
  }
});


export function setAuthToken(token) {
    axios.defaults.headers.common['Authorization'] = '';
    delete axios.defaults.headers.common['Authorization'];

    instance.defaults.headers.common['Authorization'] = '';
    delete instance.defaults.headers.common['Authorization'];

    if (token) {
      console.log("Setting token " + token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        console.log("No token privided");
    }
  }

// export default axios;


instance.interceptors.response.use(
  function (response) {
    console.log("Http Response: " + JSON.stringify(response ?? ""));
    return response;
  },
  function (error) {
    console.error("Response error", error);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  function (request) {
    console.log("Http Request", JSON.stringify(request ?? ""));
    return request;
  },
  function (error) {
    console.error("Request error", error);
    return Promise.reject(error);
  }
);

export default instance;
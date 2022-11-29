import axios from 'axios';
import { config } from '../../config/config';

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
    instance.defaults.headers.common['Authorization'] = '';
    delete instance.defaults.headers.common['Authorization'];
    if (token) {
      console.log("Setting token " + token);
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        console.log("No token privided");
    }
  }

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
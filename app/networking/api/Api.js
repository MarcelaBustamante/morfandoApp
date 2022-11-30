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
    if (response) {
      console.log(
        `HTTP Response\n` +
        `> Status: ${response.status}\n` +
        `> Headers: ${JSON.stringify(response.headers)}\n` +
        `> Body: ${JSON.stringify(response.data)}`
      );
    }
    return response;
  },
  function (error) {
    console.error("Response error", error);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  function (request) {
    if (request) {
      console.log(
        `HTTP Request\n` +
        `> URL: ${request.url}\n` +
        `> Method: ${request.method}\n` +
        `> Params: ${JSON.stringify(request.params)}\n` +
        `> Headers: ${JSON.stringify(request.headers)}\n` +
        `> Body: ${JSON.stringify(request.data)}`
      );
    }
    return request;
  },
  function (error) {
    console.error("Request error", error);
    return Promise.reject(error);
  }
);

export default instance;
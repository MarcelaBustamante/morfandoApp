import React from "react";

export function login({ username, password }) {
  const baseURL = "http://morfandobackend-env.eba-cmstmprv.us-east-1.elasticbeanstalk.com";
  const [post, setPost] = React.useState(null);

  //TODO:Dejar solo el post
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "UADE" && password === "password") {
          resolve();
        } else {
          reject();
        }
      }, 100);
    });

  //  return axios.post(baseURL, {
  //     email: "UADE",
  //     password: "password"
  //   }).then((response) => {
  //     setPost(response.data);
  //   });

  }
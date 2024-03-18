import axios from "axios";

export const baseUrl = process.env.REACT_APP_API_URL + '/api/';
export const refreshInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    if (localStorage.access_token) {
      config.headers.authorization = `Bearer ${localStorage.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      if (localStorage.getItem('access_token')) {
        return refreshInstance.post("auth/refresh", {}, {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
          }
        }).then(responseRefreshToken => {
          if (responseRefreshToken?.data?.authorisation.token) {
            localStorage.setItem('access_token', responseRefreshToken.data.authorisation.token)
            error.config.headers.authorization = `Bearer ${responseRefreshToken.data.authorisation.token}`;

            return instance.request(error.config);
          }
        }).catch(error => {
          if (
            error?.response?.data.message === 'The token has been blacklisted'
            || error?.response?.data.message === 'Token has expired and can no longer be refreshed'
            || error?.response?.data.message === 'Token could not be parsed from the request.'
            || error?.response.data?.code === 500
          ) {
            localStorage.removeItem('access_token');
            window.location.href = "/";
            console.error(error?.response.data)
            return Promise.reject(error);
          }
        })
      }
    }
    else if (error?.response?.data.message === 'The token has been blacklisted' || error?.response?.status === 401) {
      localStorage.removeItem('access_token');
      console.error(error?.response?.data.message, 'The token has been blacklisted', error?.response?.status, 401,)
      window.location.href = "/";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export const api = {
};
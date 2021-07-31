import axios from 'axios';
const config = {
  baseURL: 'https://fxmgr8dq.api.sanity.io/v1/',
  timeout: 60 * 1000,
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

_axios.interceptors.response.use(
  function (response) {
    response = typeof response.data !== undefined ? response.data : response;
    return response;
  },

  function (error) {
    console.log(error, 'errorz');
    return Promise.reject(error);
  },
);

const header = async () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const error = errors => {
  return {
    status: false,
    error: errors,
  };
};

export const Get = async url => {
  try {
    const head = await header();
    const get = await _axios.get(url, head);
    return get;
  } catch (e) {
    return error(e);
  }
};

export const Post = async (url, params, file) => {
  try {
    const head = await header();
    if (file) {
      head.headers['content-type'] = 'multipart/form-data';
    }
    const post = await _axios.post(url, params, head);
    return post;
  } catch (e) {
    return error(e);
  }
};

export const Put = async (url, params, file) => {
  try {
    const head = await header();
    if (file) {
      head.headers['content-type'] = 'multipart/form-data';
    }
    const post = await _axios.put(url, params, head);
    return post;
  } catch (e) {
    return error(e);
  }
};

import AsyncStorage from '@react-native-community/async-storage';

const fetchAPI = async (endpoint, config) => {
  const API_URL = 'http:192.168.1.108:8000';

  const token = await AsyncStorage.getItem('token');

  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json, text/plain, */*',
      Authorization: `Bearer ${token}`
    }
  };

  return new Promise((resolve, reject) => {
    const options = {
      ...defaultOptions,
      ...config
    };
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    fetch(`${API_URL}${endpoint}`, options)
      .then(async res => {
        const { status } = res;
        const data = await res.json();
        return { ...data, status } || {};
      })
      .then(res => {
        if (res.status === 200 || res.status === 201 || res.status === 304) {
          return resolve(res);
        }
        return reject(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export default fetchAPI;

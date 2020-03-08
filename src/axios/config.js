import axios from 'axios';

const axiosPreset = axios.create({
  baseURL: "https://ped-be.herokuapp.com/api/v1",
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    crossDomain: false,
    Accept: '*/*',
  }
});

export default axiosPreset;
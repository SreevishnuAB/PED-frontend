import axios from 'axios';

const Axios = axios.create({
  baseURL: "https://ped-be.herokuapp.com/api/v1",
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    crossDomain: true,
    Accept: '*/*',
  }
});

export default Axios;
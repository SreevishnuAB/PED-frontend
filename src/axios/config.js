import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const useAxios = makeUseAxios({
  axios: axios.create({
    baseURL: "https://ped-be.herokuapp.com/api/v1"
  })
});

export default useAxios;
import axios from 'axios'

const StrapiApi = axios.create({
  baseURL: 'https://genesis-box-strapi.herokuapp.com'
});

export default StrapiApi;
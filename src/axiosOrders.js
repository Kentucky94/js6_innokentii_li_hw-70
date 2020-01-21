import axios from 'axios';

const axiosOrders  = axios.create({
  baseURL: 'http://api.tvmaze.com'
});

export default axiosOrders;
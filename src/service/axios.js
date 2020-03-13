import axios from 'axios';

export default axios.create({
  baseURL: 'https://testtask-ba53d.firebaseio.com/'
})
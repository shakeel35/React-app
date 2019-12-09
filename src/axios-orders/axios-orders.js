import axios from 'axios';

const instance = axios.create({
  baseURL:'https://my-react-app-ce620.firebaseio.com/'
});

export default instance;
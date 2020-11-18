import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/pedrogawa/repos',
});

export default api;

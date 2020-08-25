import axios from 'axios';

axios.interceptors.response.use((response) => {
  if (response.status === 200 || response.status === 201) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}, (error) => {
  if (error.response.status) {
    console.log(error)
  }
  return Promise.reject(error.response);
});

export default axios;
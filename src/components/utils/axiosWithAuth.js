import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    },
    baseURL: "https://cs1build.herokuapp.com"
  });
};

 export default axiosWithAuth
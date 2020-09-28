const axios = require('axios');

const fetchData = () => {
  console.log('hitting fetch data...')
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.data;
    });
};

exports.fetchData = fetchData;
const axios = require('axios'); // Include Axios if not using a CDN in a browser environment

const apiUrl = 'http://localhost:3001/create_game';

// Data to be sent in the POST request (replace with your actual data)
const postData = {
  key1: 'value1',
  key2: 'value2'
};

// Make the POST request using Axios
axios.post(apiUrl, postData)
  .then(response => {
    // Do something with the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Axios error:', error);
  });

const apiUrl2 = 'http://localhost:3001/game_state';

// Make a GET request using fetch
fetch(apiUrl2)
  .then(response => {
    // Check if the request was successful (status code 2xx)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON in the response
    return response.json();
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });


// fetch('https://localhost:3001/game_state', {
//    headers: {
//       'Accept': 'application/json'
//    }
// })
//    .then(response => response.text())
//    .then(text => console.log(text))
const axios = require("axios"); // Import Axios if you are using Node.js

// Define the data you want to send in the request
const userData = {
  username: "exampleUsername",
  password: "examplePassword",
  email: "example@email.com",
  phone_number: "1234567890",
};

// Define the URL of the API endpoint
const apiUrl = "https://eliptum.tech/user/create";

// Make an HTTP POST request using Axios
axios
  .post(apiUrl, userData)
  .then((response) => {
    // Successful response
    console.log("API Response:", response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error("API Request Error:", error);
  });

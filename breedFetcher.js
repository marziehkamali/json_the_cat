const request = require('request');

// give me the breed, when I get the data, I will call you back
const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, function(error, response, body) {  //async code. request takes a url and a function
    if (error) {  // if error, call the callback and say im done- here is the erro
      callback(error, null); // let callback know
      return;
    }
    const data = JSON.parse(body); // data came back
    if (data.length === 0) { // going through the length
      callback("breed not found", null); // im done, I will call you, here is the error message, could not find the breed
    } else {
      const firstElement = data[0]; // you have data, you call them, there is no erro, here is the description
      callback(null,firstElement.description);
    }
  });
};

module.exports = { fetchBreedDescription };


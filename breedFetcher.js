const request = require('request');
const input = process.argv.slice(2);
const breed = input[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, function(error, response, body) {
  if (error) {
    console.log("error", error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("breed not found");
  } else {
    const firstElement = data[0];
    console.log(firstElement.description);
    console.log(typeof data);
  }
});



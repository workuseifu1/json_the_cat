const request = require('request');

const breedName = process.argv[2];
const breedDataFromHttp = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {    
    const data = JSON.parse(body);
    return callback(false, data);
  })
}
const printCatBreed = (breedName, (error, result) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (result[0] === undefined) {
    console.log("Not cat breed");
  } else {
    console.log(result[0].description);
  }
});
breedDataFromHttp(breedName, printCatBreed);
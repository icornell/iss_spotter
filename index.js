//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("That didn't work, try again!" , error);
    return;
  }

  console.log('That worked! Returned IP:' , ip);
});*/

//note: changed to example IP from personal IP for testing purposes
/*fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("That didn't work, try again!" , error);
    return;
  }

  console.log('That worked! Returned coordinates:' , coordinates);
});*/


/*const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };//changed from personal coords to the example coords

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("That didn't work, try again!" , error);
    return;
  }

  console.log('That worked! Returned flyover times of:' , passTimes);
});
*/

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`The next pass will be at ${datetime} for only ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
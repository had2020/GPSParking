console.log("begin log");

/*
localStorage.setItem('latitude', latitude.toString());
const username = localStorage.getItem('username');
console.log(username);
*/


const successCallback = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
  
    // Do something with the location data
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`);
    localStorage.setItem('latitude', latitude.toString());
    localStorage.setItem('longitude', longitude.toString());
    localStorage.setItem('accuracy', accuracy.toString());
    alert("GPS coordinates, saved in browsing data. 👍");
    };
  
  const errorCallback = (error) => {
    console.error(error);
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
    }
  };

function SaveCords() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function LoadCords() {
  const latitude1 = localStorage.getItem('latitude');
  const longitude1 = localStorage.getItem('longitude');
  const accuracy1 = localStorage.getItem('accuracy');
  console.log()
}
  
// Get the button element
const button = document.getElementById("SaveButton");
  
// Add an event listener to the button
button.addEventListener("click", SaveCords);

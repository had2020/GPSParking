console.log("begin log");

const successCallback = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
  
    // Do something with the location data
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`);
    localStorage.setItem('latitude', latitude.toString());
    localStorage.setItem('longitude', longitude.toString());
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
  console.log("cords:", latitude1, longitude1)
  block.innerHTML = '<iframe src="https://maps.google.com/maps?q=' + latitude1 + ',' + longitude1 + '&t=&z=15&ie=UTF8&iwloc=&output=embed" width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}

const button = document.getElementById("SaveButton");
button.addEventListener("click", SaveCords);

const button1 = document.getElementById("LoadButton");
button1.addEventListener("click", LoadCords);

const block = document.getElementById('ShowMap');

//</p> <div style="width: 600px; height: 600px; background-color: black;"></div>
block.innerHTML = '<p style="font-size: 40px;">Click "Load GPS Position" to view your saved location.</p>';
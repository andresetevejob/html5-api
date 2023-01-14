
function initMap(){
  let map = L.map("map").setView([50.6975, 3.178], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
   attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  addMarker(map);
}
function addMarker(map){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        myPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(myPosition);
        var marker = L.marker([myPosition.lat, myPosition.lng]).addTo(map);
      },
      function () {
        alert("Sorry, Geolocation is not supported by your browser.");
      }
    );
  } else {
       alert("Geolocation is not supported");
  }  
}
initMap()

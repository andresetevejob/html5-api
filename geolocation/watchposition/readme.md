# TP : API GEOLOCATION

## 1 - Geolocation watchPosition

 - créer un fichier index.html ajoutez-y le code suivant : 
 ````
  <html>
    <head>
      <title>Get coords API</title>   
    </head>
    <body>
      <h3>Geolocation-API</h3>
      <!--The div element for the map -->
      <button onclick="watchPosition()">
        Watch My Position!
      </button>
      <button onclick="stopWatching()">
        Stop Watching
     </button>
    </body>
  </html>
 ````
 - Lancement de la fonction de surveillance
````
<script>
    function watchPosition() {
      if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(success);
      }
    }
</script>

````
- Arrêt de la fonction de surveillance
`````
  function stopWatching() {
    if (navigator.geolocation) {
        navigator.geolocation.clearWatch(watchId);
      }
  }
`````

- Gestion des erreurs et de succès
`````
var watchId = -1;

function error(err) {
    console.warn(err.message);
}

function success(pos) {
  alert(`latitude: ${pos.coords.latitude}
  \n longitude: ${pos.coords.longitude}
  \n accuracy: ${pos.coords.accuracy}`);
}


``````
# TP : API GEOLOCATION

## 1 - Geolocation getCurrentPosition

 - créer un fichier index.html ajoutez-y le code suivant : 
 ````
<html>
  <head>
    <title>Get coords API</title>   
  </head>
  <body>
    <h3>Geolocation-API</h3>
    <!--The div element for the map -->
    <div id="demo"></div>
    <button onclick="getGeolocation()">
      Get my coordinates!
    </button>
  </body>
</html>
 ````

 - Ajouter ensuite une balise script en dessous de la balise fermante du body
````
<script>
      //recuperation de l'element du dom ayant l'id demo
      const demo = document.getElementById('demo');
      //fonction de gestion d'erreur lors de la récuperation des coordonnées
      function error(err) {
          demo.innerHTML = `Failed to locate. Error: ${err.message}`;
      }
      //fonction récuperant les coordonnées de l'utilisateurs en cas de succès  
      function success(pos) {
          demo.innerHTML = 'Located.';
          alert(`${pos.coords.latitude}, ${pos.coords.longitude}`);
      }
      //fonction appelante de l'api geolocation
      function getGeolocation() {
          if (navigator.geolocation) {
              demo.innerHTML = 'Locating…';
              navigator.geolocation.getCurrentPosition(success, error);
          } else { 
              demo.innerHTML = 'Geolocation is not supported by this browser.';
          }
      }
</script>

````
- Ajout d'un bouton pour déclencher l'appel de l'API. Mettre ce code à l'intérieur du body
`````
<button onclick="getGeolocation()">
      Get my coordinates!
</button>
<div id="demo"></div>
`````
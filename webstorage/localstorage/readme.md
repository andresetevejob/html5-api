# TP LOCALSTORAGE

### 1 - Page HTML de l'application
`````
index.html 
<!DOCTYPE html>
<html lang="en" class="blue" manifest="tasks.appcache">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <title>My Tasks</title>
        <link rel="stylesheet"
              href="http://fonts.googleapis.com/css?family=Carter+One">
        <link rel="stylesheet" href="style.css">
        <script src="app.js"></script>
    </head>
    <body class="list">
        <header>
            <h1><span id="user_name">My</span> Tasks</h1>
            <nav>
                <ul>
                    <li><a href="#list" class="list">Task List</a></li>
                    <li><a href="#add" class="add">Add Task</a></li>
                    <li><a href="#settings" class="settings">Settings</a></li>
                </ul>
            </nav>
        </header>
        <section class="list">
            <form name="search">
                <input type="search" name="query" placeholder="Search tasks...">
            </form>
            <ul id="task_list"></ul>
        </section>
        <section class="add">
            <form name="add">
                <label>
                    Task Description
                    <textarea name="desc"></textarea>
                </label>
                <label>
                    Due Date (MM/DD/YYYY)
                    <input type="date" name="due_date">
                </label>
                <input type="submit" value="Add Task">
            </form>
        </section>
        <section class="settings">
            <form name="settings">
                <label>
                    Your Name
                    <input type="text" name="name">
                </label>
                <label>
                    Color Scheme
                    <select name="color_scheme">
                        <option>Blue</option>
                        <option>Red</option>
                        <option>Green</option>
                    </select>
                </label>
                <input type="submit" value="Save Settings">
                <input type="reset" value="Reset All Data">
            </form>
        </section>
    </body>
</html>
`````
### 2 - Création d'une fonction anonyme
```
app.js
(function(){
    
})();

```
### 3 - Gestion de la navigation et de l'orientation
`````
 app.js
        let Task = function(){
        //Gestion de l'orientation
        let orientation = function(){
            setTimeout(function(){ window.scrollTo(0,0); }, 1000);
        }
        //Gestion de la navigation
        let navigation = function(){
            switch(location.hash){
                case '#add':
                    document.body.className = 'add';
                break;
                case '#settings':
                    document.body.className = 'settings';
                break; 
                default:
                    document.body.className = 'list';   
            }
            orientation();
        }
        navigation();
        //liaison des méthodes de navigation et d'orientation au 
        //évènements de l'objet window
        window.addEventListener('hashchange', navigation, false);
        window.addEventListener('orientationchange', orientation, false);
    
`````

### 4 - Récuperation des données depuis le localstorage
``````
app.js
//verification de l'existence de l'API
let localStorageAvailable = ('localStorage' in window); 
let loadSettings = function(){
    if(localStorageAvailable){
        //récuperation des données
        const name = localStorage.getItem('name'),
              colorScheme = localStorage.getItem('colorScheme');
        let nameDisplay = document.getElementById('user_name');
            nameField = document.forms.settings.name
            doc = document.documentElement
            colorSchemeField = document.forms.settings.color_scheme;
        
        if(name) {
            nameDisplay.innerHTML = name+"'s";
            nameField.value = name;
          } else {
            nameDisplay.innerHTML = 'My';
            nameField.value = '';
          }
          if(colorScheme) {
            doc.className = colorScheme.toLowerCase();
            colorSchemeField.value = colorScheme;
          } else {
            doc.className = 'blue';
            colorSchemeField.value = 'Blue';
          }
  
    }
}

``````

### 5 - Enregistrement des données dans le localstorage
``````
app.js
let saveSettings = function(e){
    e.preventDefault();
    if(localStorageAvailable) {
       var name = document.forms.settings.name.value;
        if(name.length > 0) {
            var colorScheme = document.forms.settings.color_scheme.value;
            localStorage.setItem('name', name);
            localStorage.setItem('colorScheme', colorScheme);
            loadSettings();
            alert('Settings saved successfully', 'Settings saved');
            location.hash = '#list';
          } else {
            alert('Please enter your name', 'Settings error');
          }
        } else {
          alert('Browser does not support localStorage', 'Settings error');
    }
}
``````
### 6 - Réinitialisation du localstorage
``````
app.js
let resetSettings = function(e){
     e.preventDefault();
        if(confirm('This will erase all data. Are you sure?', 'Reset data')) {
          if(localStorageAvailable) {
            localStorage.clear();
          }
          loadSettings();
          alert('Application data has been reset', 'Reset successful');
          location.hash = '#list';
    }
}
``````

### 7 - Appel de la fonction de chargement des paramètres
``````
loadSettings();
document.forms.settings.addEventListener('submit', saveSettings, false);
document.forms.settings.addEventListener('reset', resetSettings, false);
window.addEventListener('load', function() {
      new Tasks();
}, false);
```````
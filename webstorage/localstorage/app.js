(function() {
    let Tasks = function(){
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
      // 5.5
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
    // 5
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
      // 6
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
      // 7
      loadSettings();
      document.forms.settings.addEventListener('submit', saveSettings, false);
      document.forms.settings.addEventListener('reset', resetSettings, false);
    }
    window.addEventListener('load', function() {
      new Tasks();
    }, false);
  })();
  
<script setup>

</script>

<template>

<div class="terminal alert alert-info p-4 snipcss-kBALP" id="site-list">
  <div class="row mb-3">
    <div class="col-12">
      Hello traveller and bienvenue sur Bookwarden Labs.
      <br>
      <br>
      Vous êtes entrain de regarder  une application pour livres avec un moteur de recherche qui va vous permettre de trouver n'importe quel livre !
      <br>
      Entrer le nom d'auteur ou le titre désiré dans la barre de recherche pour commencer. Notre système utilise Google books API pour réaliser votre recherche.
      <br>
      <br>
      Amusez vous et lisez des livres.
    </div>
    <div class="col-12">
      <br>
      ------------------
      <br>
    </div>
  </div>
</div>


</template>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap'); 
  body {  
    font-family:var(--bs-body-font-family);
    font-size:var(--bs-body-font-size);
    font-weight:var(--bs-body-font-weight);
    line-height:var(--bs-body-line-height);
    color:var(--bs-body-color);
    text-align:var(--bs-body-text-align);
    background:#0A0414;
    background-image:url('https://www.idyllum.com/static/images/Idyllum-bg-pattern.png?fc97e56d6849');
  }  
body { 
/* CSS Variables that may have been missed get put on body */ 
    --bs-gutter-x:  1.5rem;  
    --bs-gutter-y:  0;  
    --bs-alert-bg:  transparent;  
    --bs-alert-padding-x:  1rem;  
    --bs-alert-padding-y:  1rem;  
    --bs-alert-margin-bottom:  1rem;  
    --bs-alert-color:  inherit;  
    --bs-alert-border-color:  transparent;  
    --bs-alert-border:  1px solid var(--bs-alert-border-color);  
    --bs-alert-border-radius:  0.375rem;  
    --bs-alert-color:  #055160;  
    --bs-alert-bg:  #cff4fc;  
    --bs-alert-border-color:  #b6effb; 
} 

* { 
    box-sizing: border-box;
} 

.row > *  { 
    flex-shrink: 0; 
    width: 100%; 
    max-width: 100%; 
    padding-right: calc(var(--bs-gutter-x) * .5); 
    padding-left: calc(var(--bs-gutter-x) * .5); 
    margin-top: var(--bs-gutter-y);
} 

.col-12 { 
    flex: 0 0 auto; 
    width: 100%;
} 

.row { 
    --bs-gutter-x: 1.5rem; 
    --bs-gutter-y: 0; 
    display: flex; 
    flex-wrap: wrap; 
    margin-top: calc(-1 * var(--bs-gutter-y)); 
    margin-right: calc(-.5 * var(--bs-gutter-x)); 
    margin-left: calc(-.5 * var(--bs-gutter-x));
} 

body { 
    margin: 0; 
    font-family: var(--bs-body-font-family); 
    font-size: var(--bs-body-font-size); 
    font-weight: var(--bs-body-font-weight); 
    line-height: var(--bs-body-line-height); 
    color: var(--bs-body-color); 
    text-align: var(--bs-body-text-align); 
    background-color: var(--bs-body-bg); 
    -webkit-text-size-adjust: 100%; 
    -webkit-tap-highlight-color: transparent;
} 

body { 
    color: #fff; 
    background: #0A0414; 
    background-image: url('https://www.idyllum.com/static/images/Idyllum-bg-pattern.png?fc97e56d6849'); 
    font-family: 'IBM Plex Mono',monospace; 
    font-weight: 400;
} 

:root { 
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; 
    --bs-body-font-family: var(--bs-font-sans-serif); 
    --bs-body-font-size: 1rem; 
    --bs-body-font-weight: 400; 
    --bs-body-line-height: 1.5; 
    --bs-body-color: #212529; 
    --bs-body-bg: #fff; 
    --bs-link-color: #0d6efd; 
    --bs-link-hover-color: #0a58ca; 
} 

@media (prefers-reduced-motion: no-preference){ 
  :root { 
    scroll-behavior: smooth;
  } 
}     

.alert { 
    --bs-alert-bg: transparent; 
    --bs-alert-padding-x: 1rem; 
    --bs-alert-padding-y: 1rem; 
    --bs-alert-margin-bottom: 1rem; 
    --bs-alert-color: inherit; 
    --bs-alert-border-color: transparent; 
    --bs-alert-border: 1px solid var(--bs-alert-border-color); 
    --bs-alert-border-radius: 0.375rem; 
    position: relative; 
    padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x); 
    margin-bottom: var(--bs-alert-margin-bottom); 
    color: var(--bs-alert-color); 
    background-color: var(--bs-alert-bg); 
    border: var(--bs-alert-border); 
    border-radius: var(--bs-alert-border-radius);
} 

.alert-info { 
    --bs-alert-color: #055160; 
    --bs-alert-bg: #cff4fc; 
    --bs-alert-border-color: #b6effb;
} 

.p-4 { 
    padding: 1.5rem!important;
} 

.alert { 
    border-radius: 0; 
    background: #0a0414; 
    color: #fff; 
    padding: 0.5rem 1rem; 
    margin-bottom: 1.5rem;
} 

.alert-info { 
    border: 1px solid #2EE5B5; 
    box-shadow: 0 0 2px rgb(46 229 181 / 90%),0 0 4px rgb(46 229 181 / 40%),0 0 1rem rgb(46 229 181 / 30%),0 0 4rem rgb(46 229 181 / 10%);
} 

.terminal { 
    background: #0A0414; 
    border: 1px solid #1c2e29;
} 

*,:after,:before { 
    box-sizing: border-box;
} 

.mb-3 { 
    margin-bottom: 1rem!important;
} 

a { 
    color: var(--bs-link-color); 
    text-decoration: underline;
} 

a { 
    color: #FF931E; 
    text-decoration: none;
} 

a:hover { 
    color: var(--bs-link-hover-color);
} 

 .terminal a:hover { 
    background: #FF931E; 
    color: #0A0414; 
    text-decoration: none;
} 

.terminal {
    font-family: 'IBM Plex Mono', monospace;
}

</style>

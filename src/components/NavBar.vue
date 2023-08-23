<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
<nav class="navbar navbar-expand-lg idyllum-navbar py-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.svg" alt="Idyllum Labs - The real website vulnerability scanner. Use OWASP ZAP, Nmap, WhatWeb &amp; TLS scanners online!" class="idyllum_logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#idyllumNav" aria-controls="idyllumNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    <div class="collapse navbar-collapse" id="idyllumNav">
      <ul class="navbar-nav ms-auto mb-2 mt-5 mb-lg-0 mt-lg-0">
        <li class="nav-item">
          <RouterLink to="/">
          <a class="nav-link">
            <div class="lefty">
              <img src="https://www.idyllum.com/static/images/Idyllum_icon-target_C.svg" alt="Run a free OWASP ZAP website security check at Idyllum Labs">
            </div>
            <div class="righty">
              Recherche
            </div>
          </a>
        </RouterLink>
        </li>
        <li class="nav-item d-none">
          <a class="nav-link" href="/realtime/">
            <div class="lefty">
              <img src="https://www.idyllum.com/static/images/Idyllum_icon-spyglass_C.svg" alt="Latest website security scans by the Idyllum Labs online website security scanner">
            </div>
            <div class="righty">
              Real time
            </div>
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="/browse/">
            <div class="lefty">
              <img src="https://www.idyllum.com/static/images/Idyllum_icon-folder_C.svg" alt="Browse security reports by used software">
            </div>
            <div class="righty">
              Listes
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home/">
            <div class="lefty">
              <img src="https://www.idyllum.com/static/images/Idyllum_icon-windows_C.svg" alt="Idyllum Labs Security dashboard. Online OWASP ZAP">
            </div>
            <div class="righty">
              Dashboard
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/accounts/logout/">
            <div class="lefty">
              <img src="https://www.idyllum.com/static/images/Idyllum_icon-button_C.svg" alt="Idyllum Labs Security dashboard. Online OWASP ZAP">
            </div>
            <div class="righty">
              Logout
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



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
    --bs-navbar-padding-x:  0;  
    --bs-navbar-padding-y:  0.5rem;  
    --bs-navbar-color:  rgba(0,0,0,0.55);  
    --bs-navbar-hover-color:  rgba(0,0,0,0.7);  
    --bs-navbar-disabled-color:  rgba(0,0,0,0.3);  
    --bs-navbar-brand-padding-y:  0.3125rem;  
    --bs-navbar-brand-margin-end:  1rem;  
    --bs-navbar-brand-font-size:  1.25rem;  
    --bs-navbar-brand-color:  rgba(0,0,0,0.9);  
    --bs-navbar-brand-hover-color:  rgba(0,0,0,0.9);  
    --bs-navbar-nav-link-padding-x:  0.5rem;  
    --bs-navbar-toggler-padding-y:  0.25rem;  
    --bs-navbar-toggler-padding-x:  0.75rem;  
    --bs-navbar-toggler-font-size:  1.25rem;  
    --bs-navbar-toggler-border-color:  rgba(0,0,0,0.1);  
    --bs-navbar-toggler-border-radius:  0.375rem;  
    --bs-navbar-toggler-transition:  box-shadow 0.15s ease-in-out;  
    --bs-gutter-x:  1.5rem;  
    --bs-nav-link-padding-x:  0;  
    --bs-nav-link-padding-y:  0.5rem;  
    --bs-nav-link-color:  var(--bs-navbar-color);  
    --bs-nav-link-hover-color:  var(--bs-navbar-hover-color);  
    --bs-nav-link-disabled-color:  var(--bs-navbar-disabled-color);  
} 

* { 
    box-sizing: border-box;
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
    --bs-border-width: 1px; 
    --bs-link-color: #0d6efd; 
    --bs-link-hover-color: #0a58ca; 
} 

@media (prefers-reduced-motion: no-preference){ 
  :root { 
    scroll-behavior: smooth;
  } 
}     

.navbar { 
    --bs-navbar-padding-x: 0; 
    --bs-navbar-padding-y: 0.5rem; 
    --bs-navbar-color: rgba(0,0,0,0.55); 
    --bs-navbar-hover-color: rgba(0,0,0,0.7); 
    --bs-navbar-disabled-color: rgba(0,0,0,0.3); 
    --bs-navbar-brand-padding-y: 0.3125rem; 
    --bs-navbar-brand-margin-end: 1rem; 
    --bs-navbar-brand-font-size: 1.25rem; 
    --bs-navbar-brand-color: rgba(0,0,0,0.9); 
    --bs-navbar-brand-hover-color: rgba(0,0,0,0.9); 
    --bs-navbar-nav-link-padding-x: 0.5rem; 
    --bs-navbar-toggler-padding-y: 0.25rem; 
    --bs-navbar-toggler-padding-x: 0.75rem; 
    --bs-navbar-toggler-font-size: 1.25rem; 
    --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); 
    --bs-navbar-toggler-border-color: rgba(0,0,0,0.1); 
    --bs-navbar-toggler-border-radius: 0.375rem; 
    --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out; 
    position: relative; 
    padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
} 

.righty {
  font-family: 'IBM Plex Mono', monospace;
}

@media (min-width: 992px){ 
  .navbar-expand-lg { 
    flex-wrap: nowrap; 
    justify-content: flex-start;
  } 
}     

.py-3 { 
    padding-top: 1rem!important; 
    padding-bottom: 1rem!important;
} 

*,:after,:before { 
    box-sizing: border-box;
} 

.container-fluid { 
    --bs-gutter-x: 1.5rem; 
    width: 100%; 
    padding-right: calc(var(--bs-gutter-x) * .5); 
    padding-left: calc(var(--bs-gutter-x) * .5); 
    margin-right: auto; 
    margin-left: auto;
} 

 .navbar > .container-fluid { 
    display: flex; 
    flex-wrap: inherit; 
    align-items: center; 
    justify-content: space-between;
} 

.navbar > .container, .navbar > .container-fluid, .navbar > .container-lg, .navbar > .container-md, .navbar > .container-sm, .navbar > .container-xl, .navbar > .container-xxl { 
    display: flex; 
    flex-wrap: inherit; 
    align-items: center; 
    justify-content: space-between;
} 

a { 
    color: var(--bs-link-color); 
    text-decoration: underline;
} 

a { 
    color: #FF931E; 
    text-decoration: none;
} 

.navbar-brand { 
    padding-top: var(--bs-navbar-brand-padding-y); 
    padding-bottom: var(--bs-navbar-brand-padding-y); 
    margin-right: var(--bs-navbar-brand-margin-end); 
    font-size: var(--bs-navbar-brand-font-size); 
    color: var(--bs-navbar-brand-color); 
    text-decoration: none; 
    white-space: nowrap;
} 

a:hover { 
    color: var(--bs-link-hover-color);
} 

.navbar-brand:hover { 
    color: var(--bs-navbar-brand-hover-color);
} 

.idyllum-navbar a:hover { 
    background: none;
} 

button { 
    border-radius: 0;
} 

button { 
    margin: 0; 
    font-family: inherit; 
    font-size: inherit; 
    line-height: inherit;
} 

button { 
    text-transform: none;
} 

[type="button"],button { 
    -webkit-appearance: button;
} 

.idyllum_logo{
    width: 50%;
    height: 50%;

}
.navbar-toggler { 
    padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x); 
    font-size: var(--bs-navbar-toggler-font-size); 
    line-height: 1; 
    color: var(--bs-navbar-color); 
    background-color: transparent; 
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color); 
    border-radius: var(--bs-navbar-toggler-border-radius); 
    transition: var(--bs-navbar-toggler-transition);
} 

[type="button"]:not(:disabled),button:not(:disabled) { 
    cursor: pointer;
} 

@media (min-width: 992px){ 
  .navbar-expand-lg .navbar-toggler  { 
    display: none;
  } 
}     

.idyllum-navbar .navbar-toggler  { 
    border: none; 
    box-shadow: none!important; 
    padding-right: 0;
} 

.navbar-toggler:hover { 
    text-decoration: none;
} 

.navbar-collapse { 
    flex-basis: 100%; 
    flex-grow: 1; 
    align-items: center;
} 

.collapse:not(.show) { 
    display: none;
} 

@media (min-width: 992px){ 
  .navbar-expand-lg .navbar-collapse  { 
    display: flex!important; 
    flex-basis: auto;
  } 
}     

img { 
    vertical-align: middle;
} 

.idyllum_logo { 
    min-height: 1.3rem;
} 

.navbar-toggler-icon { 
    display: inline-block; 
    width: 1.5em; 
    height: 1.5em; 
    vertical-align: middle; 
    background-image: var(--bs-navbar-toggler-icon-bg); 
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: 100%; 
    background-repeat-x: no-repeat; 
    background-repeat-y: no-repeat;
} 

.idyllum-navbar .navbar-toggler-icon  { 
    background-image: url('https://www.idyllum.com/static/images/Idyllum-icon-diamond.svg?53cc57d7d924'); 
    width: 2.5rem; 
    height: 2.5rem;
} 

ul { 
    padding-left: 2rem;
} 

ul { 
    margin-top: 0; 
    margin-bottom: 1rem;
} 

.navbar-nav { 
    --bs-nav-link-padding-x: 0; 
    --bs-nav-link-padding-y: 0.5rem; 
    --bs-nav-link-color: var(--bs-navbar-color); 
    --bs-nav-link-hover-color: var(--bs-navbar-hover-color); 
    --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color); 
    display: flex; 
    flex-direction: column; 
    padding-left: 0; 
    margin-bottom: 0; 
    list-style: none;
} 

.mt-5 { 
    margin-top: 3rem!important;
} 

.mb-2 { 
    margin-bottom: .5rem!important;
} 

.ms-auto { 
    margin-left: auto!important;
} 

@media (min-width: 992px){ 
  .mt-lg-0 { 
    margin-top: 0!important;
  } 

  .mb-lg-0 { 
    margin-bottom: 0!important;
  } 

  .navbar-expand-lg .navbar-nav  { 
    flex-direction: row;
  } 
}     

.nav-item { 
    color: #2EE5B5; 
    font-size: 0.9rem;
} 

.d-none { 
    display: none!important;
} 

.nav-link { 
    display: block; 
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x); 
    font-size: var(--bs-nav-link-font-size); 
    font-weight: var(--bs-nav-link-font-weight); 
    color: var(--bs-nav-link-color); 
    text-decoration: none; 
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
} 

.nav-link { 
    color: #ff931e; 
    padding: 0.25rem 1rem;
} 

.nav-item a  { 
    color: #2EE5B5; 
    display: flex; 
    align-items: center; 
    text-transform: uppercase; 
    font-weight: 600;
} 

@media (min-width: 992px){ 
  .navbar-expand-lg .navbar-nav .nav-link  { 
    padding-right: var(--bs-navbar-nav-link-padding-x); 
    padding-left: var(--bs-navbar-nav-link-padding-x);
  } 
}     

 li a:hover { 
    background: #FF931E; 
    color: #0A0414; 
    text-decoration: none;
} 

.nav-link:hover { 
    color: var(--bs-nav-link-hover-color);
} 

.nav-item a:hover { 
    color: #2EE5B5; 
    margin-top: -0.125rem; 
    margin-bottom: 0.125rem; 
    text-decoration: none; 
    background: none;
} 

.nav-item a:hover, .nav-link:focus { 
    margin-top: 0; 
    margin-bottom: 0;
} 

p a:hover, li a:hover, .idyllum-norton a:hover, .terminal a:hover { 
    background: #FF931E; 
    color: #0A0414; 
    text-decoration: none;
} 

.nav-item a:hover, .nav-link:focus { 
    color: #2EE5B5; 
    margin-top: -0.125rem; 
    margin-bottom: 0.125rem; 
    text-decoration: none; 
    background: none;
} 

.lefty { 
    flex-basis: 50%; 
    text-align: right; 
    padding-right: 1.5rem; 
    display: none;
} 

.righty { 
    flex-basis: 100%; 
    text-align: left; 
    padding-left: 0.5rem; 
    padding-right: 0.5rem;
} 

.nav-item img  { 
    max-width: 2rem; 
    max-height: 2rem; 
    margin: 0.7rem;
} 





</style>
<template>
  <div class="terminal p-4 mb-4 snipcss-fKFOt">
    <div class="row mb-3">
      <div class="col-12 ">
        <h1>
          Résultat de recherche
        </h1>
        ------------------
        <br>
      </div>
    </div>
  
    <!-- Loop through each book in the results -->
    <div class="row mb-3 position-relative" v-for="book in result" :key="book.id">
      <div class="text-end position-absolute small div-date w-25 d-none d-lg-block">
        <!-- Placeholder for book publishing date or some relevant date -->
      </div>
      <div class="col-12 col-lg-5 col-xl-3 small mb-3">
        <h2 class="mb-1 heading-no-decoration text-break">
          <!-- Display book title and link to its Google Books page -->
          <a :href="book.volumeInfo.previewLink" target="_blank">
            {{ book.volumeInfo.title }}
          </a>
          <a :href="book.volumeInfo.previewLink" target="_blank" class="idyllum-external-link">
          </a>
        </h2>
        <!-- Placeholder for additional book details if needed -->
      </div>
      <div class="col-12 col-lg-7 col-xl-9 small mb-3">
        <!-- Display book authors, publisher and a short description -->
        Authors: {{ book.volumeInfo.authors.join(', ') }}
        <br>
        Publisher: {{ book.volumeInfo.publisher }}
        <br>
        Description: {{ book.volumeInfo.description | truncate(150) }}
        <a :href="book.volumeInfo.previewLink" target="_blank">
          ... more
        </a>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Create a utility filter to truncate long descriptions
  const truncate = (text, length) => {
    if (text && text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };
  
  </script>
  

<style scoped>  body {  
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

.mb-4 { 
    margin-bottom: 1.5rem!important;
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

.p-4 { 
    padding: 1.5rem!important;
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

.position-relative { 
    position: relative!important;
} 

.small { 
    font-size: .875em;
} 

.d-none { 
    display: none!important;
} 

.position-absolute { 
    position: absolute!important;
} 

.w-25 { 
    width: 25%!important;
} 

.text-end { 
    text-align: right!important;
} 

@media (min-width: 992px){ 
  .d-lg-block { 
    display: block!important;
  } 
}     

.div-date { 
    right: 0; 
    background: #0A0414;
} 

@media (min-width: 992px){ 
  .col-lg-5 { 
    flex: 0 0 auto; 
    width: 41.66666667%;
  } 

  .col-lg-7 { 
    flex: 0 0 auto; 
    width: 58.33333333%;
  } 
}     

h1 { 
    margin-top: 0; 
    margin-bottom: .5rem; 
    font-weight: 500; 
    line-height: 1.2;
} 

h1 { 
    font-size: calc(1.375rem + 1.5vw);
} 

h1 { 
    font-weight: 600; 
    font-family: 'IBM Plex Mono',sans-serif; 
    font-size: 1rem; 
    margin-bottom: 1rem;
} 

h1 { 
    color: #FF931E;
} 

h1:before { 
    content: "# ";
} 

h2 { 
    margin-top: 0; 
    margin-bottom: .5rem; 
    font-weight: 500; 
    line-height: 1.2;
} 

h2 { 
    font-size: calc(1.325rem + .9vw);
} 

h2 { 
    font-weight: 600; 
    font-family: 'IBM Plex Mono',sans-serif; 
    font-size: 1rem; 
    margin-bottom: 1rem;
} 

h2 { 
    color: #2EE5B5;
} 

.mb-1 { 
    margin-bottom: .25rem!important;
} 

.text-break { 
    word-wrap: break-word!important; 
    word-break: break-word!important;
} 

h2:before { 
    content: "## ";
} 

.heading-no-decoration:before { 
    content: "";
} 

.d-block { 
    display: block!important;
} 

@media (min-width: 992px){ 
  .d-lg-none { 
    display: none!important;
  } 
}     

.text-nowrap { 
    white-space: nowrap!important;
} 

.good { 
    color: #2EE5B5;
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

p a:hover, li a:hover, .idyllum-norton a:hover, .terminal a:hover { 
    background: #FF931E; 
    color: #0A0414; 
    text-decoration: none;
} 

.bad { 
    color: #ff6d0b;
} 

.idyllum-external-link { 
    display: inline-block; 
    width: 0.9rem; 
    height: 0.9rem; 
    background-image: url('https://www.idyllum.com/static/images/ext-link.svg?165973301496'); 
    background-position: 50% 50%; 
    background-repeat: no-repeat; 
    background-size: 100%; 
    background-repeat-x: no-repeat; 
    background-repeat-y: no-repeat;
} 

.idyllum-external-link:hover { 
    background-image: url('https://www.idyllum.com/static/images/ext-link-hover.svg?b5373ac791b2')!important; 
    background-size: 100%!important;
} 

.newverdict-1 { 
    color: #ff380b;
} 




</style>
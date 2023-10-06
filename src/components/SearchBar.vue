<template>
  <div class="terminal p-4 mb-4 snipcss-2LXjf">
    <div class="row ">
      <div class="col-12 col-xl-4 mb-3 mb-xl-0 snipcss0-0-0-1">
        <div class="input-group snipcss0-1-1-2">
          <span class="input-group-text snipcss0-2-2-3">
            &gt;
          </span>
          <input v-model="search" @keyup.enter="apicall" type="text" class="form-control snipcss0-2-2-4" id="search-form" name="query"  placeholder="Recherche: Harry Potter" aria-label="search" aria-describedby="idyllum-form-submit" autofocus="">
          <button @click="apicall" class="btn btn-deepsaffron snipcss0-2-2-5" type="button" id="idyllum-form-submit">
            ok »
          </button>
        </div>
        <p class="small mt-2 text-end w-100 idyllum-howto d-block snipcss0-1-1-6">
          <span @click="ClearSearch" class="text-deepsaffron cursorpointer snipcss0-2-6-7">
            [ clear ]
          </span>
        </p>
      </div>
      <div class="subtitle-input col-12 col-xl-8">
        Faîtes une recherche en tapant le nom de l'auteur ou le titre du livres 
        <br>
      </div>
    </div>
  </div>
  <div  v-if="isLoading"  class="alert idyllum-norton alert-info snipcss-O6XxM" id="idyllum-statusbot">
  <span class="text-deepsaffron">
    bot@bookwardenlabs:~$
  </span>
  <span id="message">
   Nous sommes entrain de réaliser la recherche  {{search}}
  </span>

</div>
  <div v-if="noResults" class="alert">Aucun résultat trouvé pour votre recherche.</div>
</template>

<script setup>import { useRouter, useRoute } from 'vue-router';
import { watch, onMounted, ref } from 'vue';
import axios from 'axios';

const search = ref('');
const isLoading = ref(false); 
const noResults = ref(false); 
const router = useRouter();
const route = useRoute();

// Watcher pour la requête de route
watch(() => route.query.q, fetchData);

onMounted(fetchData);  // Si vous souhaitez effectuer une recherche dès le montage du composant

async function fetchData() {
    const searchTerm = route.query.q || search.value;

    isLoading.value = true;
    noResults.value = false;

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=15`);
        isLoading.value = false;

        if (response.data.items) {
            search.value = searchTerm;  // Mettre à jour la valeur de recherche
        } else {
            noResults.value = true; 
        }
    } catch (err) {
        console.error(err);
        isLoading.value = false;
    }
}

async function apicall() {
    isLoading.value = true;
    noResults.value = false;

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search.value}&maxResults=15`);
        isLoading.value = false;

        if (response.data.items) {
          router.replace({ name: 'search', query: { q: search.value } });
        } else {
            noResults.value = true;
        }
    } catch (err) {
        console.error(err);
        isLoading.value = false;
    }
}

function ClearSearch() {
    search.value = '';
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap'); 


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

*,:after,:before { 
    box-sizing: border-box;
} 

.text-deepsaffron { 
    color: #FF931E;
} 

.mb-4 { 
  margin-bottom: 1.5rem!important;
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


.spinner {
  /* Style pour votre spinner - ajustez comme nécessaire */
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 4px solid transparent;
  border-top-color: #FF931E;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.alert {
  /* Style pour le message d'alerte - ajustez comme nécessaire */
  color: #FF931E;
  font-weight: bold;
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

@media (min-width: 1200px){ 
.col-xl-4 { 
  flex: 0 0 auto; 
  width: 33.33333333%;
} 
}     

.mb-3 { 
  margin-bottom: 1rem!important;
} 

@media (min-width: 1200px){ 
.mb-xl-0 { 
  margin-bottom: 0!important;
} 

.col-xl-8 { 
  flex: 0 0 auto; 
  width: 66.66666667%;
} 
}     

.input-group { 
  position: relative; 
  display: flex; 
  flex-wrap: wrap; 
  align-items: stretch; 
  width: 100%;
} 

.subtitle-input  { 
  color: white;
  font-family: 'IBM Plex Mono', monospace;
} 


.input-group { 
  box-shadow: 0 0 2px rgb(255 147 30 / 90%),0 0 4px rgb(255 147 30 / 40%),0 0 1rem rgb(255 147 30 / 30%),0 0 4rem rgb(255 147 30 / 10%)!important;
} 

p { 
  margin-top: 0; 
  margin-bottom: 1rem;
} 

.small { 
  font-size: .875em;
} 

.d-block { 
  display: block!important;
} 

.w-100 { 
  width: 100%!important;
} 

.mt-2 { 
  margin-top: .5rem!important;
} 

.text-end { 
  text-align: right!important;
} 

.idyllum-howto { 
  z-index: 22;
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

.input-group-text { 
  display: flex; 
  align-items: center; 
  padding: .375rem .75rem; 
  font-size: 1rem; 
  font-weight: 400; 
  line-height: 1.5; 
  color: #212529; 
  text-align: center; 
  white-space: nowrap; 
  background-color: #e9ecef; 
  border: 1px solid #ced4da; 
  border-radius: .375rem;
} 

.input-group-text { 
  border-radius: 0; 
  background: none; 
  border: 1px solid #FF931E; 
  border-right: 0; 
  color: #000; 
  background-color: #fff; 
  z-index: 20; 
  padding-right: 0;
} 

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)  { 
  border-top-right-radius: 0; 
  border-bottom-right-radius: 0;
} 

input { 
  margin: 0; 
  font-family: inherit; 
  font-size: inherit; 
  line-height: inherit;
} 

textarea:focus, input:focus{
    outline: none;
}

.form-control { 
  display: block; 
  width: 100%; 
  padding: .375rem .75rem; 
  font-size: 1rem; 
  font-weight: 400; 
  line-height: 1.5; 
  color: #212529; 
  background-color: #fff; 
  background-clip: padding-box; 
  border: 1px solid #ced4da; 
  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
  border-radius: .375rem; 
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
} 

.form-control { 
  border: 1px solid #FF931E; 
  color: #000; 
  background-color: #fff!important; 
  border-radius: 0; 
  box-shadow: none;
} 

.form-control { 
  box-shadow: 0 0 2px rgb(255 147 30 / 90%),0 0 4px rgb(255 147 30 / 40%),0 0 1rem rgb(255 147 30 / 30%),0 0 4rem rgb(255 147 30 / 10%)!important;
} 

.input-group > .form-control  { 
  position: relative; 
  flex: 1 1 auto; 
  width: 1%; 
  min-width: 0;
} 

.input-group .form-control  { 
  box-shadow: none!important;
} 

.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)  { 
  margin-left: -1px; 
  border-top-left-radius: 0; 
  border-bottom-left-radius: 0;
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

[type="submit"],button { 
  -webkit-appearance: button;
} 

.btn { 
  --bs-btn-padding-x: 0.75rem; 
  --bs-btn-padding-y: 0.375rem; 
  --bs-btn-font-size: 1rem; 
  --bs-btn-font-weight: 400; 
  --bs-btn-line-height: 1.5; 
  --bs-btn-color: #212529; 
  --bs-btn-bg: transparent; 
  --bs-btn-border-width: 1px; 
  --bs-btn-border-color: transparent; 
  --bs-btn-border-radius: 0.375rem; 
  --bs-btn-hover-border-color: transparent; 
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb),.5); 
  display: inline-block; 
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); 
  font-family: var(--bs-btn-font-family); 
  font-size: var(--bs-btn-font-size); 
  font-weight: var(--bs-btn-font-weight); 
  line-height: var(--bs-btn-line-height); 
  color: var(--bs-btn-color); 
  text-align: center; 
  text-decoration: none; 
  vertical-align: middle; 
  cursor: pointer; 
  -webkit-user-select: none; 
  -moz-user-select: none; 
  user-select: none; 
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); 
  border-radius: var(--bs-btn-border-radius); 
  background-color: var(--bs-btn-bg); 
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
} 

.btn { 
  border: 1px solid #261446; 
  color: #2EE5B5; 
  background: #0a0414; 
  border-radius: 0;
} 

.btn-deepsaffron { 
  border: 1px solid #FF931E; 
  background: #FF931E; 
  color: #261446; 
  z-index: 20!important;
} 

[type="submit"]:not(:disabled),button:not(:disabled) { 
  cursor: pointer;
} 

.input-group .btn  { 
  position: relative; 
  z-index: 2;
} 

.btn:hover { 
  color: var(--bs-btn-hover-color); 
  background-color: var(--bs-btn-hover-bg); 
  border-color: var(--bs-btn-hover-border-color);
} 

.btn:hover { 
  color: #7DF5D5; 
  border: 1px solid #7DF5D5; 
  background: #0A0414;
} 

.btn-deepsaffron:hover { 
  border: 1px solid #FF931E; 
  background: #FF931E; 
  color: #261446; 
  z-index: 20!important; 
  box-shadow: 0 0 0 0.125rem rgb(255 147 35);
} 

.text-deepsaffron { 
  color: #FF931E;
} 

.cursorpointer { 
  cursor: pointer;
} 

p a:hover, li a:hover, .idyllum-norton a:hover, .terminal a:hover { 
  background: #FF931E; 
  color: #0A0414; 
  text-decoration: none;
} 


</style>
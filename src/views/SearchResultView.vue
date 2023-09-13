<template>
    <SearchBar/>
    <div class="terminal p-4 mb-4 snipcss-fKFOt">
        <div class="row mb-3">
            <div class="col-12">
                <h1># Résultat de recherche</h1>
                <div class="horizontal-bar"></div>
                <br>
            </div>
        </div>
        <div class="row mb-3 position-relative" v-for="book in books" :key="book.id">
            <div class="col-12 col-lg-5 col-xl-3 small mb-3">
                <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail" alt="Book cover">
                <img v-else src="https://via.placeholder.com/150x200.png?text=Pas+d%27image" alt="Default book cover">
            </div>
            <div style="color: white;" class="col-12 col-lg-7 col-xl-9 small mb-3">
                <h2 class="mb-1 heading-no-decoration text-break">
                    {{ book.volumeInfo.title }}
                    <svg class="heart" :class="{ 'filled': isHeartFilled[book.id] }" @click="toggleHeart(book)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29.6">
            <path d="M16,28.9C12.7,25.7,1.8,15.6,1.8,9.3C1.8,5.2,5.3,1.8,9.5,1.8c2.7,0,5.3,1.5,6.6,3.8c1.3-2.3,3.9-3.8,6.6-3.8c4.2,0,7.7,3.4,7.7,7.6c0,6.3-10.9,16.4-14.2,19.6L16,28.9L16,28.9z"/>
        </svg>
                </h2>
                <div>
                    Authors: {{ book.volumeInfo.authors.join(', ') }}
                    <br>
                    Publisher: {{ book.volumeInfo.publisher }}
                    <br>
                    ISBN: {{ getISBN(book.volumeInfo.industryIdentifiers) }}
                    <br>
                    Description: {{ truncate(book.volumeInfo.description, 500) }}
                </div>
            </div>
            <div class="horizontal-bar"></div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SearchBar from '../components/SearchBar.vue';
import axios from 'axios';
import { getDatabase, ref as dbRef, set, remove, onValue } from 'firebase/database';

const db = getDatabase(); 
const books = ref([]);
const isHeartFilled = reactive({});
const route = useRoute();

const fetchData = async () => {
    const searchTerm = route.query.q;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=15`);

    if (response.data.items) {
        books.value = response.data.items;
        initializeHeartStatus();
    } else {
        books.value = [];
    }
}

const getISBN = (identifiers) => {
    const isbn13 = identifiers?.find(identifier => identifier.type === "ISBN_13");
    return isbn13 ? isbn13.identifier : 'N/A';
};

const truncate = (text, length) => text && text.length > length ? text.substring(0, length) + '...' : text;

const initializeHeartStatus = () => {
    const favoritesRef = dbRef(db, 'favorites');
    onValue(favoritesRef, (snapshot) => {
        const favs = snapshot.val();
        books.value.forEach(book => {
            isHeartFilled[book.id] = favs && favs[book.id];
        });
    });
}

const toggleHeart = (book) => {
    isHeartFilled[book.id] = !isHeartFilled[book.id];
    console.log(book.id)

    if (isHeartFilled[book.id]) {
        const bookToSave = {
            ...book.volumeInfo,
            ISBN: getISBN(book.volumeInfo.industryIdentifiers)
        };
        set(dbRef(db, 'favorites/' + book.id), bookToSave)
            .catch(error => {
                console.error("Erreur lors de la sauvegarde dans Firebase:", error);
            });
    } else {
        remove(dbRef(db, 'favorites/' + book.id))
            .catch(error => {
                console.error("Erreur lors de la suppression dans Firebase:", error);
            });
    }
}

onMounted(fetchData);
</script>

<style scoped>  
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
.horizontal-bar {
    height: 0; /* Pas besoin de hauteur car nous utilisons la bordure pour le style pointillé */
    border-top: 2px dashed #FF931E; /* Bordure pointillée */
    width: 100%; /* Largeur de la barre */
}

.heart {
  width: 28px;
  height: 15px;
  margin-right: 10px;
  fill: none;
  stroke: white;
  stroke-width: 2px;
  cursor: pointer;
}

.heart.filled {
    stroke: #2EE5B5;
    fill: #2EE5B5; /* Fill color when heart is "liked" */
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

.book-thumbnail {
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 15px;
}





</style>
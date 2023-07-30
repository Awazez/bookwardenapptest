<script setup>
import axios from 'axios';
import { ref, onMounted} from 'vue';


"https://www.googleapis.com/books/v1/volumes?q="

let result = ref(null);
let data = ref(null);
const search = ref("");
const  research = ref("");
const baseurl = "https://www.googleapis.com/books/v1/volumes?q=";




function apicall(search) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+search)
      .then((data  => result.value = data));

      return {result}
}


</script>


<template>
        <div class="container">
        <input v-model="research" v-on:keyup.enter="apicall(research)" placeholder="Rechercher" >
        <div class="box">
          <div class="box-book">
            <img src="http://books.google.com/books/content?id=GBl6MWssicEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api">
          </div>
          <div class="box-info">

        
            <div class="box-title">
            Harry Potter and the Chamber of secret
          
          </div>
          <div class="box-author">
            J.K. Rowling
          </div>
          </div>
        </div>
    </div>

    {{result}}
    

</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque&display=swap');

.container {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 margin-top: 1rem;

}

input {
  background-color: #eed4dc;
  width: 15rem;
  height: 1rem;
  border-radius: 20px;
  padding: 10px;
  border: none;
}

img {
  background-color: black;
  width: 4rem;
  height: 5rem;
}

.box {
  background-color: white;
  width: 25rem;
  height: 5rem;
  padding: 10px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

.box-book {
  background-color: black;
  width: 4rem;
  height: 5rem;
}

.box-info {
  display: flex;
  flex-direction: column;
}

.box-title {
  font-family: 'Darker Grotesque', sans-serif;
  margin-left: 2rem;
  font-size: 18px;
  font-weight: bold;
}

.box-author {
  font-family: 'Darker Grotesque', sans-serif;
  margin-left: 2rem;
}


textarea:focus, input:focus{
    outline: none;
}





</style>
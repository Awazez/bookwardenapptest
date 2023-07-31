<template>
  <div class="container">
    <input v-model="research" @keyup.enter="apicall(research)" placeholder="Rechercher">
    <div class="box" v-for="(book, index) in result" :key="index">
      <div class="box-book">
        <img :src="book.volumeInfo.imageLinks.thumbnail" alt="Book cover">
      </div>
      <div class="box-info">
        <div class="box-title">
          {{ book.volumeInfo.title }}
        </div>
        <div class="box-author">
          {{ book.volumeInfo.authors.join(', ') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

let result = ref([]);
let research = ref("");

async function apicall(search) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    if (response.data.items) {
      result.value = response.data.items;
    } else {
      result.value = [];
    }
  } catch (err) {
    console.error(err);
    result.value = [];
  }
}
</script>


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

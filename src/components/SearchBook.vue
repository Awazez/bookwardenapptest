<template>
  <div class="container">
    <input v-model="research" @keyup.enter="apicall(research)" placeholder="Rechercher">
    <div class="box" v-for="(book, index) in result" :key="index">
      <div class="box-book">
        <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail" alt="Book cover">
        <img v-else :src="defaultBookCover" alt="Default book cover">
      </div>
      <div class="box-info">
        <div class="box-title">
          <div class="title-content">
            {{ book.volumeInfo.title }}
            <svg class="heart" :class="{ 'filled': isHeartFilled[index] }" @click="toggleHeart(index)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 4.435c-1.989-2.48-5.1-2.063-6.879-.279-2.25-2.25-6.209-2.159-8.121.753-1.898 2.875-.566 6.787 2.217 8.571l9.668 9.592 9.764-9.688c2.778-2.783 4.107-6.695 2.217-8.571-1.912-2.916-5.867-3.002-8.121-.753-1.848-1.849-4.916-2.23-7.146-.625z"/>
            </svg>
          </div>
        </div>
        <div class="box-author">
          {{ book.volumeInfo.authors?.join(', ') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';
import defaultBookCover from '../assets/livres.png';

let result = ref([]);
let research = ref("");
let isHeartFilled = reactive({});

async function apicall(search) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10`);
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

function toggleHeart(index) {
  isHeartFilled[index] = !isHeartFilled[index];
}
</script>

<style scoped>

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

.title-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.heart {
  fill: none;
  stroke: red;
  stroke-width: 2px;
  cursor: pointer;
  margin-left: 1rem; /* Add some space between the title and the heart */
}

.heart.filled {
  fill: red;
}


</style>

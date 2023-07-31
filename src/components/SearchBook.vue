<template>
  <div class="container">
    <input v-model="research" @keyup.enter="apicall(research)" placeholder="Rechercher">
    <div class="box" v-for="(book, index) in result" :key="index">
      <div class="box-book">
        <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail" alt="Book cover">
        <img v-else :src="defaultBookCover" alt="Default book cover">
      </div>
      <div class="box-info">
        <div class="box-information">
          <div class="box-title pointer" @click="openModal(book)">
            {{ truncateText(book.volumeInfo.title, 40) }}
          </div>
          <div class="box-author">
            {{ book.volumeInfo.authors?.join(', ') }}
          </div>
        </div>
        <div class="box-heart">
          <svg class="heart" :class="{ 'filled': isHeartFilled[index] }" @click="toggleHeart(index, book)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29.6">
            <path d="M16,28.9C12.7,25.7,1.8,15.6,1.8,9.3C1.8,5.2,5.3,1.8,9.5,1.8c2.7,0,5.3,1.5,6.6,3.8c1.3-2.3,3.9-3.8,6.6-3.8c4.2,0,7.7,3.4,7.7,7.6c0,6.3-10.9,16.4-14.2,19.6L16,28.9L16,28.9z"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="modal" v-if="selectedBook">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ selectedBook.volumeInfo.title }}</h2>
        <p>{{ selectedBook.volumeInfo.description }}</p>
        <!-- Add any other book details you want to show here -->
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
let selectedBook = ref(null);
let isHeartFilled = reactive({});

async function apicall(search) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=15`);
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

function toggleHeart(index, book) {
  isHeartFilled[index] = !isHeartFilled[index];
  // Emit events if needed, for example:
  // if (isHeartFilled[index]) {
  //   emit('book-added', book);
  // } else {
  //   emit('book-removed', book);
  // }
}

function openModal(book) {
  selectedBook.value = book;
}

function closeModal() {
  selectedBook.value = null;
}

function truncateText(text, limit) {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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


.box-heart {
  width: 20px;
  height: 13px;
  margin-right: 10px;
}

.pointer {
  cursor: pointer;
}

.heart {
  fill: none;
  stroke: #0b1c4a;
  stroke-width: 2px;
  cursor: pointer;
}

.heart.filled {
  fill: #0b1c4a;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}



</style>

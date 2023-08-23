<script setup>
import SearchBar from '../components/SearchBar.vue';
import TerminalBar from '../components/TerminalBar.vue';

</script>

<template>
  
  <main>
    <SearchBar/>
   <TerminalBar/>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');


.container {
  display: flex;
}
.box {
  background-color: #eed4dc;
  border: 4px solid #eed4dc ;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 18px;
  font-weight: bold;
  width: 40rem;
  height: 18rem;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
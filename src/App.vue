<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <header class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      





  </header>
  <RouterView />
  </body>
</template>


<style>



* {
    margin: 0;
    padding: 0;
}

body {
  background-color: #f3b4c9;
  width: 100%;
  height: 100%;
  margin: none;
}

.wrapper {
  background-color: #0b1c4a;
  width: 100%;
  height: 3rem;
  margin: none;
}




</style>

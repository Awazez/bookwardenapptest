<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <header class="wrapper">
      <div class="logo">BKW</div>
      <nav>
        <RouterLink to="/" class="titles">RECHERCHE</RouterLink>
        <RouterLink to="/about" class="titles">LISTES</RouterLink>
        <RouterLink to="/login" class="titles">LOG IN</RouterLink>
      </nav>
      





  </header>
  <RouterView />
  </body>
</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,900&display=swap');

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
  display: flex;
  align-items: center;
  justify-content:space-around;
}

.logo {
    color: #ffff;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-style: italic;
    padding-left: 10px;
    padding-top: 2px;
    text-decoration: none

}

.titles {
    color: #ffff;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: italic;
    padding-left: 10px;
    padding-top: 2px;
    text-decoration: none

}


</style>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';

const userName = ref("");
const auth = getAuth();
const userInfo =  auth.currentUser; 
const user =  userInfo.email; 
</script>

<template>
<div class="member-area">
  <h1># Member area</h1>
</div>
  
<div class="manage-account">

  ## Manage account
  <br>
  ---------------------- <br>
  User : {{ user }} <br>
  [ Manage e-mail settings ]<br>
  [ Set and change password ]<br>
  [ Manage social accounts ]<br>
  [ Log out ]<br>
</div>
  
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque&display=swap');

h1 {
  font-size: 24px;
  color: #0b1c4a;
}

.container-signIn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-signIn {
  width: 40rem;
  padding: 10px;
  margin-top: 2rem;
  font-family: 'Darker Grotesque', sans-serif;
  color: black;
  font-size: 22px;
  font-weight: bold;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  background-color: #eed4dc;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 18px;
  font-weight: bold;
  width: 40rem;
  height: 5rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.manage-account {
  background-color: #eed4dc;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 22px;
  font-weight: bold;
  width: 25rem;
  height: 14rem;
  padding: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
}

.member-area {
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 28px;
  font-weight: bold;
  width: 25rem;
  height: 3rem;
  padding: 20px;
  display: flex;
  flex-direction: row;
}

</style>

  
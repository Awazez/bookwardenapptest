<script setup>
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from "../router";
const email = ref("");
const password = ref("");

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered!");
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
};

const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully signed in!");
        router.push("/dashboard")
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        router.push("/dashboard")
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
</script>


<template>

<div class="container-signIn">
  <div class="box-signIn">
    # Sign In to Bookwarden
</div>
</div>
<div class="container">
  <div class="box">
    <p>
      Please sign in with your username and pass or use one of your existing third party accounts.<br>
  Don't have an account? Create <RouterLink to="/register" class="link" style="color: red;">a free account here.</RouterLink>
    </p>
 
</div>


<h1>Sign In</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="signIn">Sign In</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</div>


</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque&display=swap');

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
</style>
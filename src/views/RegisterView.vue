<script setup>
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter} from "vue-router"
import router from "../router";
const email = ref("");
const password = ref("");

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered!");
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
    # Create your Bookwarden account
</div>
</div>
<div class="container">
  <div class="box">
    <p>
        Authenticated users can initiate rescans, explore our datasets without limitations, and set up monitoring for a fleet of sites.<br>
        Idyllum Labs is a free service. And we won't ask for your credit card ;) <br>
        Already have an account? Please <RouterLink to="/register" class="link" style="color: red;">sign in. </RouterLink><br>
    </p>
 
</div>
</div>

    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<style>

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
<script setup>

</script>

<template>

  <h1># Espace membre</h1>
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

  
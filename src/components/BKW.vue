<script>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useUserStore } from "../src/stores/userStore"; // Adjust the path

const authInstance = getAuth();
const userStore = useUserStore();

onMounted(() => {
  const unsubscribe = onAuthStateChanged(authInstance, (loggedInUser) => {
    userStore.setUser(loggedInUser);  // Setting the user in the store
  });
  // Optional: Clean up the observer when the component is unmounted
  onUnmounted(() => {
    unsubscribe();
  });
});

const logout = async () => {
  try {
    await signOut(authInstance);
    userStore.clearUser(); // Clear the user from the store
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

</script>

<template>



<body>
    <header class="wrapper">
      <div class="logo">BKW</div>
      <nav>
        <RouterLink to="/" class="titles">RECHERCHE</RouterLink>
        <RouterLink to="/about" class="titles">LIKED</RouterLink>
        <RouterLink v-if="userStore.user" to="/dashboard" class="titles">DASHBOARD</RouterLink>
        <RouterLink v-if="!userStore.user" to="/login" class="titles">LOG IN</RouterLink>
        <RouterLink v-if="userStore.user" to="/logout" class="titles" @click="logout">LOG OUT</RouterLink>
      </nav>
  </header>
  <RouterView />
  </body>

</template>
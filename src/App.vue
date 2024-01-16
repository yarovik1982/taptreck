<template>
  <teleport to="body">
    <div class="layout" v-if="!isAuth && !isAgeConfirmed">
      <div class="layout-conten">
        <form-check-age @ageConfirmed="onAgeConfirmed"></form-check-age>
      </div>
    </div>
  </teleport>
  <div class="app">
    
    <navbar></navbar>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

import { getAll } from "@/HelperFunctions/useSearch.js";

import { getCookie } from "@/HelperFunctions/isAuthenticated.js";
import AppFooter from "./components/AppFooter.vue";
import Navbar from "./components/Navbar.vue";
import FormCheckAge from "./components/FormCheckAge.vue";

export default {
  components: { Navbar, AppFooter, FormCheckAge },

  name: "app",
  setup() {
    const searchData = getAll();
    console.log(searchData);
    const isAuth = ref(getCookie("token="));
    const isAgeConfirmed = ref(getCookie("ageConfirm="));
    watchEffect(() => {
      isAuth.value = getCookie("token=");
      isAgeConfirmed.value = getCookie("ageConfirm=");
    });
    const onAgeConfirmed = () => {
      isAgeConfirmed.value = true;
    };
    return {
      isAuth,
      isAgeConfirmed,
      onAgeConfirmed,
      searchData,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 24px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
}
.layout-conten {
  background-color: white;
  padding: 8px;
  border-radius: 10px;
  height: fit-content;
  position: relative;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

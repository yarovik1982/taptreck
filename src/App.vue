<template>
  <div class="app">
    <div
      class="layout w-100 h-100 position-fixed bg-opacity-75 bg-dark"
      style="z-index: 2"
      v-show="isModal"
      @click.self="toggleModal"
    ></div>
    <navbar @toggle-modal="toggleModal"></navbar>
    <router-view />
    <app-footer @toggle-modal="toggleModal"></app-footer>
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import Navbar from "./components/Navbar.vue";
import { ref } from "vue";
export default {
  components: { Navbar, AppFooter },

  name: "app",
  setup() {
    const isModal = ref(false);
    const toggleModal = () => {
      isModal.value = !isModal.value;
      document.body.classList.toggle('unscroll')
    };
    return {
      isModal,
      toggleModal,
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

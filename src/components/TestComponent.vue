<script setup>
import axios from 'axios';
import { ref, computed } from 'vue'

const search = ref('');
const filteredPosts = ref([])
const getPosts = async () => {
   try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      if (response.status === 200) {
         localStorage.setItem('searchData', JSON.stringify(response.data))
      }
   } catch(e) {
      console.log("Error");
   }
}

const getFilteredPosts = computed(() => {
  const savedData = JSON.parse(localStorage.getItem('searchData'));
  filteredPosts.value = savedData?.filter(post => post.title.toLowerCase().includes(search.value.toLowerCase()))
});
</script>

<template>
    <div class="container">
      <div class="row justify-content-center">
         <div class="col-6 mb-2">
            <input type="text" class="form-control" v-model="search" @focus="getPosts" @input="getFilteredPosts">
         </div>
      </div>
    </div>
    <div class="container">
      <div class="posts">
         <div class="post-item d-flex align-items-center justify-content-between border border-dark p-2 mb-2"
             v-for="post in filteredPosts"
             :key="post.id"
         >
            <div class="post-id px-3">{{ post.id }}</div>
            <div class="post-title px-3 w-25">{{ post.title }}</div>
            <div class="post-body px-3">{{ post.body }}</div>
         </div>
      </div>
    </div>
</template>

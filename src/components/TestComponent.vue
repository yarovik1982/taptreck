<script setup>
import { ref, onMounted } from "vue";
import { toggleClass } from "@/HelperFunctions/addClass";

const data = ref([
   {id:1},
   {id:2},
   {id:3},
   {id:4},
])

// const toggleClass = () => {
//    const items = document.querySelectorAll('.el')
//    items.forEach(item => {
//       item
//    })
   
//    console.log(items);
// }
onMounted(() => {
   toggleClass('.el')
})
</script>
<template>
    <div class="row">
      <!-- <div class="el" :class="{active: item.id === currId}" v-for="item in data" :key="item.id" @click="handleClick(item)"></div> -->
      <div class="el"  v-for="item in data" :key="item.id" >{{ item.id }}</div>
    </div>
</template>
<style scoped >
.row{
   display: flex;
   justify-content: space-between;
}
.el{
   width: 100px;
   height: 100px;
   background-color: #ccc;
   transition: all .3s linear;
}
.el.active{
   background-color: #ffff00;
}
</style>
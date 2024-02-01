<template>
   <div class="layout" :style="style">
      <div class="layout-content">
         <slot></slot>
      </div>
   </div>
</template>
<script>
export default {
   props:['style'],
   name:'app-layout-modal',
   setup(props) {
      

      return{
         props
      }
   },
}
</script>
<style scoped>
.layout {
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,.7);
}
.layout-content {
   padding: 24px;
   background: #fff;
   border-radius: 16px;
   height: fit-content;
}
</style>
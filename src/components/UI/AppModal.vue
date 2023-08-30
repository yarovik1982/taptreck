<template>
   <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
   name:"app-modal",
   props:['id'],
   setup() {
      
   },
}
</script>
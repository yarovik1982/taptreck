<template>
  <div class="form-row">
    <slot name="image"></slot>
    <slot name="label"></slot>
    <input class="form-input" 
      type="text" 
      autocomplete="off" 
      required />
  </div>
</template>

<script>
export default {
   name:'app-input',
   setup() {
      
   },
}
</script>

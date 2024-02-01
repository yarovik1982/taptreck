<template>
  <div>
    <div class="form-footer-line">
      <div class="line"></div>
      <div class="text">или войти с помощью социальных сетей</div>
      <div class="line"></div>
    </div>
    <div class="form-footer-social">
      <a href="#"
        ><img src="@/assets/images/Google-Original.svg" alt="Google"
      /></a>
      <a href="#"
        ><img src="@/assets/images/Telegram-Original.svg" alt="Telegram"
      /></a>
      <a href="#"><img src="@/assets/images/VK-Original.svg" alt="VK" /></a>
    </div>
  </div>
</template>

<script>
export default {
name:'login-by-social',
setup() {
      
   },
}
</script>
<style scoped>
.form-footer-line {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;
 }
 .line {
   width: 60px;
   height: 1px;
   background-color: #969698;
 }
 .text {
   color: #969698;
   font-size: 11px;
 }
 .form-footer-social {
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-bottom: 40px;
 }
</style>

<template>
  <form
    style="
      padding: 80px;
      background: #fff;
      border-radius: 15px;
      max-width:950px;
    " 
  >
    <div class="form-header">
      <h4 class="text-center text-black fw-bolder" style="margin-bottom: 60px">
        Связаться с нами
      </h4>
    </div>
    <div class="row d-flex flex-wrap justify-content-between">
      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="text" class="form-input" name="login" />
        <span class="form-label">Имя</span>
      </div>
      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="text" class="form-input" name="phone" />
        <span class="form-label">Телефон</span>
      </div>

      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="email" class="form-input" name="email" />
        <span class="form-label">Email</span>
      </div>
      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="text" class="form-input" name="theme" />
        <span class="form-label">Тема</span>
      </div>
      <div class="form-row text-center" style="margin-top:60px;border:0;">
        <button type="submit" class="btn btn-warning rounded rounded-2" style="width:260px;height:69px;font-size:24px;color:#fff;">Отправить</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
   name:'feedback-form',
   setup() {
      
   },
}
</script>
<style scoped>
.form-input{
   outline: none;
   width: 100%;
   border: none;
   padding-left: 16px;
   height: 100%;
   background-color: transparent;
}
.form-row{
   margin-bottom: 60px;
   border-bottom: 2px solid #A5A5A5;
   height: 30px;
}
.form-label{
   position: absolute;
   top: 5px;
   left: 16px;
   color: #A5A5A5;
   transition: all .3s linear;
   -webkit-transition: all .3s linear;
   -moz-transition: all .3s linear;
   -ms-transition: all .3s linear;
   -o-transition: all .3s linear;
}
.form-input:focus ~ .form-label{
   top: -25px;;
}
</style>

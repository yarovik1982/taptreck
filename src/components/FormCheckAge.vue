<template>
  <form
    @submit.prevent="checkAge"
    class="form text-black"
    style="
      background: #fff;
      border-radius: 10px;
      width: 561px;
      padding: 100px 40px;
    "
  >
    <div
      class="form-row d-flex justify-content-center border-0"
      style="margin-bottom: 60px"
    >
      <div
        class="circle d-flex justify-content-center align-items-center fw-bold text-black"
        style="
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 1px solid #707008;
          font-size: 48px;
        "
      >
        18+
      </div>
    </div>
    <div class="form-row border-0" style="margin-bottom: 40px">
      <p
        class="text-center m-0"
        style="
          line-height: 120%;
          font-size: 18px;
          padding: 0 34.5px;
          letter-spacing: 0.9px;
          font-family: 'SF Pro', sans-serif;
        "
      >
        Сайт содержит информацию, не рекомендованую лицам, не достигшим
        совершеннолетия. Для входа на сайт подтвердите свой возраст.
      </p>
    </div>
    <div class="form-row border-0 text-center" style="margin-bottom: 40px">
      <button type="submit" class="btn btn-warning text-white">
        Подтверждаю, что мне есть 18 лет
      </button>
    </div>
    <div class="form-row">
      <p class="text-center">
        Мы используем файлы cookie, разработанные нашими специалистами и
        третьими лицами, для анализа событий на нашем веб-сайте, что позволяет
        нам улучшать взаимодействие с пользователями и обслуживание. Продолжая
        просмотр страниц нашего сайта, вы принимаете условия его использования.
        Более подробные сведения см. в нашей
        <a href="#">политике обработки персональных данных.</a>
      </p>
    </div>
  </form>
</template>
<script>
import {ref} from 'vue'
export default {
   name:"form-cneck-age",
   emits:['ageConfirmed'],
   setup(_,{emit}) {
      ;
      const checkAge = () => {
         const ageConfirm = 'confirm'
         document.cookie = `ageConfirm=${ageConfirm};path=/`
         emit('ageConfirmed')
      }
      return{
         checkAge,
      }
   },
}
</script>

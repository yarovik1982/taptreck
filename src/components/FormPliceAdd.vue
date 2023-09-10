<template>
  <form
    class="mb-3 bg-white w-100 d-flex"
    id="addPlice"
    style="padding: 40px 0"
  >
    <div class="row m-0" style="width:100%;">
      <div
        class="col-12 col-lg-6 d-flex justify-content-center align-items-center p-0"
      >
        <div
          style="
            width: 271px;
            height: 196px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          "
        >
          <label
            for="addImage"
            class="label d-flex justify-content-center align-items-center"
            style="
              width: 160px;
              height: 140px;
              background-color: #fed26e;
              border-radius: 38px;
            "
          >
            <i class="bi bi-plus-circle-fill" style="font-size: 40px;color:#fff;"></i>
            <input
              type="file"
              name="image"
              id="addImage"
              style="width: 0.1px; height: 0.1px"
            />
          </label>
          <h4 class="fw-semibold">Добавить фото</h4>
        </div>
      </div>
      <div class="col-12 col-lg-6 p-0">
        <div class="form-body">
          <div class="form-row" style="background:transparent;display: block;">
            <label for="title">Введите название точки продажи</label>
            <input type="text" id="title" name="title" />
          </div>
          <div class="form-row" style="background:transparent;display: block;">
            <label for="type">Выберите тип точки продажи</label>
            <select name="type" id="type">
              <option value="бар">Бар</option>
              <option value="магазин">Магазин</option>
              
            </select>
          </div>
          <div class="form-row" style="background:transparent;display: block;">
            <label for="city">Введите город</label>
            <input type="text" id="city" name="city" />
          </div>
          <div class="form-row" style="background:transparent;display: block;">
            <label for="descript">Введите краткое описание</label>
            <textarea type="text" id="descript" name="descript"></textarea>
          </div>
          <div class="form-btn">
            <button type="submit" class="btn-big">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
   name:'form-plice-add',
   setup() {
      
   },
}
</script>
<style scoped>
input,select,textarea{
   width: 100%;
   border:0;
   border-bottom: 2px solid #A5A5A5;
   outline: none;
}
input,select{
   height: 39px;
}
textarea{
   min-height: 116px;
   resize: none;
}
label{
   display: inline-block;
   width: 100%;
   text-align: left;
   color: #EDC42C;
   font-size: 21px;
}
.form-body {
   padding: 0 45px;
}
.form-row {
   margin-bottom: 40px;
}
.form-btn {
   margin-top: 122px;
   display: flex;
   justify-content: center;
}
.btn-big{
   width:402px;
   height: 52px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   border: none;
   background-color: #FACA10;
   font-size: 18px;
   letter-spacing: 2px;
   border-radius: 10px;
   -webkit-border-radius: 10px;
   -moz-border-radius: 10px;
   -ms-border-radius: 10px;
   -o-border-radius: 10px;
}
</style>
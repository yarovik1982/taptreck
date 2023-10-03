<template>
   <form
    class="mb-3 bg-white w-100 d-flex"
    id="addPlice"
    style="padding: 40px 0"
    @submit.prevent="createBeer"
  >
    
    <div class="row m-0" style="width: 100%">
      <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center p-0">
        <!-- <qrcode-vue  :value =" valueQR " :level =" level " :render-as =" renderAs " /> -->
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
            <i
              class="bi bi-plus-circle-fill"
              style="font-size: 40px; color: #fff"
            ></i>
            <input
              type="file"
              name="image"
              id="addImage"
              style="width: 0.1px; height: 0.1px"
              @change="changeFile"
            />
          </label>
          <h4 class="fw-semibold">Добавить фото</h4>
        </div>
      </div>
      </div>
      <div class="col-12 col-lg-6 p-0 py-4">
        <div class="form-body">
          <div class="form-row" style="background: transparent; display: block">
            <label for="name">Введите название пива</label>
            <input type="text" id="name" name="name" v-model="name"/>
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="style">Введите стиль пива</label>
            <input type="text" id="style" v-model="style">
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="city">Введите крепость (abv)</label>
            <input type="text" id="abv" name="abv" v-model="abv" placeholder=" формат 0.00" />
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="ibu">Введите горечь (ibu)</label>
            <input type="text" id="ibu" name="ibu" v-model="ibu" placeholder="целое число" />
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="descript">Введите краткое описание</label>
            <textarea
              type="text"
              id="descript"
              name="descript"
              v-model="description"
            ></textarea>
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
import {ref} from 'vue'
import {BASE_URL} from '@/HelperFunctions/BaseUrl'
import axios from 'axios'
export default {
   name:'form-beer-add',
   props:['breweryId'],
   setup(props) {
      const image = ref(null)
      const name = ref('')
      const style = ref('')
      const abv = ref('')
      const ibu = ref('')
      const description = ref('')
      const breweryId = props.breweryId;
     
      const changeFile = (e) => {
         image.value = e.target.files[0];
      }

      const createBeer = async () => {
         const formData = new FormData()
         formData.append('image', image.value)

         const beerData = {
            name:name.value,
            style: style.value,
            abv:abv.value,
            ibu:ibu.value,
            description:description.value,
            breweryId,
         }
         try{
            const response = await axios.post(BASE_URL + '/beer/create', formData, {
               params:beerData
            })
            if(response.status === 200){
               location.reload()
            }
         }catch(error){console.log(error)}
      }

      return{
         name,style,abv,ibu, description,
         createBeer,changeFile
      }
   },
}
</script>
<style scoped>

input,
select,
textarea {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #a5a5a5;
  outline: none;
}
input,
select {
  height: 39px;
}
textarea {
  min-height: 116px;
  resize: none;
}
label {
  display: inline-block;
  width: 100%;
  text-align: left;
  color: #edc42c;
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
.btn-big {
  width: 402px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  background-color: #faca10;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}


</style>
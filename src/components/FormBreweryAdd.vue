<template>
  <p class="text-center bg-white m-0 py-2">{{ message }}</p>
  <form
    class="mb-3 bg-white w-100 d-flex"
    id="addPlice"
    style="padding: 40px 0"
    @submit.prevent="breweryAdd"
  >
    
    <div class="row m-0" style="width: 100%">
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
      <div class="col-12 col-lg-6 p-0">
        <div class="form-body">
          <div class="form-row" style="background: transparent; display: block">
            <label for="name">Введите название пивоварни</label>
            <input type="text" id="name" name="name" v-model="name" />
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="type">Выберите тип пивоварни</label>
            <select name="type" id="type" v-model="type">
              <option value="BREWERY">пивоварня</option>
              <option value="MEADERY">медоварня</option>
              <option value="CIDRE">сидродельня</option>
            </select>
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="city">Введите город</label>
            <input type="text" id="city" name="city" v-model="city" />
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
import { ref } from "vue";
import axios from "axios";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile";
import { BASE_URL, apiList } from "@/HelperFunctions/BaseUrl";
import { replaceQuotes } from "@/HelperFunctions/replaceQuotes";
export default {
  name: "form-brewery-add",
  setup() {
    const name = ref("");
    const type = ref("");
    const city = ref("");
    const description = ref("");
    const image = ref(null);
    const message = ref("");
    const profile = GetDataProfile();
    const userId = profile.userId

    const changeFile = (e) => {
      image.value = e.target.files[0];
    };
    
    const breweryAdd = async () => {
         const formData = new FormData()
         formData.append('image', image.value )

        const breweryData = {
          name:name.value,
          type:type.value,
          city:city.value,
          userId:userId,
          description:function(){
              const value = replaceQuotes(description.value)
              return value
            },
        }

         try{
            const response = await axios.post(BASE_URL + apiList.breweryCreate, formData,{
              params:breweryData,
            })
            console.log(response.data);
             
            if(response.status == 200){
              message.value = "Данные сохранены. Изменения вступят в силу после перезагрузки"
              setTimeout(()=>{
                location.reload();
              },3000)
            }else{
              message.value = "Что-то пошло не так, попробуйте заново"
            }
         }catch(e){
           console.error("Ашипка: ",e);
          message.value = e.message
         }
      }
    return {
      name,
      type,
      city,
      description,
      changeFile,
      breweryAdd,
      message,
    };
  },
};
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

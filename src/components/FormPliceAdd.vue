<template>
  <form
    class="mb-3 bg-white w-100 d-flex"
    id="addPlice"
    style="padding: 40px 0"
    @submit.prevent="addPlice"
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
            <label for="name">Введите название точки продажи</label>
            <input type="text" id="name" name="name" v-model="name" />
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="type">Выберите тип точки продажи</label>
            <select
              name="type"
              id="type"
              v-model="typePlace"
            >
              <option value="" disabled selected>Выберите тип</option>
              <option value="BAR">Бар</option>
              <option value="SHOP">Магазин</option>
            </select>
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="city">Введите город</label>
            <input type="text"
              id="city"
              v-model="city"
              name="city"
            >
          </div>
          <div class="form-row" style="background: transparent; display: block">
            <label for="addres">Введите адрес</label>
            <vue-dadata
              id="addres"
              class="my-dadata"
              style="border-bottom: 2px solid #a5a5a5"
              :token="token"
              placeholder="начните ввод"
              @change="onChange"
              v-model="addres"
            ></vue-dadata>
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
import { VueDadata } from "vue-dadata";
import "vue-dadata/dist/style.css";
import { ref } from "vue";
import { useStore } from "vuex";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile.js";
import {BASE_URL, apiList} from '@/HelperFunctions/BaseUrl'
import axios from 'axios';

export default {
  name: "form-place-add",
  components: { VueDadata },
  setup() {
    const store = useStore();
    const token = ref(store.state.api_key_dadata);
    const image = ref(null);
    const profile = GetDataProfile();
    const userId = profile.userId;
    const addres = ref("");
    const name = ref("");
    const typePlace = ref("");
    const description = ref("");
    const city = ref('')
    const geoLat = ref(null)
    const geoLon = ref(null)

    const changeFile = (e) => {
      image.value = e.target.files[0];
    };

    const onChange = () => {
      const query = addres.value;
      const url =
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

      var options = {
        method: "POST",
        mode: "cors",
        count: 5,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token.value,
        },
        body: JSON.stringify({ query: query }),
      };

      fetch(url, options)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          geoLat.value = data.suggestions[0].data.geo_lat,
          geoLon.value = data.suggestions[0].data.geo_lon,
          
          console.log(geoLat.value, geoLon.value);
          
        })
        .catch((error) => console.log("error", error));
    };

    const addPlice = async () => {
      const coords = await onChange();
      const formData = new FormData();
      formData.append("image", image.value);

      const placeData = {
        name: name.value,
        typePlace: typePlace.value,
        description: description.value,
        address: addres.value,
        city: city.value,
        userId: userId,
        geoLat: geoLat.value,
        geoLon: geoLon.value,
      };

      try{
        const response = await axios.post(BASE_URL + apiList.placeCreate, formData, {
          params: placeData,
        })
        console.log(response.data);
        if(response.status === 200){
          console.log("success");
          setTimeout(()=> location.reload(), 3000)
        }
      }catch(error){
        console.log(error);
      }
    };
    return {
      token: store.state.api_key_dadata,
      addres,
      name,
      typePlace,
      description,
      city,
      onChange,
      changeFile,
      addPlice,
    };
  },
};
</script>
<style scoped>
@import "vue-dadata/dist/style.css";
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
.my-dadata > .vue-dadata__search input {
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
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
input {
  font-weight: normal;
  width: 100%;
}
</style>

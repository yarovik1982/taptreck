<template>
  <div
    class="card mb-3 border-warning"
    style="padding: 40px 20px;"
    v-for="card in cardList"
    :key="card.id"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="card.image"
          class="img-fluid"
          alt="IMAGE"
          style="border-radius: 16px"
        />
      </div>
      <div class="col-md-8 d-flex">
        <div class="card-body py-0 d-flex flex-column justify-content-between">
          <div>
            <div
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 21px"
            >
              <h3 class="card-title">{{ card.name }}</h3>
              <i class="icon-heart bi bi-heart-fill"></i>
            </div>
            <div>
              <a
                href="/profile/shoplist:shopId"
                class="card-text"
                v-if="card.type == 'Магазин'"
                >{{ card.type }}</a
              >
              <a href="/profile/bewerieslist:beweriesId" v-else>{{
                card.type
              }}</a>
            </div>
          </div>
          <!-- <p
            class="card-text"
            style="color: #b8b8b8; font-size: 20px; letter-spacing: 3px"
          >
            {{ card.description }}
          </p> -->
          <div class="d-flex justify-content-end align-items-center">
            <!-- <a href="#">Смотреть на карте</a> -->
            <a href="#">Оставить отзыв</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row-btn">
    <button class="btn-more">Загрузить еще</button>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile";
import {useStore} from "vuex"
export default {
  name: "profile-favorites-page",
  setup() {
    const srore = useStore()
    const cardList = ref([])
    const userProfile = GetDataProfile()
    const userId = userProfile.userId

    const getFavorites = async() => {
      try{
        const response = await axios.get(`https://taptrack.ru/user/favorite/place?id=${userId}`)
        if(response.status === 200){
          cardList.value = await response.data
        }
      }catch(e){
        console.log(e);
      }
    }
    onMounted(() => {
       getFavorites()
    })
    return {
      cardList,
      
    };
  },
};
</script>
<style scoped>
.card-row {
  margin-bottom: 21px;
}
.row-btn {
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
.icon-heart{
  font-size: 32px;
  color: #ff0000;
}
</style>

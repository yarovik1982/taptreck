<template>
  <div class="container-fluid" >
    <h2 class="text-center " style="margin-bottom:35px;">
      <span class="section-title">Места</span>
      
    </h2>
    <div class="wrapper-swiper">
    <swiper
      :slidesPerView="1"
      
      :watchOverflow= "true"
      :space-between="16"
      :auto-height="true"
      :loop="true"
      :autoplay="{
         delay:2500,                            
      }"
      :navigation="{
        prevEl: '.swiper-button-next',
        nextEl: '.swiper-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{
    375: {
      slidesPerView: 1,
    },
    585: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  }"
    >
    
      <swiper-slide v-for="(item, index) in PLACE_ADD_BLOCK_DATA" :key="index">
     
        <p class="slide-title">{{item.name}}</p>
        <div class="slide-img">
          <img :src="item.image" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="row-button">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation } from "swiper/modules";
import { mapActions, mapGetters } from "vuex";
// import {newsList} from '@/HelperFunctions/Lists.js'
  export default{
  name: "app-slider-places",
  components: { Swiper, SwiperSlide },
  data() {
    // newsList
    return {
      modules: [Autoplay,Navigation],
      // newsList
    };
  },
    computed: {
    ...mapGetters(["PLACE_ADD_BLOCK_DATA"]),
  },
  methods: {
    ...mapActions(["GET_DATA_PLACE_ADD_BLOCK"]),
  },
  mounted() {
    this.GET_DATA_PLACE_ADD_BLOCK();
  },
};
</script>

<style scoped>
 .wrapper-swiper {
  position: relative;
  min-height: 400px;
}
.swiper {
  width: 83.3333%;
  margin: 0 auto;
  height: 100%;
  padding: 16px 4px;
  font-size: 20px;
}
.swiper-slide{
  text-align: center;
  padding: 8px ;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 4px 2px #ffd700;
  border:1px solid #ccc;
  border-radius: 20px;
  min-height: 100%;
}
.slide-title {
  margin-bottom: 8px;
  flex:1 1 auto;
}
.slide-img {
border-radius: 50%;
overflow: hidden;
border: 1px solid #ffd700;
}
.slide-img img{
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
}
.row-button {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000000;
}
.swiper-button-prev {
  position: relative;
  width: 15px;
  height: 15px;
  cursor: pointer;
  padding: 8px;
}
.swiper-button-prev::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  border-left: 2px solid #1e1e1e;
  border-bottom: 2px solid #1e1e1e;
  top: 0;
  left: 0;
  transform: rotate(45deg);
}
.swiper-button-next {
  position: relative;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.swiper-button-next::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  border-left: 2px solid #1e1e1e;
  border-bottom: 2px solid #1e1e1e;
  top: 0;
  left: 0;
  transform: rotate(-135deg);
} 
.content {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.mySwiper{
  height: 100%;
}
</style>

<template>
  <div class="container-fluid">
    <h2 class="text-center " style="margin-bottom:35px;">
      <span class="section-title">Места</span>
    </h2>
    <div class="wrapper-swiper">
    <swiper
      :slidesPerView="1"
      :space-between="16"
      :auto-height="true"
      :loop="true"
      :autoplay="{
         delay:1000,                            
      }"
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
    },
    // when window width is >= 585px
    585: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
    },
  }"
    >
      <swiper-slide v-for="(item, index) in favoritePlices" :key="index">
        <p class="slide-title">{{item.title}}</p>
        <div class="slide-img">
          <img :src="item.img" />
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
import { Navigation } from "swiper/modules";

import { ref } from "vue";
export default {
  name: "app-slider-places",
  components: { Swiper, SwiperSlide },
  setup() {
    const favoritePlices = ref([
      {title:'Пивоварня Василеостровская', img:require('@/assets/images/vasileostrovskay.png')},
      {title:'Красное&Белое', img:require('@/assets/images/red-white.svg')},
      {title:'Алкомаркет', img:require('@/assets/images/alchomarket.svg')},
      {title:'Пивоварня Василеостровская', img:require('@/assets/images/vasileostrovskay.png')},
      {title:'Красное&Белое', img:require('@/assets/images/red-white.svg')},
      {title:'Алкомаркет', img:require('@/assets/images/alchomarket.svg')},
      {title:'Пивоварня Василеостровская', img:require('@/assets/images/vasileostrovskay.png')},
      {title:'Красное&Белое', img:require('@/assets/images/red-white.svg')},
      {title:'Алкомаркет', img:require('@/assets/images/alchomarket.svg')},
    ])
    return {
      modules: [Navigation],
      favoritePlices,
    };
  },
};
</script>

<style scoped>
.wrapper-swiper {
  position: relative;
}
.swiper {
  width: 83.3333%;
  margin: 0 auto;
  min-height: 159px;
  padding: 16px 4px;
}
.swiper-slide {
  text-align: center;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 8px 2px 2px #FBFBFB; */
  box-shadow: 0 6px 4px 2px #ccc;
  border:1px solid #ccc;
  border-radius: 20px;
  min-height: 100%;
}
.slide-title {
  margin-bottom: 8px;
  flex:1 1 auto;
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
</style>

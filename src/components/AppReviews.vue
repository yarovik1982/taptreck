<template>
  <div class="container-fluid">
    <h2 class="text-center" style="margin-bottom:60px;">
      <span class="section-title">Отзывы</span>
    </h2>
    <swiper
      :slidesPerView="5"
      :space-between="16"
      :centeredSlides="true"
      :loop="true"
      :navigation="true"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      :autoplay="{
        delay: 700,
      }"
      :modules="modules"
      class="reviewsSwiper"
    >
      <swiper-slide v-for="reviewItem in reviewsList" :key="reviewItem.id">
        <div class="slide-image">
          <img :src="reviewItem.image" alt="BEER" />
        </div>
        <div class="review">
          <p>
            Вкусный пивной напиток со вкусом персика. Garage hard peach drink.
            Пробка легко открывается при помощи открывашки.
          </p>
          <span>{{ reviewItem.userName }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ref } from "vue";

export default {
  name: "app-reviews",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const reviewsList = ref([
      {
        id: 1,
        userName: "Окунь Глушеный",
        review: "",
        image: require("@/assets/images/right-slide.png"),
      },
      {
        id: 2,
        userName: "Таранька Вяленая",
        review: "",
        image: require("@/assets/images/center-slade.png"),
      },
      {
        id: 3,
        userName: "Вобла Копченая",
        review: "",
        image: require("@/assets/images/left-slide.png"),
      },
      {
        id: 4,
        userName: "Вилка Булочка",
        review: "",
        image: require("@/assets/images/right-slide.png"),
      },
      {
        id: 5,
        userName: "Щука Подкоряжная",
        review: "",
        image: require("@/assets/images/center-slade.png"),
      },
      {
        id: 6,
        userName: "Карась Пучеглазов",
        review: "",
        image: require("@/assets/images/left-slide.png"),
      },
      {
        id: 7,
        userName: "Карась Пучеглазов",
        review: "",
        image: require("@/assets/images/right-slide.png"),
      },
      {
        id: 8,
        userName: "Карась Пучеглазов",
        review: "",
        image: require("@/assets/images/center-slade.png"),
      },
      {
        id: 9,
        userName: "Карась Пучеглазов",
        review: "",
        image: require("@/assets/images/left-slide.png"),
      },
      {
        id: 10,
        userName: "Карась Пучеглазов",
        review: "",
        image: require("@/assets/images/right-slide.png"),
      },
    ]);
    return {
      modules: [Pagination, Navigation],
      reviewsList,
    };
  },
};
</script>

<style scoped>
.swiper {
  padding-top: 50px;
  padding-bottom: 300px;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.2s linear;
  z-index: 2;
}
.swiper-slide .slide-image {
  opacity: 0.4;
}
.swiper-slide-active {
  transform: scale(1.8);
  z-index: 4;
}
.swiper-slide-active .slide-image {
  opacity: 1;
}
.swiper-slide-next,
.swiper-slide-prev {
  transform: scale(1.4);
  z-index: 3;
}
.swiper-slide-next .slide-image,
.swiper-slide-prev .slide-image {
  opacity: 0.7;
}
.swiper-slide .review>p{
   font-size: calc(1px + 1vw);
}
.swiper-slide .review {
  display: none;
}
.swiper-slide.swiper-slide-active .review {
  display: block;
}
.slide-image {
  width: 120px;
  height: 120px;
}
.slide-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.review {
  position: absolute;
  top: 100%;
  width: 200%;
  text-align: center;
}
.reviewsSwiper > .swiper-pagination .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background-color: yellow;
}
</style>

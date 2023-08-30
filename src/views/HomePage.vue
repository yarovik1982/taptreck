<template>
  <section id="intro">
    <div class="container-fluid">
      <div class="card mb-3" style="border: 0">
        <div class="row g-0">
          <div class="col-lg-5">
            <div class="card-body">
              <h1
                class="card-title"
                style="
                  font-size: calc(1.35rem + 1.5vw);
                  font-weight: 700;
                  padding-top: 100px;
                "
              >
                Насладитесь красивым закатом или приятной компанией с Tap<span
                  style="font-weight: normal"
                  >Treck</span
                >
              </h1>
              <p
                class="card-text"
                style="font-family: 'Lora', serif; margin-bottom: 120px"
              >
                Попробуйте интересные и оригинальные сорта пива, которые можно
                найти у нас, и отметьте любой праздник с хорошей бутылкой пива.
              </p>
              <button
                class="btn btn-info btn-sm"
                style="background: #fff1bb"
                @click="activeModal = 'feedback'"
              >
                Написать нам
              </button>
              <teleport to="body">
                <div
                  v-if="activeModal === 'feedback'"
                  class="appModal"
                  @click.self="activeModal = null"
                >
                  <div class="appModal-content">
                    <button class="close" @click="activeModal = null">&times;</button>
                    <feedback-form></feedback-form>
                  </div>
                </div>
              </teleport>              
            </div>
          </div>
          <div class="col-lg-7">
            <img
              src="@/assets/images/home.png"
              class="img-fluid w-100"
              style="
                border-radius: 37px;
                width: 100%;
                height: 100%;
                object-fit: cover;
              "
              alt="BEER AT NATURE"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="places">
    <app-slider-places></app-slider-places>
  </section>

  <section id="news">
    <app-news></app-news>
  </section>

  <section id="reviews">
    <app-reviews></app-reviews>
  </section>

  <section id="offers">
    <app-offers></app-offers>
  </section>
</template>

<script>
import {ref} from 'vue'
import AppSliderPlaces from "@/components/AppSliderPlaces.vue";
import AppNews from "@/components/AppNews.vue";
import AppReviews from "@/components/AppReviews.vue";
import AppOffers from "@/components/AppOffers.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";

export default {
  components: { AppSliderPlaces, AppNews, AppReviews, AppOffers, FeedbackForm },
  name: "home-page",
  setup() {
    const activeModal = ref(null)
    return{activeModal}
  },
};
</script>

<style scoped>
/* .form-content {
  max-width: 950px;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 80px;
  border-radius: 0;
} */
/* .modal-feedback{
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
} */
</style>

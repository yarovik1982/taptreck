<template>
  <section id="intro">
    <div class="container-fluid">
      <div class="card mb-3" style="border: 0">
        <div class="row g-0">
          <div class="col-lg-5">
            <div class="card-body">
              <h1
                class="card-title"
                style="font-size: calc(1.35rem + 1.5vw); font-weight: 700; padding-top: 100px"
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
                data-bs-toggle="modal"
                data-bs-target="#writeUs"
                style="background: #fff1bb">
                Написать нам
              </button>
              <!-- Кнопка-триггер модального окна -->
              

              <!-- Модальное окно -->
              <div
                class="modal fade"
                id="writeUs"
                tabindex="-1"
                aria-labelledby="writeUsModalLabel"
                aria-hidden="true"
              >
              <div class="form-content">
                <form action="" class="form">
                <label for=""></label>
                <input type="text" class="form-control">
              </form>
              </div>
                <div class="modal-dialog d-none">
                  <div class="modal-content">
                    <div class="modal-header text-center border-0 position-relative">
                      <h1 class="modal-title fs-5" id="writeUsModalLabel">
                        Связаться с нами
                      </h1>
                      <i 
                        class="bi bi-x position-absolute"
                        style="right:-50px; color:#fff; font-size:50px; cursor:pointer;"
                        data-bs-dismiss="modal"
                        aria-label="Закрыть"
                      ></i>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Закрыть
                      </button>
                      <button type="button" class="btn btn-primary">
                        Сохранить изменения
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
import AppSliderPlaces from '@/components/AppSliderPlaces.vue';
import AppNews from '@/components/AppNews.vue';
import AppReviews from '@/components/AppReviews.vue';
import AppOffers from '@/components/AppOffers.vue';
export default {
  components:{AppSliderPlaces, AppNews, AppReviews, AppOffers},
  name: "home-page",
  setup() {},
};
</script>

<style scoped>
.form-content {
  max-width: 950px;
  top: 30px;
  left: 50%;
  transform: translate(-50%,0);
  padding: 80px;
  border-radius: 0;
}
</style>

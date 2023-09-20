<template>
   <h3 class="text-center">Результаты поиска</h3>
   <div class="container-fluid">
    <div
      class="row link-group d-flex align-items-center px-5 justify-content-center"
    >
      <div class="col-12 d-flex justify-content-start justify-content-sm-center py-1 col-sm-4">
        <div class="link-wrapper">
          <router-link to="/search-result/search-result-breweries" class="profile-link"
            >Пивоварни</router-link
          >
        </div>
      </div>
      <div class="col-12 d-flex justify-content-start justify-content-sm-center py-1 col-sm-4">
        <div class="link-wrapper">
          <router-link to="/search-result/search-result-beer" class="profile-link"
            >Пиво</router-link
          >
        </div>
      </div>
      <div class="col-12 d-flex justify-content-start justify-content-sm-center py-1 col-sm-4">
        <div class="link-wrapper">
          <router-link to="/search-result/search-result-places" class="profile-link"
            >Точки продажи</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
   name:'search-result-page',
   setup() {
      
   },
}
</script>

<style scoped>
.profile-link {
  padding: 8px 24px;
  font-size: calc(3px + 1.3vw);
  background-color: #a6a18e;
  color: #fff;
  border-radius: 10px;
  position: relative;
  text-decoration: none;
}
/* .profile-link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(0, -50%);
  width: 30px;
  height: 2px;
  background-color: #a6a18e;
} */
/* .profile-link::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -52px;
  transform: translate(0, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #a6a18e;
} */
.profile-link.router-link-active {
  background-color: #faca10;
}
/* .profile-link.router-link-active::before {
  background-color: #faca10;
}
.profile-link.router-link-active::after {
  background-color: #faca10;
} */
</style>
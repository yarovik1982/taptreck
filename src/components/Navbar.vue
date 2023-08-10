<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/Layer1.svg" alt="BEER" />
        <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
      </a>
      <div class="collapse navbar-collapse" id="navbarsExample02">
        <div class="w-50" style="margin-left: auto; margin-right: 16px">
          <form
            role="search"
            class="d-flex justify-content-center align-items-center"
          >
            <input
              class="form-control form-control-sm"
              type="search"
              placeholder="Поиск"
              style="
                border: 2px solid yellow;
                border-radius: 22px 0 0 22px;
                outline: none;
                box-shadow: none;
              "
            />
            <button
              class="btn btn-warning btn-sm"
              style="
                border-radius: 0px 22px 22px 0px;
                box-shadow: 0 0 0 1px #ffc107;
              "
            >
              <i class="bi bi-search" style="color: #fff"></i>
            </button>
          </form>
        </div>
        <div class="user-btns d-flex">
          <button
            type="button"
            class="btn btn-warning btn-sm px-5 d-none d-md-block"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Вход
          </button>
          <!-- <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Запустите демо модального окна
          </button> -->

          <div
            class="modal fade"
            id="loginModal"
            tabindex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header"
                  style="border-bottom:2px solid #faca10;"
                >
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Закрыть"
                  ></button>
                </div>
                <div class="modal-body">
                  <login-form></login-form>
                </div>
                <!-- <div class="modal-footer">
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
                </div> -->
              </div>
            </div>
          </div>
          <button
            class="btn btn-warning btn-sm px-5 d-none d-md-block"
            style="margin-left: 16px"
          >
            Регистрация
          </button>
          <i
            class="bi bi-box-arrow-in-right d-block d-md-none"
            style="color: rgb(255, 193, 7); font-size: 32px; cursor: pointer"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          ></i>
          <i
            class="bi bi-person-square d-block d-md-none"
            style="
              color: rgb(255, 193, 7);
              font-size: 30px;
              cursor: pointer;
              margin-left: 16px;
            "
          ></i>
        </div>
        <!-- <i
          class="bi bi-box-arrow-left"
          style="font-size: 40px; color: #ffc107; cursor: pointer"
        ></i> -->
      </div>
    </nav>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  components: { LoginForm },
  name: "navbar",
  setup() {},
};
</script>

<template>
  <div class="section" id="stand">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div class="col-lg-6">
            <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
              <h3 class="section__title">Заказ стенда</h3>
              <div class="text mb-5">
                Мышление неумеренно аннигилирует скачок функции. Матожидание масштабирует сходящийся ряд. Однако не все знают, что восприятие усиливает методологический лирический субъект. Степенной ряд отталкивает объект. Сознание, несмотря на то, что все эти характерологические черты отсылают не к единому образу нарратора, аллитерирует брахикаталектический стих. Очевидно, что ритм привлекает многочлен.
                <a
                  href="#"
                  class="hover-link"
                >Linkto GG WP</a>
              </div>

              <transition name="request">
                <div class="section__form w-100" v-if="isRequest">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control d-block" placeholder="Username" />
                  </div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control d-block" placeholder="Username" />
                  </div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control d-block" placeholder="Username" />
                  </div>
                </div>
              </transition>
              <div class="action mt-5">
                <template v-if="isRequest">
                  <a
                    href="#"
                    class="btn btn-action mr-2"
                    @click="sendRequest($event)"
                  >Отправить заявку</a>
                  <a href="#" class="btn btn-alternative" @click="toggleForm($event)">Отменить</a>
                </template>
                <template v-else>
                  <a href="#" class="btn btn-action" @click="toggleForm($event)">Заполнить заявку</a>
                </template>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="media d-flex flex-column">
              <div class="photos">
                <div
                  id="carouselExampleControls"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="video">
                <video playsinline="playsinline" controls muted="muted" loop="loop">
                  <source
                    src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                    type="video/mp4"
                  />
                  <!-- <source
                    src="https://v.mover.uz/15C0JPum_h.mp4"
                    type="video/mp4"
                  />-->
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRequest: false,
      btnMsg: "Заполнить форму"
    };
  },
  methods: {
    toggleForm(event) {
      if (event) event.preventDefault();
      this.isRequest = !this.isRequest;
      this.btnMsg = this.isRequest ? "Отменить" : "Заполнить форму";
    }
  }
};
</script>

<style lang="scss" scoped>
#stand {
}
.request-enter-active {
  transition: all 0.3s ease-in;
}
// .request-leave-active {
//   transition: all 0.3s ease-out;
// }
.request-enter,
.request-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
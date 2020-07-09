<template>
  <div class="section" id="service">
    <div class="container">
      <div class="section__body">
        <div class="row d-flex align-items-start">
          <div class="col-lg-7 col-md-12 col-12 mt-3 mt-xl-0 order-1">
            <div
              aos-sss="fade-down"
              aos-sss-delay="50"
              aos-sss-duration="500"
              aos-sss-easing="ease-in-out"
              aos-sss-once="false"
            >
              <p
                class="mb-6"
              >Выездной ресторан MEX CATERING, входящий в группу компаний AVANTAGE, работает на рынке общественного питания в Ташкенте с 2016 года и имеет большой опыт в организации приемов, банкетов, гала-ужинов, кофе-брейков и других мероприятий различных, в том числе международных.</p>
              <p>Мы предоставляем выездной ресторан на удобной вам территории, а также на площадках наших партнерах.</p>
              <p>MEX CATERING - мы знаем секретный ингредиент секретного ингредиента супа ;-)</p>
            </div>
            <div class="row">
              <div
                class="col-12 mb-2 mb-lg-2"
                aos-sss="fade-up"
                aos-sss-delay="150"
                aos-sss-duration="500"
                aos-sss-easing="ease-in-out"
                aos-sss-once="false"
              >
                <swiper
                  class="swiper"
                  style="height:400px; width:100%;"
                  :options="swiperOption"
                  aos-sss="zoom-in"
                  aos-sss-delay="100"
                  aos-sss-duration="500"
                  aos-sss-easing="ease-in-out"
                  aos-sss-once="false"
                >
                  <swiper-slide>
                    <img
                      src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      alt
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="https://images.unsplash.com/photo-1554941829-1a16e65a02b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                      alt
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="https://images.unsplash.com/photo-1554941068-a252680d25d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                      alt
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img :src="this.$unsplash" alt />
                  </swiper-slide>
                  <swiper-slide>
                    <img :src="this.$unsplash" alt />
                  </swiper-slide>
                  <swiper-slide>
                    <img :src="this.$unsplash" alt />
                  </swiper-slide>
                  <swiper-slide>
                    <img :src="this.$unsplash" alt />
                  </swiper-slide>
                  <swiper-slide>
                    <img :src="this.$unsplash" alt />
                  </swiper-slide>
                  <swiper-slide>
                    <img :src="this.$unsplash" alt />
                  </swiper-slide>
                  <swiper-slide>
                    <img :src="this.$unsplash" alt />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div
            class="col-lg-5 col-md-12 col-12"
            aos-sss="fade-right"
            aos-sss-delay="50"
            aos-sss-duration="500"
            aos-sss-easing="ease-in-out"
            aos-sss-once="false"
          >
            <h3 class="section__title">{{title}}</h3>
            <form>
              <div class="form-group">
                <label for="serviceEvent">Выберите event</label>
                <div class="row">
                  <div class="col-7">
                    <select class="form-control" id="serviceEvent">
                      <option>Фуршет</option>
                      <option>Шведский стол</option>
                      <option>Кофе-брейк</option>
                      <option>Коктейль</option>
                      <option>Пикник</option>
                      <option>Гала ужин</option>
                      <option>Барбекю</option>
                    </select>
                  </div>
                  <div class="col-5 text-center">
                    <button class="btn btn-light">
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="serviceGuests">Количество гостей</label>
                <div class="row">
                  <div class="col-7">
                    <input
                      type="range"
                      class="form-control-range"
                      id="serviceGuests"
                      min="20"
                      max="500"
                      value="20"
                      step="10"
                      v-model="guestsNumber"
                    />
                    <output for="serviceGuests" name="level">{{guestsNumber}}</output>
                  </div>
                  <div class="col-5 text-center">
                    <button class="btn btn-light">
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="serviceName">Имя</label>
                <input type="text" class="form-control" id="serviceName" />
              </div>
              <div class="form-group">
                <label for="serviceTel">Телефон</label>
                <masked-input
                  mask="\+\998 (91) 111-11-11"
                  type="tel"
                  placeholder="Phone"
                  class="form-control"
                  id="serviceTel"
                />
              </div>
              <div class="form-group">
                <label for="serviceAddress">Адрес</label>
                <input type="text" class="form-control" id="serviceAddress" />
              </div>
              <div class="form-group">
                <label for="serviceMessage">Сообщение</label>
                <textarea class="form-control" id="serviceMessage" style="min-height:5.5rem;"></textarea>
              </div>
              <button class="btn btn-action btn-block">Отправить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import MaskedInput from "vue-masked-input";
import { mask } from "vue-the-mask";
export default {
  props: ["title"],
  components: { TheMask, MaskedInput },
  directives: { mask },
  data() {
    return {
      guestsNumber: 20,
      swiperOption: {
        speed: 900,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-pagination {
  color: black;
}
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
.swiper {
  margin-bottom: 25px;
  .swiper-slide {
    img {
      height: inherit;
      border-radius: 0.7rem;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
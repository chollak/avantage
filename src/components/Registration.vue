<template>
  <div class="section" id="registration">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div class="col-lg-7">
            <div
              class="text mb-5"
              aos-sss="fade-right"
              aos-sss-delay="50"
              aos-sss-duration="500"
              aos-sss-easing="ease-in-out"
              aos-sss-once="false"
            >
              <h3 class="section__title">{{title}}</h3>
              <p>Основной ценностью для сотрудников AVANTAGE является предоставление наилучшего сервиса своим клиентам и посетителям, что выражается в решении насущных задач по регистрации и идентификации потока посетителей.</p>
              <p>Наша система регистрации направлена на автоматизацию процессов регистрации посетителей для массовых мероприятий. Полный спектр услуг для встречи и регистрации гостей на мероприятиях, организации систем контроля доступа и сбора информации о перемещениях участников.</p>
            </div>
            <div class="media d-flex flex-column">
              <swiper
                class="swiper mt-2"
                style="height:350px; width:100%;"
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
          <div class="col-lg-5">
            <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
              <div class="section__form w-100">
                <form>
                  <div class="form-group">
                    <label for="registrationEvent">Выберите event</label>
                    <div class="row">
                      <div class="col-7">
                        <select class="form-control" id="registrationEvent">
                          <option>Выставка</option>
                          <option>Форум</option>
                          <option>Семинар</option>
                          <option>Саммит</option>
                          <option>Презентация</option>
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
                    <label>Дополнительные возможности</label>
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" value="1" id="extraOprt1" />
                      <label class="custom-control-label" for="extraOprt1">Рассылка приглашений</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" value="2" id="extraOprt2" />
                      <label class="custom-control-label" for="extraOprt2">Регистрационные стойки</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" value="3" id="extraOprt3" />
                      <label class="custom-control-label" for="extraOprt3">Оградительные ленты</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" value="4" id="extraOprt4" />
                      <label
                        class="custom-control-label"
                        for="extraOprt4"
                      >Брендированная одежда персонала</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" value="5" id="extraOprt5" />
                      <label class="custom-control-label" for="extraOprt5">Бейджик</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" value="6" id="extraOprt6" />
                      <label class="custom-control-label" for="extraOprt6">Ланярд</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" value="7" id="extraOprt7" />
                      <label class="custom-control-label" for="extraOprt7">Тент</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="registrationGuests">Количество гостей</label>
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
                    <label for="registrationName">Имя</label>
                    <input type="text" class="form-control" id="registrationName" />
                  </div>
                  <div class="form-group">
                    <label for="registrationTel">Телефон</label>
                    <masked-input
                      mask="\+\998 (91) 111-11-11"
                      type="tel"
                      placeholder="Phone"
                      class="form-control"
                      id="registrationTel"
                    />
                  </div>
                  <div class="form-group">
                    <label for="registrationMessage">Сообщение</label>
                    <textarea
                      class="form-control"
                      id="registrationMessage"
                      style="min-height:5rem;"
                    ></textarea>
                  </div>
                </form>
              </div>

              <a href="#" class="btn btn-action btn-block">Отправить заявку</a>
            </div>
          </div>
        </div>
        <div class="stats mt-5 text-center" v-view="viewHandler">
          <div class="row">
            <div
              class="col-lg-4 col-md-4 mt-3 mb-3"
              aos-sss="zoom-in"
              aos-sss-delay="50"
              aos-sss-duration="500"
              aos-sss-easing="ease-in-out"
              aos-sss-once="false"
            >
              <div class="stats__data p-3">
                <h3 class="stats__number m-0">
                  <animated-number
                    :value="stats.first"
                    :formatValue="formatToPrice"
                    :duration="1000"
                  />
                </h3>
                <div class="stats__text">года на рынке</div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-4 mt-3 mb-3"
              aos-sss="zoom-in"
              aos-sss-delay="100"
              aos-sss-duration="500"
              aos-sss-easing="ease-in-out"
              aos-sss-once="false"
            >
              <div class="stats__data p-3">
                <h3 class="stats__number m-0">
                  <animated-number
                    :value="stats.second"
                    :formatValue="formatToPrice"
                    :duration="1000"
                  />+
                </h3>
                <div class="stats__text">проектов</div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-4 mt-3 mb-3"
              aos-sss="zoom-in"
              aos-sss-delay="150"
              aos-sss-duration="500"
              aos-sss-easing="ease-in-out"
              aos-sss-once="false"
            >
              <div class="stats__data p-3">
                <h3 class="stats__number m-0">
                  <animated-number
                    :value="stats.third"
                    :formatValue="formatToPrice"
                    :duration="1000"
                  />+
                </h3>
                <div class="stats__text">прошли регистрацию</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaskedInput from "vue-masked-input";
import AnimatedNumber from "animated-number-vue";
export default {
  props: ["title"],
  components: {
    MaskedInput,
    AnimatedNumber
  },
  data() {
    return {
      guestsNumber: 0,
      stats: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
      },
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
  },
  methods: {
    viewHandler(e) {
      if (e.type == "enter") {
        this.stats.first = 2;
        this.stats.second = 30;
        this.stats.third = 80000;
      }
      if (e.type == "exit") {
        this.stats.first = 0;
        this.stats.second = 0;
        this.stats.third = 0;
      }
    },
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.photos {
  width: 100%;
}
.swiper {
  // margin: 45px 0px;
  margin-bottom: 25px;
  .swiper-slide {
    // padding: 45px 0px;
    img {
      height: inherit;
      border-radius: 0.7rem;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
.custom-control-input:checked ~ .custom-control-indicator {
  color: white;
  background-color: red;
}
.stats {
  &__data {
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.06);
  }
}
</style>
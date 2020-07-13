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
                <swiper-slide v-for="item in content.carousel" :key="item.image">
                  <img :src="item.image" :alt="item.alt" />
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
              <div class="section__form w-100">
                <form @submit="sendForm" id="regForm">
                  <div class="form-group">
                    <label for="registrationEvent">Выберите event</label>
                    <div class="row">
                      <div class="col-7">
                        <select
                          class="form-control"
                          id="registrationEvent"
                          v-model="form.registration.event"
                          v-if="!isNewEvent"
                          required
                        >
                          <option v-for="item in content.events" :key="item.id">{{ item.title }}</option>
                        </select>
                        <input
                          type="text"
                          class="form-control"
                          id="r-newEvent"
                          v-if="isNewEvent"
                          v-model="form.registration.event"
                          placeholder="Название мероприятии"
                          required
                        />
                      </div>
                      <div class="col-5 text-center">
                        <button class="btn btn-light" @click="newEvent()" v-if="!isNewEvent">
                          <i class="fa fa-plus"></i>
                        </button>
                        <button class="btn btn-light" @click="closeNewEvent()" v-if="isNewEvent">
                          <i class="fa fa-close"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Дополнительные возможности</label>
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value="Рассылка приглашений"
                        id="extraOprt1"
                        v-model="form.registration.extraOptions"
                      />
                      <label class="custom-control-label" for="extraOprt1">Рассылка приглашений</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value="Регистрационные стойки"
                        id="extraOprt2"
                        v-model="form.registration.guestsNumber"
                      />
                      <label class="custom-control-label" for="extraOprt2">Регистрационные стойки</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value="Оградительные ленты"
                        id="extraOprt3"
                        v-model="form.registration.extraOptions"
                      />
                      <label class="custom-control-label" for="extraOprt3">Оградительные ленты</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value="Брендированная одежда персонала"
                        id="extraOprt4"
                        v-model="form.registration.extraOptions"
                      />
                      <label
                        class="custom-control-label"
                        for="extraOprt4"
                      >Брендированная одежда персонала</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value="Бейджик"
                        id="extraOprt5"
                        v-model="form.registration.extraOptions"
                      />
                      <label class="custom-control-label" for="extraOprt5">Бейджик</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value="Ланярд"
                        id="extraOprt6"
                        v-model="form.registration.extraOptions"
                      />
                      <label class="custom-control-label" for="extraOprt6">Ланярд</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value="Тент"
                        id="extraOprt7"
                        v-model="form.registration.extraOptions"
                      />
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
                          id="registrationGuests"
                          min="20"
                          max="500"
                          value="20"
                          step="10"
                          v-model="form.registration.guestNumber"
                          v-if="!isNewGuest"
                        />
                        <output
                          v-if="!isNewGuest"
                          for="serviceGuests"
                          name="level"
                        >{{form.registration.guestNumber}}</output>
                        <input
                          type="number"
                          class="form-control"
                          id="r-newGuest"
                          v-if="isNewGuest"
                          v-model="form.registration.guestNumber"
                          placeholder="Количество гостей"
                          required
                        />
                      </div>
                      <div class="col-5 text-center">
                        <button class="btn btn-light" @click="newGuest()" v-if="!isNewGuest">
                          <i class="fa fa-plus"></i>
                        </button>
                        <button class="btn btn-light" @click="closeNewGuest()" v-if="isNewGuest">
                          <i class="fa fa-close"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="registrationName">Имя</label>
                    <input
                      type="text"
                      class="form-control"
                      id="registrationName"
                      v-model="commonForm.name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="registrationTel">Телефон</label>
                    <masked-input
                      v-model="commonForm.phone"
                      mask="\+\998 (91) 111-11-11"
                      required
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
                      v-model="form.registration.message"
                    ></textarea>
                  </div>
                </form>
              </div>

              <button class="btn btn-action btn-block" form="regForm">Отправить заявку</button>
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
import { mapGetters } from "vuex";
export default {
  props: ["title", "content"],
  components: {
    MaskedInput,
    AnimatedNumber
  },
  data() {
    return {
      form: {
        registration: {
          event: "",
          extraOptions: [],
          guestNumber: 20,
          message: ""
        }
      },
      isNewEvent: false,
      isNewGuest: false,
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
  computed: {
    ...mapGetters({
      commonForm: "getForm"
    })
  },
  methods: {
    sendForm(e) {
      e.preventDefault();
      if (this.getCart()) {
        $("#checkoutModal").modal("show");
        this.$toast.info("Сначало заверишите покупку");
      } else {
        const preparedData = { ...this.commonForm, ...this.form };

        const res = this.$http.post(
          "https://roadtosenior.uz/api/form/",
          preparedData
        );
        this.$toast.success("Ваша заявка отправлена");
      }
    },
    getCart() {
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        if (cart.length) {
          return cart;
        }
      }
    },
    newEvent() {
      this.isNewEvent = true;
    },
    closeNewEvent() {
      (this.form.registration.event = ""), (this.isNewEvent = false);
    },
    newGuest() {
      this.isNewGuest = true;
    },
    closeNewGuest() {
      (this.form.registration.guestNumber = 20), (this.isNewGuest = false);
    },
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
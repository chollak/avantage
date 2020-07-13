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
                  <swiper-slide v-for="item in content.carousel" :key="item.image">
                    <img :src="item.image" :alt="item.alt" />
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
            <form @submit="sendForm">
              <div class="form-group">
                <label for="serviceEvent">Выберите мероприятие</label>
                <div class="row">
                  <div class="col-7">
                    <select
                      class="form-control"
                      id="serviceEvent"
                      v-model="form.catering.event"
                      v-if="!isNewEvent"
                      required
                    >
                      <option v-for="item in content.events" :key="item.id">{{ item.title }}</option>
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      id="newEvent"
                      v-if="isNewEvent"
                      v-model="form.catering.event"
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
                <label for="serviceGuests">Количество гостей</label>
                <div class="row">
                  <div class="col-7">
                    <input
                      v-if="!isNewGuest"
                      type="range"
                      class="form-control-range"
                      id="serviceGuests"
                      min="20"
                      max="500"
                      step="10"
                      v-model="form.catering.guestNumber"
                    />
                    <output
                      v-if="!isNewGuest"
                      for="serviceGuests"
                      name="level"
                    >{{form.catering.guestNumber}}</output>
                    <input
                      type="number"
                      class="form-control"
                      id="newGuest"
                      v-if="isNewGuest"
                      v-model="form.catering.guestNumber"
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
                <label for="serviceName">Имя</label>
                <input
                  type="text"
                  class="form-control"
                  id="serviceName"
                  v-model="commonForm.name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="serviceTel">Телефон</label>
                <masked-input
                  mask="\+\998 (91) 111-11-11"
                  type="tel"
                  v-model="commonForm.phone"
                  placeholder="Phone"
                  class="form-control"
                  id="serviceTel"
                  required
                />
              </div>
              <div class="form-group">
                <label for="serviceAddress">Адрес</label>
                <input
                  type="text"
                  class="form-control"
                  id="serviceAddress"
                  v-model="commonForm.address"
                />
              </div>
              <div class="form-group">
                <label for="serviceMessage">Сообщение</label>
                <textarea
                  class="form-control"
                  id="serviceMessage"
                  style="min-height:5.5rem;"
                  v-model="form.catering.message"
                ></textarea>
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
import { mapGetters } from "vuex";
export default {
  props: ["title", "content"],
  components: { TheMask, MaskedInput },
  directives: { mask },
  data() {
    return {
      form: {
        catering: {
          event: "",
          guestNumber: 20,
          message: ""
        }
      },
      isNewEvent: false,
      isNewGuest: false,
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
    newEvent() {
      this.isNewEvent = true;
    },
    closeNewEvent() {
      (this.form.catering.event = ""), (this.isNewEvent = false);
    },
    newGuest() {
      this.isNewGuest = true;
    },
    closeNewGuest() {
      (this.form.catering.guestNumber = 20), (this.isNewGuest = false);
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
    sendForm(e) {
      e.preventDefault();
      if (this.getCart()) {
        $("#checkoutModal").modal("show");
        this.$toast.info("Сначало заверишите покупку");
      } else {
        const preparedData = {...this.commonForm, ...this.form};
        
          const res = this.$http.post(
          "https://roadtosenior.uz/api/form/",
          preparedData
        );
        this.$toast.success('Ваша заявка отправлена');
      }
    }
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
<template>
  <div class="section" id="stand">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div
            class="col-lg-6"
            aos-sss="fade-right"
            aos-sss-delay="50"
            aos-sss-duration="500"
            aos-sss-easing="ease-in-out"
            aos-sss-once="false"
          >
            <div class="text">
              <h3 class="section__title">{{title}}</h3>
              <p>Стенды для выставок - оригинальная форма, красивые и яркие, хорошо продуманные дизайны, которые предназначены для демонстрации товаров или экспонатов с лучших сторон. Для этого самое главное, насколько качественный, удобный и безопасный продукт.</p>
              <p>Компания AVANTAGE с 2016 года и по сегодняшний день ведет профессиональную выставочную деятельность. Строительство выставочных стендов - одна из услуг, которую с удовольствием предоставят надежные подрядчики нашей компании.</p>
              <p>Благодаря успешной организации своих крупнейших отраслевых проектов, таких как ICT WEEK Uzbekistan, AVANTAGE стала широко известной в своей стране и в нескольких странах Европы и Азии. В целом за эти годы компания постоянно совершенствуется, приобретая бесценный опыт, и это позволяет нам организовать работу с экспонентами и гостями выставки на высшем уровне.</p>
            </div>
            <transition name="request">
              <div class="section__form w-100 mt-3" v-if="isRequest">
                <form>
                  <div class="form-group">
                    <label for="standName">Имя</label>
                    <input type="text" class="form-control" id="standName" />
                  </div>
                  <div class="form-group">
                    <label for="standTel">Телефон</label>
                    <masked-input
                      mask="\+\998 (91) 111-11-11"
                      type="tel"
                      placeholder="Phone"
                      class="form-control"
                      id="standTel"
                    />
                  </div>
                  <div class="form-group">
                    <label for="standMessage">Сообщение</label>
                    <textarea class="form-control" id="standMessage" style="min-height:5rem;"></textarea>
                  </div>
                </form>
              </div>
            </transition>
            <div class="action mt-3 mb-3">
              <template v-if="isRequest">
                <a
                  href="#"
                  class="btn btn-action mr-2"
                  @click="sendRequest($event)"
                >Отправить заявку</a>
                <a href="#" class="btn btn-alternative" @click="toggleForm($event)">Отменить</a>
              </template>
              <template v-else>
                <a href="#" class="btn btn-action btn-block" @click="toggleForm($event)">Заполнить заявку</a>
              </template>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="media d-flex flex-column">
              <swiper
                class="swiper"
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
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
              </swiper>
              
              <div
                class="video"
                aos-sss="zoom-in-up"
                aos-sss-delay="150"
                aos-sss-duration="500"
                aos-sss-easing="ease-in-out"
                aos-sss-once="false"
              >
                <video playsinline="playsinline" controls muted="muted" loop="loop">
                  <source
                    src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                    type="video/mp4"
                  />
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
import MaskedInput from "vue-masked-input";
export default {
  props: ["title"],
  components: {
    MaskedInput
  },
  data() {
    return {
      isRequest: false,
      btnMsg: "Заполнить форму",
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
    toggleForm(event) {
      if (event) event.preventDefault();
      this.isRequest = !this.isRequest;
      this.btnMsg = this.isRequest ? "Отменить" : "Заполнить форму";
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
#stand {
  background: $gray-100;
  .text,
  .section__form {
    background: white;
    padding: 15px 25px;
    border-radius: 0.8rem;
    box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
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
}
</style>
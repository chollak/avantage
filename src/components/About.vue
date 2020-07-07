<template>
  <div class="section" id="about">
    <div class="container">
      <div class="section__body">
        <div class="row mb-3">
          <div
            class="col-lg-7 align-self-center"
            aos-sss="fade-right"
            aos-sss-delay="50"
            aos-sss-duration="1000"
            aos-sss-easing="ease-in-out-back"
            aos-sss-once="false"
          >
            <h3>{{title}}</h3>
            <p>Теперь, чтобы организовать деловое мероприятие, нужно по-настоящему много работать. При отсутствии специальных знаний в этой области лучше всего обратиться в специальную компанию, которая может предоставить целую команду профессионалов, которые готовы взяться за организацию проекта и могут выполнить его на 100%.</p>
          </div>
          <div
            class="col-lg-5 align-self-center"
            aos-sss="fade-left"
            aos-sss-delay="100"
            aos-sss-duration="1300"
            aos-sss-easing="ease-in-out-back"
            aos-sss-once="false"
          >
            <img
              :src="this.$unsplash"
              alt
              class="img-fluid rounded img-cover-center"
              style="height:250px"
            />
          </div>
        </div>
        <div
          class="row mb-3"
          aos-sss="fade-up"
          aos-sss-delay="50"
          aos-sss-duration="1000"
          aos-sss-easing="ease-in-out"
          aos-sss-once="false"
        >
          <div class="col-lg-7 align-self-center">
            <swiper
              class="swiper"
              style="height:300px; width:100%;"
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
          </div>
          <div class="col-lg-5 align-self-center my-2">
            <p>AVANTAGE относится к таким компаниям, которые могут взять на себя задачу организации и проведения любого типа мероприятия, а также предоставить в аренду лучшее оборудование, позволяющее проводить качественные и интересные мероприятия.</p>
          </div>
        </div>
        <div
          class="row mb-3"
          aos-sss="fade-up"
          aos-sss-delay="50"
          aos-sss-duration="1000"
          aos-sss-easing="ease-in-out"
          aos-sss-once="false"
        >
          <div class="col-lg-7 align-self-center my-2">
            <p>Мы готовы предоставить нашим клиентам полный спектр услуг, от разработки концепции до реализации и реализации мероприятий.</p>
            <p>Выставки, форумы, конференции, презентации, кейтеринг, организованные AVANTAGE, позволяют нашим Клиентам достигать своих целей и отмечены положительными отзывами участников и посетителей.</p>
            <p>Мы готовы эффективно применить наш опыт в организации любого формата деловых мероприятий в интересах вашей компании.</p>
            <button
              class="btn btn-action"
              data-toggle="modal"
              data-target="#portfolioModal"
              @click="currentView = 'List'"
            >Портфолио</button>
          </div>
          <div class="col-lg-5 align-self-center my-2">
            <div class="video">
              <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source
                  src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="stats mt-5 text-center" v-view="viewHandler">
        <div class="row">
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
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
              <div class="stats__text">лет</div>
            </div>
          </div>
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
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
                />
              </h3>
              <div class="stats__text">почетных грамот</div>
            </div>
          </div>
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
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
              <div class="stats__text">проектов</div>
            </div>
          </div>
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
            aos-sss="zoom-in"
            aos-sss-delay="200"
            aos-sss-duration="500"
            aos-sss-easing="ease-in-out"
            aos-sss-once="false"
          >
            <div class="stats__data p-3">
              <h3 class="stats__number m-0">
                <animated-number
                  :value="stats.fourth"
                  :formatValue="formatToPrice"
                  :duration="1000"
                />%
              </h3>
              <div class="stats__text">недовольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Modal -->
    <div class="m-warpper">
      <div
        class="modal fade"
        id="portfolioModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header" style="border:none">
              <button
                class="btn btn-link text-dark back"
                v-show="currentView=='Single'"
                @click="setView('List')"
              >
                <i class="fa fa-arrow-left"></i>
              </button>
              <h5 class="modal-title" v-show="currentView=='List'">Портфолио</h5>
              <button
                type="button"
                class="close ml-auto my-auto"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <component :is="currentView" @setView="setView($event)"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/Portfolio/List";
import Single from "@/components/Portfolio/Single";
import AnimatedNumber from "animated-number-vue";
export default {
  props: ["title"],
  data() {
    return {
      currentView: "list",
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
  components: {
    List,
    Single,
    AnimatedNumber
  },
  methods: {
    viewHandler(e) {
      if (e.type == "enter") {
        this.stats.first = 11;
        this.stats.second = 7;
        this.stats.third = 200;
        this.stats.fourth = 0;
      }
      if (e.type == "exit") {
        this.stats.first = 0;
        this.stats.second = 0;
        this.stats.third = 0;
        this.stats.fourth = 0;
      }
    },
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
    setView(view) {
      this.currentView = view;
    },
    toast() {
      const opt = {
        message: "Your action was done.",
        type: "default",
        duration: 1500
      };
      let instance = this.$toast.open(opt);
    }
  }
};
</script>

<style lang="scss" scoped>
$fs_section: 1rem;

#about {
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
  .stats {
    &__data {
      box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.06);
    }
  }

  .content {
    .text {
      font-weight: 200;
    }
    .btn {
      font-size: $fs_section;
    }
  }
  .video video {
    width: 100%;
    height: auto;
  }
  .photos {
    margin-bottom: 20px;
    img {
      height: 300px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  .card {
    .card-img-top {
      height: 200px;
      object-position: center;
      object-fit: cover;
    }
    h6 {
      font-size: 1em;
    }
  }
  .modal-header {
    .modal-title {
      margin-left: 15px;
    }
    .close,
    .back {
      padding: 5px 10px;
      margin: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
</style>
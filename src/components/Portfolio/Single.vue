<template>
  <div class="single" aos-sss="fade-up" aos-sss-easing="ease-in-out-back" :duration="500">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3>ICTWEEK 2020</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cupiditate suscipit hic accusantium, iste ea dolorem quisquam rem dignissimos qui officia eos doloribus itaque, dicta dolores. Consectetur quas doloremque illo!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi fugit tempora consequuntur reprehenderit nihil aliquam accusantium ipsa asperiores delectus nobis esse aliquid quam laborum, in facere sapiente nemo, repudiandae officia natus. Architecto pariatur nemo culpa nulla animi natus, voluptatum aspernatur? Praesentium in doloribus ut quas quaerat. Odio vitae sapiente architecto.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor quaerat quidem laudantium accusamus repellendus!</p>
        </div>
        <div class="col-lg-6">
          <swiper class="swiper" style="height:400px; width:100%;" :options="swiperOption">
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
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
.single {
  .carousel-item {
    img {
      max-height: 350px;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
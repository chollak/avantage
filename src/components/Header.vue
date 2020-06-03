<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg fixed-top bg-white navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">{{brand}}</a>
        <button class="navbar-toggler" @click="toggleNav()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="mobileNav" :class="{show:isNavShow}">
          <ul class="navbar-nav ml-auto-lg align-self-stretch">
            <li class="nav-item">
              <a class="nav-link" href="#">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Оборудования</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Заказ стенда</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Услуги</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Система регистрации</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Оборудования</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Заказ стенда</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Услуги</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Система регистрации</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Оборудования</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Заказ стенда</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Услуги</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Система регистрации</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Оборудования</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Заказ стенда</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Услуги</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Система регистрации</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Оборудования</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Заказ стенда</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Услуги</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Система регистрации</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="overlay"></div>
    <div class="header__overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
    </video>
    <div class="container h-100">
      <div class="d-flex h-100 text-center align-items-center">
        <div class="w-100 text-white">
          <h1 class="display-3">Welcome</h1>
          <div class="container">
            <img src="@/assets/logo.png" alt class="img-fluid rounded mx-auto d-block header__logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";

export default {
  name: "Header",
  props: {
    brand: String
  },
  data() {
    return {
      isNavShow: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavShow = !this.isNavShow;
    }
  }
};
</script>

<style lang="scss" scoped>
.arrow {
  position: absolute;
  bottom: 0;
  left: 50%;
  color: $red;
  z-index: 5;
  font-size: 2rem;
  animation: arrow-animate 1s infinite ease-in-out;
}

@keyframes arrow-animate {
  0% {
    bottom: 0px;
  }
  50% {
    bottom: 10px;
  }
  100% {
    bottom: 0px;
  }
}

.header {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  @include media-breakpoint-down(md) {
    .mobileNav {
      &::-webkit-scrollbar {
        display: none;
      }
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      transform: translateX(-100%);
      position: fixed;
      top: 0;
      left: 0;
      background: white;
      transition: 0.5s all ease;
      width: 100%;
      height: 100%;
      margin-top: 55px;
      overflow-y: auto;
      .navbar-nav {
        padding: 50px 10px;
        align-items: center;
        font-size: 2rem;
        .nav-item {
          margin: 20px 0px;
        }
      }
    }

    .mobileNav.show {
      transform: translateX(0%);
    }
  }
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .container {
    position: relative;
    z-index: 2;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $secondary;
    opacity: 0.5;
    z-index: 1;
  }

  &__logo {
    width: 300px;
  }
}

@media (pointer: coarse) and (hover: none) {
  header {
    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
      no-repeat center center scroll;
    video {
      display: none;
    }
  }
}
</style>
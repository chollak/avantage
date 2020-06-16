<template>
  <div class="header" id="home">
    <nav class="navbar navbar-expand-lg fixed-top" :class="[bgNav]" id="navbar">
      <div class="container">
        <a
          class="navbar-brand"
          href="#home"
          v-smooth-scroll="{ duration: 500, offset: -50, updateHistory: true }"
        >{{brand}}</a>
        <button class="navbar-toggler" @click="toggleNav()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="mobileNav text-center" :class="{show:isNavShow}">
          <ul class="navbar-nav ml-auto-lg align-self-stretch">
            <li class="nav-item">
              <a
                class="nav-link hover-link"
                href="#about"
                v-smooth-scroll="{ duration: 500, offset: -50, updateHistory: true }"
                @click="hideNav()"
              >О нас</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link hover-link"
                href="#equipment"
                v-smooth-scroll="{ duration: 500, offset: -50, updateHistory: true }"
                @click="hideNav()"
              >Аренда оборудования</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link hover-link"
                href="#stand"
                v-smooth-scroll="{ duration: 500, offset: -50, updateHistory: true }"
                @click="hideNav()"
              >Заказ стенда</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link hover-link"
                href="#service"
                v-smooth-scroll="{ duration: 500, offset: -50, updateHistory: true }"
                @click="hideNav()"
              >Услуги</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link hover-link"
                href="#registration"
                v-smooth-scroll="{ duration: 500, offset: -50, updateHistory: true }"
                @click="hideNav()"
              >Система регистрации</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link hover-link"
                href="#contact"
                v-smooth-scroll="{ duration: 500, offset: -50, updateHistory: true }"
                @click="hideNav()"
              >Контакты</a>
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
        <div class="w-100 text-dark">
          <h1 class="display-3" @click="scrollToForm('#s3')">Welcome</h1>
          <div class="container">
            <img src="@/assets/logo.png" alt class="img-fluid rounded mx-auto d-block header__logo" />
          </div>
        </div>
        <div class="arrow">
          <i class="fa fa-arrow-down"></i>
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
      isNavShow: false,
      bgNav: "bg-transparent navbar-dark"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleNav() {
      if (window.scrollY == 0 && this.isNavShow == false) {
        this.bgNav = "bg-white navbar-light";
        this.isNavShow = !this.isNavShow;
      } else if (window.scrollY == 0 && this.isNavShow == true) {
        this.isNavShow = !this.isNavShow;
        this.bgNav = "bg-transparent navbar-dark";
      } else {
        this.bgNav = "bg-white navbar-light";
        this.isNavShow = !this.isNavShow;
      }
    },
    showNav() {
      this.isNavShow = true;
    },
    hideNav() {
      this.isNavShow = false;
    },
    updateScroll() {
      if (window.scrollY == 0 && this.isNavShow == true) {
        this.bgNav = "bg-white navbar-light";
      } else
        this.bgNav =
          window.scrollY > 0
            ? "bg-white navbar-light"
            : "bg-transparent navbar-dark";
    }
  }
};
</script>

<style lang="scss" scoped>
.arrow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #333;
  z-index: 5;
  font-size: 3rem;
  animation: arrow-animate 1.5s infinite ease-in-out;
}

@keyframes arrow-animate {
  0% {
    bottom: 0px;
    opacity: 0;
  }
  50% {
    bottom: 10px;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.header {
  position: relative;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
  .navbar-brand {
    font-weight: 700;
  }
  .bg-white {
    box-shadow: 0px 3px 15px rgba($color: #000000, $alpha: 0.05);
  }
  .navbar {
    transition: 0.2s background-color ease;
    // padding: 0.5rem 1rem !important;
    .nav-link.active {
      background: var(--red);
      color: #fff;
    }
  }
  @include media-breakpoint-down(md) {
    // .navbar {
    //   transition: .5s all ease;
    // }
    .mobileNav {
      &::-webkit-scrollbar {
        display: none;
      }
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      transform: translateX(-100%);
      opacity: 0;
      visibility: hidden;
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
        transition-delay: 0s;
        font-size: 2rem;
        .nav-item {
          margin: 20px 0px;
        }
      }
    }
    .mobileNav.show {
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
      transition: 0.5s all ease;
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
    background-color: #aaa;
    opacity: 0.5;
    z-index: 1;
  }

  &__logo {
    width: 300px;
  }
}

@media (pointer: coarse) and (hover: none) {
  .header {
    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
      no-repeat center center scroll;
    video {
      display: none;
    }
  }
}
</style>
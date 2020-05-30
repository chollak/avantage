<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent">
      <div class="container">
        <a class="navbar-brand" href="#">{{brand}}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navBarCollapse"
          aria-controls="navBarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navBarCollapse">
          <ul class="navbar-nav ml-auto">
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
import $ from "jquery";
import "bootstrap";

$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(".navbar-toggler").attr("aria-expanded") == "true") {
      $(".navbar").addClass("bg-dark");
      $(".navbar").removeClass("bg-transparent");
    }
    else if ($(window).scrollTop() > 1) {
      $(".navbar").addClass("bg-dark");
      $(".navbar").removeClass("bg-transparent");
    } else {
      $(".navbar").addClass("bg-transparent");
      $(".navbar").removeClass("bg-dark");
    }    
  });

  $(".collapse").on("show.bs.collapse", function() {
    if ($(window).scrollTop() == 0) {
      $(".navbar").addClass("bg-dark");
      $(".navbar").removeClass("bg-transparent");
    }
  });
  $(".collapse").on("hidden.bs.collapse", function() {
    if ($(window).scrollTop() == 0) {
      $(".navbar").addClass("bg-transparent");
      $(".navbar").removeClass("bg-dark");
    }
  });
});

export default {
  name: "Header",
  props: {
    brand: String
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
  background-color: black;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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
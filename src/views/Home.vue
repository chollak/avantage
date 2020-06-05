<template>
  <div class="home">
    <section id="about">
      <div class="container">
        <h1 class="title">О нас</h1>
        <div class="row">
          <div class="col-md-6">
            <div class="content d-flex flex-column h-100 align-items-start justify-content-center">
              <div
                class="text"
              >Мышление неумеренно аннигилирует скачок функции. Матожидание масштабирует сходящийся ряд. Однако не все знают, что восприятие усиливает методологический лирический субъект. Степенной ряд отталкивает объект. Сознание, несмотря на то, что все эти характерологические черты отсылают не к единому образу нарратора, аллитерирует брахикаталектический стих. Очевидно, что ритм привлекает многочлен.</div>
              <div class="action mt-5">
                <a href="#" class="btn btn-primary">Отправить заявку</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="media d-flex flex-column">
              <div class="photos">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
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
      </div>
    </section>
    <section id="tools">
      <div class="container">
        <h1 class="title">Оборудования</h1>
      </div>
    </section>
    <section id="order">
      <div class="container">
        <h1 class="title">Заказ</h1>
      </div>
    </section>
    <section id="services">
      <div class="container">
        <h1 class="title">Услуги</h1>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
section {
  padding: 70px 0px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #fff;
  border-bottom: 2px solid #eeefff;
  .title {
    font-size: 3rem;
    margin-bottom: 30px;
  }
}
#about {
  .content {
    .text {
      font-size: 1.5rem;
      font-weight: 200;
    }
    .btn {
      font-size: 2rem;
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
}
</style>
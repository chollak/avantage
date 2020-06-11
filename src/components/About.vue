<template>
  <div class="section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
            <h3 class="section__title">О нас</h3>
            <div
              class="text"
            >Мышление неумеренно аннигилирует скачок функции. Матожидание масштабирует сходящийся ряд. Однако не все знают, что восприятие усиливает методологический лирический субъект. Степенной ряд отталкивает объект. Сознание, несмотря на то, что все эти характерологические черты отсылают не к единому образу нарратора, аллитерирует брахикаталектический стих. Очевидно, что ритм привлекает многочлен.
            <a href="#" class="hover-link">Linkto GG WP</a>
            </div>
            <div class="action mt-5">
              <a href="#" class="btn btn-action">Отправить заявку</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
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
                <!-- <source
                    src="https://v.mover.uz/15C0JPum_h.mp4"
                    type="video/mp4"
                />-->
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$fs_section: 1rem;
#about {
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
}
</style>
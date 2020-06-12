<template>
  <div class="section" id="about">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div class="col-lg-6">
            <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
              <h3 class="section__title">О нас</h3>
              <div class="text">
                <p>Теперь, чтобы организовать деловое мероприятие, нужно по-настоящему много работать. При отсутствии специальных знаний в этой области лучше всего обратиться в специальную компанию, которая может предоставить целую команду профессионалов, которые готовы взяться за организацию проекта и могут выполнить его на 100%.</p>
                <p>AVANTAGE относится к таким компаниям, которые могут взять на себя задачу организации и проведения любого типа мероприятия, а также предоставить в аренду лучшее оборудование, позволяющее проводить качественные и интересные мероприятия.</p>
                <p>Мы готовы предоставить нашим клиентам полный спектр услуг, от разработки концепции до реализации и реализации мероприятий.</p>
                <p>Выставки, форумы, конференции, презентации, кейтеринг, организованные AVANTAGE, позволяют нашим Клиентам достигать своих целей и отмечены положительными отзывами участников и посетителей.</p>
                <p>Мы готовы эффективно применить наш опыт в организации любого формата деловых мероприятий в интересах вашей компании.</p>
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
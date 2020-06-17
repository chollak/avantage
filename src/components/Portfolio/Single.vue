<template>
  <div class="single">
    <div class="back">
      <button class="btn btn-link text-dark" @click="$emit('setView','List')">
        <i class="fa fa-arrow-left"></i>
      </button>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3>ICTWEEK 2020</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cupiditate suscipit hic accusantium, iste ea dolorem quisquam rem dignissimos qui officia eos doloribus itaque, dicta dolores. Consectetur quas doloremque illo!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi fugit tempora consequuntur reprehenderit nihil aliquam accusantium ipsa asperiores delectus nobis esse aliquid quam laborum, in facere sapiente nemo, repudiandae officia natus. Architecto pariatur nemo culpa nulla animi natus, voluptatum aspernatur? Praesentium in doloribus ut quas quaerat. Odio vitae sapiente architecto.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor quaerat quidem laudantium accusamus repellendus!</p>
        </div>
        <div class="col-lg-6">
          <div id="sliderSingle" class="carousel slide" data-ride="carousel">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.single {
  .back {
    position: absolute;
    top: -40px;
    left: 0;
  }
  .carousel-item {
    img {
      max-height: 350px;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
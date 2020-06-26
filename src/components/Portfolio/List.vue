<template>
  <div class="list" data-aos="fade-down" data-aos-easing="ease-in-out-back" :duration="500">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2">
        <div class="col mb-4">
          <div class="card" @click="$emit('setView','Single')">
            <img src="https://source.unsplash.com/random" class="card-img-top" />
            <div class="card-body">
              <h6>ICTWEEK 2020</h6>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="https://source.unsplash.com/random" class="card-img-top" />
            <div class="card-body">
              <h6>Something new in the IT</h6>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="https://source.unsplash.com/random" class="card-img-top" />
            <div class="card-body">
              <h6>ICTWEEK 2020</h6>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="https://source.unsplash.com/random" class="card-img-top" />
            <div class="card-body">
              <h6>ICTWEEK 2020</h6>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="https://source.unsplash.com/random" class="card-img-top" />
            <div class="card-body">
              <h6>ICTWEEK 2020</h6>
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
.list {
  .card {
    border-radius: 1.2rem;
    .card-img-top {
      height: 200px;
      object-fit: cover;
      object-position: center;
      border-top-right-radius: 1.2rem;
      border-top-left-radius: 1.2rem;
    }
    h6 {
      font-size: 0.875rem;
    }
  }
}
</style>
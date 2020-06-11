<template>
  <div class="section" id="equipment">
    <div class="container">
      <h3 class="section__title">Аренда оборудования</h3>
      <div class="section__body">
        <div class="tags d-flex justify-content-between flex-wrap py-2">
          <div class="tags__left d-flex flex-wrap">
            <div class="input-wrapper">
              <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-danger" type="button" id="searchBtn">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Search tag"
                  aria-describedby="searchBtn"
                />
              </div>
            </div>
            <ul class="nav justify-content-start">
              <li class="nav-item">
                <a class="nav-link hover-link" href="#">Стол</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-link" href="#">Стул</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-link" href="#">Освещение</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-link" href="#">Микрофон</a>
              </li>
            </ul>
          </div>
          <div class="tags__right">
            <a href="#" class="btn btn-alternative">Корзинка</a>
          </div>
        </div>

        <div class="category">
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
          <div class="category__item">
            <img src="https://source.unsplash.com/random" alt />
          </div>
        </div>
        <!-- Nav pills -->
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#menu1">Menu 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#menu2">Menu 2</a>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane container active" id="home">...</div>
          <div class="tab-pane container fade" id="menu1">...</div>
          <div class="tab-pane container fade" id="menu2">...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#equipment {
  background: $gray-100;
  .category {
    display: flex;
    overflow-y: scroll;
    &__item {
      margin: 1px;
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
  }
}
</style>
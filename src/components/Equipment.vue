<template>
  <div class="section" id="equipment">
    <div class="container">
      <h3 class="section__title">Аренда оборудования</h3>
      <div class="section__body">
        <div class="tags d-flex justify-content-between flex-wrap py-2">
          <div class="tags__left d-flex flex-wrap">
            <div class="input-wrapper d-flex align-items-center">
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
                  v-model="searchInput"
                />
              </div>
            </div>

            <ul class="nav justify-content-start">
              <li class="nav-item dropdown d-none">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Dropdown</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#table" data-toggle="tab">action</a>
                  <a class="dropdown-item" href="#chair" data-toggle="tab">Another action</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-link active" data-toggle="pill" href="#table">Стол</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-link" data-toggle="pill" href="#chair">Стул</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-link" data-toggle="pill" href="#lighting">Освещение</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-link" data-toggle="pill" href="#micro">Микрофон</a>
              </li>
            </ul>
          </div>
          <div class="tags__right">
            <a href="#" class="btn btn-action btn-md-sm">
              Корзинка
              <span class="badge badge-light ml-2">12</span>
            </a>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane container active" id="table">
            <div class="row no-gutters">
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 p-1">
                <div class="tab-wrapper text-center">
                  <img src="https://source.unsplash.com/random" alt class="img-fluid rounded" />
                  <a href="#" class="btn btn-sm btn-alternative mt-2">Заказать</a>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane container fade" id="chair">
            <div class="row row-cols-1 row-cols-md-4">
              <div class="col mb-4">
                <div class="card">
                  <img
                    src="https://source.unsplash.com/random"
                    class="card-img-top"
                    alt="..."
                    data-toggle="modal"
                    data-target="#modalImage"
                  />
                  <div class="card-body text-center">
                    <a href="#" class="btn btn-alternative btn-sm">Добавить</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img
                    src="https://source.unsplash.com/random"
                    class="card-img-top"
                    alt="..."
                    data-toggle="modal"
                    data-target="#modalImage"
                  />
                  <div class="card-body text-center">
                    <a href="#" class="btn btn-alternative btn-sm">Добавить</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img
                    src="https://source.unsplash.com/random"
                    class="card-img-top"
                    alt="..."
                    data-toggle="modal"
                    data-target="#modalImage"
                  />
                  <div class="card-body text-center">
                    <a href="#" class="btn btn-alternative btn-sm">Добавить</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img
                    src="https://source.unsplash.com/random"
                    class="card-img-top"
                    alt="..."
                    data-toggle="modal"
                    data-target="#modalImage"
                  />
                  <div class="card-body text-center">
                    <a href="#" class="btn btn-alternative btn-sm">Добавить</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img
                    src="https://source.unsplash.com/random"
                    class="card-img-top"
                    alt="..."
                    data-toggle="modal"
                    data-target="#modalImage"
                  />
                  <div class="card-body text-center">
                    <a href="#" class="btn btn-alternative btn-sm">Добавить</a>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img
                    src="https://source.unsplash.com/random"
                    class="card-img-top"
                    alt="..."
                    data-toggle="modal"
                    data-target="#modalImage"
                  />
                  <div class="card-body text-center">
                    <a href="#" class="btn btn-alternative btn-sm">Добавить</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane container fade" id="lighting">
            <h3>Title</h3>
          </div>
          <div class="tab-pane container fade" id="micro">
            <h3>Title</h3>
          </div>
        </div>
      </div>
    </div>


    <IModal :imgSrc="getSrc" />
  </div>
</template>

<script>
import IModal from "@/components/ImageModal";
export default {
  components: {
    IModal
  },
  data() {
    return {
      selectedItem: "",
      currentTag: "Italian",
      searchInput: "",
      equipments: [
        {
          tag: "стол",
          items: [
            {
              id: 1,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            },
            {
              id: 2,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            },
            {
              id: 3,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            }
          ]
        },
        {
          tag: "стул",
          items: [
            {
              id: 1,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            },
            {
              id: 2,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            },
            {
              id: 3,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            }
          ]
        },
        {
          tag: "освещение",
          items: [
            {
              id: 1,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            },
            {
              id: 2,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            },
            {
              id: 3,
              name: "Italian brand",
              image: "https://source.unsplash.com/random"
            }
          ]
        }
      ]
    };
  },
  computed: {
    getSrc() {
      return "https://source.unsplash.com/random";
    },
    filteredList() {
      return this.equipments.filter(equipment => {
        return equipment.tag
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
    }
  },
  methods: {
    getItemsByTag(tag) {
      return this.equipments.filter(equipment => {
        return equipment.tag === tag;
      });
    },
    showItem() {},
    searchItem(name) {
      return this.equipments.find(equipment => equipment.tag.name === name);
    }
  }
};
</script>

<style lang="scss" scoped>
#equipment {
  .image-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: none;
  }
  .image-view.show {
    display: block;
  }
  background: $gray-100;
  .category {
    display: flex;
    overflow-y: scroll;
    &__item {
      margin: 1px;
      ≠ img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
  }
  .tab-wrapper {
    img {
      height: 200px;
      width: 150px;
      object-fit: cover;
      object-position: center;
    }
  }
  .card {
    img {
      width: 100%;
      height: 200px;
      object-position: center;
      object-fit: cover;
    }
  }
}
</style>
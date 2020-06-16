<template>
  <div class="section" id="equipment">
    <div class="container">
      <h3 class="section__title">Аренда оборудования</h3>
      <div class="section__body">
        <div class="tags d-flex justify-content-between flex-wrap py-2">
          <div class="tags__left d-flex">
            <div class="input-wrapper d-flex align-items-center">
              <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary" type="button" id="searchBtn">
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
            <template v-if="equipments!==null && searchInput!==''"></template>
            <ul class="nav justify-content-start">
              <li class="nav-item dropdown d-lg-none">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >{{activeTag}}</a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a
                    class="dropdown-item"
                    :href="'#'+tag.ru_title"
                    @click="searchInput=''; activeTag = tag.ru_title"
                    data-toggle="pill"
                    v-for="(tag) in tags"
                    :key="tag.id"
                  >{{tag.ru_title}}</a>
                </div>
              </li>
              <li class="nav-item d-none d-lg-block" v-for="(tag,index) in tags" :key="tag.id">
                <a
                  class="nav-link hover-link"
                  :class="{'active':index==0}"
                  data-toggle="pill"
                  :href="'#'+tag.ru_title"
                  @click="searchInput=''"
                >{{tag.ru_title}}</a>
              </li>
            </ul>
          </div>
          <div class="tags__right">
            <button
              :class="{'pulse':isPulse}"
              class="btn btn-action btn-md-sm d-md-block"
              data-toggle="modal"
              data-target="#checkoutModal"
            >
              Корзинка
              <template v-if="isRender">
                <span class="badge badge-light ml-2">{{getCartLength}}</span>
              </template>
            </button>
          </div>
        </div>
        <template v-if="equipments!==null && searchInput!==''">
          <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2">
            <template v-if="equipments!==null">
              <div class="col mb-4" v-for="e in filteredList" :key="e.id">
                <div class="card">
                  <img
                    :src="e.img"
                    class="card-img-top"
                    alt="..."
                    data-toggle="modal"
                    data-target="#modalImage"
                    @click="setImage(e.img)"
                  />
                  <div class="card-body">
                    <h6>{{e.ru_title}}</h6>
                  </div>
                  <div class="card-footer">
                    <template v-if="isRender">
                      <button
                        class="btn btn-action btn-sm btn-block disabled"
                        v-if="checkIfInCart(e.id)"
                      >Добавлено</button>
                      <button
                        class="btn btn-alternative btn-sm btn-block"
                        v-else
                        @click="addItemCart(e)"
                      >Добавить</button>
                    </template>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <div class="tab-content">
            <div
              class="tab-pane container"
              v-for="(tag,index) in tags"
              :key="tag.id"
              :id="tag.ru_title"
              :class="{'active':index==0}"
            >
              <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2">
                <template v-if="equipments!==null">
                  <div class="col mb-4" v-for="e in getEquipment(tag.id)" :key="e.id">
                    <div class="card">
                      <img
                        :src="e.img"
                        class="card-img-top"
                        alt="..."
                        data-toggle="modal"
                        data-target="#modalImage"
                        @click="setImage(e.img)"
                      />
                      <div class="card-body">
                        <h6>{{e.ru_title}}</h6>
                      </div>
                      <div class="card-footer">
                        <template v-if="isRender">
                          <button
                            class="btn btn-action btn-sm btn-block disabled"
                            v-if="checkIfInCart(e.id)"
                          >Добавлено</button>
                          <button
                            class="btn btn-alternative btn-sm btn-block"
                            v-else
                            @click="addItemCart(e)"
                          >Добавить</button>
                        </template>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <IModal :imgSrc="isrc" />

    <!-- Checkout Modal -->
    <div class="m-warpper">
      <div
        class="modal fade"
        id="checkoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header" style="border:none">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-8">
                  <div class="cart__items">
                    <template v-if="cart">
                      <div class="table-responsive">
                        <table class="table table-borderless">
                          <tbody>
                            <tr v-for="(c,index) in cart" :key="c.id">
                              <th scope="row">{{index+1}}</th>
                              <td>
                                <img :src="c.img" alt class="cart-img" />
                              </td>
                              <td>{{c.ru_title}}</td>
                              <td>{{c.price | toCurrency}}</td>
                              <td>
                                <div class="d-flex p-2">
                                  <button class="btn cart-controls__btn" @click="decItemCart(c)">
                                    <i class="fa fa-minus"></i>
                                  </button>
                                  <input
                                    class="text-center form-control cart-controls__status"
                                    :id="'cart-'+c.id"
                                    type="number"
                                    v-model="c.quantity"
                                    min="1"
                                    @change="quantityChange(c)"
                                  />
                                  <button class="btn cart-controls__btn" @click="incItemCart(c)">
                                    <i class="fa fa-plus"></i>
                                  </button>
                                  <button
                                    class="btn btn-red cart-controls__btn ml-2"
                                    @click="deleteItemCart(c.id)"
                                  >
                                    <div class="fa fa-trash"></div>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- <div class="cart-item" v-for="(c,index) in cart" :key="c.id"> -->

                      <!-- <div class="cart-item__index">{{index+1}}</div>
                        <div class="cart-item__profile">
                          <img :src="c.img" alt />
                        </div>
                        <div class="cart-item__title">{{c.ru_title}}</div>
                        <div class="cart-item__price">{{c.price | toCurrency}}</div>
                        <div class="cart-item__controls cart-controls">
                          <button class="cart-controls__btn btn" @click="decItemCart(c)">
                            <i class="fa fa-minus"></i>
                          </button>
                          <input
                            class="text-center form-control cart-controls__status"
                            :id="'cart-'+c.id"
                            type="number"
                            v-model="c.quantity"
                            min="1"
                            @change="quantityChange(c)"
                          />
                          <button class="cart-controls__btn btn" @click="incItemCart(c)">
                            <i class="fa fa-plus"></i>
                          </button>
                          <button
                            class="cart-controls__btn btn btn-red ml-2"
                            @click="deleteItemCart(c.id)"
                          >
                            <div class="fa fa-trash"></div>
                          </button>
                      </div>-->
                      <!-- </div> -->
                    </template>
                    <template v-else>
                      <h1>No items</h1>
                    </template>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="sticky-top t-5">
                    <div class="total">
                      <h6>Total</h6>
                      <h5>{{total | toCurrency}}</h5>
                    </div>
                    <div class="actions">
                      <button
                        class="btn btn-alternative mr-2"
                        @click="storageClear()"
                        data-dismiss="modal"
                      >Clear</button>
                      <button class="btn btn-action">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IModal from "@/components/ImageModal";
export default {
  components: {
    IModal
  },
  async created() {
    await this.getTags();
    this.activeTag = this.tags[0].ru_title;
    const ids = this.tags.map(tag => tag.id);
    const preparedData = [];
    for (const id of ids) {
      preparedData.push(this.getEquipmentsByTag(id));
    }
    this.equipments = await Promise.all(preparedData);
    this.cart = this.storageGet();
    if (this.cart != null) {
      this.total = this.cart.reduce((total, current) => {
        return total + current.price * current.quantity;
      }, 0);
    }
  },
  data() {
    return {
      isrc: "",
      selectedItem: "",
      isLoading: false,
      currentTag: 2,
      searchInput: "",
      tags: null,
      equipments: null,
      cart: null,
      isRender: true,
      isPulse: false,
      total: 0,
      activeTag: ""
    };
  },
  computed: {
    getSrc() {
      return "https://source.unsplash.com/random";
    },
    filteredList() {
      let arr = [];
      const data = this.equipments.forEach(el => {
        arr = [...arr, ...el.equipments];
      });
      return arr.filter(el => {
        return el.ru_title
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });

      // return element.equipments.filter(equipment => {
      //     equipment.ru_title
      //       .toLowerCase()
      //       .includes(this.searchInput.toLowerCase());
      //   });
    },
    getCartLength() {
      if (this.cart != null) return this.cart.length;
      else return 0;
    },
    getTotal() {
      return this.cart.reduce((total, current) => {
        return total + current.price * current.quantity;
      }, 0);
    }
  },
  filters: {
    toCurrency(value) {
      if (typeof value !== "number") {
        return value;
      }
      let formatter = new Intl.NumberFormat("ru-UZ", {
        style: "currency",
        currency: "UZS",
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    },
    comma(value) {
      return value.replace(" ", ",");
    }
  },
  methods: {
    setImage(img) {
      this.isrc = img;
    },
    getEquipment(id) {
      const data = this.equipments.filter(equipment => {
        return equipment.id === id;
      });
      return data[0].equipments;
    },
    async getTags() {
      this.isLoading = true;
      const res = await this.$http.get(
        "https://avantage.herokuapp.com/api/tag"
      );
      this.tags = res.data;
      this.isLoading = false;
    },
    async getEquipmentsByTag(id) {
      const res = await this.$http.get(
        "https://avantage.herokuapp.com/api/tag/" + id
      );
      return res.data;
    },
    quantityChange(cart) {
      if (cart.quantity == "") cart.quantity = 1;
      this.total = this.getTotal;
      this.storageSet(this.cart);
    },
    incItemCart(cart) {
      cart.quantity++;
      this.total += cart.price;
      this.storageSet(this.cart);
    },
    decItemCart(cart) {
      let quantity = cart.quantity - 1;
      if (quantity <= 0) {
        return;
      } else {
        cart.quantity = quantity;
        this.total -= cart.price;
        this.storageSet(this.cart);
      }
    },
    addItemCart(cart) {
      if (!this.checkIfInCart(cart.id)) {
        const quantity = {
          quantity: 1
        };
        cart = { ...cart, ...quantity };
        this.storageAdd(cart);
        this.cart = this.storageGet();
        this.total += cart.price;
      }
      this.isRender = false;
      this.$nextTick(() => {
        this.isRender = true;
      });
      this.isPulse = true;
      setTimeout(() => {
        this.isPulse = false;
      }, 300);
    },
    deleteItemCart(id) {
      this.cart = this.cart.filter(el => {
        if (el.id === id) {
          this.total -= el.price * el.quantity;
          return false;
        }
        return true;
      });
      this.storageRemove(id);
      this.cart = this.storageGet();
    },
    checkIfInCart(id) {
      const cart = this.storageGet();
      if (cart) {
        return cart.find(el => el.id === id) ? true : false;
      }
    },
    storageAdd(item) {
      const cartString = window.localStorage.getItem("cart");
      let cart;
      if (cartString) {
        cart = JSON.parse(cartString);
        cart.push(item);
      } else {
        cart = [item];
      }
      window.localStorage.setItem("cart", JSON.stringify(cart));
      this.cart = cart;
    },
    storageRemove(itemId) {
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        cart = cart.filter(el => el.id !== itemId);
        if (cart.length) {
          window.localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          window.localStorage.removeItem("cart");
        }
      }
    },
    storageClear() {
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        window.localStorage.removeItem("cart");
      }
      this.cart = null;
      this.total = 0;
    },
    storageGet() {
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        if (cart.length) {
          return cart;
        }
      }
    },
    storageSet(cart) {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};
</script>

<style lang="scss" scoped>
#equipment {
  .t-5 {
    top: 50px;
  }
  .currency {
    font-weight: 700;
  }
  .cart-img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    object-position: center;
  }
  .table {
    input {
      width: 6em;
    }
    .cart-controls__btn {
      padding: 0.375rem 0.75rem;
    }
  }
  .cart-item {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 5px;
    background: rgba($color: #000000, $alpha: 0.02);
    margin-bottom: 0.5rem;
    .cart-controls {
      display: flex;
      input {
        width: 6em;
      }
      &__status {
        display: inline-block;
        width: 2rem;
        text-align: center;
        font-weight: 700;
        margin: 0 0.3rem;
      }

      &__btn {
        // padding: 0.375rem 0.75rem;
        // min-width: 2rem;
        text-align: center;

        &:hover {
          background: rgba($color: #000, $alpha: 0.1);
          color: #000;
        }
      }
    }
    &__index {
      width: 2em;
      font-weight: 700;
    }

    &__profile {
      border-radius: 10px;
      overflow: hidden;
      background: white;
      width: 3em;
      height: 3em;
      margin-right: 1em;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__title {
      flex-grow: 1;
    }

    &__price {
      margin-left: 1rem;
      flex-grow: 1;
      font-weight: 700;
    }
  }
  .m-wrapper {
    background: red;
  }
  #checkoutModal {
    // background: white;
    .modal-content {
      border: none;
    }
  }
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
      img {
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
      object-fit: contain;
    }
    .card-body {
      h6 {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
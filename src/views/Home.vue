<template>
  <div class="home" data-spy="scroll" data-target="#navbar" data-offset="100">
    <template v-if="data">
      <About title="О нас" @sendForm="send" :content="data.aboutSection" />
      <Equipment title="Аренда оборудований" @sendForm="send" />
      <Service title="Кейтеринг" @sendForm="send" :content="data.cateringSection" />
      <Stand title="Застройка стенда" @sendForm="send" :content="data.standSection" />
      <Registration
        title="Регистрация посетителей"
        @sendForm="send"
        :content="data.registerSection"
      />
      <Contact title="Контакты" @sendForm="send" />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About";
import Contact from "@/components/Contact";
import Equipment from "@/components/Equipment";
import Registration from "@/components/Registration";
import Service from "@/components/Service";
import Stand from "@/components/Stand";

export default {
  name: "Home",
  components: {
    About,
    Contact,
    Equipment,
    Registration,
    Service,
    Stand
  },
  data() {
    return {
      data: null
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$http.get(
        "http://avantage.herokuapp.com/api/FullPage/"
      );
      this.data = res.data;
    },
    getCart() {
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        if (cart.length) {
          return cart;
        }
      }
    },
    send() {
      if (this.getCart()) {
        this.$store.state.form.cart.items = this.getCart().map(element => {
          return { id: element.id, quantity: element.quantity };
        });
      }

      this.$http.post(
        "https://avantage.herokuapp.com/api/form",
        this.$store.state.form
      );
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        window.localStorage.removeItem("cart");
      }
      console.log("SENDING>>>");
    }
  }
};
</script>
<style lang="scss">
.section {
  .content {
    .text {
      font-weight: 200;
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
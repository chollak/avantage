<template>
  <div class="home" data-spy="scroll" data-target="#navbar" data-offset="100">
    <template v-if="data">
      <About title="О нас" :content="data.aboutSection" />
      <Equipment title="Аренда оборудований" />
      <Service title="Кейтеринг" :content="data.cateringSection" />
      <Stand title="Застройка стенда" :content="data.standSection" />
      <Registration title="Регистрация посетителей" :content="data.registerSection" />
      <Contact title="Контакты" />
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
    // https://roadtosenior.uz
  },
  methods: {
    async getData() {
      const res = await this.$http.get(
        "https://roadtosenior.uz/api/FullPage/"
      );
      this.data = res.data;
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
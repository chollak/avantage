<template>
  <div class="home" data-spy="scroll" data-target="#navbar" data-offset="100">
    <template v-if="data">
      <About :title="$t('title.about')" :content="data.aboutSection" />
      <Equipment :title="$t('title.equipment')" />
      <Service :title="$t('title.catering')" :content="data.cateringSection" />
      <Stand :title="$t('title.stand')" :content="data.standSection" />
      <Registration :title="$t('title.registration')" :content="data.registerSection" />
      <Contact :title="$t('title.contact')" />
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
    About: () => import('@/components/About'),
    Contact: () => import('@/components/Contact'),
    Equipment: () => import('@/components/Equipment'),
    Registration: () => import('@/components/Registration'),
    Service: () => import('@/components/Service'),
    Stand: () => import('@/components/Stand')
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
      const res = await this.$axi.get("FullPage/");
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
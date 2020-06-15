<template>
  <div class="home" data-spy="scroll" data-target="#navbar" data-offset="100">
    <About />
    <Equipment />
    <Stand />
    <Service />
    <Registration />
    <Contact />
    
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
  }
  // PROBLEM WITH SAVING HASH
  // mounted(){
  //   console.log(location.hash);
  //   this.$router.push({ name: 'Home', hash: location.hash })
  // }
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
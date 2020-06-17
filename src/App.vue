<template>
  <div id="app">
    <headerx brand="Avantage"/>
    <router-view />
  </div>
</template>
<script>
import Headerx from '@/components/Header'
export default {
  components:{
    Headerx
  }
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&display=swap');

#app {
  line-height: 1.8;
}

</style>

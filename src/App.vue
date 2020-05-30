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

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

#app {
  font-family: 'Nunito', sans-serif;
}
</style>

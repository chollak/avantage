<template>
  <div class="section" id="service">
    <div class="container">
      <h3 class="section__title">{{title}}</h3>
      <div class="section__body">
        <div class="row d-flex align-items-end">
          <div class="col-xl-7 col-lg-12 col-md-12 col-12">
            <div class="row">
              <div class="col-md-4 mb-2 mb-lg-2">
                <img
                  src="https://source.unsplash.com/random"
                  alt
                  class="img-fluid rounded h-100 w-100 img-hover-zoom--basic"
                />
              </div>
              <div class="col-md-8 mb-2 mb-lg-2">
                <img
                  src="https://source.unsplash.com/random"
                  alt
                  class="img-fluid rounded h-100 w-100"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-12 col-md-12 col-12 mt-3 mt-xl-0">
            <p class="mb-6">
              Выездной ресторан MEX CATERING, входящий в группу компаний AVANTAGE, работает на рынке общественного питания в Ташкенте с 2016 года и имеет большой опыт в организации приемов, банкетов, гала-ужинов, кофе-брейков и других мероприятий различных, в том числе международных.
            </p>
            <p>
              Мы предоставляем выездной ресторан на удобной вам территории, а также на площадках наших партнерах. 
            </p>
            <p>
              MEX CATERING - мы знаем секретный ингредиент секретного ингредиента супа ;-)
            </p>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12 mb-2 mb-lg-2">
                <img
                  src="https://source.unsplash.com/random"
                  alt
                  class="img-fluid h-100 rounded w-100"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12 mb-2 mb-lg-2">
                <img
                  src="https://source.unsplash.com/random"
                  alt
                  class="img-fluid h-100 rounded w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title'],
};
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="section" id="registration">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div class="col-lg-6">
            <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
              <h3 class="section__title">{{title}}</h3>
              <div class="section__form w-100">
                <form>
                  <div class="form-group">
                    <label for="registrationName">Имя</label>
                    <input type="text" class="form-control" id="registrationName" />
                  </div>
                  <div class="form-group">
                    <label for="registrationTel">Телефон</label>
                    <masked-input
                      mask="\+\998 (91) 111-11-11"
                      placeholder="Phone"
                      class="form-control"
                      id="registrationTel"
                    />
                  </div>
                  <div class="form-group">
                    <label for="registrationMessage">Сообщение</label>
                    <textarea
                      class="form-control"
                      id="registrationMessage"
                      style="min-height:5rem;"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="action mt-5">
                <a href="#" class="btn btn-action">Отправить заявку</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text mb-5">
              <p>Основной ценностью для сотрудников AVANTAGE является предоставление наилучшего сервиса своим клиентам и посетителям, что выражается в решении насущных задач по регистрации и идентификации потока посетителей.</p>
              <p>Наша система регистрации направлена на автоматизацию процессов регистрации посетителей для массовых мероприятий. Полный спектр услуг для встречи и регистрации гостей на мероприятиях, организации систем контроля доступа и сбора информации о перемещениях участников.</p>
            </div>
            <div class="media d-flex flex-column">
              <div class="photos">
                <div
                  id="carouselExampleControls"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://source.unsplash.com/random" class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats mt-5 text-center" v-view="viewHandler">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="stats__data p-3">
                <h3 class="stats__number m-0">
                  <animated-number
                    :value="stats.first"
                    :formatValue="formatToPrice"
                    :duration="1000"
                  />
                </h3>
                <div class="stats__text">года на рынке</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="stats__data p-3">
                <h3 class="stats__number m-0">
                  <animated-number
                    :value="stats.second"
                    :formatValue="formatToPrice"
                    :duration="1000"
                  />+
                </h3>
                <div class="stats__text">проектов</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="stats__data p-3">
                <h3 class="stats__number m-0">
                  <animated-number
                    :value="stats.third"
                    :formatValue="formatToPrice"
                    :duration="1000"
                  />+
                </h3>
                <div class="stats__text">прошли регистрацию</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaskedInput from "vue-masked-input";
import AnimatedNumber from "animated-number-vue";
export default {
  props: ["title"],
  components: {
    MaskedInput,
    AnimatedNumber
  },
  data() {
    return {
      stats: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
      }
    };
  },
  methods: {
    viewHandler(e) {
      if (e.type == "enter") {
        this.stats.first = 2;
        this.stats.second = 30;
        this.stats.third = 80000;
      }
      if (e.type == "exit") {
        this.stats.first = 0;
        this.stats.second = 0;
        this.stats.third = 0;
      }
    },
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
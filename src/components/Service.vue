<template>
  <div class="section" id="service">
    <div class="container">
      <div class="section__body">
        <div class="row d-flex align-items-start">
          <div class="col-lg-7 col-md-12 col-12 mt-3 mt-xl-0 order-1">
            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <p
                class="mb-6"
              >Выездной ресторан MEX CATERING, входящий в группу компаний AVANTAGE, работает на рынке общественного питания в Ташкенте с 2016 года и имеет большой опыт в организации приемов, банкетов, гала-ужинов, кофе-брейков и других мероприятий различных, в том числе международных.</p>
              <p>Мы предоставляем выездной ресторан на удобной вам территории, а также на площадках наших партнерах.</p>
              <p>MEX CATERING - мы знаем секретный ингредиент секретного ингредиента супа ;-)</p>
            </div>
            <div class="row">
              <div
                class="col-12 mb-2 mb-lg-2"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <img
                  src="https://source.unsplash.com/random"
                  alt
                  class="img-fluid rounded w-100 img-cover-center"
                  style="height:350px;"
                />
              </div>
            </div>
          </div>
          <div
            class="col-lg-5 col-md-12 col-12"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <h3 class="section__title">{{title}}</h3>
            <form>
              <div class="form-group">
                <label for="serviceEvent">Выберите event</label>
                <select class="form-control" id="serviceEvent">
                  <option>Фуршет</option>
                  <option>Шведский стол</option>
                  <option>Кофе-брейк</option>
                  <option>Коктейль</option>
                  <option>Пикник</option>
                  <option>Гала ужин</option>
                  <option>Барбекю</option>
                </select>
              </div>
              <div class="form-group">
                <label for="serviceGuests">Количество гостей</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="serviceGuests"
                  min="20"
                  max="500"
                  value="20"
                  step="10"
                  v-model="guestsNumber"
                />
                <output for="serviceGuests" name="level">{{guestsNumber}}</output>
              </div>
              <div class="form-group">
                <label for="serviceName">Имя</label>
                <input type="text" class="form-control" id="serviceName" />
              </div>
              <div class="form-group">
                <label for="serviceTel">Телефон</label>
                <masked-input
                  mask="\+\998 (91) 111-11-11"
                  type="tel"
                  placeholder="Phone"
                  class="form-control"
                  id="serviceTel"
                />
              </div>
              <div class="form-group">
                <label for="serviceAddress">Адрес</label>
                <input type="text" class="form-control" id="serviceAddress" />
              </div>
              <div class="form-group">
                <label for="serviceMessage">Сообщение</label>
                <textarea class="form-control" id="serviceMessage" style="min-height:5.5rem;"></textarea>
              </div>
              <button class="btn btn-action">Отправить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import MaskedInput from "vue-masked-input";
import { mask } from "vue-the-mask";
export default {
  props: ["title"],
  components: { TheMask, MaskedInput },
  directives: { mask },
  data() {
    return {
      guestsNumber: 20
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
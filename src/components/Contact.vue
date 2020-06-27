<template>
  <div class="section" id="contact">
    <div class="container">
      <h3 class="section__title">{{title}}</h3>
      <div class="section__body">
        <div class="row">
          <div class="col">
            <div class="card mb-3" style="max-height: 600px">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="@/assets/images/profile_foto.jpg" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body d-flex flex-column justify-content-between h-100">
                    <div class="card-top">
                      <h5 class="card-title">Уйгун Турсунходжаев</h5>
                      <div class="cart-text">
                        <p
                          class="cart-text"
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, recusandae nulla. Inventore, sequi odio necessitatibus hic consequuntur aliquid ducimus deserunt ipsum? Doloribus ratione quos pariatur debitis quae nulla aliquam mollitia!</p>
                        <p
                          class="cart-text"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas sapiente error quisquam ea ex et ullam nobis rem quae suscipit nulla, quam sed nemo, iste commodi voluptatem eveniet alias!</p>
                      </div>
                    </div>
                    <div class="card-bottom d-flex justify-content-between">
                      <span class="d-flex align-items-center">
                        <i class="fa fa-mobile mr-2"></i>+998951440444
                      </span>
                      <span class="d-flex align-items-center">
                        <i class="fa fa-envelope mr-2"></i>info@avantage.events
                      </span>
                      <span class="d-flex align-items-center">
                        <i class="fa fa-mobile mr-2"></i>+998909870101
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-6">
            <img
              src="@/assets/images/profile_foto.jpg"
              alt
              class="img-fluid rounded"
              style="width:360px; height:510px;"
            />
          </div>
          <div class="col-lg-6">
            <h5>Уйгун Турсунходжаев</h5>
          </div>-->
        </div>
        <div class="row mt-5">
          <div
            class="col-lg-5"
            data-aos="fade-right"
            data-delay="50"
            data-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="section__form">
              <form>
                <div class="form-group">
                  <label for="contactName">Имя</label>
                  <input type="text" class="form-control" id="contactName" />
                </div>
                <div class="form-group">
                  <label for="contactTel">Телефон</label>
                  <masked-input
                    mask="\+\998 (91) 111-11-11"
                    type="tel"
                    placeholder="Phone"
                    class="form-control"
                    id="contactTel"
                  />
                </div>
                <div class="form-group">
                  <label for="contactMessage">Сообщение</label>
                  <textarea class="form-control" id="contactMessage" style="min-height:5rem;"></textarea>
                </div>
              </form>
            </div>
            <button class="btn btn-action mt-3">Отправить</button>
          </div>
          <div
            class="col-lg-7"
            data-aos="fade-left"
            data-delay="100"
            data-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <iframe
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5991.252232335131!2d69.27679643634403!3d41.33874282913863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b57296584bb%3A0xaf3198b9b9fbb534!2z0KPQt9Ct0LrRgdC_0L7QptC10L3RgtGA!5e0!3m2!1sru!2s!4v1592686723199!5m2!1sru!2s"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaskedInput from "vue-masked-input";
export default {
  props: ["title"],
  components: {
    MaskedInput
  },
  mounted() {
    document.addEventListener("aos:in:customEventName", ({ detail }) => {
      console.log(
        detail,
        "animation to display element with custom event started"
      );
    });
    document.addEventListener("aos:out:customEventName", ({ detail }) => {
      console.log(
        detail,
        "animation to hide element with custom event started"
      );
    });
  }
};
</script>

<style lang="scss" scoped>
#contact {
  background: $gray-100;
  .card-img {
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .map {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
  }
  .section__form {
    background: white;
    padding: 15px 25px;
    border-radius: 0.8rem;
    box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
  }
}
</style>
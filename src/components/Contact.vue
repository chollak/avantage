<template>
  <div class="section" id="contact">
    <div class="container">
      <h3 class="section__title">{{title}}</h3>
      <div class="section__body">
        <div class="row">
          <div class="col-lg-7">
            <div class="card mb-3" style="max-height: 600px">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="this.$unsplash" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Уйгун Турсунходжаев</h5>
                    <div class="cart-text">
                      <ul>
                        <li>+998951440444</li>
                        <li>+998909870101</li>
                        <li>info@avantage.events</li>
                      </ul>
                    </div>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p
              data-aos="fade-up"
              data-aos-offset="-50"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-id="customEventName"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam aliquam iure? Rem fuga non, facere ab hic provident officia laboriosam quasi voluptatem qui pariatur aperiam minus cupiditate, expedita nihil!</p>
            <p>
              Уйгун Турсунходжаев
              +998951440444
              +998909870101
              info@avantage.events
            </p>
          </div>
          <div class="col-lg-5">
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
export default {
  props: ["title"],
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
  // color: #fff;
  h3 {
    // color: #fff;
  }
  .card-img {
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .map{
    width: 100%;
    height: 400px;
  }
}
</style>
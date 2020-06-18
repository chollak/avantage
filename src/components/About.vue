<template>
  <div class="section" id="about">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div class="col-lg-6">
            <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
              <h3 class="section__title">{{title}}</h3>
              <div class="text">
                <p>Теперь, чтобы организовать деловое мероприятие, нужно по-настоящему много работать. При отсутствии специальных знаний в этой области лучше всего обратиться в специальную компанию, которая может предоставить целую команду профессионалов, которые готовы взяться за организацию проекта и могут выполнить его на 100%.</p>
                <p>AVANTAGE относится к таким компаниям, которые могут взять на себя задачу организации и проведения любого типа мероприятия, а также предоставить в аренду лучшее оборудование, позволяющее проводить качественные и интересные мероприятия.</p>
                <p>Мы готовы предоставить нашим клиентам полный спектр услуг, от разработки концепции до реализации и реализации мероприятий.</p>
                <p>Выставки, форумы, конференции, презентации, кейтеринг, организованные AVANTAGE, позволяют нашим Клиентам достигать своих целей и отмечены положительными отзывами участников и посетителей.</p>
                <p>Мы готовы эффективно применить наш опыт в организации любого формата деловых мероприятий в интересах вашей компании.</p>
              </div>
              <div class="action">
                <button
                  class="btn btn-action"
                  data-toggle="modal"
                  data-target="#portfolioModal"
                  @click="currentView = 'List'"
                >Портфолио</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="media d-flex flex-column">
              <div class="photos">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
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
              <div class="video">
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                  <source
                    src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Modal -->
    <div class="m-warpper">
      <div
        class="modal fade"
        id="portfolioModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header" style="border:none">
              <button
                class="btn btn-link text-dark back"
                v-show="currentView=='Single'"
                @click="setView('List')"
              >
                <i class="fa fa-arrow-left"></i>
              </button>
              <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <component :is="currentView" @setView="setView($event)"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/Portfolio/List";
import Single from "@/components/Portfolio/Single";
export default {
  props: ["title"],
  data() {
    return {
      currentView: "list"
    };
  },
  components: {
    List,
    Single
  },
  methods: {
    setView(view) {
      this.currentView = view;
    },
    toast() {
      const opt = {
        message: "Your action was done.",
        type: "default",
        duration: 1500
      };
      let instance = this.$toast.open(opt);
    }
  }
};
</script>

<style lang="scss" scoped>
$fs_section: 1rem;

#about {
  .content {
    .text {
      font-weight: 200;
    }
    .btn {
      font-size: $fs_section;
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
  .card {
    .card-img-top {
      height: 200px;
      object-position: center;
      object-fit: cover;
    }
    h6 {
      font-size: 1em;
    }
  }
  .modal-header {
    .close,
    .back {
      padding: 5px 15px;
      margin: 0;
    }
  }
}
</style>
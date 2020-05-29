<template>
  <div id="app">
    <!-- NAVBAR
    ================================================= -->
    <nav class="navbar navbar-expand-xl navbar-dark  navbar-togglable  fixed-top">
      <div class="container">

        <!-- Brand -->
        <a class="navbar-brand" href="index.html">
          <svg class="navbar-brand-svg" viewBox="0 0 245 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M0 0 L 20 10 L 0 20 Z" class="navbar-brand-svg-i" fill="currentColor"></path>
            <path d="M0 30 L 20 40 L 0 50 Z M20 45 L 0 55 L 20 65 Z M0 60 L 20 70 L 0 80 Z" fill="currentColor"></path>
            <text x="40" y="70" font-family="Arial, sans-serif" font-size="60" font-weight="bold" letter-spacing="-.025em" fill="currentColor">incline.</text>
          </svg>
        </a>
  
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">

          <!-- Social -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item-divider">
              <span class="nav-link">
                <span></span>
              </span>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fab fa-github"></i> 
                <span class="d-xl-none ml-2">
                  Github
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fab fa-twitter"></i> 
                <span class="d-xl-none ml-2">
                  Twitter
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fab fa-instagram"></i> 
                <span class="d-xl-none ml-2">
                  Instagram
                </span>
              </a>
            </li>
          </ul>

          <!-- Links -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarWelcome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Welcome
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarWelcome">
                <a class="dropdown-item " href="index.html">
                  Header: Image
                </a>
                <a class="dropdown-item " href="index-header-carousel.html">
                  Header: Carousel
                </a>
                <a class="dropdown-item " href="index-header-parallax.html">
                  Header: Parallax
                </a>
                <a class="dropdown-item " href="index-header-video.html">
                  Header: Video
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarLandings" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Landings
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarLandings">
                <a class="dropdown-item " href="app.html">
                  App
                </a>
                <a class="dropdown-item " href="company.html">
                  Company
                </a>
                <a class="dropdown-item " href="fullpage.html">
                  Fullpage
                </a>
                <a class="dropdown-item " href="product.html">
                  Product
                </a>
                <a class="dropdown-item " href="real-estate.html">
                  Real estate
                </a>
                <a class="dropdown-item " href="restaurant.html">
                  Restaurant
                </a>
                <a class="dropdown-item " href="service.html">
                  Service
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarPages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarPages">
                <li class="dropright">
                  <a class="dropdown-item dropdown-toggle" href="#" id="pagesBlog" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Blog
                  </a>
                  <div class="dropdown-menu" aria-labelledby="pagesBlog">
                    <a class="dropdown-item " href="blog.html">
                      Blog
                    </a>
                    <a class="dropdown-item " href="blog-post.html">
                      Blog: Post
                    </a>
                  </div>
                </li>
                <li class="dropright">
                  <a class="dropdown-item dropdown-toggle" href="#" id="pagesShop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Shop
                  </a>
                  <div class="dropdown-menu" aria-labelledby="pagesShop">
                    <a class="dropdown-item " href="shop.html">
                      Shop
                    </a>
                    <a class="dropdown-item " href="shop-item.html">
                      Shop: Item
                    </a>
                    <a class="dropdown-item " href="cart.html">
                      Shop: Cart
                    </a>
                    <a class="dropdown-item " href="checkout.html">
                      Shop: Checkout
                    </a>
                  </div>
                </li>
                <li>
                  <a class="dropdown-item " href="about.html">
                    About
                  </a>
                </li>
                <li>
                  <a class="dropdown-item " href="contact.html">
                    Contact
                  </a>
                </li>
                <li>
                  <a class="dropdown-item " href="faq.html">
                    FAQ
                  </a>
                </li>
                <li>
                  <a class="dropdown-item " href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li>
                  <a class="dropdown-item " href="sign-in.html">
                    Sign In
                  </a>
                </li>
                <li>
                  <a class="dropdown-item " href="sign-up.html">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a class="dropdown-item " href="404.html">
                    404
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarComponents" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Components
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarComponents">
                <a class="dropdown-item " href="components-theme.html">
                  Theme
                </a>
                <a class="dropdown-item " href="components-bootstrap.html">
                  Bootstrap
                </a>
              </div>
            </li>
            <li class="nav-item ">
              <a href="documentation.html" class="nav-link">
                Documentation
              </a>
            </li>
            <li class="nav-item-divider">
              <span class="nav-link">
                <span></span>
              </span>
            </li>
            <li class="nav-item">
              <a href="https://themes.getbootstrap.com/product/incline-landing-page-set/" target="_blank" class="nav-link">
                Purchase now
              </a>
            </li>
          </ul>

        </div> <!-- / .navbar-collapse -->
  
      </div> <!-- / .container -->    
    </nav>

    <!-- HERO
    ================================================== -->
    <section class="section section-top section-full">

      <!-- Video -->
      <div class="bg-video">
        <video class="bg-video-media" autoplay playsinline muted>
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
          HTML video is not supported by your browser.
        </video>
      </div>

      <!-- Overlay -->
      <div class="bg-overlay"></div>

      <!-- Triangles -->
      <div class="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-left"></div>
      <div class="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right"></div>

      <!-- Content -->
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8 col-lg-7">

            <!-- Preheading -->
            <p class="font-weight-medium text-center text-xs text-uppercase text-white text-muted" data-toggle="animation" data-animation="fadeUp" data-animation-order="0" data-animation-trigger="load">
              by Simpleqode
            </p>
            
            <!-- Heading -->
            <h1 class="text-white text-center mb-4" data-toggle="animation" data-animation="fadeUp" data-animation-order="1" data-animation-trigger="load">
              Landing pages for any occasion
            </h1>

            <!-- Subheading -->
            <p class="lead text-white text-muted text-center mb-5" data-toggle="animation" data-animation="fadeUp" data-animation-order="2" data-animation-trigger="load">
              Incline is set of landing and support pages aimed at helping companies promote new products and business launches.
            </p>

            <!-- Button -->
            <p class="text-center mb-0" data-toggle="animation" data-animation="fadeUp" data-animation-order="3" data-animation-trigger="load">
              <a href="https://themes.getbootstrap.com/product/incline-landing-page-set/" target="_blank" class="btn btn-outline-primary text-white">
                Purchase now
              </a>
            </p>

          </div>
        </div> <!-- / .row -->
      </div> <!-- / .container -->

    </section>

    
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/custom.scss";
@import url("https://yevgenysim.github.io/incline/assets/css/theme.min.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// .arrow{
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   color: $red;
//   z-index: 5;
//   font-size: 2rem;
//   animation: arrow-animate 1s infinite ease-in-out;
// }

// @keyframes arrow-animate {
//   0%{
//     bottom: 0px;
//   }
//   50%{
//     bottom: 10px;
//   }
//   100%{
//     bottom: 0px;
//   }
// }
// header {
//   position: relative;
//   background-color: black;
//   height: 100vh;
//   min-height: 25rem;
//   width: 100%;
//   overflow: hidden;
// }
// header video {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   min-width: 100%;
//   min-height: 100%;
//   width: auto;
//   height: auto;
//   z-index: 0;
//   -ms-transform: translateX(-50%) translateY(-50%);
//   -moz-transform: translateX(-50%) translateY(-50%);
//   -webkit-transform: translateX(-50%) translateY(-50%);
//   transform: translateX(-50%) translateY(-50%);
// }

// header .container {
//   position: relative;
//   z-index: 2;
// }

// header .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: #fff;
//   opacity: 0.5;
//   z-index: 1;
// }

// @media (pointer: coarse) and (hover: none) {
//   header {
//     background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
//       no-repeat center center scroll;
//   }
//   header video {
//     display: none;
//   }
// }

// .logo {
//   max-width: 400px;
//   width: 100%;
//   height: auto;
// }

// .nav a {
//   color: $red;
// }
</style>

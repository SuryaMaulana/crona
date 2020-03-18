<template>
  <div id="app">
    <div class="page">
      <div class="page-main">
        <div class="hold-transition layout-top-nav">
          <div class="wrapper">
            <!-- Header -->
            <div class="header hor-header mt-0">
              <div class="container">
                <div class="d-flex">
                  <a class="animated-arrow hor-toggle horizontal-navtoggle"><span></span></a>
                  <div>
                    <a href="#" class="header-brand1">Covid19 Indonesia</a>
                  </div>
                  <!-- Logo -->
                  <div class="d-flex ml-auto header-right-icons header-search-icon">
                    <nav class="horizontalMenu clearfix">
                      <ul class="horizontalMenu-list">
                        <li aria-haspopup="true">
                          <router-link to="/"><i class="fa fa-home"></i><b>HOME</b></router-link>
                        </li>
                        <li aria-haspopup="true">
                          <router-link to="/hotline"><i class="fa fa-phone"></i><b>HOTLINE CORONA</b></router-link>
                        </li>
                        <li aria-haspopup="true">
                          <router-link to="/news"><i class="fa fa-newspaper"></i><b>BERITA TERKINI</b></router-link>
                        </li>
                        <li aria-haspopup="true">
                          <router-link to="/kontak"><i class="fa fa-envelope"></i><b>KONTAK</b></router-link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Header -->
            <!-- MObile Header -->
            <div class="mobile-header hor-mobile-header">
              <div class="container">
                <div class="d-flex">
                  <a class="animated-arrow hor-toggle horizontal-navtoggle">
                    <span></span>
                  </a>
                  <a href="#" class="header-brand">
                    <span class="header-brand-img desktop-logo mobile-light">Covid19 Indonesia</span>
                  </a>
                  <div class="d-flex order-lg-2 ml-auto header-right-icons">
                    <div class="dropdown d-md-flex">
                      <nav class="horizontalMenu clearfix">
                        <ul class="horizontalMenu-list">
                          <li aria-haspopup="true">
                            <router-link to="/"><b>HOME</b></router-link>
                          </li>
                          <li aria-haspopup="true">
                            <router-link to="/hotline"><b>HOTLINE CORONA</b></router-link>
                          </li>
                          <li aria-haspopup="true">
                            <router-link to="/news"><b>BERITA TERKINI</b></router-link>
                          </li>
                          <li aria-haspopup="true">
                            <router-link to="/kontak"><b>KONTAK</b></router-link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Mobile Header -->
            <div class="container app-content">
              <div>
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-4">
      <div class="footer border-top-0 footer-1">
        <div class="container">
          <div class="row align-items-center">
            <div class="social">
              <ul class="text-center">
                <li>
                  <a href="https://instagram.com/tulungagungcyberlink" class="social-icon" target="_blank"><i class="fa fa-instagram"></i></a>
                </li>
                <li>
                  <a class="social-icon" href="https://github.com/TulungagungCyberLink/covid19-webinterface" target="_blank"><i class="fa fa-github"></i></a>
                </li>
              </ul>
            </div>
            <div class="col-lg-12 col-sm-12 mt-3 mt-lg-0 text-center">
              Data Provided by <a href="https://kawalcorona.com/" target="_blank">Kawal Corona</a>. Made with <i class="fa fa-heart"></i> by <a href="https://instagram.com/surya_maulana70" target="_blank">Surya1337</a> & <a href="https://instagram.com/alfanjauhari_" target="_blank">Alfan Jauhari</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
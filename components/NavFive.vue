<template>
  <div class="site_header__header_five_wrap">
    <div class="topbar-three topbar-five">
      <div class="container-box">
        <div class="topbar_three_content clearfix">
          <div class="logo-box-three logo-box-five float-left">
            <a href="/" class="main-nag__logo">
              <img src="/assets/images/logo.png" alt="Ten Eighteen LLC" style="width: 250px;">
            </a>
          </div>

          <div class="topbar_three_nav_box float-left">
            <nav :class="`header-navigation stricky clearfix ${sticky ? 'stricked-menu stricky-fixed' : ''}`">
              <div class="container">
                <div class="main_nav_header_three_content five clearfix">
                  <div class="mobile_menu_icon_three five">
                    <a href="#" class="side-menu__toggler">
                      <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
                    </a>
                  </div>
                  <div class="main-nav__main-navigation five float-left">

                    <ul class=" main-nav__navigation-box">
                      <li class="dropdown" v-for="nav in navigations">
                        <a :href="nav.elementId" v-scroll-to="nav.elementId">
                          {{ nav.description }}
                        </a>
                      </li>
                    </ul>

                  </div>

                </div>
              </div>
            </nav>
          </div>

        </div>
      </div>
    </div>

    <nav class="mobile-nav__container" :style="`display: ${mobileToggle ? 'block' : 'none'}`">
      <!-- content is loading via js -->

      <ul class="main-nav__navigation-box">
        <li class="dropdown" v-for="nav in navigations">
          <a :href="nav.elementId"
             v-scroll-to="nav.elementId">
            {{ nav.description }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavFive",
    data(){
      return {
        sticky: false,
        mobileToggle: false,
        navigations: [
        ],
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {

      handleScroll() {
        if (window.scrollY > 70) {
          this.sticky = true
        } else if (window.scrollY < 70) {
          this.sticky = false
        }
      },
    }
  }
</script>

<style scoped>

</style>

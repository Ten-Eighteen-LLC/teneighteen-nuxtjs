<template>
  <section class="banner-section banner-three">

    <div class="banner-carousel-three owl-theme owl-carousel">
      <no-ssr>
        <carousel :items="1" :autoplay="true" :nav="false">
      <!-- Slide Item -->
      <div class="slide-item">
        <div class="image-layer" style="background-image: url(/assets/images/ricefield2.png);">
        </div>
        <div class="auto-container">
          <div class="content-box">
            <div class="content">
              <div class="inner">
                <div class="big_text">
                  <h2>Imagine a world with affordable, nutritious food for all.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Slide Item -->
      <div class="slide-item">
        <div class="image-layer" style="background-image: url(/assets/images/ricefield.png);">
        </div>
        <div class="auto-container">
          <div class="content-box">
            <div class="content">
              <div class="inner">
                <div class="big_text">
                  <h2>Ponder a future where affordable, nutrient-dense food is available to everyone</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>

    export default {
      name: "SliderThree",
      data(){
          return {

          }
      }
    }
</script>

<style scoped>
.big_text h2{
  font-size: 50px!important;
  line-height: 80px!important;
}
</style>

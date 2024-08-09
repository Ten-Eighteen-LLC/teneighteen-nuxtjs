<template>
  <div class="page-wrapper">
    <nuxt />
    <SearchPopup />
  </div>
</template>

<script>
import SearchPopup from "../components/SearchPopup";
export default {
  components: {
    SearchPopup,
  },
  head() {
    return {
      title: "Agrikol - Vue Nuxt Template for Agriculture Farm & Farmers",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style></style>

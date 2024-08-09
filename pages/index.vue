<template>
  <div>
    <NavFive />
    <SliderThree />
    <AboutUs />
    <OurModel />

    <AgricultureSolutions />
    <AgriProcess />

    <FooterTwo />
  </div>
</template>

<script>

import NavFive from "../components/NavFive";
import SliderThree from "../components/SliderThree";
import AboutUs from "../components/AboutUs";
import OurModel from "../components/OurModel";

import AgricultureSolutions from "../components/AgricultureSolutions";
import AgriProcess from "../components/AgriProcess";
import AgriProduct from "../components/AgriProduct";
import AgriBenefits from "../components/AgriBenefits";

import AquacultureSolutions from "../components/AquacultureSolutions";
import AquaProcess from "../components/AquaProcess";
import AquaProduct from "../components/AquaProduct";
import AquaBenefits from "../components/AquaBenefits";

import FooterTwo from "../components/FooterTwo";

export default {
  components: {
    NavFive,
    SliderThree,
    AboutUs,
    OurModel,
    AgricultureSolutions,
	  AgriProcess,
    FooterTwo,
  },
  head(){
    return {
      title: "Ten Eighteen LLC  - Home"
    }
  }
}
</script>

<template>
  <q-page class="items-center">
    
    <div class="row flex flex-center q-mt-xl q-mb-sm">
        <img alt="JBear Creations" src="~assets/JBear_Logo_front_Orange.png" style="width: 25%;">
        <img alt="JBear Creations" src="~assets/JBear_Logo_Saw_Orange.png" style="width: 25%;" class="big-saw" @click="spin_saw">
        <img alt="JBear Creations" src="~assets/JBear_Logo_back_Orange.png" style="width: 25%;">
    </div>
    <div class="row justify-center">
      <div class="col-10 text-center">
        <h6 class="q-mt-none q-mb-md" style="font-family:'Splash';">Don't wait for that day to come, make it happen!</h6>
      </div>
    </div>
    <div class="row justify-evenly">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-10 text-center">
        <q-btn class="q-px-auto q-my-sm full-width" outline color="primary" href="https://guardianbob.github.io" target="_blank">
          About
          <q-tooltip class="bg-accent">Yo!</q-tooltip>
        </q-btn>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-10 text-center">
      <q-btn class="q-px-auto q-my-sm full-width" outline color="primary" to="/workshop">
        Workshop
        <q-tooltip class="bg-accent">Get ready for awesome!</q-tooltip>
      </q-btn>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-10 text-center">
      <q-btn class="q-px-auto q-my-sm full-width" outline color="primary" to="/coding">
        Coding Den
        <q-tooltip class="bg-accent">I'm just getting started...</q-tooltip>
      </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify, colors, setCssVar } from "quasar";
import { gsap } from "gsap";

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      savedTheme: 'dark_theme',
      saw: 0,

    };
  },
  methods: {
    async spin_saw() {
      console.log("spin!")
      this.saw = this.saw - 3600
      gsap.to(".big-saw", {
        duration: 1,
        rotation: this.saw
      });
    },

  },
  mounted() {
  },
  
})
</script>
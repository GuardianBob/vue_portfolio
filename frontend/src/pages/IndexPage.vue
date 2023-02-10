<template>
  <q-page class="flex flex-center">
    <div class="row flex flex-center q-mt-lg">
        <img alt="JBear Creations" src="~assets/JBear_Logo_front_Orange.png" style="width: 25%;">
        <img alt="JBear Creations" src="~assets/JBear_Logo_Saw_Orange.png" style="width: 25%;" class="big-saw" @click="spin_saw">
        <img alt="JBear Creations" src="~assets/JBear_Logo_back_Orange.png" style="width: 25%;">
    </div>
    <div>
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
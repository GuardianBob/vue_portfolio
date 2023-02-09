<template>
  <q-page class="flex flex-center">
    <div class="row flex flex-center q-mt-lg">
      <div class="col text-center q-px-sm logo">
        <img
          alt="Quasar logo"
          src="~assets/JBear_Logo_Wide_Orange.png"
          style="width: 80%; transform: scale(.1,.1);"
        >
      </div>
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
    };
  },
  methods: {

  },
  mounted() {
    gsap.to(".logo", {
      duration: 1,
      scale:10,
      rotationX: 720      
    });
  },
  
})
</script>

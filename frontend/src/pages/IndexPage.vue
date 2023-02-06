<template>
  <q-page class="flex flex-center">
    <div class="row flex flex-center q-mt-lg">
      <img
        alt="Quasar logo"
        src="~assets/JBear_Logo_Wide_Orange.svg"
        style="width: 80%;"
      >
    </div>
    <div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify, colors, setCssVar } from "quasar";


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
  },
  
})
</script>

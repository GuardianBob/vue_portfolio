<template>
  <q-page class="flex flex-center">
    <div class="row flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/JBear_Logo_Wide_Orange.svg"
        style="width: 80%;"
      >
    </div>
    <div>
      <q-btn color="primary" @click="set_light">Switch</q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify, colors, setCssVar } from "quasar";


export default defineComponent({
  name: 'IndexPage',
  data() {
    // const $q = useQuasar();
    // $q.dark.set(true);
    return {
      savedTheme: 'dark_theme',
    };
  },
  methods: {
    set_light() {
      this.savedTheme === 'light_theme' ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme'; // save the new theme in the localStorage
      localStorage.setItem('JBearSavedTheme', this.savedTheme);
      // colors.setBrand('light', '#DDD')
      // colors.setBrand('primary', '#33F')
      setCssVar('light', '#DDD')
      setCssVar('dark-page', '#FFF')

    }
  },
  mounted() {
  },
  
})
</script>

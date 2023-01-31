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
      <q-btn color="primary" @click="toggle_theme">Switch</q-btn>
      <h1>Test H1</h1>
      <h2>Test H2</h2>
      <h4>Test H4</h4>
      <a href="#">Test Link</a>
      <p>Test Text</p>
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
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('JBearSavedTheme'); // Check to see if there a saved theme

      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;
        console.log("theme: ", this.savedTheme)
        this.savedTheme === 'light_theme' ? this.set_light() : this.set_dark();
      } else {
        // So, try to get the browser default theme or make your own default
        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
          console.log("matching")
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme';
            console.log("dark");
          } else {
            this.savedTheme = 'light_theme';
            this.toggle_theme()
            console.log("light");
          }
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = this.appTheme;
        }
      }
      localStorage.setItem('JBearSavedTheme', this.savedTheme);
    }, // save the new theme in the localStorage

    toggle_theme() {
      this.savedTheme === 'light_theme' ? this.set_dark() : this.set_light(); // toggle theme
      localStorage.setItem('JBearSavedTheme', this.savedTheme);
      console.log("clicked")
    },

    set_dark() {
      const div = document.querySelector('body')
      div.classList.remove('body--light')
      div.classList.add('body--dark')
      this.savedTheme = 'dark_theme'
      console.log("dark");
    },

    set_light() {
      const div = document.querySelector('body')
      div.classList.remove('body--dark')
      div.classList.add('body--light')
      this.savedTheme = 'light_theme'
      console.log("light");
    }

  },
  mounted() {
    this.getAppTheme()
  },
  
})
</script>

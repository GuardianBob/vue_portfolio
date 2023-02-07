<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header>       -->
    <q-header style="background-color: #121212;">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <img alt="Quasar logo" src="~assets/JBear_Logo_Header.svg" style="width: 200px;" class="q-pt-xs">
        </q-toolbar-title>
        <q-toggle 
          v-model="toggle_value" 
          :color="toggle_color" 
          size="lg"
          @click="toggle_theme"
          checked-icon="fa-solid fa-moon"
          unchecked-icon="fa-solid fa-sun"
        />
        <div>v {{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, colors } from "quasar";
import EssentialLink from 'components/EssentialLink.vue'
import { version } from '../../package.json'

const linksList = [
  {
    title: 'Home',
    // caption: 'quasar.dev',
    icon: 'home',
    link: '/',
    target: '_self',
  },
  {
    title: 'Coding',
    caption: 'Software projects and demos',
    icon: 'mdi-file-code-outline',
    link: '/coding',
    target: '_self'
  },
  {
    title: 'Workshop',
    caption: 'Woodworking projects and more',
    icon: 'mdi-saw-blade',
    link: '/workshop',
    target: '_self'
  },
  {
    title: 'Github',
    caption: 'github.com/GuardianBob',
    icon: 'fa-brands fa-github',
    link: 'https://github.com/GuardianBob',    
  },
  {
    title: 'Instagram',
    caption: '@jbear_creations',
    icon: 'fa-brands fa-instagram',
    link: 'https://www.instagram.com/jbear_creations/'
  },
  {
    title: 'Twitter',
    caption: '@JBear_33',
    icon: 'fa-brands fa-twitter',
    link: 'https://twitter.com/JBear_33'
  },
]



export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    // const $q = useQuasar();
    // $q.dark.set(true);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      version: version,
      toggle_value: ref(false),
      toggle_color: ref("white"),
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
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
      const nav = document.querySelector('aside')
      div.classList.remove('body--light')
      div.classList.add('body--dark')
      // nav.classList.remove('body--light')
      nav.classList.add('q-drawer--dark')
      nav.classList.add('q-dark')
      this.savedTheme = 'dark_theme'
      this.toggle_color = 'grey-10'
      this.toggle_value = true
      console.log("dark");
    },

    set_light() {
      const div = document.querySelector('body')
      // const nav = document.querySelector('aside')
      // nav.classList.remove('q-drawer--dark q-dark')
      div.classList.remove('body--dark')
      div.classList.add('body--light')
      this.savedTheme = 'light_theme'
      this.toggle_color = 'white'
      this.toggle_value = false
      console.log("light");
    }

  },
  mounted() {
    this.getAppTheme()
  },
})
</script>

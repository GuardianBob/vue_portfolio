<template>
  <q-layout view="lHh Lpr lFf">
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import { version } from '../../package.json'

// const linksList = [
//   {
//     title: 'Home',
//     // caption: 'quasar.dev',
//     icon: 'home',
//     link: '/',
//     target: '_self'
//   },
//   {
//     title: 'Coding',
//     caption: 'Software projects and demos',
//     icon: 'mdi-file-code-outline',
//     link: '/',
//     target: '_self'
//   },
//   {
//     title: 'Workshop',
//     caption: 'Woodworking projects and more',
//     icon: 'mdi-saw-blade',
//     link: '/',
//     target: '_self'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/GuardianBob',
//     icon: 'fa-brands fa-github',
//     link: 'https://github.com/GuardianBob',    
//   },
//   {
//     title: 'Instagram',
//     caption: '@jbear_creations',
//     icon: 'fa-brands fa-instagram',
//     link: 'https://www.instagram.com/jbear_creations/'
//   },
//   {
//     title: 'Twitter',
//     caption: '@JBear_33',
//     icon: 'fa-brands fa-twitter',
//     link: 'https://twitter.com/JBear_33'
//   },
// ]

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      // leftDrawerOpen,
      version: version,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }, 
  mounted() {
    console.log("Layout Mounted!")
  }
})
</script>

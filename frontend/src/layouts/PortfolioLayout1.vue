<template>
  <q-layout view="lHh Lpr lFf">
    <div id="app-inner" ref="appRef" :class="[savedTheme, { 'enable-focus-style': isAnyFocus }]" @click="isAnyFocus = false"
    @keyup.tab="isAnyFocus = true">
      
        <div class="circle-cursor circle-cursor-outer" ref="circleCursorOuter"></div>
        <div class="circle-cursor circle-cursor-inner" ref="circleCursorInner"></div>
        
        <!-- start preloader-->
        <div class="preloader" ref="preloader">
          <div class="preloader-content">
            <div class="logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 199">
                <path
                d="M0.720001 8.91999V0.855993H58.32L169.488 190.648V199H112.176L0.720001 8.91999ZM114.768 73.144V0.855993H169.488V166.744L114.768 73.144ZM0.720001 32.824L55.44 126.424V199H0.720001V32.824Z" />
              </svg>
            </div>
            <div class="loading-bar">
              <span class="loading-bar-progress"></span>
            </div>
          </div>
        </div>
        <!-- end preloader-->
      <q-header>
      <HeaderNav />
      <!-- <q-toolbar>
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

        <div>v{{ version }}</div>
      </q-toolbar> -->
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          HeaderNav
        </q-item-label>

        <HeaderNav
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container> -->
  </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderNav from 'components/HeaderNav.vue'
import { version } from '../../package.json'
import { animationsMixin } from 'components/mixins'
// import 'src/scripts/plugins.min.js'

const linksList = [
  {
    title: 'Home',
    // caption: 'quasar.dev',
    icon: 'home',
    link: '/',
    target: '_self'
  },
  {
    title: 'Coding',
    caption: 'Software projects and demos',
    icon: 'mdi-file-code-outline',
    link: '/',
    target: '_self'
  },
  {
    title: 'Workshop',
    caption: 'Woodworking projects and more',
    icon: 'mdi-saw-blade',
    link: '/',
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
  mixins: [animationsMixin],
  components: {
    HeaderNav
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      version: version,
      toggleLeftDrawer () {savedTheme
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      // flag to toggle focus style class
      isAnyFocus: false,
      // the date my career started (change to yours)
      careerStartDate: 2002,
      // the date copyright started (change to yours)
      copyrightStartDate: 2022,
      // for the template theme
      appTheme: 'light_theme',
      savedTheme: null,
      // flag to toggle the preloader
      isPreloading: true,
      // toast notifications array
      notifications: [],
      // manage loading spinner status
      ajaxLoading: [],
    }
  },

  methods: {
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef;
      const outer = this.$refs.circleCursorOuter;
      const inner = this.$refs.circleCursorInner; // return if disabled

      if (!outer || !inner) {
        return;
      }

      app.addEventListener('mousemove', e => {
        // make the circles follow the cursor
        outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
        inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`); // add link hover style

        e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover') ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
      });
      app.addEventListener('click', () => {
        // add pulse effect on click
        inner.classList.add('cursor-click-effect');
        setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
      });
    },

    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('nafieSavedTheme'); // Check to see if there a saved theme

      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;
      } else {
        // So, try to get the browser default theme or make your own default
        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme';
          } else {
            this.savedTheme = 'light_theme';
          }
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = this.appTheme;
        }
      } // save the new theme in the localStorage


      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // detect the theme changes
    changeAppTheme() {
      this.savedTheme === 'light_theme' ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme'; // save the new theme in the localStorage

      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },
    // preloader screen
    animPreloaderScreen() {
      let count = 0;
      const preloader = this.$refs.preloader;

      if (!preloader) {
        return;
      }

      const preloaderContent = preloader.querySelector(".preloader-content");
      const imgs = [...document.images];
      const imgsLength = imgs.length;

      const hidePreloader = () => {
        preloader.setAttribute("style", "--loading-percentage: 100%");
        gsap.timeline().set(".hide-in-preloading", {
          autoAlpha: 1
        }).to(preloaderContent, {
          delay: 0.5,
          autoAlpha: 0
        }).to(preloader, {
          y: "-100%",
          duration: 1,
          ease: "expo.in"
        }, "-=0.5").set(preloader, {
          autoAlpha: 0
        });
      };

      const imgLoaded = () => {
        count++;
        this.loadingPercentage = 100 / imgsLength * count << 0;
        preloader.setAttribute("style", `--loading-percentage: ${this.loadingPercentage}%`);

        if (count === imgsLength) {
          hidePreloader();
        }
      };

      if (imgsLength) {
        // setup preloader indicator
        imgs.forEach(img => {
          const tImg = new Image();
          tImg.onload = imgLoaded;
          tImg.onerror = imgLoaded;
          tImg.src = img.src;
        });
      } else {
        hidePreloader();
      }
    },

    // initialize animation effects
    initAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      /* back to top scroll indicator */

      this.animBackTopScrollIndicator();
      /* statistics items */

      this.animStatisticsItems();
      /* section text box */

      this.animSectionTextBox();
      /* about image */

      this.animAboutImage();
      /* skills items */

      this.animSkillsItems();
      /* experience items timeline */

      this.animExperienceItemsTimeline();
      /* testimonials section title */

      this.animTestimonialsSectionTitle();
      /* testimonials items */

      this.animTestimonialsItems();
      /* contact info */

      this.animContactInfo();
      /* contact form */

      this.animContactForm();
    },

    // back to top scroll indicator
    animBackTopScrollIndicator() {
      const backTopBtn = this.$refs.scrollTopBtn;

      if (!backTopBtn) {
        return;
      }

      const showAt = backTopBtn.getAttribute('data-show-at');
      const backTopBtnPath = backTopBtn.querySelector("path");
      const backTopBtnPathLength = backTopBtnPath.getTotalLength();
      gsap.from(backTopBtn, {
        ease: "none",
        duration: 0.3,
        autoAlpha: 0,
        y: 10,
        scrollTrigger: {
          trigger: "#app-inner",
          start: `${showAt}px top`,
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      });
      gsap.set(backTopBtnPath, {
        strokeDasharray: backTopBtnPathLength,
        strokeDashoffset: backTopBtnPathLength,
        scrollTrigger: {
          trigger: "#app-inner",
          start: `${showAt}px top`,
          end: "bottom bottom",
          onUpdate: self => backTopBtnPath.style.strokeDashoffset = backTopBtnPathLength - self.progress * backTopBtnPathLength
        }
      });
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection; // return if disabled

      if (!parent || !parent.getAttribute('data-paneffect')) {
        return;
      }

      const layer1 = parent.querySelectorAll('.layer')[0];
      const layer2 = parent.querySelectorAll('.layer')[1];
      parent.addEventListener('mousemove', e => {
        const x = (e.x - parent.getBoundingClientRect().x) / parent.offsetWidth * 100;
        const y = (e.y - parent.getBoundingClientRect().y) / parent.offsetHeight * 100;
        parent.classList.add('parallax-animation');
        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
      });
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset; // check for current scroll position to minimize the header

      this.isHeaderBig = scrollPosition >= this.startMinimizingHeaderAt ? false : true; // check for current scroll position to toggle the header

      this.isHeaderHidden = scrollPosition > 100 && scrollPosition > this.lastScrollPosition ? true : false;
      this.lastScrollPosition = scrollPosition;
    },

    // scroll to top
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    },

    initializeTilt() {
      const portfolioItems = this.$refs.portfolioItems; // return if disabled

      if (!portfolioItems) {
        return;
      }

      VanillaTilt.init(portfolioItems.querySelectorAll('.portfolio-item'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    },

  },
  created() {
    // get a theme to use
    this.getAppTheme();
  },
  mounted() {
    // /* preloader screen */
    // this.animPreloaderScreen(); // initialize animation effects

    // window.addEventListener('load', () => this.initAnimation());

    if (window.innerWidth >= 992) {
      // initialize circle cursor
      this.initCircleCursor(); // apply pan effect hero image

      this.heroImgPanEffect(); // initialize VanillaTilt library in portfolio section

      this.initializeTilt();
    } // nav menu tab trap


    // this.navMenuTabTrap(); // scrolling options

    this.scrollingOptions();
    document.addEventListener('scroll', () => this.scrollingOptions()); // initialize popper.js plugin

    document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
      Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, 30]
          }
        }]
      });
    }); // get portfolio items

    // this.getPortfolioItems(); // init glightbox plugin

    // new GLightbox({
    //   autoplayVideos: false
    // }); // initialize the first displayed type of skills

    // this.initSkillsFirstType();
  },
})
</script>
<style>
@import 'src/styles/main.css';
@import 'src/styles/bootstrap.css';
@import 'src/styles/libraries.min.css';
</style>

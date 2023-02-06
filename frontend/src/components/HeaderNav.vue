<template>
  <div>
    <!-- start of header -->
    <header class="hide-in-preloading" :class="{
  'big-header': isHeaderBig,
  'small-header': !isHeaderBig,
  'header-hidden': isHeaderHidden
}">
      <div class="container">
        <!-- logo -->
        <div class="logo" title="Jesse">
          <h1><a href="index.html">Jesse</a></h1>
        </div>
    
        <!-- nav links -->
        <nav :class="{ 'menu-open': isNavMenuOpen }" ref="headerNav">
    
          <!-- nav menu links -->
          <ul class="nav-links">
            <li v-for="link in navLinks" :key="link.url">
              <a :href="link.url" @click="closeNavMenu">
                {{ link.title.en }}
              </a>
            </li>
          </ul>
    
          <!-- menu content in big devices (hidden in mobile/tablet) -->
          <div class="desktop-menu-content" tabindex="-1">
            <div class="container">
    
              <!-- about us -->
              <div class="about-us">
                <p>
                  I love making things simple, intuitive and expertly crafted!
                </p>
                <h4 class="block-title">
                  Product is the vital essence of what i do, truly great product is born of meticulous planning and process.
                  This is where i specialized!
                </h4>
              </div>
    
              <!-- contact info -->
              <ul class="contact-info row">
                <li class="col-lg-4">
                  <h4 class="block-title">Email</h4>
                  <ul>
                    <li><a href="mailto:info@nafie.com">info@nafie.com</a></li>
                    <li><a href="mailto:support@nafie.com">support@nafie.com</a></li>
                  </ul>
                </li>
                <li class="col-lg-4">
                  <h4 class="block-title">Address</h4>
                  <ul>
                    <li>
                      941 saqrqorish Road, alandalos,
                      <br>
                      grnata, wa 47122-4194
                    </li>
                  </ul>
                </li>
                <li class="col-lg-4">
                  <h4 class="block-title">Phone</h4>
                  <ul>
                    <li><a href="tel:02966202290">(02) 966 202 290</a></li>
                    <li><a href="tel:02966202291">(02) 966 202 291</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
        <!-- options icons -->
        <ul class="options-icons">
    
          <!-- lang switcher button -->
          <!-- <li class="lang-switcher">
                    <ul class="lang-switcher-menu">
                      <li class="menu-item menu-item-has-children">
                        <a href="#">En</a>
    
                        <ul class="sub-menu">
                          <li class="menu-item">
                            <a href="index.html">En</a>
                          </li>
                          <li class="menu-item">
                            <a href="rtl-index.html">ع</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> -->
    
          <!-- theme switcher button -->
          <li class="theme-switcher">
            <button :class="savedTheme" title="Change Mode" @click="changeAppTheme"></button>
          </li>
    
          <!-- hamburger button -->
          <li class="hamburger-btn" :class="{ 'open': isNavMenuOpen }">
            <button @click="toggleNavMenu" title="Toggle Side Menu" aria-label="Toggle Side Menu" ref="navMenuToggleBtn">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
    <!-- end of header -->
    
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar, Notify } from "quasar";

export default defineComponent({
  name: 'HeaderNav',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },

  data() {
    // const $q = useQuasar();
    // $q.dark.set(true);
    return {
      // flag to toggle nav menu
      isNavMenuOpen: false,
      // for minimizing the header on scrolling down
      startMinimizingHeaderAt: 100,
      isHeaderBig: true,
      // for toggling the header on scrolling down
      lastScrollPosition: 0,
      isHeaderHidden: false,
      savedTheme: null,
      // flag to toggle focus style class
      // isAnyFocus: false,
      navLinks: [{
        url: '#hero',
        title: {
          en: 'Home',
        }
      }, {
        url: '#about',
        title: {
          en: 'About',
        }
      }, {
        url: '#skills',
        title: {
          en: 'Skills',
        }
      }, {
        url: '#portfolio',
        title: {
          en: 'Portfolio',
        }
      }, {
        url: '#contact',
        title: {
          en: 'Contact',
        }
      }],
    };
  },

  methods: {
    // detect the theme changes
    changeAppTheme() {
      this.savedTheme === 'light_theme' ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme'; // save the new theme in the localStorage

      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];
      this.isNavMenuOpen = true;
      bodyEl.setAttribute('style', 'overflow-y: hidden;'); // set focus on nav menu

      this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];
      this.isNavMenuOpen = false;
      bodyEl.removeAttribute('style'); // set focus on nav menu toggle button

      this.$refs.navMenuToggleBtn.focus();
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav;
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      let firstTabStop;
      let lastTabStop;
      let isFirstTabStop;
      let isLastTabStop;
      document.addEventListener('keyup', e => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)].filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
          firstTabStop = visibleFocusableEls[0];
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length - 1];

          if (e.code === 'Tab') {
            if (e.shiftKey)
              /* shift + tab */ {
              // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus();
            } else
              /* tab */ {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus();
            } // close nav menu on Escape button press

          } else if (e.code === 'Escape') {
            this.toggleNavMenu();
          } // get current active element


          const activeEl = document.activeElement; // check if last item or not

          isLastTabStop = activeEl === lastTabStop ? true : false; // check if first item or not

          isFirstTabStop = activeEl === firstTabStop ? true : false;
        }
      });
    },
  },
  mounted() {
    this.navMenuTabTrap(); // scrolling options
  }, 
  
})
</script>

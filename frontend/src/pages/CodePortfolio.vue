<template>
  <!-- <q-page> -->
  <div id="app">
    <div id="app-inner" ref="appRef" :class="[savedTheme, { 'enable-focus-style': isAnyFocus }]" @click="isAnyFocus = false"
      @keyup.tab="isAnyFocus = true">
  
      <div class="circle-cursor circle-cursor-outer" ref="circleCursorOuter"></div>
      <div class="circle-cursor circle-cursor-inner" ref="circleCursorInner"></div>
  
      <!-- start preloader-->
      <!-- <div class="preloader" ref="preloader">
        <div class="row preloader-content justify-center">
          <div class="logo">
            <img src="src/assets/JBear_Logo_No_Letters_White.svg" alt="JBear Creations Logo">
          </div>
          <div class="loading-bar">
            <span class="loading-bar-progress"></span>
          </div>
        </div>
      </div> -->
      <!-- end preloader-->
  
      <!-- start of header -->
      <header class="hide-in-preloading" :class="{
  'big-header': isHeaderBig,
  'small-header': !isHeaderBig,
  'header-hidden': isHeaderHidden
}">
        <div class="container">
          <!-- logo -->
          <div class="logo" title="Jesse">
            <h1><a href="/">Jesse</a></h1>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel...
                  </h4>
                </div>
  
                <!-- contact info -->
                <ul class="contact-info row">
                  <li class="col-lg-4">
                    <h4 class="block-title">Email</h4>
                    <ul>
                      <li><a href="mailto:#">test@mail.com</a></li>
                      <li><a href="mailto:#">test@mail.com</a></li>
                    </ul>
                  </li>
                  <li class="col-lg-4">
                    <h4 class="block-title">Location</h4>
                    <ul>
                      <li>
                        Seattle
                        <br>
                        Washington
                      </li>
                    </ul>
                  </li>
                  <li class="col-lg-4">
                    <h4 class="block-title">Phone</h4>
                    <ul>
                      <li><a href="tel:#">555.555.5555</a></li>
                      <li><a href="tel:#">555.555.5555</a></li>
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
              <button @click="toggleNavMenu" title="Toggle Side Menu" aria-label="Toggle Side Menu"
                ref="navMenuToggleBtn">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </li>
          </ul>
        </div>
      </header>
      <!-- end of header -->
  
      <!-- start of hero section -->
      <div id="hero" class="hero-section hide-in-preloading" data-paneffect="true" ref="heroSection">
        <div class="hero-img">
          <div class="layer"><img src="src/assets/images/profile_02.png" alt="Jesse"></div>
          <div class="layer"><img src="src/assets/images/profile_02.png" alt="Jesse"></div>
        </div>
  
        <div class="hero-text">
          <h2>
            I Love to Build
            <br>
            Creator & Maker
          </h2>
          <a href="#contact" class="btn">Get In Touch</a>
        </div>
  
        <div class="social">
          <ul>
            <!-- <li>
                  <a href="#" target="_blank" rel="noreferrer" v-tooltip="{text: 'Facebook', dir: 'right'}">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li> -->
            <li>
              <a href="#" target="_blank" rel="noreferrer" v-tooltip="{ text: 'Twitter', dir: 'right' }">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" v-tooltip="{ text: 'LinkedIn', dir: 'right' }">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
<!--   
        <div class="scroll-down">
          <a href="#about" title="Scroll Down">Scroll</a>
        </div> -->
      </div>
      <!-- end of hero section -->
  
      <!-- start of statistics section -->
      <div id="statistics" class="statistics-section section">
        <div class="section-content">
          <div class="container">
            <ul class="statistics-items row">
              <li class="col-sm-12 col-md-6 col-lg-4">
                <a href="#experience">
                  <div class="icon">
                    <img src="src/assets/images/icons/emblem.png" alt="Years of Experience">
                  </div>
                  <div class="text">
                    <h3>{{ experienceYears }}+</h3>
                    <strong>Years of Experience</strong>
                  </div>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
              <li class="col-sm-12 col-md-6 col-lg-4">
                <a href="#portfolio">
                  <div class="icon">
                    <img src="src/assets/images/icons/check-mark.png" alt="Completed Projects">
                  </div>
                  <div class="text">
                    <h3>15+</h3>
                    <strong>Completed Projects</strong>
                  </div>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
              <li class="col-sm-12 col-md-6 col-lg-4">
                <a href="#testimonials">
                  <div class="icon">
                    <img src="src/assets/images/icons/happy.png" alt="Happy Clients">
                  </div>
                  <div class="text">
                    <h3>95+</h3>
                    <strong>Happy Clients</strong>
                  </div>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end of statistics section -->
  
      <!-- start of about section -->
      <div id="about" class="about-section section" tabindex="-1" ref="aboutSection">
        <div class="container">
          <div class="section-content row">
  
            <!-- about image -->
            <div class="about-img col-lg-6">
              <div class="layer"><img src="src/assets/images/profile_01.png" alt="Jesse"></div>
              <div class="layer"><img src="src/assets/images/profile_01.png" alt="Jesse"></div>
            </div>
  
            <!-- text box -->
            <div class="about-text col-lg-6">
              <div class="text-box-inline">
                <span class="subtitle">about me</span>
                <h2>
                  Need a Creative Product?
                  <br>
                  I can Help You!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                  tenetur error, harum nesciunt ipsum debitis quas aliquid.
                </p>
                <div class="btns-container">
                  <a href="#contact" class="btn btn-primary">Hire Me</a>
                  <a download href="#" class="btn btn-outline-light">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of about section -->
  
      <!-- start of skills section -->
      <div id="skills" class="skills-section section" tabindex="-1">
        <div class="container">
          <div class="section-content row">
  
            <!-- text box -->
            <div class="skills-text col-lg-6">
              <div class="text-box-inline">
                <span class="subtitle">my skills</span>
                <h2>
                  What My Programming
                  <br>
                  Skills Included?
                </h2>
                <p>
                  I develop simple, intuitive and responsive user interface that helps users get things done with less
                  effort and time with those technologies.
                </p>
                <div ref="skillsSwitchBtn" class="toggle-switch-btn">
                  <input id="skills-list" type="radio" value="skills" v-model="skillsType" checked>
                  <label for="skills-list" class="link-hover">Skills</label>
                  <input id="tools-list" type="radio" value="tools" v-model="skillsType">
                  <label for="tools-list" class="link-hover">Tools</label>
                  <span class="switcher-toggle" style="width: calc((100% - 8px) / 2);"></span>
                </div>
              </div>
            </div>
  
            <!-- skills items -->
            <div class="skills-items col-lg-6">
  
              <!-- skills list -->
              <ul v-staggerdelay="50" v-show="skillsType === 'skills'">
                <li tabindex="0" v-for="skill in skillsItems" :key="skill.title"
                  v-tooltip="{ text: skill.title, dir: 'top' }">
                  <div class="skill-icon">
                    <img :src="skill.imgUrl" :alt="skill.title">
                  </div>
                </li>
              </ul>
  
              <!-- tools list -->
              <ul v-staggerdelay="50" v-show="skillsType === 'tools'">
                <li tabindex="0" v-for="tool in toolsItems" :key="tool.title" v-tooltip="{ text: tool.title, dir: 'top' }">
                  <div class="skill-icon">
                    <img :src="tool.imgUrl" :alt="tool.title">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end of skills section -->
  
      <!-- start of experience section -->
      <div id="experience" class="experience-section section" tabindex="-1">
        <div class="container">
          <div class="section-content row">
  
            <!-- timeline -->
            <div class="col-lg-6">
              <div class="experience-timeline">
                <div class="timepath" ref="experienceTimepath">
                  <!-- <span class="line"></span> -->
                  <div v-for="line in experienceChunks" :key="line">
                    <!-- <span class="semicircle"></span> -->
                    <!-- <span class="line"></span> -->
                </div>
                </div>
  
                <ul class="timeline-items">
                  <li class="has-ultimate-tooltip" tabindex="0" v-for="item in experienceItems" :key="item">
                    <template v-if="Object.keys(item).length > 0">
                      <h3>{{ item.date }}</h3>
                      <div class="ultimate-tooltip">
                        <h4 class="ultimate-tooltip-title">{{ item.companyName.en }}</h4>
                        <h5 class="ultimate-tooltip-subtitle">{{ item.jobTitle.en }}</h5>
                        <p>{{ item.desc.en }}</p>
                      </div>
                      <div class="ultimate-tooltip-arrow"></div>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
  
            <!-- text box -->
            <div class="experience-text col-lg-6">
              <div class="text-box-inline">
                <span class="subtitle">experience</span>
                <h2>
                  {{ experienceYears }}+ Years of Experience
                  <br>
                  With Multiple Degrees and Certifications!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                  tenetur error, harum nesciunt ipsum debitis quas aliquid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of experience section -->
  
      <!-- start of portfolio section -->
      <div id="portfolio" class="portfolio-section section" tabindex="-1">
        <div class="container">
          <div class="section-content">
  
            <!-- portfolio items -->
            <ul class="portfolio-items has-works" ref="portfolioItems" data-no-works-msg="No works to load">
              <li>
                <!-- text box -->
                <div class="text-box-inline">
                  <span class="subtitle">my works</span>
                  <h2>
                    See My Works Which
                    <br>
                    Will Amaze You!
                  </h2>
                  <p>
                    We develop the best quality website that serves for the long-term. Well-documented, clean, easy and
                    elegant interface helps any non-technical clients.
                  </p>
                  <ul class="works-filter">
                    <li v-for="filter in filters" :key="filter">
                      <button :class="{ 'active': currentFilter === filter }" @click="filterPortfolioItems(filter)">
                        {{ filter }}
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
  
              <!-- start items list -->
              <li class="portfolio-item" v-for="work in filteredPortfolioItems" :key="work.title.en">
                <a :href="work.url" target="_blank" rel="noopener">
                  <div class="item-img">
                    <img :src="work.imgUrl" :alt="work.title.en">
                  </div>
                  <div class="item-details">
                    <h3 class="title">{{ work.title.en }}</h3>
                    <div class="date">{{ work.date.en }}</div>
                  </div>
                </a>
              </li>
              <!-- end items list -->
  
              <li>
                <button class="more" @click="getPortfolioItems">Load more works</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end of portfolio section -->
  
      <!-- start of testimonials section -->
      <!-- <div id="testimonials" class="testimonials-section section" tabindex="-1" ref="testimonialsSection">
            <div class="container">
              <div class="section-title">
                <span class="subtitle">testimonials</span>
                <h2 class="title">
                  Check What's My Clients
                  <br>
                  Say About Me
                </h2>
              </div>
            </div>
  
            <div class="section-content">
              <ul class="testimonials-items" v-staggerdelay="500">
                <li class="has-ultimate-tooltip"
                  tabindex="0"
                  v-for="item in testimonialsItems"
                  :key="item.quoteAuthor.en">
                  <div class="testimonials-item">
                    <div class="testimonial-author-img">
                      <img :src="item.imgUrl || 'src/assets/images/testimonials/anonymous-user.png'" :alt="item.quoteAuthor.en">
                    </div>
                    <div class="ultimate-tooltip">
                      <p>{{ item.quoteContent.en }}</p>
                      <h4 class="ultimate-tooltip-title">{{ item.quoteAuthor.en }}</h4>
                      <h5 class="ultimate-tooltip-subtitle">{{ item.jobTitle.en }}</h5>
                    </div>
                    <div class="ultimate-tooltip-arrow"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
      <!-- end of testimonials section -->
  
      <!-- start of contact section -->
      <div id="contact" class="contact-section section" tabindex="-1">
        <div class="container">
          <div class="section-content row">
  
            <!-- text box -->
            <div class="contact-text col-lg-6">
              <div class="text-box-inline">
                <span class="subtitle">contact</span>
                <h2>
                  Need a developer?
                  <br>
                  Let's talk.
                </h2>
                <p>
                  Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.
                </p>
              </div>
  
              <!-- contact info -->
              <!-- <ul class="contact-info">
                    <li>
                      <img src="src/assets/images/icons/address.png" alt="Address">
                      <div>
                        <strong>Address:</strong>
                        941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
                      </div>
                    </li>
                    <li>
                      <img src="src/assets/images/icons/phone.png" alt="Phone">
                      <div>
                        <strong>Phone:</strong>
                        <ul>
                          <li><a href="tel:02966202290" class="ltr-dir">(02) 966 202 290</a></li>
                          <li><a href="tel:02966202291" class="ltr-dir">(02) 966 202 291</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <img src="src/assets/images/icons/email.png" alt="Email">
                      <div>
                        <strong>Email:</strong>
                        <ul>
                          <li><a href="mailto:#">test@mail.com</a></li>
                          <li><a href="mailto:#">test@mail.com</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul> -->
  
              <!-- social links -->
              <ul class="social">
                <li>
                  <a href="#" target="_blank" rel="noreferrer" v-tooltip="{ text: 'Facebook', dir: 'top' }">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" v-tooltip="{ text: 'Twitter', dir: 'top' }">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" v-tooltip="{ text: 'LinkedIn', dir: 'top' }">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer" v-tooltip="{ text: 'YouTube', dir: 'top' }">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
  
            <!-- contact form -->
            <div class="col-lg-6">
              <form ref="contactForm" class="contact-form form-styled" action="contact_form.php"
                data-success-msg="Message sent successfully!"
                data-err-msg="Oops! something went wrong, please try again.">
                <div class="group">
                  <label>Name</label>
                  <div class="control has-prefix-icon">
                    <input type="text" name="name" placeholder="e.g. John Doe" minlength="3" required>
                    <i class="fa fa-user-circle prefix-icon" aria-hidden="true"></i>
  
                    <!-- validation errors messages -->
                    <div class="errors-msgs">
                      <input class="required" type="hidden" value="Name is required">
                      <input class="minLength" type="hidden" value="Name must be at least 3 characters">
                    </div>
                  </div>
                </div>
                <div class="group">
                  <label>Email</label>
                  <div class="control has-prefix-icon">
                    <input class="ltr-dir" type="email" inputmode="email" name="email"
                      placeholder="e.g. john.doe@gmail.com" required>
                    <i class="fa fa-envelope prefix-icon" aria-hidden="true"></i>
  
                    <!-- validation errors messages -->
                    <div class="errors-msgs">
                      <input class="required" type="hidden" value="Email is required">
                      <input class="invalid" type="hidden" value="Please enter a valid email address">
                    </div>
                  </div>
                </div>
                <div class="group phone-number">
                  <label>Phone <span class="optional">(Optional)</span></label>
                  <div class="control has-prefix-icon">
                    <input type="tel" inputmode="tel" name="phone" placeholder="Phone Number">
                    <i class="fa fa-phone prefix-icon" aria-hidden="true"></i>
  
                    <!-- validation errors messages -->
                    <div class="errors-msgs">
                      <input class="invalid" type="hidden" value="Please enter a valid Phone Number">
                    </div>
                  </div>
                </div>
                <div class="group">
                  <label>Message</label>
                  <div class="control has-prefix-icon">
                    <textarea name="message" placeholder="Write message..." required></textarea>
                    <i class="fa fa-comments prefix-icon" aria-hidden="true"></i>
  
                    <!-- validation errors messages -->
                    <div class="errors-msgs">
                      <input class="required" type="hidden" value="Message is required">
                    </div>
                  </div>
                </div>
                <div class="group">
                  <div class="control">
                    <button class="submit-btn btn btn-dark" type="button" @click="contactFormValidation">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- end of contact section -->
  
      <!-- start of footer -->
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <!-- logo -->
              <div class="logo" title="Nafie">
                <h1><a href="index.html">Jesse</a></h1>
              </div>
            </div>
            <div class="col-lg-6">
              &copy; {{ copyrightDate }} JBear Creations
              <!-- <a href="https://themeforest.net/user/webrouk/portfolio" target="_blank" rel="noopener">Webrouk</a> -->
            </div>
          </div>
        </div>
      </footer>
      <!-- end of footer -->
  
      <!-- scroll to top button -->
      <button class="scroll-to-top" ref="scrollTopBtn" title="Back To Top" data-show-at="50" @click="scrollToTop">
        <svg width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </button>
  
      <!-- toast notifications -->
      <ul class="notifications-container hide-in-preloading">
        <transition-group name="notify">
          <li v-for="notify of notifications" :key="notify.id" :id="notify.id"
            :class="['notification', 'show', notify.className, notify.time && 'timer']">
            {{ notify.msg }}
            <i class="fa fa-times link-hover" aria-hidden="true" @click="dismissNotify(notify.id)"></i>
            <span v-if="notify.time" class="disappearing-time"
              :style="{ 'animation-duration': notify.time + 'ms' }"></span>
          </li>
        </transition-group>
      </ul>
  
      <!-- ajax loading -->
      <div class="ajax-loading hide-in-preloading" v-show="isAjaxLoading">
        <span></span>
      </div>
    </div>
  </div>
  <!-- </q-page> -->
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify } from "quasar"
import APIService from "../../services/api"
import ParseWP from "../../services/parseWP"
import { experienceItems, skillsItems, toolsItems } from 'src/assets/info/info'
// import 'src/scripts/plugins.min'

var animationsMixin = {
  mounted() {
    /* preloader screen */
    this.animPreloaderScreen(); // initialize animation effects

    window.addEventListener('load', () => this.initAnimation());
  },

  methods: {
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

    // statistics items
    animStatisticsItems() {
      const statisticsItems = gsap.utils.toArray(".statistics-section .statistics-items li");

      if (!statisticsItems.length) {
        return;
      }

      const statisticsItemsTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".statistics-items",
          start: "top 82%",
          end: "top 50%",
          scrub: 0.3
        }
      });
      statisticsItems.forEach((el, i) => {
        const pos = i === 0 ? "" : "< +=0.2";
        statisticsItemsTL.from(el, {
          autoAlpha: 0
        }, pos).from(el, {
          y: 50
        }, "<");
      });
    },

    // section text box
    animSectionTextBox() {
      const textBoxes = gsap.utils.toArray(".text-box-inline");

      if (!textBoxes.length) {
        return;
      }

      textBoxes.forEach(box => {
        gsap.timeline({
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            end: "top 35%",
            scrub: 0.3
          }
        }).from(box.querySelector(".subtitle"), {
          autoAlpha: 0,
          top: 50
        }).from(box.querySelector("h2"), {
          autoAlpha: 0,
          y: 50
        }, "-=0.2").from(box.querySelectorAll("h2 ~ *"), {
          autoAlpha: 0,
          y: 50,
          stagger: 0.2
        }, "-=0.2");
      });
    },

    // about image
    animAboutImage() {
      if (!this.$refs.aboutSection) {
        return;
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section .about-img",
          start: "top 80%",
          end: "top 50%",
          scrub: 0.3
        }
      }).from(".about-section .about-img", {
        autoAlpha: 0,
        scale: 0.5
      });
    },

    // skills items
    animSkillsItems() {
      const skillsGroups = gsap.utils.toArray(".skills-section .skills-items ul");

      if (!skillsGroups.length) {
        return;
      }

      skillsGroups.forEach(group => {
        const skillsItemsTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".skills-section .skills-items",
            start: "top 85%",
            end: "top 35%",
            scrub: 0.3
          }
        });
        group.querySelectorAll("li").forEach((el, i) => {
          const pos = i === 0 ? "" : "< +=0.2";
          skillsItemsTL.from(el, {
            autoAlpha: 0
          }, pos).from(el, {
            y: 50
          }, "<");
        });
      });
    },

    // experience items timeline
    animExperienceItemsTimeline() {
      const experienceTimepath = this.$refs.experienceTimepath;
      const experienceItems = gsap.utils.toArray(".experience-timeline .timeline-items li");
      let experienceTimepathTL;
      let experienceItemsTL;
      let mainExperienceTL;

      if (experienceTimepath || experienceItems.length) {
        mainExperienceTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".experience-section .experience-timeline",
            start: "top 85%",
            end: "top 35%",
            scrub: 0.3
          }
        });
      }

      if (experienceTimepath) {
        const experienceTimepathItems = gsap.utils.toArray(".experience-timeline .timepath span");
        experienceTimepathTL = gsap.timeline();
        const docDir = document.documentElement.dir;
        const fromDir = docDir === "rtl" ? "reverse" : "from";
        const reverseDir = docDir === "rtl" ? "from" : "reverse";
        const coords = {
          x: {
            from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            reverse: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          },
          c: {
            from: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 75%, 0% 75%, 0% 75%, 0% 75%)",
            reverse: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 75%, 100% 75%, 100% 75%, 100% 75%)",
            to: {
              from: {
                st1: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 75% 25%, 75% 25%, 0% 25%)",
                st2: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 75% 75%, 75% 75%, 75% 25%, 0% 25%)",
                st3: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 75%, 75% 75%, 75% 25%, 0% 25%)"
              },
              reverse: {
                st1: "polygon(100% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 25% 25%, 25% 25%, 100% 25%)",
                st2: "polygon(100% 0%, 0% 0%, 0% 100%, 0% 100%, 25% 75%, 25% 75%, 25% 25%, 100% 25%)",
                st3: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 75%, 25% 75%, 25% 25%, 100% 25%)"
              }
            }
          }
        };
        const lineOdd = [...experienceTimepath.querySelectorAll(".line:nth-of-type(4n + 1)")];
        const lineEven = [...experienceTimepath.querySelectorAll(".line:nth-of-type(4n + 3)")];
        const semicircleOdd = [...experienceTimepath.querySelectorAll(".semicircle:nth-of-type(4n + 2)")];
        const semicircleEven = [...experienceTimepath.querySelectorAll(".semicircle:nth-of-type(4n + 4)")];
        experienceTimepathTL.set(experienceTimepathItems, {
          autoAlpha: 1
        }).set(lineOdd, {
          clipPath: coords.x[fromDir]
        }).set(lineEven, {
          clipPath: coords.x[reverseDir]
        }).set(semicircleOdd, {
          clipPath: coords.c[fromDir]
        }).set(semicircleEven, {
          clipPath: coords.c[reverseDir]
        });
        experienceTimepathItems.forEach(el => {
          if (lineOdd.includes(el) || lineEven.includes(el)) {
            experienceTimepathTL.to(el, {
              clipPath: coords.x.to
            });
          } else if (semicircleOdd.includes(el)) {
            experienceTimepathTL.to(el, {
              clipPath: coords.c.to[fromDir].st1
            }).to(el, {
              clipPath: coords.c.to[fromDir].st2
            }).to(el, {
              clipPath: coords.c.to[fromDir].st3
            });
          } else if (semicircleEven.includes(el)) {
            experienceTimepathTL.to(el, {
              clipPath: coords.c.to[reverseDir].st1
            }).to(el, {
              clipPath: coords.c.to[reverseDir].st2
            }).to(el, {
              clipPath: coords.c.to[reverseDir].st3
            });
          }
        });
        mainExperienceTL.add(experienceTimepathTL);
      }

      if (experienceItems.length) {
        experienceItemsTL = gsap.timeline();
        experienceItems.forEach(el => {
          experienceItemsTL.from(el, {
            autoAlpha: 0
          }).from(el, {
            scale: 0.2
          }, "<");
        });
        mainExperienceTL.add(experienceItemsTL, "< +=0.5");
      }
    },

    // testimonials section title
    animTestimonialsSectionTitle() {
      if (!this.$refs.testimonialsSection) {
        return;
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section .section-title",
          start: "top 90%",
          end: "top 40%",
          scrub: 0.3
        }
      }).from(".testimonials-section .section-title .subtitle", {
        autoAlpha: 0,
        top: 50
      }).from(".testimonials-section .section-title .title", {
        autoAlpha: 0,
        y: 50
      }, "< +=0.2");
    },

    // testimonials items
    animTestimonialsItems() {
      if (!this.$refs.testimonialsSection) {
        return;
      }

      const testimonialsItems = gsap.utils.toArray(".testimonials-section .testimonials-item");
      const testimonialsItemsTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section .testimonials-items",
          start: "top 75%",
          end: "top 25%",
          scrub: 0.3
        }
      });
      testimonialsItems.forEach((el, i) => {
        const pos = i === 0 ? "" : "< +=0.2";
        testimonialsItemsTL.from(el, {
          autoAlpha: 0
        }, pos).from(el, {
          scale: 0.2
        }, "<");
      });
    },

    // contact info
    animContactInfo() {
      const contactInfoItems = gsap.utils.toArray(".contact-section .contact-info li");

      if (!contactInfoItems.length) {
        return;
      }

      const contactInfoTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section .contact-info",
          start: "top 80%",
          end: "top 50%",
          scrub: 0.3
        }
      });
      contactInfoItems.forEach((el, i) => {
        const pos = i === 0 ? "" : "< +=0.2";
        contactInfoTL.from(el, {
          autoAlpha: 0
        }, pos).from(el, {
          y: 50
        }, "<");
      }); // social icons animation

      contactInfoTL.from(".contact-section .contact-text .social li", {
        autoAlpha: 0
      }).from(".contact-section .contact-text .social li", {
        y: 50,
        stagger: 0.2
      }, "<");
    },

    // contact form
    animContactForm() {
      if (!this.$refs.contactForm) {
        return;
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section .contact-form",
          start: "top 80%",
          end: "top 50%",
          scrub: 0.3
        }
      }).from(".contact-section .contact-form", {
        autoAlpha: 0,
        scale: 0.7
      });
    }

  }
}

export default defineComponent({

  /* ------------------------------------- */
    mixins: [animationsMixin],

    data() {
      return {
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
        // for minimizing the header on scrolling down
        startMinimizingHeaderAt: 100,
        isHeaderBig: true,
        // for toggling the header on scrolling down
        lastScrollPosition: 0,
        isHeaderHidden: false,
        // flag to toggle focus style class
        isAnyFocus: false,
        // flag to toggle nav menu
        isNavMenuOpen: false,
        // list of nav links to loop through it
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
        // flag to toggle between skills types in skills section
        skillsType: '',
        // list of skills items to loop through it
        // skillsItems: [{
        //   imgUrl: 'src/assets/images/skills/Python.png',
        //   title: 'Python'
        // }, {
        //   imgUrl: 'src/assets/images/skills/JavaScript.png',
        //   title: 'JavaScript'
        // }, {
        //   imgUrl: 'src/assets/images/skills/html5.png',
        //   title: 'HTML5'
        // }, {
        //   imgUrl: 'src/assets/images/skills/CSS3.png',
        //   title: 'CSS3'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Vue.png',
        //   title: 'Vue'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Django.png',
        //   title: 'Django'
        // }, {
        //   imgUrl: 'src/assets/images/skills/jQuery.png',
        //   title: 'jQuery'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Bootstrap.png',
        //   title: 'Bootstrap'
        // }, {
        //   imgUrl: 'src/assets/images/skills/React.png',
        //   title: 'React'
        // }, {
        //   imgUrl: 'src/assets/images/skills/SQL.png',
        //   title: 'SQL'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Firebase.png',
        //   title: 'Firebase'
        // }, {
        //   imgUrl: 'src/assets/images/skills/SASS.png',
        //   title: 'SASS'
        // }],
        // list of tools items to loop through it
        // toolsItems: [{
        //   imgUrl: 'src/assets/images/skills/Ajax.png',
        //   title: 'Ajax'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Postgres.png',
        //   title: 'Postgres'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Webpack.png',
        //   title: 'Webpack'
        // }, {
        //   imgUrl: 'src/assets/images/skills/git.png',
        //   title: 'Git (Github)'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Npm.png',
        //   title: 'Npm'
        // }, {
        //   imgUrl: 'src/assets/images/skills/command.png',
        //   title: 'Command Line'
        // }, {
        //   imgUrl: 'src/assets/images/skills/vs-code.png',
        //   title: 'VS Code'
        // }, {
        //   //   imgUrl: 'src/assets/images/skills/Trello.png',
        //   //   title: 'Trello'
        //   // }, {
        //   //   imgUrl: 'src/assets/images/skills/ClickUp.png',
        //   //   title: 'ClickUp'
        //   // }, {
        //   imgUrl: 'src/assets/images/skills/Slack.png',
        //   title: 'Slack'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Photoshop.png',
        //   title: 'Photoshop'
        // }, {
        //   imgUrl: 'src/assets/images/skills/Illustrator.png',
        //   title: 'Adobe Illustrator'
        // }],
        // list of experience items to loop through it
        // experienceItems: [{
        //   date: '2002',
        //   companyName: {
        //     en: 'U.S. Navy',
        //   },
        //   jobTitle: {
        //     en: 'Electronics Technician',
        //   },
        //   desc: {
        //     en: 'Communication and radar equipment maintenance and repair',
        //   }
        // }, {
        //   date: '2008',
        //   companyName: {
        //     en: 'Cruxial',
        //   },
        //   jobTitle: {
        //     en: 'Production Supervisor/ Graphic Designer, Co-Founder',
        //   },
        //   desc: {
        //     en: 'Apparel design, Web Design, Graphic Design, Production Q&A',
        //   }
        // }, {
        //   date: '2010',
        //   companyName: {
        //     en: 'AWaL Designs',
        //   },
        //   jobTitle: {
        //     en: 'Graphic and Web Designer',
        //   },
        //   desc: {
        //     en: 'Freelance graphic and web design company offering services to small businesses and entrepreneurs.',
        //   }
        // }, {
        //   date: '2011',
        //   companyName: {
        //     en: 'Unilete',
        //   },
        //   jobTitle: {
        //     en: 'Graphic and Web Designer',
        //   },
        //   desc: {
        //     en: 'Built company enterprise-level e-commerce sites. Vectorized logos and graphics for print',
        //   }
        // }, {
        //   date: '2014',
        //   companyName: {
        //     en: 'Raytheon',
        //   },
        //   jobTitle: {
        //     en: 'Configuration Analyst',
        //   },
        //   desc: {
        //     en: 'Configuration management planning and documentation. Software Trainer',
        //   }
        // }, {
        //   date: '2014',
        //   companyName: {
        //     en: 'Client Solution Architects',
        //   },
        //   jobTitle: {
        //     en: 'Project Planning Consultant',
        //   },
        //   desc: {
        //     en: 'Developed and maintained multiple program level master schedules. Provided project analysis.',
        //   }
        // }, {
        //   date: '2016',
        //   companyName: {
        //     en: 'Viasat Inc.',
        //   },
        //   jobTitle: {
        //     en: 'Sr. Program Control Analyst',
        //   },
        //   desc: {
        //     en: 'Provide project planning, scheduling, and analysis. Developed several methods for process improvement.',
        //   }
        // }, {
        //   date: '2019',
        //   companyName: {
        //     en: 'Personal Project: Staff scheduling App',
        //   },
        //   jobTitle: {
        //     en: 'Full Stack Developer - Personal Project',
        //   },
        //   desc: {
        //     en: 'Developed full staff scheduling web-app for local veterinary hospital in Django framework.',
        //   }
        // }, {
        //   date: '2022',
        //   companyName: {
        //     en: 'Pyrra Technologies Inc.',
        //   },
        //   jobTitle: {
        //     en: 'Software Engineer',
        //   },
        //   desc: {
        //     en: 'Collaborate with data scientists and engineers on the integration of new features and analytics.',
        //   }
        // }, {
        //   date: '2022',
        //   companyName: {
        //     en: 'MacguyverTech',
        //   },
        //   jobTitle: {
        //     en: 'Software Engineer',
        //   },
        //   desc: {
        //     en: 'Project lead for development of multiple projects.',
        //   }
        // },
        // ],
        skillsItems: [],
        toolsItems: [],
        experienceItems: [],
        // current page of portfolio items
        portfolioItemsPage: 1,
        // portfolio items per page
        itemsPerPage: 7,
        // portfolio items filter by type
        filters: ['All', 'HTML', 'Angular', 'Vue'],
        currentFilter: 'All',
        // portfolio archive name
        portfolioArchiveName: '',
        // list of portfolio items to loop through it
        allPortfolioItems: [{
          id: 1,
          url: 'single-portfolio.html?id=1',
          imgUrl: 'https://via.placeholder.com/400x400',
          title: {
            en: 'Lorem Ipsum Dolor 1',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'HTML',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 2,
          url: 'single-portfolio.html?id=2',
          imgUrl: 'https://via.placeholder.com/530x300',
          title: {
            en: 'Lorem Ipsum Dolor 2',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Angular',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 3,
          url: 'single-portfolio.html?id=3',
          imgUrl: 'https://via.placeholder.com/390x390',
          title: {
            en: 'Lorem Ipsum Dolor 3',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Vue',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 4,
          url: 'single-portfolio.html?id=4',
          imgUrl: 'https://via.placeholder.com/340x510',
          title: {
            en: 'Lorem Ipsum Dolor 4',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'HTML',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 5,
          url: 'single-portfolio.html?id=5',
          imgUrl: 'https://via.placeholder.com/380x215',
          title: {
            en: 'Lorem Ipsum Dolor 5',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Angular',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 6,
          url: 'single-portfolio.html?id=6',
          imgUrl: 'https://via.placeholder.com/400x300',
          title: {
            en: 'Lorem Ipsum Dolor 6',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Vue',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 7,
          url: 'single-portfolio.html?id=7',
          imgUrl: 'https://via.placeholder.com/380x215',
          title: {
            en: 'Lorem Ipsum Dolor 7',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'HTML',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 8,
          url: 'single-portfolio.html?id=8',
          imgUrl: 'https://via.placeholder.com/340x340',
          title: {
            en: 'Lorem Ipsum Dolor 8',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Vue',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 9,
          url: 'single-portfolio.html?id=9',
          imgUrl: 'https://via.placeholder.com/300x375',
          title: {
            en: 'Lorem Ipsum Dolor 9',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Angular',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 10,
          url: 'single-portfolio.html?id=10',
          imgUrl: 'https://via.placeholder.com/350x200',
          title: {
            en: 'Lorem Ipsum Dolor 10',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'HTML',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 11,
          url: 'single-portfolio.html?id=11',
          imgUrl: 'https://via.placeholder.com/400x300',
          title: {
            en: 'Lorem Ipsum Dolor 11',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Vue',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 12,
          url: 'single-portfolio.html?id=12',
          imgUrl: 'https://via.placeholder.com/300x280',
          title: {
            en: 'Lorem Ipsum Dolor 12',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Angular',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 13,
          url: 'single-portfolio.html?id=13',
          imgUrl: 'https://via.placeholder.com/300x270',
          title: {
            en: 'Lorem Ipsum Dolor 13',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'HTML',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 14,
          url: 'single-portfolio.html?id=14',
          imgUrl: 'https://via.placeholder.com/375x500',
          title: {
            en: 'Lorem Ipsum Dolor 14',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Angular',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 15,
          url: 'single-portfolio.html?id=15',
          imgUrl: 'https://via.placeholder.com/375x240',
          title: {
            en: 'Lorem Ipsum Dolor 15',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Vue',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'Angular', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 16,
          url: 'single-portfolio.html?id=16',
          imgUrl: 'https://via.placeholder.com/570x400',
          title: {
            en: 'Lorem Ipsum Dolor 16',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'HTML',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 17,
          url: 'single-portfolio.html?id=17',
          imgUrl: 'https://via.placeholder.com/375x300',
          title: {
            en: 'Lorem Ipsum Dolor 17',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Angular',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }, {
          id: 18,
          url: 'single-portfolio.html?id=18',
          imgUrl: 'https://via.placeholder.com/350x500',
          title: {
            en: 'Lorem Ipsum Dolor 18',
          },
          date: {
            en: 'April 2021',
          },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          category: 'Vue',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'https://via.placeholder.com/355x200',
              caption: {
                en: 'caption 5',
              }
            },
            img2: {
              url: 'https://via.placeholder.com/330x460',
              caption: {
                en: 'caption 4',
              }
            },
            img3: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 3',
              }
            },
            img4: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 2',
              }
            },
            img5: {
              url: 'https://via.placeholder.com/300x225',
              caption: {
                en: 'caption 1',
              }
            }
          }
        }].reverse(),
        // viewed portfolio items
        portfolioItems: [],
        // list of testimonials items to loop through it
        testimonialsItems: [{
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
          },
          quoteAuthor: {
            en: 'Terrell Grimes',
          },
          jobTitle: {
            en: 'Photographer',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
          },
          quoteAuthor: {
            en: 'Lonny Corkery',
          },
          jobTitle: {
            en: 'Project Manager',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
          },
          quoteAuthor: {
            en: 'Max Schmidt DDS',
          },
          jobTitle: {
            en: 'CEO, Designer',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
          },
          quoteAuthor: {
            en: 'Amir Stoltenberg',
          },
          jobTitle: {
            en: 'Sales Manager',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
          },
          quoteAuthor: {
            en: 'Kenton Marquardt',
          },
          jobTitle: {
            en: 'Art Director',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
          },
          quoteAuthor: {
            en: 'Reyna Hammes',
          },
          jobTitle: {
            en: 'Motion Graphic Animator',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
          },
          quoteAuthor: {
            en: 'Jovan Parisian',
          },
          jobTitle: {
            en: 'Motion Graphic Animator',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
          },
          quoteAuthor: {
            en: 'Pasquale Deckow',
          },
          jobTitle: {
            en: 'Art Director',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
          },
          quoteAuthor: {
            en: 'Rosa Ferry',
          },
          jobTitle: {
            en: 'Sales Manager',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
          },
          quoteAuthor: {
            en: 'Keshaun Robel',
          },
          jobTitle: {
            en: 'CEO, Designer',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
          },
          quoteAuthor: {
            en: 'Casper Paucek',
          },
          jobTitle: {
            en: 'Project Manager',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
          },
          quoteAuthor: {
            en: 'Archibald Fadel',
          },
          jobTitle: {
            en: 'Photographer',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
          },
          quoteAuthor: {
            en: 'Tabitha Denesik',
          },
          jobTitle: {
            en: 'Photographer',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
          },
          quoteAuthor: {
            en: 'Javon Bogan',
          },
          jobTitle: {
            en: 'Project Manager',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
          },
          quoteAuthor: {
            en: 'Duncan Kemmer',
          },
          jobTitle: {
            en: 'CEO, Designer',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
          },
          quoteAuthor: {
            en: 'Coy Johns',
          },
          jobTitle: {
            en: 'Sales Manager',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
          },
          quoteAuthor: {
            en: 'Murphy Roberts',
          },
          jobTitle: {
            en: 'Art Director',
          }
        }, {
          imgUrl: 'https://via.placeholder.com/200',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
          },
          quoteAuthor: {
            en: 'Dimitri Lockman',
          },
          jobTitle: {
            en: 'Motion Graphic Animator',
          }
        }]
      };
    },

    created() {
      // get a theme to use
      console.log("Created!", skillsItems)
      this.experienceItems = experienceItems
      this.skillsItems = skillsItems
      this.toolsItems = toolsItems
      this.getAppTheme();

    },

    mounted() {
      console.log("MOUNTED!", skillsItems)
      if (window.innerWidth >= 992) {
        // initialize circle cursor
        this.initCircleCursor(); // apply pan effect hero image

        this.heroImgPanEffect(); // initialize VanillaTilt library in portfolio section

        this.initializeTilt();
      } // nav menu tab trap


      this.navMenuTabTrap(); // scrolling options

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

      this.getPortfolioItems(); // init glightbox plugin

      new GLightbox({
        autoplayVideos: false
      }); // initialize the first displayed type of skills

      this.initSkillsFirstType();
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
        const storageSavedTheme = localStorage.getItem('JBearSavedTheme'); // Check to see if there a saved theme

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


        localStorage.setItem('JBearSavedTheme', this.savedTheme);
      },

      // detect the theme changes
      changeAppTheme() {
        this.savedTheme === 'light_theme' ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme'; // save the new theme in the localStorage

        localStorage.setItem('JBearSavedTheme', this.savedTheme);
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

      // initialize the first displayed type of skills
      initSkillsFirstType() {
        const skillsSwitchBtn = this.$refs.skillsSwitchBtn; // return if disabled

        if (!skillsSwitchBtn) {
          return;
        }

        this.skillsType = skillsSwitchBtn.querySelector('input').value;
      },

      // initialize VanillaTilt library in portfolio section
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

      // get portfolio items
      getPortfolioItems() {
        const itemsArr = this.allPortfolioItems.filter(item => {
          const urlParams = new URLSearchParams(window.location.search);
          const tax = urlParams.get('tax');

          if (tax) {
            if (tax === 'cat') {
              const cat = urlParams.get('cat');
              this.portfolioArchiveName = cat;
              return item.category === cat;
            } else if (tax === 'tools') {
              const tool = urlParams.get('tools');
              this.portfolioArchiveName = tool;
              return item.tools.includes(tool);
            }
          } else {
            return this.currentFilter === 'All' || item.category === this.currentFilter;
          }
        }).slice(this.filteredPortfolioItems.length, this.portfolioItemsPage * this.itemsPerPage); // check if have works or not

        if (itemsArr.length) {
          this.portfolioItems.push(...itemsArr);
          this.$nextTick(() => {
            // reinitialize VanillaTilt for new items
            this.portfolioItemsPage > 1 && this.initializeTilt(); // Forces the ScrollTrigger instance to re-calculate its start and end values

            setTimeout(() => ScrollTrigger.refresh(), 500);
          });
          this.portfolioItemsPage++;
        } else {
          // show message "No works" to the user
          this.setNotify({
            className: 'danger',
            msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'),
            time: 3000
          });
        }
      },

      // filter portfolio items
      filterPortfolioItems(filter) {
        this.currentFilter = filter;
        this.portfolioItemsPage = 1;

        if (this.filteredPortfolioItems.length) {
          this.$nextTick(() => {
            // reinitialize VanillaTilt for new items
            this.portfolioItemsPage > 1 && this.initializeTilt(); // Forces the ScrollTrigger instance to re-calculate its start and end values

            setTimeout(() => ScrollTrigger.refresh(), 500);
          });
        } else {
          // get new portfolio items
          this.getPortfolioItems();
        }
      },

      // contact form validation
      contactFormValidation() {
        // contact form
        const contactForm = this.$refs.contactForm; // form controls

        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const phone = contactForm.querySelector('input[name="phone"]');
        const message = contactForm.querySelector('textarea'); // form validation status

        let errors = {
          name: {
            required: true,
            minLength: true
          },
          email: {
            required: true,
            invalid: true
          },
          phone: {
            invalid: true
          },
          message: {
            required: true
          }
        };
        /* --------------- */

        /* name validation */

        /* --------------- */
        // required validation

        if (name.value === '') {
          errors.name.required = true;
          this.setNotify({
            id: 'nameRequired',
            className: 'danger',
            msg: name.closest('.control').querySelector('.errors-msgs .required').value
          });
        } else {
          errors.name.required = false;
          this.dismissNotify('nameRequired');
        } // minlength validation


        if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
          errors.name.minLength = true;
          this.setNotify({
            id: 'nameMinLength',
            className: 'danger',
            msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
          });
        } else {
          errors.name.minLength = false;
          this.dismissNotify('nameMinLength');
        } // toggle invalid errors & style classes


        if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
          name.classList.remove('valid');
          name.classList.add('invalid');
        } else {
          name.classList.remove('invalid');
          name.classList.add('valid');
        }
        /* ---------------- */

        /* email validation */

        /* ---------------- */
        // required validation


        if (email.value === '') {
          errors.email.required = true;
          this.setNotify({
            id: 'emailRequired',
            className: 'danger',
            msg: email.closest('.control').querySelector('.errors-msgs .required').value
          });
        } else {
          errors.email.required = false;
          this.dismissNotify('emailRequired');
        } // email validation


        if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
          errors.email.invalid = true;
          this.setNotify({
            id: 'emailInvalid',
            className: 'danger',
            msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
          });
        } else {
          errors.email.invalid = false;
          this.dismissNotify('emailInvalid');
        } // toggle invalid errors & style classes


        if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
          email.classList.remove('valid');
          email.classList.add('invalid');
        } else {
          email.classList.remove('invalid');
          email.classList.add('valid');
        }
        /* ---------------- */

        /* phone validation */

        /* ---------------- */
        // phone validation


        if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
          errors.phone.invalid = true;
          this.setNotify({
            id: 'phoneInvalid',
            className: 'danger',
            msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
          });
        } else {
          errors.phone.invalid = false;
          this.dismissNotify('phoneInvalid');
        } // toggle invalid errors & style classes


        if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
          phone.classList.remove('valid');
          phone.classList.add('invalid');
        } else {
          phone.classList.remove('invalid');
          phone.classList.add('valid');
        }
        /* ------------------ */

        /* message validation */

        /* ------------------ */
        // required validation


        if (message.value === '') {
          errors.message.required = true;
          this.setNotify({
            id: 'messageRequired',
            className: 'danger',
            msg: message.closest('.control').querySelector('.errors-msgs .required').value
          });
        } else {
          errors.message.required = false;
          this.dismissNotify('messageRequired');
        } // toggle invalid errors & style classes


        if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
          message.classList.remove('valid');
          message.classList.add('invalid');
        } else {
          message.classList.remove('invalid');
          message.classList.add('valid');
        } // send the message if the form is valid


        !Object.values(errors).some(control => Object.values(control).some(Boolean)) && this.sendContactFormMessage(contactForm);
      },

      // send message from contact form
      sendContactFormMessage(form) {
        const url = form.getAttribute('action');
        const formData = new FormData(form); // start loading spinner

        this.startLoading(); // send post request

        fetch(url, {
          method: 'POST',
          body: formData
        }).then(res => res.text()).then(data => {
          if (data === 'success') {
            // show success message
            this.setNotify({
              className: 'success',
              msg: form.getAttribute('data-success-msg'),
              time: 5000
            }); // reset all form inputs

            form.reset(); // remove inputs valid classes

            form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));
          } else if (data === 'error') {
            // show error message
            this.setNotify({
              className: 'danger',
              msg: form.getAttribute('data-err-msg'),
              time: 5000
            });
          } // end loading spinner


          this.endLoading();
          console.log(data);
        }).catch(err => console.log(err));
      },

      // show messages by toast notifications
      setNotify({
        id,
        className,
        msg,
        time
      }) {
        const notify = {
          id: id || `${Date.now()}${this.notifications.length}`,
          className,
          msg,
          time
        };

        if (id) {
          !this.notifications.some(e => e.id === id) && this.notifications.push(notify);
        } else {
          this.notifications.push(notify);
        } // remove this notification from the array after (n) seconds


        time && setTimeout(() => this.dismissNotify(notify.id), time);
      },

      // dismiss the notifications
      dismissNotify(id) {
        const index = this.notifications.findIndex(notify => notify.id === id);
        index > -1 && this.notifications.splice(index, 1);
      },

      // add ajax loading spinner
      startLoading() {
        this.ajaxLoading.push(true);
      },

      // remove ajax loading spinner
      endLoading() {
        this.ajaxLoading.pop();
      }

    },
    computed: {
      // flag to toggle ajax loading spinner
      isAjaxLoading() {
        return this.ajaxLoading.some(state => state === true);
      },

      // get the total years of experience
      experienceYears() {
        return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1970;
      },

      // split experience items into chunks of 3 items
      experienceChunks() {
        return [...Array(Math.floor((this.experienceItems.length - 1) / 3))];
      },

      // filtered portfolio items
      filteredPortfolioItems() {
        const urlParams = new URLSearchParams(window.location.search);
        const tax = urlParams.get('tax');

        if (tax) {
          return this.portfolioItems;
        } else {
          return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
        }
      },

      // get single portfolio item
      getSinglePortfolioItem() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        return this.allPortfolioItems.find(item => item.id == id);
      },

      // get the total years of copyright
      copyrightDate() {
        const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
        return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
      }

    },
    directives: {
      // add stagger delay to children elements
      staggerdelay: {
        mounted(el, binding) {
          [...el.children].forEach((child, i) => {
            child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
          });
        }

      },
      // tooltip directive
      tooltip: {
        mounted(el, binding) {
          el.classList.add('has-tooltip');
          el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
        }

      }
    }
})
</script>
<style>
@import 'src/styles/main.css';
@import 'src/styles/bootstrap.css';
@import 'src/styles/libraries.min.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300&family=Saira+Stencil+One&display=swap');
</style>
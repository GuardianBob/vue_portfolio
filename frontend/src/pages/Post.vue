<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-10" v-if="post">
        <div class="col text-center">
          <h3>{{ post.title.rendered }}</h3>
        </div>
        <div class="col" id="post"></div>
        <div class="col" id="post2"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify } from "quasar"
import APIService from "../../services/api"
import ParseWP from "../../services/parseWP"
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-tomorrow.css'

export default defineComponent({
  name: 'LoginPage',
  data() {
    // const $q = useQuasar();
    // $q.dark.set(true);
    return {
      post_id: null,
      image: '',
      post: null,
      images: [],
      text: [],
    };
  },
  methods: {

    async get_post(id) {
      await APIService.get_post(id).then(async (results) => {
        let post = results.data;
        console.log(post);
        this.post = post;
        ParseWP.format_post(post.content.rendered).then((results) => {
          document.getElementById("post").innerHTML = results
          this.format_image_by_id("title_image", ['col-lg-6', 'col-md-6', 'col-sm-8', 'col-xs-8', 'text-center', 'full-width'])
          this.format_buttons();
          Prism.highlightAll()
        });
        // await APIService.get_media(post.featured_media).then((media) => {
        //   this.image = media.data.source_url
        // })
      })

    },

    async format_images() {
      // format main image
      let post_image = document.getElementById('left-img').firstChild;
      let image_src = document.getElementById('left-img').firstChild.src;
      let parent = document.getElementById('left-img').parentNode;
      let img = parent.getElementsByTagName('img');
      let post_text = parent.parentNode.getElementsByTagName('p');
      console.log(img[0].src)
      console.log(post_text[0].innerHTML)
      console.log(image_src)
      let new_image = document.createElement('div');
      let new_parent = document.createElement('div');
      new_parent.classList.add('col-lg-4', 'col-md-4', 'col-sm-10')
      new_image.classList.add('col-lg-4', 'col-md-4', 'col-sm-10')
      new_image.innerHTML = `<img src=${image_src} class="full-width" />`
      // new_parent.appendChild(image)
      // parent.parentNode.replaceChild(new_parent, parent)
      return post
    },

    async format_images2() {
      // let figure = document.getElementsByTagName("figure")
      // if (figure) {
      let figure = document.getElementsByTagName("figure")
      let parent = figure.parentNode
      console.log(parent)
      let image = document.getElementById("p-image").getElementsByTagName("img")
      console.log(image)
      image.removeAttribute('width')
      image.removeAttribute('height')
      image.removeAttribute('sizes')
      image.classList.add('full-width')
      let new_parent = document.createElement('div')
      new_parent.classList.add('col-lg-4', 'col-md-4', 'col-sm-10')
      new_parent.appendChild(image)
      parent.parentNode.replaceChild(new_parent, parent)
      // }
    },


    async format_buttons() { // works
      let el = document.getElementById('demo_link').parentNode;
      let btn_text = document.getElementById('demo_link').firstChild.innerHTML;
      let link = document.getElementById('demo_link').firstChild.getAttribute("href");
      let new_el = document.createElement('div')
      new_el.classList.add('row', 'justify-center')
      new_el.innerHTML = `
      <div class="col-md-5 col-sm-5 col-xs-10">
      <a href="${link}" class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-px-xl q-py-md q-my-md full-width" target="blank" color="primary">${btn_text}</a>
      </div>`
      el.parentNode.replaceChild(new_el, el);
      console.log(link)
    },

    async format_image_by_id(image_id, class_list) {
      // format main image
      console.log(image_id, class_list)
      let el = document.getElementById(image_id);
      let main_src = document.getElementById(image_id).firstChild.src;
      console.log(main_src)
      let new_el = document.createElement('div')
      class_list.forEach((item) => {
        new_el.classList.add(item)
      })
      new_el.innerHTML = `<img src=${main_src} class="" style="max-width: 80%"/>`
      el.parentNode.replaceChild(new_el, el);
    },

    async format_image_by_class(class_string, class_list = []) {
      // format main image
      // let parser = new DOMParser(); // use to convert string to DOM Element
      // let new_post = parser.parseFromString(post, 'text/html')      
      let el = document.getElementById('id');
      let main_src = document.getElementById('id').firstChild.src;
      console.log(main_src)
      let new_el = document.createElement('div')
      class_list.forEach((item) => {
        new_el.classList.add(item)
      })
      new_el.innerHTML = `<img src=${main_src} class="" style="max-width: 80%"/>`
      el.parentNode.replaceChild(new_el, el);
      return new_post
    }
  },
  mounted() {
    const url = window.location.href;
    console.log(url)
    let post_id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    if (post_id == '') {
      post_id = window.location.href.substring(window.location.href.lastIndexOf('/') - 1)
      post_id = post_id.replace(/\//g, '')
    }
    console.log(post_id)
    this.post_id = post_id;
    this.get_post(post_id);
    Prism.highlightAll()
  },
})
</script>

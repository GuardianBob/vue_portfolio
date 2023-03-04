<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-10" v-if="post">
        <div class="col text-center"><h3 class="q-my-md">{{ post.post_title }}</h3></div>
        <!-- <div class="col" id="post">
        </div>
        <div class="col" id="post2"></div> -->
        <!-- <div class="row q-my-md"> -->
          <div class="col-lg-6 cols-md-6 col-sm-8 col-xs-8 text-center full-width">
            <img :src=post.title_image alt="" class="" style="max-width: 80%"/>
          </div>
          <div class="row justify-center">
            <div class="col-md-5 col-sm-5 col-xs-10">
              <q-btn :href="post.demo" class="q-px-xl q-py-md q-my-md full-width" target="blank" color="primary">Demo</q-btn>
            </div>
          </div>
        <!-- </div> -->
        <div class="row justify-center">
          <div v-for="item in post.info" :key="item" class="col-lg-3 col-md-3 col-sm-10 col-xs-10 q-mx-md">
            <h4 class="text-center border-rounded q-my-sm q-py-sm bg-secondary">{{ item.title }}</h4>
            <hr>
            <q-list dense bordered padding class="rounded-borders">
              <q-item v-for="list_item in item.list" :key="list_item" clickable v-ripple>
                <q-item-section>
                  {{ list_item }}
                </q-item-section>
              </q-item>
            </q-list>            
          </div>
        </div>
        <div class="row q-my-md justify-around" v-for="item in post.writeup" :key="item">
          <div v-if="item.text" class=" q-my-auto" 
            :class="{ 'col-lg-12 col-md-12 col-sm-12': item.text_align == 'full', 'col-lg-7 col-md-7 col-sm-10': item.text_align != 'full' }">
            <p>{{ item.text }}</p>
          </div>
          <div v-if="item.image" class="col-lg-4 col-md-4 col-sm-10" :class="{ 'order-first': item.text_align == 'end' }">
            <img :src="item.image" class="full-width">
          </div>
          <pre v-if="item.code" class="col-10">
            <code :class="'language-' + item.language">
              {{ item.code }}
            </code>
          </pre>          
        </div>
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
import { post_data } from 'components/post_template'

export default defineComponent({
  name: 'LoginPage',
  data() {
    // const $q = useQuasar();
    // $q.dark.set(true);
    return {
      post_id: null,
      image: '',
      post: {},
      images: [],
      text: [],
      features: {},
      tech_stack: {},
      bugs: {},
      info: [],
    };
  },
  methods: {

    async get_post(id) {
      let post
      await APIService.get_post(id).then(async (results) => {
        post = results.data.content.rendered;
      })
      this.post = JSON.parse(post);
      console.log(this.post)
      return
    },

    async format_list(item) {
      if (typeof item === 'object') {
        console.log("Object!")
      } else {
        console.log(item)
        return item
      }
    },

    async get_features(post) {
      let info = post.info
      console.log(info)
      info.forEach((item) => {
        console.log(item)
      })
      
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
    // console.log(post_id)
    this.post_id = post_id;
    // this.get_post(post_id);
    this.post = post_data
    Prism.highlightAll()
  },

  updated() {
    Prism.highlightAll()
  }
})
</script>

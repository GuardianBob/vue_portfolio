<template>
  <!-- <q-page> -->
    <div class="q-pa-md row items-start q-gutter-md">
    <div class="row justify-center text-center">
      <!-- <div class="col-10 q-mt-xl"> -->
        <!-- <div class="col-lg-10" style="width: 30%; max-width: 350px" v-for="post in posts" :key="post.id"> -->
        <div class="col-lg-4 col-md-4 col-sm-10 q-pa-sm" v-for="post in posts" :key="post.id" >
          <q-card class="my-card" style="max-height: 450px; min-width: 30%; overflow: hidden;">
            <span v-if="post.featured_media !== 0" style="max-height: 200px; min-width: 100%">
              <img :src="post.featured_media" style="width: 100%">
              <!-- <q-img :src="post.featured_media" style="max-height: 200px; min-width: 100%"> -->
                <!-- <div class="absolute-bottom text-h6">
                  {{ post.title.rendered }}
                </div> -->
              <!-- </q-img> -->
              </span>
            <span v-else style="width:30%; "></span>
            
            <q-card-section>
              <div class="text-h6">{{ post.title.rendered }}</div>
              <!-- <div :id="post.id"></div> -->
            </q-card-section>
          </q-card>
          

        </div>

        <!-- <div class="col" id="post"></div> -->
      <!-- </div> -->
    </div>
    </div>
  <!-- </q-page> -->
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify } from "quasar"
import APIService from "../../services/api"
import ParseWP from "../../services/parseWP"

export default defineComponent({
  name: 'LoginPage',
  data() {
    const $q = useQuasar();
    $q.dark.set(true);
    return {
      image: '',
      posts: ref([]),
      images: [],
      text: [],
    };
  },
  methods: {
    async get_posts() {
      await APIService.get_posts().then(async (results) => {
        let posts = results.data;
        posts.forEach(async (post) => { 
          console.log(post.featured_media)
          if (post.featured_media != 0) {
            post.featured_media = await this.get_image(post.featured_media)
          }
          this.posts.push(post)
        })
        console.log(posts);
      })
      return
    },

    async get_image(id) {
      console.log("getting image")
      let url = await APIService.get_media(id)
      console.log(`url: ${url.data.source_url}`);
      return url.data.source_url
    },
  },

  created() {
    this.get_posts();
  },
  updated() {
    // this.posts.forEach(async (post) => {
    //   document.getElementById(post.id).innerHTML = post.excerpt.rendered
    // })
  },
})
</script>

<template>
  <!-- <q-page> -->
    <div class="q-pa-md row items-start q-gutter-md">
    <div class="row justify-center text-center">
      <!-- <div class="col-10 q-mt-xl"> -->
        <!-- <div class="col-lg-10" style="width: 30%; max-width: 350px" v-for="post in posts" :key="post.id"> -->
        <div class="col-lg-4 col-md-4 col-sm-10 q-pa-sm" v-for="post in posts" :key="post.id">
          <router-link :to="'/post/' + post.id">
            <q-card class="list-card">
              <span v-if="post.featured_media !== 0">
                <img :src="post.featured_media" class="card-image">
              </span>
              <span v-else class="card-image"></span>
              
              <q-card-section>
                <div class="text-h6" style="color: black;" :link="'/post/' + post.id">{{ post.title.rendered }}</div>
                <!-- <div :id="post.id"></div> -->
              </q-card-section>
            </q-card>
          </router-link>

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
    // const $q = useQuasar();
    // $q.dark.set(true);
    return {
      image: '',
      posts: [],
      images: [],
      text: [],
    };
  },
  computed: {
  },

  methods: {
    async get_posts() {
      await APIService.get_posts().then(async (results) => {
        this.posts = results.data;
        console.log(results)
        this.posts.forEach(async (post) => { 
          if (post.featured_media != 0) {
            post.featured_media = await this.get_image(post.featured_media)
          }
        })
      })
    },

    async get_post(id) {

    },

    async get_image(id) {
      let url = await APIService.get_media(id)
      // console.log(`url: ${url.data.source_url}`);
      return url.data.source_url
    },
  },

  created() {
    this.get_posts();
  },
  updated() {
  },
})
</script>

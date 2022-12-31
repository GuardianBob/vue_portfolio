<template>
  <q-page>
    <div class="row justify-center text-center">
      <div class="col-10 q-mt-xl">
        <div class="col-12">
          <img alt="Quasar logo" src="~assets/JBear_Logo_No_Letters_Orange.svg" style="width: 200px; height: 200px" class="q-mx-md">
        </div>
        <div class="col-12">
          <div class="row" no-gutters style="padding-bottom: 15px">
            <div class="col text-center">
              <q-btn color="primary" type="submit" style="width: 200px" @click="get_posts">
                Test
              </q-btn>
              <!-- <div class="col" v-show="image != ''">
                <img :src="image" style="width: 100%">
              </div> -->
            </div>
          </div>
          <div v-if="post">
            <div class="col"><h3>{{ post.title.rendered }}</h3></div>
          </div>
          <div class="col" id="post"></div>
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

export default defineComponent({
  name: 'LoginPage',
  data() {
    const $q = useQuasar();
    $q.dark.set(true);
    return {
      image: '',
      post: null,
      images: [],
      text: [],
    };
  },
  methods: {
    async get_posts() {
      await APIService.get_posts().then(async (results) => {
        let posts = results.data;
        console.log(posts);
      })
      
    },

    async get_post(id) {
      await APIService.get_post(7).then(async (results) => {
        let post = results.data;
        // await this.format_post(posts.data[0].content.rendered); 
        console.log(post);
        this.post = post;
        ParseWP.format_post(post.content.rendered).then((results) => {
          document.getElementById("post").innerHTML = results
        });
        // console.log("html:", post.content.rendered);
        // document.getElementById("post").innerHTML = post.content.rendered
        await APIService.get_media(post.featured_media).then((media) => {
          // console.log("media: ", media)
          this.image = media.data.source_url
        })
      })
      // console.log(this.image)
      // this.parse_images();

    },

    async parse_images() {
      ParseWP.parse_images(this.post).then((images) => {
        this.images = images
      });
    },

    async parse_text() {
      ParseWP.parse_text(this.post).then((text) => {
        this.text = text
      });
    },

    async format_post() {
      ParseWP.format_post(this.post).then((results) => {
        this.post = results;
      });
    },
  },
  mounted() {
    
  },
})
</script>

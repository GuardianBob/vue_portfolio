<template>
  <q-page>
    <div class="q-pa-md row items-start">
      <div class="col-12">
        <span v-for="tag in tags" :key="tag.id" >
          <q-chip removable v-model="tag.value" @remove="update_list()" color="primary" text-color="white">
            {{ tag.name }}
          </q-chip>
        </span>
        <br>
        <q-btn @click="reset_tags">reset</q-btn>
      </div>
    </div>
      <div class="row justify-center text-center q-pa-sm">
      <!-- <div class="col-10 q-mt-xl"> -->
        <!-- <div class="col-lg-10" style="width: 30%; max-width: 350px" v-for="post in posts" :key="post.id"> -->
        <div class="col-lg-4 col-md-4 col-sm-10 q-pa-sm" v-for="post in display_posts" :key="post.id">
          <router-link :to="'/post/' + post.id">
            <q-card class="list-card dark" >
              <span v-if="post.featured_media !== 0">
                <img :src="post.featured_media" class="card-image" >
              </span>
              <span v-else class="card-image"></span>
              
              <q-card-section >
                <div class="text-h6 dark" :link="'/post/' + post.id">{{ post.title.rendered }}</div>
                <!-- <div :id="post.id"></div> -->
              </q-card-section>
            </q-card>
          </router-link>

        </div>

        <!-- <div class="col" id="post"></div> -->
      <!-- </div> -->
      </div>
    <!-- </div> -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify } from "quasar"
import APIService from "../../services/api"
import ParseWP from "../../services/parseWP"

export default defineComponent({
  name: 'ListPosts',
  data() {
    // const $q = useQuasar();
    // $q.dark.set(true);
    return {
      image: '',
      posts: [],
      display_posts: [],
      images: [],
      text: [],
    };
  },
  setup() {
    return {
      tags: ref([]),
      tag_ids: [],
      tag_names: [],
    }
  },
  computed: {
  },

  methods: {
    async get_posts() {
      await APIService.get_posts().then(async (results) => {
        this.posts = results.data;
        this.display_posts = results.data;
        this.get_tags(results.data);
        // console.log(results)
        // console.log(this.tag_ids)
        this.posts.forEach(async (post) => { 
          if (post.featured_media != 0) {
            post.featured_media = await this.get_image(post.featured_media)
          }
        })
      })
    },

    reset_tags() {
      this.tags.map((tag) => tag.value = true)
      this.update_list()
    },

    async get_tags(posts) {
      let tag_ids= []
      await posts.map((post) => (post.tags.map(tag => {
        if (!tag_ids.includes(tag)) {
          tag_ids.push(tag)
        }
      }))) // this.tag_ids.push(tag))));
      // console.log(tag_ids)
      let tags = await APIService.get_tags();
      tags.data.map((tag) => {
        this.tags.push({
          "id": tag.id,
          "name": tag.name,
          "value": true
        })
        this.tag_names.push(tag.name)
      })
      // console.log(this.tags, this.tag_names)
    },

    async get_post(id) {

    },

    async update_list() {
      // console.log(`Removed ${tag.name}`);
      const active_tags = this.tags.map((tag) => {
        return tag.value == true ? tag.id : null
      })
      // console.log("tags: ", this.tags)
      // console.log("active tags: ", active_tags)
      let new_posts = this.posts.filter((post) => {
        // console.log(post.tags)
        return active_tags.some(tag => post.tags.indexOf(tag) >= 0)
        // console.log(found)
      })
      // console.log(new_posts)
      this.display_posts = new_posts
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

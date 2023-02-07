<template>
  <q-page>
    <div class="q-pa-md row items-start">
        <q-btn label="Filter Posts" color="secondary" @click="filter = true" />
    </div>
    <!-- <div>
      <q-btn label="secondary" color="secondary"/>
      <q-btn label="accent" color="accent" />
      <q-btn label="positive" color="positive" />
      <q-btn label="negative" color="negative" />
      <q-btn label="info" color="info" />
      <q-btn label="warning" color="warning" />
    </div> -->
    <div class="row justify-center text-center q-px-sm">
      <div class="col-lg-4 col-md-4 col-sm-6 q-pa-sm" v-for="post in display_posts" :key="post.id">
        <router-link :to="'/post/' + post.id">
          <q-card class="list-card dark" >
            <span v-if="post.featured_media !== 0">
              <img :src="post.featured_media" class="card-image" >
            </span>
            <span v-else class="card-image"></span>
            
            <q-card-section >
              <div class="text-h6 dark" :link="'/post/' + post.id">{{ post.title.rendered }}</div>
            </q-card-section>
          </q-card>
        </router-link>
      </div>
    </div>
    <q-dialog v-model="filter" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Select Filters</div>
        </q-card-section>
    
        <q-card-section class="q-pt-none">
          <span v-for="tag in tags" :key="tag.id">
            <q-chip :selected="tag.value" @click="update_tags(tag)" color="accent" text-color="white">
              {{ tag.name }}
            </q-chip>
          </span>
          <br>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Done" v-close-popup />
          <q-btn @click="reset_tags" color="warning">reset</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      tags2: ref([]),
      tag_ids: [],
      tag_names: [],
      filter: ref(false),
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
      this.tags.map((tag) => tag.value = false)
      this.display_posts = this.posts
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
          "value": false
        })
        this.tag_names.push(tag.name)
        this.tags2 = this.tags
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
      new_posts.length > 0 ? this.display_posts = new_posts : this.display_posts = this.posts
    },

    async update_tags(selected) {
      // console.log(selected.name, selected.value)
      await this.tags.map((tag) => {
        if (tag.id == selected.id) {
          return tag.value = !tag.value
        }
      })
      this.update_list()
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
